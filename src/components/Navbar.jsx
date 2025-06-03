import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  function handleToggle() {
    setToggle(!toggle);
  }
  return (
    <>
      <nav>
        <div className=" main-nav flex">
          <a href="#" className="company-logo">
            <img
              className="company-img"
              src="uber-white.png"
              alt="company-logo"
            />
          </a>
          <div className={toggle ? "nav-links" : "nav-links active"}>
            <ul className="flex nav-ul">
              <li>
                <a href="#">Ride</a>
              </li>
              <li>
                <a href="#">Drive</a>
              </li>
              <li>
                <a href="#">Business</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>

              <li>
                <a href="#">Help</a>
              </li>
              {/* </ul> */}
              {/* <ul className="flex nav-ul"> */}
              <li>
                <a className="display-none" href="#">Log in</a>
              </li>
              <li>
                <a href="#" className="sign-up-btn display-none">
                  Sign up
                </a>
              </li>
            </ul>
          </div>
          <div className="responsive-nav flex">
          <a href="#" className="sign-up-btn nav-toggle">
            Sign up
          </a>
          <a href="#" className=" nav-toggle">
            Log in
          </a>
          <a href="#" className="nav-toggle" onClick={handleToggle}>
            {toggle ? <GiHamburgerMenu /> : <MdCancel />}
          </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
