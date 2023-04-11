import { useEffect, useState } from "react";
import BasicTypography from "../typography/BasicTypography";
import SingleCategory from "./SingleCategory";
import api from "../../api/axios";

interface Category {
  id: string;
  name: string;
}

const TransactionCategory = (): JSX.Element => {
  const [categories, setCategories] = useState<Category[]>();

  const getCategories = async () => {
    const response = await api.get("/expenses/category");
    setCategories(response.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="flex flex-col mt-4 mx-3">
      <BasicTypography size="text-lg" weight="font-medium">
        Filter by transaction category
      </BasicTypography>
      {categories?.map((data) => (
        <div key={data.id}>
          <SingleCategory name={data.name} id={data.id}></SingleCategory>
        </div>
      ))}
    </div>
  );
};

export default TransactionCategory;
