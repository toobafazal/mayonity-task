/* eslint-disable no-unreachable */
import React from "react";
import { FaBeer } from "react-icons/fa";

const Heading = (Props) => {
  return(
  <>
    <div className="subHeading d-flex justify-content-between">
    <h2>{Props.heading}</h2>
    <span>{Props.icon}</span>
    </div>
  </>
  )
};

export default Heading;
