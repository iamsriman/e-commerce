const API_BASE = 'http://localhost:4000/api';

export async function createOrder(orderData) {
  const res = await fetch(`${API_BASE}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderData),
    credentials: 'include',
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Failed to create order');
  }
  return res.json();
}

export async function fetchOrders() {
  const res = await fetch(`${API_BASE}/orders`, { credentials: 'include' });
  if (!res.ok) throw new Error('Failed to fetch orders');
  return res.json();
}
