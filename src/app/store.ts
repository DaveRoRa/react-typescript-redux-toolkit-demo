import { configureStore } from "@reduxjs/toolkit";
//Import all the slices from features
import cakeReducer from "../features/cake/cakeSlice";
import iceCreamReducer from "../features/iceCream/iceCreamSlice";
import userReducer from "../features/user/userSlice";

//Log prev and next state and the action dispatched

const store = configureStore({
  //Combine the slices on configureStore form rtk
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
  },
});

//Default export the store
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
