import React, { useState } from "react";
import Button from "../UI/Button";
import "./GoalInput.css";

const GoalInput = (props) => {
  const [entredGoals, setEntredGoals] = useState("");

  const goalInputHandler = (event) => {
    setEntredGoals(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddGoal(entredGoals);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label>What's your goal?</label>
        <input type="text" onChange={goalInputHandler}></input>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default GoalInput;
