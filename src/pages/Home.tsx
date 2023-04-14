import { useEffect, useState } from "react";
import SingleExpense from "../components/SingleExpense";
import CurrentExpenses from "../components/CurrentExpenses";
import FilterSection from "../components/filter/FilterSection";
import { useLocation, useSearchParams } from "react-router-dom";
import api from "../api/axios";
import { Pagination } from "@mui/material";

interface ExpenseData {
  id: string;
  amount: number;
  created_at: Date;
  name: string;
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
  const location = useLocation();
  const [search, setSearch] = useSearchParams(location.search);

  const [expenseData, setExpenseData] = useState<ExpenseData[]>([]);

  const [pagingInfo, setPagingInfo] = useState<PagingInfo>();

  const getExpenses = async () => {
    const response = await api.get("/expenses", {
      params: {
        page: search.get("page"),
        min_price: search.get("min_price"),
        max_price: search.get("max_price"),
        category_id: search.get("category_id"),
      },
    });

    // Clear expense data array
    setExpenseData([]);

    // Get name of expense from detail API
    await response.data.data.forEach(async (item: ExpenseData) => {
      const detailResponse = await api.get(`/expenses/${item.id}`);
      const currentExpenses = {
        id: item.id,
        amount: item.amount,
        created_at: item.created_at,
        name: detailResponse.data.name,
        category: item.category,
      };
      setExpenseData((expenseData) => [...expenseData, currentExpenses]);
    });
    setPagingInfo(response.data.paging);
    console.log(expenseData);
  };

  const changePageHandler = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    search.set("page", page.toString());
    setSearch(search, { replace: true });
  };

  useEffect(() => {
    getExpenses();
  }, [location.search]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:m-20">
      <div className="lg:col-start-3">
        <CurrentExpenses></CurrentExpenses>
        <FilterSection></FilterSection>
      </div>

      <div className="lg:col-start-1 lg:col-span-2 lg:row-start-1">
        {expenseData ? (
          <>
            {expenseData.map((data) => (
              <div key={data.id}>
                <SingleExpense
                  id={data.id}
                  name={data.name}
                  amount={data.amount}
                  category={data.category}
                />
              </div>
            ))}
          </>
        ) : (
          <div>loading...</div>
        )}
      </div>

      <div className="flex justify-center my-3 lg:col-span-3">
        <Pagination
          count={pagingInfo?.pageCount}
          shape="rounded"
          boundaryCount={3}
          onChange={changePageHandler}
          sx={{
            "& .MuiPaginationItem-root": { backgroundColor: "white" },
            "& .Mui-selected": { backgroundColor: "#ADD8E6" },
          }}
        />
      </div>
    </div>
  );
};

export default Home;
