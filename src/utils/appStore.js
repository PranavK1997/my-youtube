import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./mainSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    main: mainSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});

export default store;
