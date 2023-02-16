import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { StudentContext } from "../../../context";
import { useAuth } from "../../../utils/hooks/auth";
import { useStudents } from "../../../utils/hooks/students";
import { childern, login, parents, root } from "../../../utils/routes";
import AdminNav from "../../layout/AdminNav";
import Navbar from "../../layout/Navbar";
import HomePage from "../HomePage";
import Parents from "./Parents";
import Students from "./Students";

function AdminPanel() {
  const { user, isLoading } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [search, setsearch] = useState(null);
  const { students } = useContext(StudentContext);
  const navigate = useNavigate();
  // if(isLoading) return "loading ...";

  // if(!user) navigate(login)
  useEffect(() => {
  }, [search]);
  return (
    <>
      {user?.admin ?
        <>
          <Navbar />
          <div className="admins">
            <AdminNav />
            <Outlet />
          </div>
        </> : <HomePage />
      }
    </>
  );
}

export default AdminPanel;
