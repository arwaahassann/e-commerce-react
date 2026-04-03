import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../reducers/counterSlice";

function ProductsDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
        setSelectedImg(response.data.thumbnail);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    getProduct();
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (!product)
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="w-10 h-10 border-4 border-gray-200 border-t-red-500 rounded-full animate-spin" />
      </div>
    );

  const inStock = product.stock > 0;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* breadcrumb */}
      <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
        <button onClick={() => navigate("/")} className="hover:text-gray-700 cursor-pointer">Home</button>
        <span>/</span>
        <button onClick={() => navigate("/products")} className="hover:text-gray-700 cursor-pointer">Products</button>
        <span>/</span>
        <span className="text-gray-700 truncate max-w-[200px]">{product.title}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        {/* images */}
        <div>
          <div className="bg-gray-50 rounded-2xl p-10 mb-4 h-[420px] flex items-center justify-center overflow-hidden">
            <img
              src={selectedImg}
              alt={product.title}
              className="max-h-full object-contain transition-all duration-300"
            />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {product.images?.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImg(img)}
                className={`bg-gray-50 rounded-xl p-2 h-20 flex items-center justify-center cursor-pointer border-2 transition-all ${
                  selectedImg === img ? "border-slate-900" : "border-transparent hover:border-gray-300"
                }`}
              >
                <img src={img} alt="preview" className="max-h-full object-contain" />
              </button>
            ))}
          </div>
        </div>

        {/* details */}
        <div className="flex flex-col gap-5">
          <div>
            <span className="text-xs font-bold text-red-500 uppercase tracking-widest">
              {product.category}
            </span>
            <h1 className="text-3xl font-black text-gray-900 mt-2">{product.title}</h1>
            <p className="text-gray-500 text-sm leading-relaxed mt-3">{product.description}</p>
          </div>

          {/* rating */}
          <div className="flex items-center gap-2">
            <div className="flex text-amber-400">
              {"★".repeat(Math.round(product.rating))}
              {"☆".repeat(5 - Math.round(product.rating))}
            </div>
            <span className="text-sm text-gray-400">
              {product.rating} · {product.stock} in stock
            </span>
          </div>

          <hr className="border-gray-100" />

          {/* price */}
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-black text-gray-900">${product.price}</h2>
              {product.discountPercentage > 0 && (
                <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded-full">
                  {Math.round(product.discountPercentage)}% OFF
                </span>
              )}
            </div>
            <p className="text-xs text-gray-400 mt-1">Free shipping on orders over $50</p>
          </div>

          <hr className="border-gray-100" />

          {/* stock badge — now dynamic! */}
          <span
            className={`text-xs font-bold px-4 py-1.5 rounded-full w-fit ${
              inStock
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-600"
            }`}
          >
            {inStock ? `✓ In Stock (${product.stock} left)` : "✗ Out of Stock"}
          </span>

          {/* actions */}
          <div className="flex gap-3 mt-2">
            <button
              onClick={handleAddToCart}
              disabled={!inStock}
              className={`flex-1 py-4 rounded-full font-bold text-sm transition-all cursor-pointer active:scale-95 border-2 ${
                added
                  ? "bg-green-600 text-white border-green-600"
                  : "border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
              } disabled:opacity-40 disabled:cursor-not-allowed`}
            >
              {added ? "✓ Added to Cart!" : "Add to Cart"}
            </button>
            <button
              disabled={!inStock}
              className="flex-1 py-4 bg-red-600 text-white rounded-full font-bold text-sm hover:bg-red-700 transition-all cursor-pointer active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Buy Now
            </button>
          </div>

          {/* brand */}
          {product.brand && (
            <p className="text-xs text-gray-400">
              Brand: <span className="font-semibold text-gray-600">{product.brand}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductsDetails;
