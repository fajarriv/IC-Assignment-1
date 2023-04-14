import { useContext, useState } from "react";
import ImageContext from "../../conntext/ImageContext";
import BasicTypography from "../typography/BasicTypography";
import { useLocation, useSearchParams } from "react-router-dom";

interface SingleCategoryProps {
  name: string;
  id: string;
}

const SingleCategory = ({ name, id }: SingleCategoryProps): JSX.Element => {
  
  const imageMapper = useContext(ImageContext);
  const location = useLocation();
  const [search, setSearch] = useSearchParams(location.search);

  const checkedStatus = search.get("category_id")?.split(",").filter(item => item).includes(id)||false
  const [isChecked, setIsChecked] = useState<boolean>(checkedStatus);

  const checkboxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const params = search.get("category_id")?.split(",").filter(item => item) || [];
    console.log(search.get("category_id"))
    if (isChecked && params.includes(e.target.value)) {
      const index = params.indexOf(e.target.value);
      params.splice(index, 1);
      search.set("category_id", params.join(","));
     
    }else{
      params.push(e.target.value);
      search.set("category_id", params.join(","));
     
    }
    if (!params.length) {
      search.delete("category_id")
     
    }
    setSearch(search, { replace: true });
    setIsChecked(!isChecked);
  };

  return (
    <div className="inline-flex items-center gap-2 mx-2">
      <label htmlFor={name} className="inline-flex items-center gap-2">
        <input
          onChange={checkboxHandler}
          value={id}
          type="checkbox"
          id={name}
          className="w-6 h-6 border-black rounded"
          checked={isChecked}
        />
      </label>
      <div className="h-8 w-8">{imageMapper.get(name)}</div>

      <BasicTypography size="text-xl" weight="font-medium">
        {name}
      </BasicTypography>
    </div>
  );
};

export default SingleCategory;
