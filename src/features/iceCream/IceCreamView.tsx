import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ordered, restocked } from "./iceCreamSlice.js";

export const IceCreamView = () => {
  const numOfIceCreams = useAppSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Number of Ice Creams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order Ice Creams</button>
      <button onClick={() => dispatch(restocked(4))}>Restock Ice Creams</button>
    </div>
  );
};
