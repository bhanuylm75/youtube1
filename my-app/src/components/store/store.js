import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "../toggleslice";

export default configureStore({
  reducer:{
    toggleSlice:toggleSlice
  }
})