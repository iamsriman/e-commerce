import React, { createContext, useState, useEffect } from 'react';
import { fetchCart, addToCart as apiAddToCart, removeFromCart as apiRemoveFromCart } from '../api/cartApi';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const loadCart = () => {
    fetchCart()
      .then(setCartItems)
      .catch(err => console.error('Load cart error', err));
  };

  useEffect(() => {
    loadCart();
  }, []);

  const addToCart = async (productId, quantity = 1) => {
    await apiAddToCart(productId, quantity);
    loadCart();
  };

  const removeFromCart = async (productId) => {
    await apiRemoveFromCart(productId);
    loadCart();
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
