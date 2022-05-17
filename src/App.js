import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveProducts, editProduct } from "./reducer/ShoppingListSlice";
import useTitle from "./hooks/useTitle";
import List from "./components/List";
import Header from "./components/Header";

const UID = () => `${new Date().getTime()}${String(Math.random()).slice(3, 9)}`;

const App = () => {
  useTitle("Shopping list");
  const [productDetails, setProductDetails] = useState({});
  const [editProductInputs, setEditProductInputs] = useState({});
  const [isModal, setIsModal] = useState(false);
  // console.log(productDetails);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsList.products);
  console.log(products);

  const calculateFainalPrice = () => {
    return products.reduce((acc, cur) => {
      if (!cur.done) return acc + cur.totalPrice;
    }, 0);
  };

  const addProduct = () => {
    if (
      !productDetails.name ||
      !productDetails.quantity ||
      !productDetails.price
    )
      return alert("Please fill the inputs");
    dispatch(
      saveProducts({
        name: productDetails.name,
        quantity: productDetails.quantity,
        price: productDetails.price,
        totalPrice: productDetails.price * productDetails.quantity,
        done: false,
        id: UID(),
      })
    );
    setProductDetails({ name: "", quantity: "", price: "" });
  };

  const handleModale = (id) => {
    setIsModal(true);
    const uniqueProduct = products.find((product) => product.id == id);
    setEditProductInputs(uniqueProduct);
    // console.log(uniqueProduct)
  };

  return (
    <div className="w-full">
      {isModal ? (
        <div
          onClick={() => setIsModal(false)}
          className="w-full h-screen fixed bg-black bg-opacity-50 cursor-not-allowed"
        ></div>
      ) : null}
      {isModal ? (
        <div className="fixed md:w-[450px] sm:w-[350px] w-[300px] min-h-[400px] rounded-lg bg-white left-1/2 -translate-x-1/2 md:mt-8 mt-4 z-50 p-2 overflow-y-auto">
          <h2 className="mt-2 mb-4 text-lg font-medium text-blue-800">
            Change product information
          </h2>
          <label className="block mb-4">
            <div>Name</div>
            <input
              value={editProductInputs.name}
              onChange={(e) =>
                setEditProductInputs({
                  ...editProductInputs,
                  name: e.target.value,
                })
              }
              className="w-full bg-gray-200 p-2 rounded mt-1"
              type="text"
            />
          </label>
          <label className="block mb-4">
            <div>Quantity</div>
            <input
              value={editProductInputs.quantity}
              onChange={(e) =>
                setEditProductInputs({
                  ...editProductInputs,
                  quantity: e.target.value,
                })
              }
              className="w-full bg-gray-200 p-2 rounded mt-1"
              type="text"
            />
          </label>
          <label className="block mb-4">
            <div>Price</div>
            <input
              value={editProductInputs.price}
              onChange={(e) =>
                setEditProductInputs({
                  ...editProductInputs,
                  price: e.target.value,
                })
              }
              className="w-full bg-gray-200 p-2 rounded mt-1"
              type="text"
            />
          </label>
          <button
            onClick={() => {
              setIsModal(false);
              dispatch(editProduct(editProductInputs));
            }}
            className="w-full bg-red-500 text-white px-2 py-1 rounded transition-all hover:bg-red-700 mt-6"
          >
            Sumbit
          </button>
        </div>
      ) : null}
      <Header
        productDetails={productDetails}
        setProductDetails={setProductDetails}
        addProduct={addProduct}
      />
      <List
        products={products}
        handleModale={handleModale}
        calculateFainalPrice={calculateFainalPrice}
      />
    </div>
  );
};

export default App;
