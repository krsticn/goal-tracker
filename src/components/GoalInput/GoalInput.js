import React, { useState } from "react";
import Button from "../UI/Button";
import "./GoalInput.css";

const GoalInput = (props) => {
  const [entredGoals, setEntredGoals] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputHandler = (event) => {
    if (event.target.value.trim() > 0) {
      setIsValid(true);
    }
    setEntredGoals(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (entredGoals.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(entredGoals);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label>What's your goal?</label>
        <input type="text" onChange={goalInputHandler}></input>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default GoalInput;
