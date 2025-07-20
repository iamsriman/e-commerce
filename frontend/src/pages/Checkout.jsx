import React, { useContext, useState } from 'react';
import CheckoutForm from '../components/CheckoutForm';
import { CartContext } from '../context/CartContext';
import { createOrder } from '../api/orderApi';

export default function Checkout() {
  const { cartItems } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (data) => {
    setLoading(true);
    setError('');
    try {
      // Prepare products array with product_id and quantity
      const products = cartItems.map((item) => ({
        product_id: item.product_id,
        quantity: item.quantity,
      }));

      // Call backend order API
      await createOrder({ products });

      setOrderSuccess(true);
    } catch (err) {
      setError('Failed to place order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (orderSuccess) {
    return (
      <div className="max-w-md mx-auto p-4 text-center">
        <h2 className="text-2xl font-semibold mb-4">Order placed successfully!</h2>
        <p>Thank you for your purchase. Your order is being processed.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="divide-y">
            {cartItems.map((item) => (
              <li key={item.product_id} className="py-2 flex justify-between">
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4 font-semibold text-right">
          Total: $
          {cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
        </div>
      </div>
      <div>
        <CheckoutForm onSubmit={onSubmit} />
        {loading && <p className="text-center mt-2">Placing your order...</p>}
        {error && <p className="text-red-600 mt-2">{error}</p>}
      </div>
    </div>
  );
}
