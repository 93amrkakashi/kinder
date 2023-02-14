import React from "react";
import { team } from "../../utils/arrays";
import Navbar from "../layout/Navbar";

function Team() {
  return (
    <div>
      <Navbar />
      <div className="section">
        <div className="heading">
          <h2>Our Wonderful Teachers</h2>
        </div>
        <div className="cards">
          {team.map((teacher) => (
            <div key={teacher.id} className="card">
              <img src={teacher.img} alt="" />
              <div className="description">
                <h2>{teacher.name}</h2>
                <h4>{teacher.position}</h4>
                <p>{teacher.p}</p>
              </div>
              <div className="social">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-facebook-messenger"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-square-instagram"></i>
              <i class="fa-brands fa-square-snapchat"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
