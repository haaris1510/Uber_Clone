import React from "react";

const Cards = ({ heading, para, anchor, reverse, src ,btn }) => {
  return (
    <>
      <div
        className="container flex main-cards-div cards-div"
        style={{ flexDirection: reverse ? "row-reverse" : "row" }}
      >
        <div className="cards-left-div">
          <img src={src} alt="" />
        </div>
        <div className="cards-right-div">
          <div className="card-heading">
            <h2>{heading}</h2>
            <p>{para}</p>
            <div className="card-anchor-div">
              <a href="#" className="act-btn">
                {btn}
              </a>
              <a href="" className="card-anchor">
                {anchor}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
