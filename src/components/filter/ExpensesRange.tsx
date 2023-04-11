import { useState } from "react";
import CurrencyDollar from "../icon-components/CurrencyDollar";
import BasicTypography from "../typography/BasicTypography";
import { useLocation, useSearchParams } from "react-router-dom";

const ExpensesRange = () => {
  const location = useLocation();
  const [search, setSearch] = useSearchParams(location.search);
  const minInitialPrice = search.get("min_price") || "";
  const maxInitialPrice = search.get("max_price") || "";
  const [minPrice, setMinPrice] = useState(minInitialPrice);
  const [maxPrice, setMaxPrice] = useState(maxInitialPrice);

  const rangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value) {
      search.set(name, value);
    } else {
      search.delete(name);
    }
    name === "min_price" ? setMinPrice(value) : setMaxPrice(value);

    setSearch(search, { replace: true });
  };
  return (
    <div className="flex flex-col w-full px-3">
      <BasicTypography size="text-lg" weight="font-medium">
        Filter by Expenses Range
      </BasicTypography>
      <div className="flex flex-row mt-3">
        <div className="flex flex-col mb-1 w-1/3">
          {/* Min */}
          <span className="text-center font-semibold text-lg italic ">Min</span>
          <label htmlFor="min_price" className="flex items-center gap-2">
            <CurrencyDollar className="w-8 h-8 pointer-events-none"></CurrencyDollar>

            <input
              onChange={rangeHandler}
              value={minPrice}
              name="min_price"
              type="number"
              id="min_price"
              placeholder="100"
              className="w-full rounded-md shadow-sm"
            />
          </label>
        </div>
        <div className="flex w-1/3 items-end px-2 py-5">
          <hr className=" border-t-1 border-black w-full" />
        </div>
        <div className="flex flex-col mb-1 w-1/3">
          {/* Min */}
          <span className="text-center font-semibold text-lg italic ">Min</span>
          <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
            <CurrencyDollar className="w-8 h-8 pointer-events-none"></CurrencyDollar>

            <input
              onChange={rangeHandler}
              value={maxPrice}
              name="max_price"
              type="number"
              id="FilterPriceFrom"
              placeholder="200"
              className="w-full rounded-md shadow-sm"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default ExpensesRange;
