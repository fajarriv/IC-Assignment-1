import React from "react";
import SingleExpense from "../components/SingleExpense";
import CurrentExpenses from "../components/CurrentExpenses";
import FilterSection from "../components/filter/FilterSection";

interface ExpenseData {
  id: string;
  name: string;
  amount: number;
  created_at: Date;
  category: {
      name: string;
  };
}

interface PagingInfo {
  page: number;
  limit: number;
  itemCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}


const Home = () => {
  return (
    <div className="flex flex-col">
      <CurrentExpenses></CurrentExpenses>
      <FilterSection></FilterSection>
      <SingleExpense></SingleExpense>
    </div>
  );
};

export default Home;
