import React from "react";

const BottomContents = () => {
  return (
    <>
      <section id="faq">
        <div className="faq wrapper">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="text-center pb-4">
                  <h2 className="text-info">Frequenty Asked Questions</h2>
                </div>
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-sm-6 mb-4">
                <h4 className="text-danger">
                  <span>~</span>Lorem ipsum dolor sit amet consectetur
                  adipisicing elit?
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique architecto maiores aut molestiae odio fugit,
                  incidunt veritatis vel, ipsa repellendus, corrupti quo.
                </p>
              </div>
              <div className="col-sm-6 mb-4">
                <h4 className="text-danger">
                  <span>~</span>Lorem ipsum dolor sit amet consectetur
                  adipisicing elit?
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique architecto maiores aut molestiae odio fugit,
                  incidunt veritatis vel, ipsa repellendus, corrupti quo.
                </p>
              </div>
              <div className="col-sm-6 mb-4">
                <h4 className="text-danger">
                  <span>~</span>Lorem ipsum dolor sit amet consectetur
                  adipisicing elit?
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique architecto maiores aut molestiae odio fugit,
                  incidunt veritatis vel, ipsa repellendus, corrupti quo.
                </p>
              </div>
              <div className="col-sm-6 mb-4">
                <h4 className="text-danger">
                  <span>~</span>Lorem ipsum dolor sit amet consectetur
                  adipisicing elit?
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique architecto maiores aut molestiae odio fugit,
                  incidunt veritatis vel, ipsa repellendus, corrupti quo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="book-food">
        <div className="book-food">
          <div className="container book-food-text">
            <div className="row text-center">
              <div className="col-lg-9 col-md-12">
                <h2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, temporibus
                </h2>
              </div>
              <div className="col-lg-3 col-md-12 mt-lg-0 mt-4">
                <button className="main-btn">Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="newsletter">
        <div className="newsletter wrapper">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="text-center text-content pb-4">
                  <h2 className="text-dark">
                    Huryy up! Subscribe our newsletter and get 24% off
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </div>
                <form action="" className="newsletter">
                  <div className="row">
                    <div className="col-md-8 col-12">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-4 col-12">
                      <button className="main-btn" type="submit">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BottomContents;
