import { configureStore } from "@reduxjs/toolkit";
import MenuSlice from "../slice/MenuSlice";

const store = configureStore({
  reducer: {
    menu: MenuSlice,
  },
});
export default store;
