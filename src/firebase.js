import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB7PCC4-_feBpejiEjWeKues9AmDJAAYk8",
  authDomain: "kindergarten-33db4.firebaseapp.com",
  projectId: "kindergarten-33db4",
  storageBucket: "kindergarten-33db4.appspot.com",
  messagingSenderId: "439445755048",
  appId: "1:439445755048:web:742f10c178b7c1b6b51e9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
