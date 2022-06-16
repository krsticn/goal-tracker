import React, { Fragment, useState } from "react";
import GoalModal from "../GoalModal/GoalModal";
import useInput from "../../hooks/use-input";

import Button from "../UI/Button";

import classes from "./GoalInput.module.css";

const GoalInput = (props) => {
  const [isModal, setIsModal] = useState(false);

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

    if (!enterdGoal && !enterdDescription) {
      setIsModal(true);
      return;
    }

    props.onAddGoal(enterdGoal, enterdDescription);
    goalReset();
    descriptionReset();
  };

  let goalInputClases = `${classes["form-control"]} ${enterdGoalHasError &&
    classes.invalid}`;

  let descriptionInputClases = `${
    classes["form-control"]
  } ${enterdDescriptionHasError && classes.invalid}`;

  return (
    <Fragment>
      {isModal && (
        <GoalModal
          title="Error!"
          message="Please enter title and description."
          onCloseModal={() => setIsModal(false)}
        />
      )}
      <form onSubmit={submitHandler}>
        <div className={goalInputClases}>
          <label>Goal Title:</label>
          <input
            type="text"
            placeholder="Your goal..."
            onChange={goalInputHandler}
            onBlur={goalInputBlurHandler}
            value={enterdGoal}
          ></input>
          {enterdGoalHasError && (
            <p className={classes.error}>Please enter valid goal.</p>
          )}
        </div>
        <div className={descriptionInputClases}>
          <label>Description:</label>
          <input
            type="text"
            placeholder="Description..."
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
    </Fragment>
  );
};

export default GoalInput;
