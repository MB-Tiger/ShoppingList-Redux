import React from "react";
import { MdDelete, MdPayment } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { deleteProduct, doneProduct } from "../reducer/ShoppingListSlice";
const List = (props) => {
  const { products, handleModale, calculateFainalPrice } = props;
  const dispatch = useDispatch();

  return (
    <div className="w-full">
      {products.length
        ? products.map((product) => {
            return (
              <div
                className="w-full flex flex-wrap justify-between items-center bg-[#eee] lg:px-8 lg:py-4 p-4"
                key={product.id}
              >
                <div
                  className={`flex flex-wrap items-center mb-1 ${
                    product.done == true ? "line-through" : "no-underline"
                  }`}
                >
                  <p className="lg:mr-8 mr-4 mb-1">Number: {product.name}</p>
                  <p className="lg:mr-8 mr-4 mb-1">
                    Quantity: {product.quantity}
                  </p>
                  <p className="lg:mr-8 mr-4 mb-1">Price: {product.price}</p>
                  <p className="mb-1">Total price: {product.totalPrice}</p>
                </div>
                <div className="space-x-4 cursor-pointer text-xl mx-auto lg:mx-0">
                  <button
                    className="text-red-500"
                    onClick={() => dispatch(deleteProduct(product.id))}
                  >
                    <MdDelete />
                  </button>
                  <button
                    className="text-blue-500"
                    onClick={() => handleModale(product.id)}
                  >
                    <BiEditAlt />
                  </button>
                  <button className="text-green-500">
                    <MdPayment
                      onClick={() => dispatch(doneProduct(product.id))}
                    />
                  </button>
                </div>
              </div>
            );
          })
        : null}
      <div className="w-full flex flex-wrap items-center bg-[#eee] lg:px-8 lg:py-4 p-4">
        Final price: {calculateFainalPrice()} $
      </div>
    </div>
  );
};

export default List;
