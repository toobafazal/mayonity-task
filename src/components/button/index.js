import React from "react";

const Button = (Props) => {
  return (
    <>
      <button className="tabButton">{Props.value}</button>
    </>
  );
};

export default Button;
