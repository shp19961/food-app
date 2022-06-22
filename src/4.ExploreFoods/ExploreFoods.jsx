import React from "react";
import img1 from "../images/img-3.jpg";
import img2 from "../images/img-4.jpg";
import img3 from "../images/img-5.jpg";

const ExploreFoods = () => {
  return (
    <section id="explore-food">
      <div className="explore-food wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="text-center text-content">
                <h2 className="text-danger">Lorem, ipsum.</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia praesentium harum quidem deserunt debitis, molestiae
                  numquam. Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. Itaque deleniti quibusdam qui, eaque dolorum placeat
                  nobis
                </p>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
              <div className="card">
                <img
                  src={img1}
                  alt="...."
                  className="img-fluid"
                  style={{ maxHeight: "250px" }}
                />
                <div className="pt-3">
                  <h4>Lorem ipsum dolor sit.</h4>
                  <p>Time: 15 - 20 Minutes | Serves: 1</p>
                  <span>
                    $10.50 <del>$11.70</del>
                  </span>
                  <button className="mt-4 main-btn">Order Now</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
              <div className="card">
                <img
                  src={img2}
                  alt="...."
                  className="img-fluid"
                  style={{ maxHeight: "250px" }}
                />
                <div className="pt-3">
                  <h4>Lorem ipsum dolor sit.</h4>
                  <p>Time: 30 - 45 Minutes | Serves: 1</p>
                  <span>
                    $16.50 <del>$21.70</del>
                  </span>
                  <button className="mt-4 main-btn">Order Now</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
              <div className="card">
                <img
                  src={img3}
                  alt="...."
                  className="img-fluid"
                  style={{ maxHeight: "250px" }}
                />
                <div className="pt-3">
                  <h4>Lorem ipsum dolor sit.</h4>
                  <p>Time: 45 - 60 Minutes | Serves: 1</p>
                  <span>
                    $100.50 <del>$121.70</del>
                  </span>
                  <button className="mt-4 main-btn">Order Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreFoods;
