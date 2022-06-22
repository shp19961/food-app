import React from "react";
import profile1 from "../images/profile-1.webp";
import profile2 from "../images/profile-2.webp";

const Testimonials = () => {
  return (
    <section id="testimonial">
      <div className="warapper testimonial-section">
        <div className="container text-center">
          <div className="text-center p-4">
            <h2>Testimonial</h2>
            <div className="row">
              <div className="col-sm-12 col-lg-10 offset-lg-1">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={profile1} className="d-block w-100" alt="..." />
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae incidunt esse rem fugit culpa?
                      </p>
                      <h5 className="text-dark">
                        Lorem ipsum dolor sit amet consectetur.
                      </h5>
                    </div>
                    <div className="carousel-item">
                      <img src={profile2} className="d-block w-100" alt="..." />
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae incidunt esse rem fugit culpa?
                      </p>
                      <h5 className="text-dark">
                        Lorem ipsum dolor sit amet consectetur.
                      </h5>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                  </button>
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
