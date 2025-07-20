export default function ProductCard({ product, onAddToCart, onLikeToggle, isLiked }) {
  return (
    <div className="border rounded p-4 flex flex-col">
      <img src={product.image_url} alt={product.name} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-700 mb-2">${product.price.toFixed(2)}</p>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded mb-2"
        onClick={() => onAddToCart(product.id, 1)}
      >
        Add to Cart
      </button>
      {/* Like button as before */}
    </div>
  );
}
