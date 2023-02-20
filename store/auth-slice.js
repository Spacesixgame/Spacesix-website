import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    // isLogin: false,
    referralCode: null,
  },

  reducers: {
    // setIsLogin: (state, { payload }) => {
    //   state.isLogin = payload;
    // },
    setReferralCode: (state, { payload }) => {
      state.referralCode = payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
