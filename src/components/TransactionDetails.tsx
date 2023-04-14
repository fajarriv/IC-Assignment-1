import BasicTypography from "./typography/BasicTypography";
import moment from "moment";

interface TransactionProps {
  id: string;
  type: string;
  time: Date;
}

const TransactionDetails = ({ id, type, time }: TransactionProps) => {
  moment.locale("id");
  return (
    <div className="mx-4 flex flex-col">
      <BasicTypography size="text-lg" weight="font-normal">
        Transaction details
      </BasicTypography>
      <div className="flex items-center justify-between mt-6">
        <BasicTypography size="text-md lg:text-lg" weight="font-normal">
          ID
        </BasicTypography>
        <BasicTypography size="text-md lg:text-lg" weight="font-semibold">
          {id}
        </BasicTypography>
      </div>
      <div className="flex items-center justify-between mt-4">
        <BasicTypography size="text-md lg:text-lg" weight="font-normal">
          Type
        </BasicTypography>
        <BasicTypography size="text-md lg:text-lg" weight="font-semibold">
          {type}
        </BasicTypography>
      </div>
      <div className="flex items-center justify-between mt-4">
        <BasicTypography size="text-md lg:text-lg" weight="font-normal">
          Time
        </BasicTypography>
        <BasicTypography size="text-md lg:text-lg" weight="font-semibold">
          {moment(time).format("DD MMM YYYY, HH:mm [WIB]")}
        </BasicTypography>
      </div>
    </div>
  );
};

export default TransactionDetails;
