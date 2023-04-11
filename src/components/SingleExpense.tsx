import React, { useContext } from "react";
import BasicTypography from "./typography/BasicTypography";
import ImageContext from "../conntext/ImageContext";

interface ExpenseData {
  id: string;
  name: string;
  amount: number;
  created_at: Date;
  category: {
    name: string;
  };
}

const SingleExpense = (): //   {
//   id,
//   name,
//   amount,
//   created_at,
//   category,
// }: ExpenseData
JSX.Element => {
  const imageMapper = useContext(ImageContext);
  return (
    <div className="block rounded-lg border border-gray-100 bg-white p-3 shadow-xl mx-5 my-3">
      <div className="flex flex-row mt-2 items-center">
      <div className="h-13 w-13">{imageMapper.get("Transportation")}</div>
      <BasicTypography size="text-3xl" weight="font-bold">
        Current Expenses
      </BasicTypography>
      </div>
    </div>
  );
};

export default SingleExpense;
