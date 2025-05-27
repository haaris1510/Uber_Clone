import React from "react";
import Cards from "./Cards";

const MultipleCards = () => {
  let heading1 = "Drive when you want, make what you need";
  let para1 =
    "Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber.";
  let anchor1 = "Already have an account? Sign in";
  let heading2 = "The Uber you know, reimagined for business";
  let para2 =
    "Uber for Business is a platform for managing global rides and meals, and local deliveries, for companies of any size.";
  let anchor2 = "Check out our solutions";
  let heading3 ="Our annual product showcase is here";
  let para3 = "Go—Get 2025 is live. Explore all the latest products announced to help make your everyday more flexible, more affordable, and a little easier.";
  let heading4 ="Make money by renting out your car";
  let para4 ="Connect with thousands of drivers and earn more per week with Uber’s free fleet management tools.";
  let btn1 = "Get started";
  let btn2 = "Discover what's new"



  return (
    <>
      <Cards heading={heading1} para={para1} anchor={anchor1} src='earner-illustra.webp' btn={btn1} />
      <Cards heading={heading2} para={para2} anchor={anchor2} reverse={true} src='u4b-square.webp' btn={btn1}/>
      <Cards heading={heading3} para={para3} src='placeholders__3__720.webp' btn={btn2} />
      <Cards heading={heading2} para={para2} reverse={true} src='fleet-management.webp' btn={btn1}/>
    </>
  );
};

export default MultipleCards;
