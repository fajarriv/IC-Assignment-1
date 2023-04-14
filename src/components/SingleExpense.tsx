import React, { useContext } from "react";
import BasicTypography from "./typography/BasicTypography";
import ImageContext from "../conntext/ImageContext";
import PriceTypography from "./typography/PriceTypography";
import { Link } from "react-router-dom";

interface ExpenseProps {
  id: string;
  name: string;
  amount: number;
  category: {
    name: string;
  };
}

const SingleExpense = ({
  id,
  name,
  amount,
  category,
}: ExpenseProps): JSX.Element => {
  const imageMapper = useContext(ImageContext);
  return (
    <Link to={`detail/${id}`}>
      <div className="block rounded-lg border border-gray-100 bg-white p-3 shadow-xl mx-5 mt-3 mb-6 hover:text-gray-400">
        <div className="flex m-1 items-center justify-between">
          <div className="flex flex-row">
            <div className="h-13 w-13">{imageMapper.get(category.name)}</div>
            <div className="flex flex-col px-5">
              <BasicTypography size="text-2xl" weight="font-normal">
                {category.name}
              </BasicTypography>
              <BasicTypography size="text-2xl" weight="font-semibold">
                {name}
              </BasicTypography>
            </div>
          </div>
          <PriceTypography price={amount.toString()} />
        </div>
      </div>
    </Link>
  );
};

export default SingleExpense;
