import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "userdetails",
    initialState: {
      value: "",
      score: "",
      idquiz: ""
    },
    reducers: {
      setUser: (state, action) => {
        state.value = action.payload;
      },
      setScore: (state, action) => {
        state.score = action.payload;
      },
      setId: (state, action) => {
        state.idquiz = action.payload;
      },
    }
  },
  );
  
  export const { setUser } = userSlice.actions;
  export const selectUser = state => state.value;
  export const { setScore } = userSlice.actions;
  export const selectScore = state => state.score;
  export const { setId } = userSlice.actions;
  export const selectId = state => state.idquiz;
  export default userSlice.reducer;