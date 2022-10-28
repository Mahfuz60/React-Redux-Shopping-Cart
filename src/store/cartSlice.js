import { createSlice } from "@reduxjs/toolkit";


const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state,action) {

      state.push(action.payload);



    },
    remove() {



    },
  },
});
