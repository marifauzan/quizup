import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "userdetails",
    initialState: {
      value: ""
    },
    reducers: {
      setUser: (state, action) => {
        state.value = action.payload;
      },
    }
  });
  
  export const { setUser } = userSlice.actions;
  export const selectUser = state => state.value;
  export default userSlice.reducer;