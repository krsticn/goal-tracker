import React, { useState } from "react";

import GoalInput from "./components/GoalInput/GoalInput";
import GoalList from "./components/GoalList/GoalList";

import classes from "./App.module.css";

const App = () => {
  const [goalsData, setGoalsData] = useState([
    {
      id: "1",
      title: "Read Books",
      description: "Read for 30 minutes each day",
    },
    { id: "2", title: "Mown Lawn", description: "Mown lawn every two weeks" },
  ]);

  const addGoalHandler = (goalTitle, goalDescription) => {
    setGoalsData((prevGoals) => {
      let updatedGoals = [...prevGoals];
      updatedGoals.unshift({
        id: Math.random().toString(),
        title: goalTitle,
        description: goalDescription,
      });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    setGoalsData((prevGoals) => {
      let removedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return removedGoals;
    });
  };

  let content = (
    <h2 className={classes["goal-notice"]}>There are no goals. Add one?</h2>
  );

  if (goalsData.length > 0) {
    content = <GoalList goals={goalsData} onDelete={deleteItemHandler} />;
  }

  return (
    <div className={classes["goals"]}>
      <section className={classes["goal-form"]}>
        <GoalInput onAddGoal={addGoalHandler} />
      </section>
      {content}
    </div>
  );
};

export default App;
