import { createSlice } from "@reduxjs/toolkit";

export const loginStatusSlice = createSlice({
  name: "loginStatus",
  initialState: {
    value: false,
  },
  reducers: {
    changeLoginStatus: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeLoginStatus } = loginStatusSlice.actions;

export default loginStatusSlice.reducer;
