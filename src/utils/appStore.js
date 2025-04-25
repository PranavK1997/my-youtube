import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./mainSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    main: mainSlice,
    search: searchSlice,
  },
});

export default store;
