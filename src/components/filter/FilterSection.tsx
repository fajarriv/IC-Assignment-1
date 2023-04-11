import { useContext } from "react";
import FilterIcon from "../icon-components/FilterIcon";
import BasicTypography from "../typography/BasicTypography";
import TransactionCategory from "./TransactionCategories";
import ImageContext from "../../conntext/ImageContext";
import ExpensesRange from "./ExpensesRange";

const FilterSection = (): JSX.Element => {

  return (
    <div className="block rounded-lg border border-gray-100 bg-white p-3 shadow-xl mx-5 my-3">
      <div className="flex flex-col mt-2">
        <div className="flex flex-row space-x-2">
          <FilterIcon className="w-9 h-9"></FilterIcon>
          <BasicTypography size="text-2xl" weight="font-bold">
            Filters
          </BasicTypography>
        </div>
        {/* Transaction Category */}
        <TransactionCategory/>
        <hr className="border-t-[1px] border-black mx-2 my-2" />
        <ExpensesRange/>
      </div>
    </div>
  );
};

export default FilterSection;
