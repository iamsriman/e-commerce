const API_BASE = 'http://localhost:4000/api';

export async function fetchCart() {
  const res = await fetch(`${API_BASE}/cart`, {
    credentials: 'include', // if you add auth later
  });
  if (!res.ok) throw new Error('Failed to fetch cart');
  return res.json();
}

export async function addToCart(productId, quantity = 1) {
  const res = await fetch(`${API_BASE}/cart`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ product_id: productId, quantity }),
    credentials: 'include',
  });
  if (!res.ok) throw new Error('Failed to add to cart');
  return res.json();
}

export async function removeFromCart(productId) {
  const res = await fetch(`${API_BASE}/cart/${productId}`, {
    method: 'DELETE',
    credentials: 'include',
  });
  if (!res.ok) throw new Error('Failed to remove from cart');
  return true;
}
