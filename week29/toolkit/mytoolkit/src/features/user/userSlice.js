import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  name: "Ajay",
  loggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    login: (state, action) => {
      state.name = action.payload;
      state.loggedIn = true;
    },
    logout: (state) => {
      state.name = "";
      state.loggedIn = false;
    },
  },
});


export const {login,logout} = userSlice.actions
export default userSlice.reducer

