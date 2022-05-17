import React from "react";
import style from "./GoalItem.module.css";

const GoalItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li onClick={deleteHandler} className={style["goal-item"]}>
      {props.children}
    </li>
  );
};

export default GoalItem;
