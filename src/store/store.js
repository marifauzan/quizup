import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slice/user-slice";

export default configureStore({
    reducer: {
      userdetails: userSlice
    }
});
