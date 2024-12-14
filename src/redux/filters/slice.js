import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  number: "",
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
    changeNumberFilter: (state, action) => {
      state.number = action.payload;
    },
  },
});

export const filterReducer = slice.reducer;
export const { changeFilter, changeNumberFilter } = slice.actions;
