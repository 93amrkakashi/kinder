import React from "react";
import { Link } from "react-router-dom";
import { pricing, team } from "../../utils/arrays";
import { useAuth } from "../../utils/hooks/auth";
import Navbar from "../layout/Navbar";
import{login} from '../../utils/routes'
function Pricing() {

  const { user } = useAuth();

  return (
    <>
      <Navbar />
      <div className="pricing">
      <div className="pricing">
        <div className="heading">
          <h2>Pricing</h2>
        </div>
        <div className="cards">
          {pricing.map((price) => (
            <div key={price.id} className="card">
              <img src={price.img} alt="" />
              <div className="description">
                <h2>{price.name}</h2>
                <p>{price.p}</p>
                <h4>{price.price} $/mo</h4>
                <button><Link to={user?"/student": '/login'} >Sign Up</Link></button>
              </div>
              
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default Pricing;
