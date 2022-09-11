import { ordered, restocked } from "./cakeSlice.js";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export const CakeView = () => {
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(restocked(4))}>Restock cakes </button>
    </div>
  );
};
