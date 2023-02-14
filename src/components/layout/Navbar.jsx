import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth, useLogout } from "../../utils/hooks/auth";
import { about, admin, login, price, root, team } from "../../utils/routes";

function Navbar() {
  const { logout, isLoading } = useLogout();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [toggle, settoggle] = useState(true);
  

  useEffect(() => {


  }, [user]);

  return (
    <div className="nav-bar">
      <div className="logo">
        <Link to={root}>
          <h3>Kindergarten</h3>
        </Link>
      </div>
      {}
      <div className={toggle ? "mobile" : "links" }>
        <div className="navs">
          <NavLink to={root}>Home</NavLink>
          <Link to={about}>About</Link>
          <Link to={team}>Team</Link>
          <Link to={price}>Pricing</Link>
          <Link to={admin}>Admin</Link>
        </div>
        <div className="user">
          {user ? (
            <>
              <div className="avatar">
                <p>{user?.username}</p>
              </div>
              <button onClick={logout}>logout</button>
            </>
          ) : (
            <button onClick={() => navigate(login)}>login</button>
          )}
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
