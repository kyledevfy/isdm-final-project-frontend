import { createSlice } from "@reduxjs/toolkit";

export const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    value: [],
  },
  reducers: {
    loadEmployees: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { loadEmployees } = employeesSlice.actions;

export default employeesSlice.reducer;
