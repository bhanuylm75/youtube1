import { createSlice } from "@reduxjs/toolkit";
 const toggleSlice=createSlice({
  name:"Toggle",
  initialState:{
    isMenuOpen:true
  },
  reducers:{
    toggleMenu:(state)=>{
      state.isMenuOpen=!state.isMenuOpen
    }


  }


})
export const {toggleMenu}=toggleSlice.actions
export default toggleSlice.reducer