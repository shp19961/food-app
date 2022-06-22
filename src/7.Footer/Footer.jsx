import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaDribbble,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <a href="#" className="footer-link">
                Register
              </a>
              <a href="#" className="footer-link">
                Forum
              </a>
              <a href="#" className="footer-link">
                Affiliate
              </a>
              <a href="#" className="footer-link">
                FAQ
              </a>
              <div className="footer-social pt-4 text-center">
                <a href="#">
                  <i>
                    <FaFacebookF />
                  </i>
                </a>
                <a href="#">
                  <i>
                    <FaTwitter />
                  </i>
                </a>
                <a href="#">
                  <i>
                    <FaYoutube />
                  </i>
                </a>
                <a href="#">
                  <i>
                    <FaDribbble />
                  </i>
                </a>
                <a href="#">
                  <i>
                    <FaLinkedin />
                  </i>
                </a>
                <a href="#">
                  <i>
                    <FaInstagramSquare />
                  </i>
                </a>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="footer-copy">
                <div className="copy-right text-center pt-5">
                  <p className="text-light">
                    2021. Foodies. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
