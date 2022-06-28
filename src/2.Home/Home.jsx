import React from "react";
import Counter from "./Counter";

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="container-fluid top-banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6">
                <h1 className="text-dark fw-bolder">
                  Lorem ipsum dolor sit amet consectetur
                </h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
                  nobis doloribus ducimus voluptatum !
                </p>

                <div className="mt-4">
                  <button className="main-btn mx-1 mx-md-0">
                    Order now <i className="fas fa-shopping-basket ps-3"></i>
                  </button>
                  <button className="main-btn ms-lg-4 mt-lg-0 mt-4">
                    Order now <i className="fas fa-angle-right ps-3"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Counter />
    </>
  );
};

export default Home;
