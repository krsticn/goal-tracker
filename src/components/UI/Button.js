import React from "react";

const Button = (props) => {
  return (
    <button type="submit" onClick={props.onClick}>
      Add Goal
    </button>
  );
};

export default Button;
