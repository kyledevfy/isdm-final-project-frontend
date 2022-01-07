import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      id: 0,
      username: "",
      email: "",
      provider: "local",
      confirmed: true,
      blocked: false,
    },
  },
  reducers: {
    login: (state, action) => {
      state.value.id = action.payload.id;
      state.value.username = action.payload.username;
      state.value.email = action.payload.email;
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
