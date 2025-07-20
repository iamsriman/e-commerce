import React, { useEffect, useState } from 'react';
import { fetchOrders } from '../api/orderApi';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders().then(setOrders).catch(console.error);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">My Orders</h2>
      {orders.length === 0 && <p>No orders yet.</p>}
      {orders.map(order => (
        <div key={order.id} className="mb-6 border p-4 rounded-md">
          <p className="mb-2 font-semibold">Order Date: {new Date(order.order_date).toLocaleString()}</p>
          <ul>
            {order.items.map(item => (
              <li key={item.product_id} className="flex justify-between">
                <span>{item.name}</span>
                <span>{item.quantity} x ${item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
