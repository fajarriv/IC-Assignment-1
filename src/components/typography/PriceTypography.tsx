import CurrencyDollar from "../icon-components/CurrencyDollar";
import BasicTypography from "./BasicTypography";

interface PriceTypographyProps {
  price: string;
}

const PriceTypography = ({ price }: PriceTypographyProps) => {
  return (
    <div className="my-2 text-[#19A7CE] flex flex-row">
      <CurrencyDollar className="w-10 h-10" />
      <BasicTypography size="text-3xl" weight="font-bold">
        {price}
      </BasicTypography>
    </div>
  );
};

export default PriceTypography;
