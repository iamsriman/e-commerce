import React from 'react';

export default function CartItem({ item, onRemove }) {
  return (
    <div className="flex justify-between items-center border-b py-2">
      <div>
        <p className="font-semibold">{item.name}</p>
        <p>
          {item.quantity} x ${item.price.toFixed(2)}
        </p>
      </div>
      <button
        onClick={() => onRemove(item.product_id)}
        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
      >
        Remove
      </button>
    </div>
  );
}
