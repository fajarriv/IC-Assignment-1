import { useEffect, useState } from "react";
import PriceTypography from "./typography/PriceTypography";

const CurrentExpenses = () => {
  const [price, setPrice] = useState("");

  const getCurrentExpenses = async () => {
    const response = await fetch(
      "https://utbmu5o3smxuba2iverkgqqj440temhn.lambda-url.ap-southeast-1.on.aws/expenses/total/",
      {
        method: "GET",
      }
    );
    const data = await response.json();
    setPrice(data.total);
  };

  useEffect(() => {
    getCurrentExpenses();
  }, []);

  return (
    <div className="block rounded-lg border border-gray-100 bg-white p-3 shadow-xl mx-5 my-3">
      <p className="text-3xl font-bold text-black">Current Expenses</p>
      <PriceTypography price={price + ",00"} />
    </div>
  );
};
export default CurrentExpenses;
