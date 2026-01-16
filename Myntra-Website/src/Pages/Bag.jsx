import React from "react";
import { useCart } from "../CartProvider";

const Bag = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl font-bold mb-5 text-center sm:text-left">
        My Cart
      </h1>

      {cart.length === 0 && (
        <p className="text-gray-500 text-center">Your cart is empty</p>
      )}

      {/* Cart Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-center gap-4 border p-4 rounded"
          >
            {/* Image */}
            <img
              src={item.Image}
              alt={item.Name}
              className="w-28 h-28 object-cover"
            />

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <p className="font-semibold">{item.Name}</p>
              <p>₹{item.price}</p>
              <p>{item.qty}</p>
            </div>

            {/* Remove Button */}
            <button
              className="bg-red-500 text-white px-4 py-1 rounded w-full sm:w-auto"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bag;
