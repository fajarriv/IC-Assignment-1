import { ReactNode, createContext } from "react";
import car from "../assets/car.svg"
import food from "../assets/food.svg"
import house from "../assets/house.svg"
import mug from "../assets/mug.svg"

const imageMap = new Map<string, ReactNode>();
imageMap.set("Transportation", <img src={car} alt=""/>);
imageMap.set("Food", <img src={food} alt="" />);
imageMap.set("Housing", <img src={house} alt="" />);
imageMap.set("Personal Spending", <img src={mug} alt="" />);

const ImageContext = createContext(imageMap);

export default ImageContext;