import React from "react";

import { FaXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="footer-section">
        <div className="container flex main-footer-div">
          <div className="footer-div flex">
            <div className="uber-logo">
              {" "}
              <a href="">
                <img className="footer-img" src="uber-white.png" alt="" />
              </a>
            </div>
            <div>
              <a href="">
                {" "}
                <p>Visit Help Center</p>
              </a>
            </div>
            <div className="lists-div flex">
              <div className="company-list flex flex-direction">
                <h4>Company</h4>
                <a href="">
                  <li>About us</li>
                </a>
                <a href="">
                  <li>Our offerings</li>
                </a>
                <a href="">
                  <li>Newsroom</li>
                </a>
                <a href="">
                  <li>Investors</li>
                </a>
                <a href="">
                  <li>Blog</li>
                </a>
                <a href="">
                  <li>Careers</li>
                </a>
              </div>
              <div className="company-list flex flex-direction">
                <h4>Product</h4>
                <a href="">
                  <li>Ride</li>
                </a>
                <a href="">
                  <li>Drive</li>
                </a>
                <a href="">
                  <li>Eat</li>
                </a>
                <a href="">
                  <li>Uber for Business</li>
                </a>
                <a href="">
                  <li>Uber Freight</li>
                </a>
                <a href="">
                  <li>Gift cards</li>
                </a>
                <a href="">
                  <li>Uber Health</li>
                </a>
              </div>
              <div className="company-list flex flex-direction">
                <h4>Global citizenship</h4>
                <a href="">
                  <li>Safety</li>
                </a>
                <a href="">
                  <li>Sustainability</li>
                </a>
              </div>
              <div className="company-list flex flex-direction">
                <h4>Travel</h4>
                <a href="">
                  <li>Reserve</li>
                </a>
                <a href="">
                  <li>Airports</li>
                </a>
                <a href="">
                  <li>Cities</li>
                </a>
              </div>
            </div>
            <div className="social-main-box flex">
              <div className="social-box flex">
                <a href="https://www.facebook.com/uber/">
                  <IoLogoFacebook />
                </a>
                <a href="">
                  <FaXTwitter />
                </a>
                <a href="">
                  <FaYoutube />
                </a>
                <a href="">
                  <FaLinkedin />
                </a>
                <a href="">
                  <FaInstagram />
                </a>
              </div>
              <div className="global-box flex">
                <div className="language-box flex">
                  <AiOutlineGlobal />
                  <p>English</p>
                </div>
                <div className="location-box flex">
                  <FaMapMarkerAlt />
                  <p>San Francisco Bay Area</p>
                </div>
              </div>
            </div>
            <div className="app-store flex">
              <a href="">
                <img className="google-play-img" src="google-play-store.png" alt="" />
              </a>
              <a href="">
                <img className="apple-store-img" src="app-store.png" alt="" />
              </a>
            </div>
            <div className="privacy-content flex">
                <div><p>© 2025 Uber Technologies Inc.</p></div>
                <div className="terms flex">
                    <a href="">Privacy</a>
                    <a href="">Accessibility</a>
                    <a href="">Terms</a>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
