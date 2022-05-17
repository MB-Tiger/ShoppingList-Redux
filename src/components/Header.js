import React from "react";

const Header = (props) => {
  const { productDetails, setProductDetails, addProduct } = props;
  return (
    <div className="w-full bg-red-500 min-h-[150px] py-8">
      <h2 className="text-2xl font-semibold text-center">
        Enter your product info
      </h2>
      <div className="w-full flex flex-wrap justify-center items-center mt-5 space-x-4">
        <label>
          <span>Name</span>
          <input
            value={productDetails.name}
            onChange={(e) =>
              setProductDetails({ ...productDetails, name: e.target.value })
            }
            onKeyUp={(e) => {
              if (e.key == "Enter") addProduct();
            }}
            className="ml-2 mb-2 p-1 rounded"
            type="text"
          />
        </label>
        <label>
          <span>Quantity</span>
          <input
            value={productDetails.quantity}
            onChange={(e) =>
              setProductDetails({
                ...productDetails,
                quantity: e.target.value,
              })
            }
            onKeyUp={(e) => {
              if (e.key == "Enter") addProduct();
            }}
            className="ml-2 mb-2 p-1 rounded"
            type="number"
          />
        </label>
        <label>
          <span>Price</span>
          <input
            value={productDetails.price}
            onChange={(e) =>
              setProductDetails({ ...productDetails, price: e.target.value })
            }
            onKeyUp={(e) => {
              if (e.key == "Enter") addProduct();
            }}
            className="ml-2 mb-2 p-1 rounded"
            type="number"
          />
        </label>
        <button
          className="bg-blue-600 hover:bg-blue-700 transition-all text-white rounded px-2 py-1 mb-2"
          onClick={() => addProduct()}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Header;
