import React from "react";
import { programs } from "../../utils/arrays";
import Navbar from "../layout/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <div className="about">
        <div className="upper">
          <h2>A Few Words About Us</h2>
          <p>
            We are dedicated to providing a wide variety of childcare services
            to parents and their children, while also increasing the skills and
            basic knowledge of your children.
          </p>
        </div>
        <div className="down">
          <div className="left">
            <img
              src="https://livedemo00.template-help.com/wt_prod-22895/images/index-1-2-570x352.jpg"
              alt=""
            />
          </div>
          <div className="right">
            <p>
              At Kindergarten, our mission is to provide excellence in preschool,
              kindergarten, before and after school programs and summer camp for
              families living in the greater local area. Here you’ll find
              exceptional teachers, curriculum and learning environments that
              encourage children to learn, play, and explore in a safe, healthy,
              and nurturing environment promoting creative thinking.
            </p>
            <div className="right-sec">
              <div className="skill">
                <div className="name">
                  {/* <i className="fa-brands fa-html5 html" /> */}
                  <p>Preschool Education</p>
                </div>
                <div className="progress">
                  <span
                    className="pro"
                    style={{ width: "95%" }}
                    data-width="95%"
                  />
                </div>
              </div>
              <div className="skill">
                <div className="name">
                  {/* <i className="fa-brands fa-css3-alt css" /> */}
                  <p>Summer Programs</p>
                </div>
                <div className="progress">
                  <span
                    className="css2"
                    style={{ width: "85%" }}
                    data-width="85%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="programs">
        <div className="heading">
          <h2>Our Programs</h2>
        </div>
        <div className="cards">
          {programs.map((pro) => 
          <div className="card-2">
          <img src={pro.img} alt="" />
          <div className="description">
            <h3>{pro.title}</h3>
            <p>{pro.p}</p>
            <h4>Teacher : {pro.teacher}</h4>
          </div>
        </div>
          )}
        </div>
      </div>
    </>
  );
}

export default About;
