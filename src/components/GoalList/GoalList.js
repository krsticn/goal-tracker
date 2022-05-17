import React from "react";
import GoalItem from "../GoalItem/GoalItem";
import style from "./GoalList.module.css";

const GoalList = (props) => {
  return (
    <ul className={style["goal-list"]}>
      {props.goals.map((goal) => (
        <GoalItem key={goal.id} id={goal.id} onDelete={props.onDelete}>
          {goal.text}
        </GoalItem>
      ))}
    </ul>
  );
};

export default GoalList;
