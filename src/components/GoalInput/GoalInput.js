import React from "react";
import useInput from "../../hooks/use-input";

import Button from "../UI/Button";

import classes from "./GoalInput.module.css";

const GoalInput = (props) => {
  const {
    value: enterdGoal,
    hasError: enterdGoalHasError,
    valueChangeHandler: goalInputHandler,
    inputBlurHandler: goalInputBlurHandler,
    reset: goalReset,
  } = useInput((value) => value.trim());

  const {
    value: enterdDescription,
    hasError: enterdDescriptionHasError,
    valueChangeHandler: descriptionInputHandler,
    inputBlurHandler: descriptionInputBlurHandler,
    reset: descriptionReset,
  } = useInput((value) => value.trim());

  const submitHandler = (event) => {
    event.preventDefault();

    if (enterdGoal !== "") {
      props.onAddGoal(enterdGoal, enterdDescription);
    }

    goalReset();
    descriptionReset();
  };

  let goalInputClases = `${classes["form-control"]} ${enterdGoalHasError &&
    classes.invalid}`;

  let descriptionInputClases = `${
    classes["form-control"]
  } ${enterdDescriptionHasError && classes.invalid}`;

  return (
    <form onSubmit={submitHandler}>
      <div className={goalInputClases}>
        <label>Goal Title</label>
        <input
          type="text"
          onChange={goalInputHandler}
          onBlur={goalInputBlurHandler}
          value={enterdGoal}
        ></input>
        {enterdGoalHasError && (
          <p className={classes.error}>Please enter valid goal.</p>
        )}
      </div>
      <div className={descriptionInputClases}>
        <label>Description</label>
        <input
          type="text"
          onChange={descriptionInputHandler}
          onBlur={descriptionInputBlurHandler}
          value={enterdDescription}
        ></input>
        {enterdDescriptionHasError && (
          <p className={classes.error}>Please enter goal description</p>
        )}
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default GoalInput;
