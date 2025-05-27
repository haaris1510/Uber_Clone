import React from "react";
import { FaCar } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";

import { FaLocationArrow } from "react-icons/fa6";
const MapSection = () => {
  return (
    <>
      <div className="map-main-div container flex">
        <div className="left-map-content">
          <h1>Go anywhere with</h1>
          <h1>Uber</h1>
          <div className="icons-div flex">
            <div className="icon1 flex ">
              <button className="icon-btn">
                <FaCar className="facar" />
              </button>
              <p>Ride</p>
            </div>
            <div className="icon2 flex">
              <button className="icon-btn">
                <FaBoxOpen className="facar" />
              </button>
              <p>Courier</p>
            </div>
          </div>
          <div className="input-boxes flex">
            <input
              type="text"
              className="pickup-input"
              placeholder="Pickup location"
            />
            <input
              type="text"
              className="drop-input"
              placeholder="Dropoff location"
            />
            <div className="flex day-flex">
              <input type="text" className="day-input" placeholder="Today" />
              <input type="text" className="day-input" placeholder="Now" />
            </div>
          </div>
          <div className="price-button flex">
            <button className="price-btn">See Prices</button>

            <a href="#" className="activity-para">
              Log in to see your recent activity
            </a>
          </div>
        </div>
        <div className="right-map">
          <img src="map.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default MapSection;
