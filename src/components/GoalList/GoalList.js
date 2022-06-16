import React from "react";
import GoalItem from "../GoalItem/GoalItem";

import classes from "./GoalList.module.css";

const GoalList = (props) => {
  return (
    <ul className={classes["goal-list"]}>
      {props.goals.map((goal) => (
        <GoalItem
          key={goal.id}
          id={goal.id}
          title={goal.title}
          description={goal.description}
          onDelete={props.onDelete}
        />
      ))}
    </ul>
  );
};

export default GoalList;
