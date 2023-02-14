import { signOut } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { StudentContext } from "../../context";
import { useAuth, useLogout } from "../../utils/hooks/auth";
import { about, admin, login, price, root, team } from "../../utils/routes";
import { auth } from "../../firebase";

function Navbar() {

  const navigate = useNavigate();
  const [toggle, settoggle] = useState(false);
  const { logout, isLoading } = useLogout();
  const { user } = useAuth();
console.log(user);
  return (
    <div className="nav-bar">
      <div className="logo">
        <Link to={root}>
          <h3>Kindergarten</h3>
        </Link>
      </div>
      {}
      <div className={toggle ? "mobile" : "links"}>
        <div className="navs">
          <NavLink to={root}>Home</NavLink>
          <NavLink to={about}>About</NavLink>
          <NavLink to={team}>Team</NavLink>
          <NavLink to={price}>Pricing</NavLink>
          {user?.admin || (user?.owner && <NavLink to={admin}>Admin</NavLink>)}
        </div>
        <div className="user">
          {user && (
            <>
              <div className="avatar">
                {/* <Link to={`/admin/childerns/${student?.id}`}>
                </Link> */}
                  <p>{user?.username}</p>
              </div>
              <button onClick={logout}>logout</button>
            </>
          )}
          {!user && <button onClick={() => navigate(login)}>login</button>}
        </div>
      </div>
      <i
        onClick={() => {
          settoggle(!toggle);
        }}
        className="toggle-btn fa-solid fa-bars"
      ></i>
    </div>
  );
}

export default Navbar;
