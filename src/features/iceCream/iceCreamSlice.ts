import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

type InitialState = {
  numOfIceCreams: number;
};

const initialState: InitialState = {
  numOfIceCreams: 20,
};

//Create a slice per modular division with toolkit createSlice
const iceCreamSlice = createSlice({
  name: "ice cream",
  initialState,
  /*Create the reducers for the slice*/
  reducers: {
    /*Directly change the value of the state, don't return it*/
    ordered: (state) => {
      state.numOfIceCreams--;
    },
    /*Use the payload that is in the action*/
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfIceCreams += action.payload || 1;
    },
  },
  /*
  If you want to mutate the iceCream state everytime a 
  cake is ordered. Although, the recomended way is the
  one below this one
  extraReducers: {
    ["cake/ordered"]: (state, action) => {
      state.numOfIceCreams--;
    },
  },
  */
  /**
   * To add extra reducers take the builder argument and use
   * addCase to add new ones
   */
  extraReducers: (builder) => {
    /*Listen to the cake/ordered action and execute the 
    callback function*/
    builder.addCase(cakeOrdered, (state, action) => {
      state.numOfIceCreams--;
    });
  },
});

//Export both the slice reducer (as default) and the actions (as name export)
export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;
