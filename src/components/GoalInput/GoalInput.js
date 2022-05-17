import React, { useState } from "react";
import Button from "../UI/Button";

const GoalInput = (props) => {
  const [entredGoals, setEntredGoals] = useState("");

  const goalInputHandler = (event) => {
    setEntredGoals(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.addGoal(entredGoals);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>What's your goal?</label>
        <input type="text" onChange={goalInputHandler}></input>
      </div>
      <Button />
    </form>
  );
};

export default GoalInput;
