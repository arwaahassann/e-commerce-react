import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../reducers/counterSlice";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const limit = 10;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
        );
        setProducts(response.data.products);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    getProducts();
  }, [skip]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-red-500 rounded-full animate-spin" />
          <p className="text-gray-400 font-medium">Loading products...</p>
        </div>
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-gray-900">All Products</h1>
        <p className="text-gray-400 mt-1 text-sm">
          Showing {skip + 1}–{skip + products.length} results
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mb-10">
        {products.map((item) => (
          <div key={item.id} className="group flex flex-col">
            {/* image */}
            <div
              className="relative bg-gray-50 rounded-2xl p-5 h-56 flex items-center justify-center cursor-pointer overflow-hidden hover:shadow-md transition-all"
              onClick={() => navigate(`/products/${item.id}`)}
            >
              <span
                className={`absolute top-2 left-2 px-2 py-0.5 rounded-full text-[9px] font-bold text-white uppercase ${
                  item.stock > 50 ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {item.stock > 50 ? "In Stock" : "Low Stock"}
              </span>
              {item.discountPercentage > 10 && (
                <span className="absolute top-2 right-2 bg-amber-400 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                  -{Math.round(item.discountPercentage)}%
                </span>
              )}
              <img
                src={item.thumbnail}
                alt={item.title}
                className="max-h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* info */}
            <div className="mt-3 flex flex-col gap-1 flex-1">
              <div className="flex justify-between items-start gap-1">
                <h3
                  className="font-semibold text-gray-800 text-xs leading-tight line-clamp-2 cursor-pointer hover:text-red-600 transition-colors"
                  onClick={() => navigate(`/products/${item.id}`)}
                >
                  {item.title}
                </h3>
                <span className="font-black text-gray-900 text-xs whitespace-nowrap">
                  ${item.price}
                </span>
              </div>

              {/* rating stars */}
              <div className="flex items-center gap-1">
                <div className="flex text-amber-400 text-[10px]">
                  {"★".repeat(Math.round(item.rating))}
                  {"☆".repeat(5 - Math.round(item.rating))}
                </div>
                <span className="text-gray-400 text-[10px]">({item.rating})</span>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(addToCart(item));
                }}
                className="mt-auto w-full py-2 bg-slate-900 text-white rounded-full text-[11px] font-bold hover:bg-red-600 transition-all cursor-pointer active:scale-95"
              >
                + Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* pagination */}
      <div className="flex justify-center items-center gap-4 py-8 border-t border-gray-100">
        <button
          onClick={() => setSkip((prev) => Math.max(0, prev - limit))}
          disabled={skip === 0}
          className="px-8 py-2.5 bg-slate-900 text-white rounded-full font-bold text-sm cursor-pointer disabled:bg-gray-200 disabled:text-gray-400 transition-all active:scale-95"
        >
          ← Previous
        </button>
        <span className="text-sm text-gray-400 font-medium">
          Page {Math.floor(skip / limit) + 1}
        </span>
        <button
          onClick={() => setSkip((prev) => prev + limit)}
          disabled={products.length < limit}
          className="px-8 py-2.5 bg-slate-900 text-white rounded-full font-bold text-sm cursor-pointer disabled:bg-gray-200 disabled:text-gray-400 transition-all active:scale-95"
        >
          Next →
        </button>
      </div>
    </div>
  );
}

export default ProductsPage;
