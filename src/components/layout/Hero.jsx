import React from "react";
import { offer } from "../../utils/arrays";
import Slides from "./Slides";

function Hero() {
  return (
    <div className="hero-sec">
      <Slides />
      <div className="cards">
        <div style={{ backgroundColor: "#60cd96" }} className="card">
          <div className="head">
            <i className="fa-solid fa-book"></i>
            <h3>Special Education</h3>
          </div>
          <p>
            Our Special Education Program offers quality education to children
            with disabilities and developmental delays.
          </p>
        </div>

        <div style={{ backgroundColor: "#69d2e7" }} className="card">
          <div className="head">
            <i className="fa-solid fa-sun"></i>
            <h3>Full Day Session</h3>
          </div>
          <p>
            At Kindergarten, we offer full-day preschool sessions built on a
            play-based approach for kids ages two to five.
          </p>
        </div>

        <div style={{ backgroundColor: "#9d87c3" }} className="card">
          <div className="head">
            <i className="fa-solid fa-file-lines"></i>
            <h3>Qualified Teachers</h3>
          </div>
          <p>
            Our team consists of experienced and creative teachers who are
            dedicated to your kids’ successful education.
          </p>
        </div>
        <div style={{ backgroundColor: "#f98f6f" }} className="card">
          <div className="head">
            <i className="fa-solid fa-graduation-cap"></i>
            <h3>The Best Preschool</h3>
          </div>
          <p>Providing Quality Education in a Creative Environment </p>
        </div>
      </div>
      <div className="more">
        <div className="heading">
          <h2>What We Offer</h2>
          <p>
            At our education center, we provide a variety of benefits and
            advantages for your kids’ successful education, while allowing your
            kid to stay fully active, creative, and healthy.
          </p>
        </div>
        <div className='cards'>
          {offer.map((card) => (
            <div key={card.id} className="card2">
              <i className={`${card.icon} icon`}></i>
              <h3>{card.h}</h3>
              <p>{card.p}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
