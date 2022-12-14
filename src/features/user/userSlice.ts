import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type User = {
  id: number;
  name: string;
};

type InitialState = {
  loading: boolean;
  users: User[];
  error: string;
};

const initialState: InitialState = {
  loading: false,
  users: [],
  error: "",
};

/**
 * Generates pending, fulfilled and rejected action
 * types. In this case the actions from the slice are
 * not exported, but from theresult of createAsyncThunk
 */
export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  /*To add asyncThunk middlewares is needed to add every one 
  of the three action cases generated by createAsyncThunk.
  This field is only to listen the events and modify the state,
  it does not create the actions*/
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
      state.users = [];
      state.error = "";
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});

//Export both the slice reducer (as default) and the actions (as name export)
export default userSlice.reducer;
