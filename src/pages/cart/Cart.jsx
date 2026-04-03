import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../reducers/counterSlice";

function Cart() {
  const cartItems = useSelector((state) => state.counter.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[65vh] gap-6 px-4">
        <div className="text-7xl">🛒</div>
        <div className="text-center">
          <h2 className="text-2xl font-black text-gray-900">Your cart is empty</h2>
          <p className="text-gray-400 mt-2 text-sm">Looks like you haven't added anything yet.</p>
        </div>
        <button
          onClick={() => navigate("/products")}
          className="px-8 py-3 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition-all cursor-pointer active:scale-95"
        >
          Start Shopping →
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-black text-gray-900 mb-2">Shopping Cart</h1>
      <p className="text-gray-400 text-sm mb-10">{totalItems} item{totalItems !== 1 ? "s" : ""}</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* items list */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-5 bg-gray-50 rounded-2xl p-5 hover:shadow-sm transition-all"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-20 h-20 object-contain bg-white rounded-xl p-1 cursor-pointer flex-shrink-0"
                onClick={() => navigate(`/products/${item.id}`)}
              />
              <div className="flex-1 min-w-0">
                <h3
                  className="font-bold text-gray-900 text-sm truncate cursor-pointer hover:text-red-600 transition-colors"
                  onClick={() => navigate(`/products/${item.id}`)}
                >
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mt-0.5">${item.price} each</p>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0">
                {/* quantity controls */}
                <div className="flex items-center bg-white border border-gray-200 rounded-full px-3 py-1 gap-3">
                  <button
                    onClick={() => dispatch(decrementQuantity(item.id))}
                    className="font-bold text-gray-600 hover:text-red-500 cursor-pointer w-4 text-center"
                  >
                    −
                  </button>
                  <span className="font-bold text-sm w-4 text-center">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(incrementQuantity(item.id))}
                    className="font-bold text-gray-600 hover:text-green-600 cursor-pointer w-4 text-center"
                  >
                    +
                  </button>
                </div>

                <span className="font-black text-gray-900 text-sm w-16 text-right">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>

                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-gray-300 hover:text-red-500 cursor-pointer transition-colors text-lg"
                  title="Remove"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* order summary */}
        <div className="bg-slate-900 text-white p-8 rounded-2xl h-fit sticky top-24">
          <h2 className="text-lg font-black mb-6">Order Summary</h2>

          <div className="flex flex-col gap-3 text-sm mb-6">
            <div className="flex justify-between text-gray-300">
              <span>Subtotal ({totalItems} items)</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Shipping</span>
              <span className="text-green-400">Free</span>
            </div>
            <hr className="border-white/10 my-1" />
            <div className="flex justify-between font-black text-lg">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          <button className="w-full bg-red-600 text-white py-4 rounded-full font-bold hover:bg-red-700 transition-all cursor-pointer active:scale-95">
            Checkout →
          </button>
          <button
            onClick={() => navigate("/products")}
            className="w-full mt-3 border border-white/20 text-white py-3 rounded-full font-bold hover:bg-white/10 transition-all cursor-pointer text-sm"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
