import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Navbar() {
  const { cartItems } = useContext(CartContext);
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold">MyAmazonClone</Link>
      <div className="space-x-4">
        <Link to="/cart">Cart ({cartItems.length})</Link>
        <Link to="/orders">Orders</Link>
      </div>
    </nav>
  );
}
