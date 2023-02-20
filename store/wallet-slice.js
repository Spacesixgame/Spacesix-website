import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    address: null,
    networkId: null,
    connected: false,
  },
  reducers: {
    updated: (state, { payload }) => {
      Object.assign(state, payload);
    },
    connected: (state, { payload }) => {
      state.address = payload.address;
      state.networkId = payload.networkId;
      state.connected = payload.connected;
    },
  },
});

export const walletActions = walletSlice.actions;

export default walletSlice;
