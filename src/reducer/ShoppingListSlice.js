import { createSlice } from "@reduxjs/toolkit";

export const ShoppingListSlice = createSlice({
  name: "productsList",
  initialState: {
    products: [],
  },
  reducers: {
    saveProducts: (state, action) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      const oldProducts = JSON.parse(JSON.stringify(state.products));
      const unique = oldProducts.findIndex(
        (product) => product.id == action.payload
      );
      // console.log(unique)
      oldProducts.splice(unique, 1);
      return { products: oldProducts };
    },
    editProduct: (state, action) => {
      const oldProducts = JSON.parse(JSON.stringify(state.products));
      const unique = oldProducts.findIndex(
        (product) => product.id == action.payload.id
      );
      oldProducts[unique].name = action.payload.name;
      oldProducts[unique].quantity = action.payload.quantity;
      oldProducts[unique].price = action.payload.price;
      oldProducts[unique].totalPrice =
        action.payload.quantity * action.payload.price;
      return { products: oldProducts };
    },
    doneProduct: (state, action) => {
      const oldProducts = JSON.parse(JSON.stringify(state.products));
      const unique = oldProducts.findIndex(
        (product) => product.id == action.payload
      );
      oldProducts[unique].done = !oldProducts[unique].done;
      return { products: oldProducts };
    },
  },
});

export const { saveProducts, deleteProduct, editProduct, doneProduct } =
  ShoppingListSlice.actions;
export default ShoppingListSlice.reducer;
