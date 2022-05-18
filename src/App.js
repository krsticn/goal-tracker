import React, { useState } from "react";
import GoalInput from "./components/GoalInput/GoalInput";
import GoalList from "./components/GoalList/GoalList";
import "./App.css";

const App = () => {
  const [goalsData, setGoalsData] = useState([
    { text: "First Goal", id: "1" },
    { text: "Second Goal", id: "2" },
  ]);

  const addGoalHandler = (goalText) => {
    setGoalsData((prevGoals) => {
      let updatedGoals = [...prevGoals];
      updatedGoals.unshift({
        text: goalText,
        id: Math.random().toString(),
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

  let content = <h2 className="notice">There is no goals. Add one?</h2>;

  if (goalsData.length > 0) {
    content = <GoalList goals={goalsData} onDelete={deleteItemHandler} />;
  }

  return (
    <div id="goals">
      <section id="goal-form">
        <GoalInput onAddGoal={addGoalHandler} />
      </section>
      {content}
    </div>
  );
};

export default App;
