import React from "react";
import GoalItem from "../GoalItem/GoalItem";
import "./GoalList.css";

const GoalList = (props) => {
  return (
    <ul className="goal-list">
      {props.goals.map((goal) => (
        <GoalItem key={goal.id} id={goal.id} onDelete={props.onDelete}>
          {goal.text}
        </GoalItem>
      ))}
    </ul>
  );
};

export default GoalList;
