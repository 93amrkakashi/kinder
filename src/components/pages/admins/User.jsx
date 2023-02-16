import { doc, updateDoc } from "firebase/firestore";
import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { db } from "../../../firebase";
import { useAuth } from "../../../utils/hooks/auth";
import { useUpdateAvatar, useUser, useUsers } from "../../../utils/hooks/users";
import Navbar from "../../layout/Navbar";

function User() {
  const { id } = useParams();
  const { user, isLoading } = useUser(id);

  const { user: curr } = useAuth();
  const { setFile, updateAvatar } = useUpdateAvatar(curr?.id);
  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  async function updateUser(data) {
    const docRef = doc(db, "users", user?.id);
    await updateDoc(docRef, {
      admin: data.admin,
    });
    console.log(data);
    // navigate(0);
  }

  if (isLoading) return "loading...";
  return (
    <>
      <Navbar />
      <div className="student-info">
        <img width={"180px"} src={user?.avatar} alt="" />

        <p>Name : {`${user?.firstName} ${user?.lastName}`}</p>
        <p>Email : {user?.email}</p>
        <p>Phone number : {user?.phone}</p>

        {user?.id == curr?.id && (
          <>
            <input type="file" accept="image/*" onChange={handleChange} />
            <button onClick={updateAvatar}>update</button>
          </>
        )}

        {curr?.owner && (
          <>
            <p>
              This user is :{" "}
              {user?.admin == "true" ? (
                <p style={{ color: "green", display: "inline" }}>Admin</p>
              ) : (
                <p style={{ color: "red", display: "inline" }}>Not Admin</p>
              )}
            </p>

            <form onSubmit={handleSubmit(updateUser)}>
              <div className="feild-2">
                <input {...register("admin")} type="radio" value={true} />
                <label>Admin</label>
              </div>

              <div className="feild-2">
                <input {...register("admin")} type="radio" value={false} />
                <label>Not admin</label>
              </div>
              <button type="submit">edit user</button>
            </form>
          </>
        )}
      </div>
    </>
  );
}

export default User;
