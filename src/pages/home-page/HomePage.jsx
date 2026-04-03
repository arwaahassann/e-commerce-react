import { useNavigate } from "react-router-dom";
import OurVision from "./components/OurVision";
import Branches from "./components/Branches";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-[88vh] flex items-center">
        {/* background decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-red-600 opacity-10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-600 opacity-10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* text */}
          <div>
            <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
              New Collection 2025
            </span>
            <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6">
              Shop the
              <span className="block text-red-500">Best Products</span>
              Online
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-md">
              Discover our exclusive collection with high quality and best prices.
              Start your shopping journey now!
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/products")}
                className="px-8 py-4 bg-red-600 text-white rounded-full font-bold text-base hover:bg-red-700 transition-all cursor-pointer shadow-lg active:scale-95"
              >
                Explore Products →
              </button>
              <button
                onClick={() => navigate("/register")}
                className="px-8 py-4 border border-white/30 text-white rounded-full font-bold text-base hover:bg-white/10 transition-all cursor-pointer"
              >
                Create Account
              </button>
            </div>

            {/* stats */}
            <div className="flex gap-10 mt-14 pt-10 border-t border-white/10">
              {[
                { num: "100+", label: "Products" },
                { num: "50+", label: "Brands" },
                { num: "24/7", label: "Support" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div className="text-2xl font-black text-white">{num}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* hero image */}
          {/* <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-red-600 opacity-20 blur-3xl rounded-full scale-75" />
              <img
                src="/iti.png"
                alt="Shop"
                className="relative max-h-[420px] w-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div> */}
        </div>
      </section>

      {/* ── FEATURES BAR ───────────────────────────────────── */}
      <section className="bg-white border-y border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🚚", title: "Free Shipping", desc: "On orders over $50" },
              { icon: "🔄", title: "Easy Returns", desc: "30-day return policy" },
              { icon: "🔒", title: "Secure Payment", desc: "100% protected" },
              { icon: "💬", title: "24/7 Support", desc: "Always here for you" },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all">
                <span className="text-3xl">{icon}</span>
                <div>
                  <div className="font-bold text-sm text-gray-900">{title}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ─────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-gray-900">Shop by Category</h2>
          <p className="text-gray-400 mt-2">Find exactly what you're looking for</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Electronics", emoji: "📱", color: "from-blue-50 to-blue-100", border: "border-blue-200" },
            { label: "Fashion", emoji: "👗", color: "from-pink-50 to-pink-100", border: "border-pink-200" },
            { label: "Home & Living", emoji: "🏠", color: "from-amber-50 to-amber-100", border: "border-amber-200" },
            { label: "Beauty", emoji: "💄", color: "from-purple-50 to-purple-100", border: "border-purple-200" },
          ].map(({ label, emoji, color, border }) => (
            <button
              key={label}
              onClick={() => navigate("/products")}
              className={`bg-gradient-to-br ${color} border ${border} rounded-2xl p-8 flex flex-col items-center gap-3 hover:scale-[1.02] transition-all cursor-pointer shadow-sm hover:shadow-md`}
            >
              <span className="text-4xl">{emoji}</span>
              <span className="font-bold text-gray-800 text-sm">{label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* ── OUR VISION ─────────────────────────────────────── */}
      <OurVision />

      {/* ── BRANCHES ───────────────────────────────────────── */}
      <Branches />

      {/* ── CTA BANNER ─────────────────────────────────────── */}
      <section className="bg-slate-900 text-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-black mb-4">Ready to Start Shopping?</h2>
          <p className="text-gray-400 mb-8">Join thousands of happy customers today.</p>
          <button
            onClick={() => navigate("/products")}
            className="px-10 py-4 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition-all cursor-pointer active:scale-95"
          >
            Browse All Products
          </button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
