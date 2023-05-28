import { createContext, useState } from 'react';
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    setNumberOfItems(numberOfItems + 1);
    getFinalPrice();
  };

  const removeFromCart = (itemId) => {
    setNumberOfItems(numberOfItems - cartItems[itemId]);
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] = 0) }));
    getFinalPrice();
  };

  const getFinalPrice = () => {
    let finalPrice = 0;
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
      finalPrice += cartItems[i] * PRODUCTS[i - 1].productPrice;
    }
    setFinalPrice(finalPrice);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    numberOfItems,
    setNumberOfItems,
    finalPrice,
    getFinalPrice,
  };

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
