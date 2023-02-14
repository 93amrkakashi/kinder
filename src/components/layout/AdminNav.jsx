import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { StudentContext } from "../../context";
import { useAuth, useLogout } from "../../utils/hooks/auth";
import { useStudents } from "../../utils/hooks/students";
import { childern, childerns, parents } from "../../utils/routes";

function AdminNav() {

  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { setsearch } = useContext(StudentContext)


  const handlesearch = async (data) => {
    setsearch(data.search);
    reset()

  }

  useEffect(() => {}, [user]);

  return (
    <div className="admin-nav">
      <div className="links">
        <NavLink to={childerns}>Students</NavLink>
        <NavLink to={parents}>Parents</NavLink>
      </div>
      <div className="search">
        <form
        onSubmit={handleSubmit(handlesearch)}
        >
          <input
            type="text"
            placeholder="Search here ...."
            
            {...register("search")}
          />
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminNav;
