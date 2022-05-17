import React from "react";
import "./GoalItem.css";

const GoalItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li onClick={deleteHandler} className="goal-item">
      {props.children}
    </li>
  );
};

export default GoalItem;
