import React from "react";

const SuggestionsSection = () => {
  return (
    <>
      <div className="sugg-main-div container flex">
        <div className="heading-div">
          <h2>Suggestions</h2>
        </div>
        <div className="main-suggestion flex">
        <div className="sugg-1 flex">
            <a href="" className=" flex">
          <div className="sugg-1-left">
            <h5>Ride</h5>
            <p>Go anywhere with Uber.Request a ride,hop in and go.</p>
            <button className="detail-btn">Details</button>
          </div>
          <div className="sugg-1-right">
            <img src="ride.png" alt="" />
          </div>
          </a>
        </div>
        <div className="sugg-1 flex">
            <a href="" className=" flex">
          <div className="sugg-1-left">
            <h5>Reserve</h5>
            <p>Reserve your ride in advance so you can relax on the day of your trip.</p>
            <button className="detail-btn">Details</button>
          </div>
          <div className="sugg-1-right">
            <img src="reserve_clock.png" alt="" />
          </div>
          </a>
        </div>
        <div className="sugg-1 flex">
            <a href="" className=" flex">
          <div className="sugg-1-left">
            <h5>Intercity</h5>
            <p>Get convenient, affordable outstation cabs anytime at your door.</p>
            <button className="detail-btn">Details</button>
          </div>
          <div className="sugg-1-right">
            <img src="intercity.png" alt="" />
          </div>
          </a>
        </div>
         <div className="sugg-1 flex">
            <a href="" className=" flex">
          <div className="sugg-1-left">
            <h5>Courier</h5>
            <p>Uber makes same-day item delivery easier than ever.</p>
            <button className="detail-btn">Details</button>
          </div>
          <div className="sugg-1-right">
            <img src="Courier.png" alt="" />
          </div>
          </a>
        </div>
        <div className="sugg-1 flex">
            <a href="" className=" flex">
          <div className="sugg-1-left">
            <h5>Rentels</h5>
            <p>Request a trip for a block of time and make multiple stops.</p>
            <button className="detail-btn">Details</button>
          </div>
          <div className="sugg-1-right">
            <img src="Hourly2021.png" alt="" />
          </div>
          </a>
        </div>
        <div className="sugg-1 flex">
            <a href="" className=" flex">
          <div className="sugg-1-left">
            <h5>Moto</h5>
            <p>Get affordable motorbike rides in minutes at your doorstep.</p>
            <button className="detail-btn">Details</button>
          </div>
          <div className="sugg-1-right">
            <img src="Uber_Moto_India1.png" alt="" />
          </div>
          </a>
        </div>
        </div>
      </div>
    </>
  );
};

export default SuggestionsSection;
