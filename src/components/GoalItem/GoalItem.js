import React from "react";
import classes from "./GoalItem.module.css";

const GoalItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li onClick={deleteHandler} className={classes["goal-item"]}>
      <h3>Title: {props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
};

export default GoalItem;
