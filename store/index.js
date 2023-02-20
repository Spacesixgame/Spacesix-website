import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "store/wallet-slice";
import authReducer from "store/auth-slice";
import nftListReducer from "store/nftlist-slice";

const store = configureStore({
  reducer: {
    wallet: walletReducer.reducer,
    auth: authReducer.reducer,
    nftList: nftListReducer.reducer,
  },
});

export default store;
