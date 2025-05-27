import React from "react";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className=" main-nav flex">
          <ul className="flex nav-ul">
            <li>
              <a href="#" className="company-logo">
                <img
                  className="company-img"
                  src="uber-white.png"
                  alt="company-logo"
                />
              </a>
            </li>
            <li>
              <a href="#" >Ride</a>
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
          </ul>
          <ul className="flex nav-ul">
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Log in</a>
            </li>
            <li>
              <a href="#" className="sign-up-btn">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
