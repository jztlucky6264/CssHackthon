import React from "react";
import web from "../src/Images/About.jpg";
import CommonPage1 from "./CommonPage1";

const Team = () => {
  return (
    <>
      <CommonPage1
        name=" ADD YOUR TEAM WITH"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default Team;
