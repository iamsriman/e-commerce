import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';
export default function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  function getTotalPrice() {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  }

  if (cartItems.length === 0) {
    return <p className="text-center mt-8">Your cart is empty</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.map(item => (
        <CartItem key={item.product_id} item={item} onRemove={removeFromCart} />
      ))}
      <div className="text-right font-semibold mt-4">
        Total: ${getTotalPrice()}
      </div>
      <Link to="/checkout">
  <button className="mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
    Proceed to Checkout
  </button>
</Link>
      {/* Next step: Add Checkout button here */}
    </div>
  );
}
