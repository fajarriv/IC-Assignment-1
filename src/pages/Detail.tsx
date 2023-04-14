import { useNavigate, useParams } from "react-router-dom";
import ArrowLeft from "../components/icon-components/ArrowLeft";
import { useContext, useEffect, useState } from "react";
import api from "../api/axios";
import BasicTypography from "../components/typography/BasicTypography";
import PriceTypography from "../components/typography/PriceTypography";
import ImageContext from "../conntext/ImageContext";
import TransactionDetails from "../components/TransactionDetails";

interface ExpenseDetails {
  id: string;
  name: string;
  amount: number;
  description: string;
  created_at: Date;
  category: Category;
}

interface Category {
  id: string;
  name: string;
}
// items-center
const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const imageMapper = useContext(ImageContext);
  const [expense, setExpense] = useState<ExpenseDetails>();

  const getDetailExpense = async () => {
    const response = await api.get(`/expenses/${id}`);
    setExpense(response.data);
  };

  useEffect(() => {
    getDetailExpense();
  }, []);

  return (
    <div className="h-screen w-screen justify-center flex flex-col">
      <div
        className="inline-flex justify-start items-center text-3xl font-bold ml-6 text-white hover:text-gray-300 cursor-pointer"
        onClick={() => {
          navigate(-1);
        }}
      >
        <ArrowLeft className="h-10 w-10"></ArrowLeft>
        <span className="pl-2"> Back</span>
      </div>
      {expense ? (
        <div className="flex flex-col rounded-lg border border-gray-100 bg-white p-3 pt-8 shadow-xl mx-10 lg:mx-40 my-3 gap-3">
          <div className="flex mx-2 items-center justify-between">
            <div className="flex flex-row items-center gap-4 ">
              <div className="h-13 w-13">
                {imageMapper.get(expense.category.name)}
              </div>

              <BasicTypography size="text-xl" weight="font-normal">
                {expense.name}
              </BasicTypography>
            </div>
            <PriceTypography price={expense.amount.toString()} />
          </div>
          {/* TransactionDetail */}
          <hr className="border-t-[1px] border-black mx-2 my-1" />
          <TransactionDetails
            id={expense.id}
            type={expense.category.name}
            time={expense.created_at}
          />
          {/* notes */}
          <hr className="border-t-[1px] border-black mx-2 my-5" />
          <div className="mx-4">
            <BasicTypography size="text-lg" weight="font-normal">
              Notes
            </BasicTypography>
            <BasicTypography size="text-sm lg:text-lg" weight="font-normal">
              {expense.description}
            </BasicTypography>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default Detail;
