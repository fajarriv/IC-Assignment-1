import { useEffect, useState } from "react";
import PriceTypography from "./typography/PriceTypography";
import BasicTypography from "./typography/BasicTypography";
import api from "../api/axios";

const CurrentExpenses = () => {
  const [price, setPrice] = useState("");

  const getCurrentExpenses = async () => {
    const response = await api.get("/expenses/total")
    setPrice(response.data.total);
  };

  useEffect(() => {
    getCurrentExpenses();
  }, []);

  return (
    <div className="block rounded-lg border border-gray-100 bg-white p-3 shadow-xl mx-5 my-3">
      <BasicTypography size="text-3xl" weight="font-bold">
        Current Expenses
      </BasicTypography>
      <PriceTypography price={price + ",00"} />
    </div>
  );
};
export default CurrentExpenses;
