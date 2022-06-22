import React from "react";
import Story from "./Story";
import img1 from "../images/img-1.webp";
import img2 from "../images/img-2.jpg";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="about-section wrapper">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-12 mb-lg-0 mb-5">
                <div className="card border-0">
                  <img src={img1} className="img-fluid" alt="...." />
                </div>
              </div>

              <div className="col-lg-5 col-md-12 text-sec">
                <h2 className="text-dark">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia, voluptate!
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                  aut tempore veniam qui, quidem nemo!
                </p>
                <button className="main-btn mt-4">Learn More</button>
              </div>
            </div>
          </div>

          <div className="container food-type">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12 text-sec mb-lg-0 mb-5">
                <h2 className="text-dark">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Impedit sapiente itaque sunt expedita nobis a. Facere, a
                  consequatur!
                </p>

                <ul className="list-unstyled py-3">
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                </ul>
                <button className="main-btn mt-4">Learn More</button>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="card border-0">
                  <img src={img2} alt="...." className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Story />
    </>
  );
};

export default About;
