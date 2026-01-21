import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);


  //add btn
  const addToCart = (product) => {
    setCart((prev) => {
      // check product already exists or not
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  //remove btn 
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  //buy btn

  const BuyNow =()=>{
    
  }

  return (
    <CartContext.Provider value={{ cart, addToCart , removeFromCart ,BuyNow }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);