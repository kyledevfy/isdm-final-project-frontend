import { createSlice } from "@reduxjs/toolkit";

export const attendanceSlice = createSlice({
  name: "attendance",
  initialState: {
    value: [],
  },
  reducers: {
    loadAttendance: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { loadAttendance } = attendanceSlice.actions;

export default attendanceSlice.reducer;
