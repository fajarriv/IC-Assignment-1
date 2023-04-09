import React from "react";
import SingleExpense from "../components/SingleExpense";
import CurrentExpenses from "../components/CurrentExpenses";

const Home = () => {
  return (
    <div className="flex flex-col">
      <CurrentExpenses></CurrentExpenses>
      <SingleExpense></SingleExpense>
    </div>
  );
};

export default Home;
