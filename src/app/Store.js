import { configureStore } from "@reduxjs/toolkit";
import ShoppingListSlice from "../reducer/ShoppingListSlice";

export default configureStore({
  reducer: {
    productsList: ShoppingListSlice,
  },
});
