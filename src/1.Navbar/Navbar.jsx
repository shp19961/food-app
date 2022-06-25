import React, { useEffect } from "react";
import logo from "../images/logo.png";
import { FaStream } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  useEffect(() => {
    let nav = document.querySelector(".navigation-wrap");
    window.onscroll = function () {
      if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
      } else {
        nav.classList.remove("scroll-on");
      }
    };
  }, []);

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function () {
      document.getElementById("navbarNav").classList.remove("show");
    });
  });

  return (
    <header>
      <nav className="navbar navbar-expand-lg navigation-wrap px-lg-4 py-lg-3 fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className="nav-logo" src={logo} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="navbar-toggler-icon">
              <FaStream />
            </i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <Link
                  spy={true}
                  className="nav-link"
                  aria-current="page"
                  to="home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link spy={true} className="nav-link" to="about">
                  About us
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link spy={true} className="nav-link" to="explore-food">
                  Explore Foods
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link spy={true} className="nav-link" to="testimonial">
                  Reviews
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link spy={true} className="nav-link" to="faq">
                  FAQ
                </Link>
              </li>
              <li className="nav-item mx-2">
                <button className="main-btn">1200 345 121</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
