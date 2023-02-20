import { createSlice } from "@reduxjs/toolkit";

const nftListSlice = createSlice({
  name: "nftList",
  initialState: {
    homeNFTList: [],
  },

  reducers: {
    setHomeNFTList: (state, { payload }) => {
      state.homeNFTList = payload;
    },
  },
});

export const nftListActions = nftListSlice.actions;

export default nftListSlice;
