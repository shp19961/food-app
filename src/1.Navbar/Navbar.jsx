import React, { useEffect } from "react";
import logo from "../images/logo.png";
import { FaStream } from "react-icons/fa";

const Navbar = () => {
  useEffect(() => {
    let nav = document.querySelector(".navigation-wrap ");
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
          <a className="navbar-brand" href="#">
            <img className="nav-logo" src={logo} />
          </a>
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
                <a className="nav-link" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#about">
                  About us
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#explore-food">
                  Explore Foods
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#testimonial">
                  Reviews
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#faq">
                  FAQ
                </a>
              </li>
              <li className="nav-item mx-2">
                <button className="main-btn" href="#">
                  1200 345 121
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
