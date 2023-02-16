import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import isUsernameExists from "./validate-user";
import { notifybad, notifygood } from "./notify";
import { login, root } from "../routes";

// a function to get current user data for auth
export function useAuth() {
  const [authUser, authLoading, error] = useAuthState(auth);
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const ref = doc(db, "users", authUser.uid);
      const docSnap = await getDoc(ref);
      await setUser(docSnap.data());
      setLoading(false);
    }
    if (!authLoading) {
      if (authUser) fetchData();
      else setLoading(false); // Not signed in
    }
  }, [authLoading]);

  return { user, isLoading, error };
}

// a function to make user register
export function useRegister() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function signup({
    username,
    email,
    password,
    phone,
    firstName,
    lastName,
    redirectTo = root,
  }) {
    setLoading(true);

    const usernameExists = await isUsernameExists(username);

    if (usernameExists) {
      notifybad("Username already exists");
      setLoading(false);
    } else {
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, "users", res.user.uid), {
          id: res.user.uid,
          username: username.toLowerCase(),
          avatar: "",
          date: Date.now(),
          admin: false,
          email: res.user.email,
          owner: false,
          phone,
          firstName,
          lastName,
        });
        notifygood("You created an account");
        navigate(redirectTo);
      } catch (error) {
        throw error;
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  }

  return { signup, isLoading };
}

// a function to make user login
export function useLogin() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function login({ email, password, redirectTo = root }) {
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      notifygood("You Logged In");
      navigate(root);
    } catch (error) {
      notifybad("Email or Password Invalid");
      setLoading(false);
      return false;
    } finally {
      setLoading(false);
      return true;
    }
  }

  return { login, isLoading };
}

// a function to make user logout
export function useLogout() {
  const [signOut, isLoading, error] = useSignOut(auth);
  const navigate = useNavigate();

  async function logout() {
    if (await signOut()) {
      notifygood("You logged out");
      navigate(login);
    }
  }

  return { logout, isLoading };
}

// all functions based on firebase auth
