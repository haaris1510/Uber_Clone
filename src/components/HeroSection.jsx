import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="container hero-main-div flex">
        <div className="hero-left">
          <h1>Looking for a taxi </h1> <h1>cab service in</h1> <h1>Jaipur?</h1>
          <p>
            Enjoy the flexibility of a taxi cab combined with Uber’s helpful app
            features by riding with Uber Go in Jaipur instead. You can request
            on demand for last-minute trips, book 24x7 in-app or online, and see
            affordable upfront prices (to bypass bargaining for a ride). Find
            your ride at your doorstep after a few taps.
          </p>
          <input type="text" placeholder="Enter location"></input>
          <input type="text" placeholder="Enter Destination" />
          <button>See Prices</button>
        </div>
        <div className="hero-right">
          <img src="India-taxi-pages.webp" alt="" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
