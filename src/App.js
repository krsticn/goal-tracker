import React, { useState } from "react";
import GoalInput from "./components/GoalInput/GoalInput";
import GoalList from "./components/GoalList/GoalList";
import "./App.css";

const App = () => {
  const [entredGoals, setEntredGoals] = useState([
    { text: "First Goal", id: "1" },
    { text: "Second Goal", id: "2" },
  ]);

  let content = <h2>There is no goals. Add one?</h2>;

  if (entredGoals.length > 0) {
    content = <GoalList />;
  }

  return (
    <div id="goals">
      <section id="goal-form">
        <GoalInput />
      </section>
      {content}
    </div>
  );
};

export default App;
