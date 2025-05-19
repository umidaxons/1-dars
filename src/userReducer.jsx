import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

createSlice;
const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser:(state,action)=>{
      state.push(action.payload)
      
    }
  },
});
export const{addUser}=userSlice.actions
export default userSlice.reducer;
