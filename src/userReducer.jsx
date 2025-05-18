import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

createSlice;
const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {},
});
export default userSlice.reducer;
