import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext";
import Logo from "./logo";
import NavLinks from "./NavLinks";

function HeaderContainer() {
  const cartItems = useSelector((state) => state.counter.items);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const { lang, setLang } = useContext(LanguageContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Left: Logo */}
        <Logo />

        {/* Center: Nav (hidden on mobile) */}
        <div className="hidden md:flex">
          <NavLinks />
        </div>

        {/* Right: lang switcher + cart */}
        <div className="flex items-center gap-4">
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="text-sm border border-gray-200 rounded-lg px-2 py-1.5 outline-none cursor-pointer bg-white hover:border-gray-400 transition-all"
          >
            <option value="en">EN 🇬🇧</option>
            <option value="ar">AR 🇪🇬</option>
          </select>

          <Link to="/cart" className="relative cursor-pointer flex items-center">
            <span className="text-2xl">🛒</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-700 text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 px-6 py-4 bg-white">
          <NavLinks onClose={() => setMenuOpen(false)} />
        </div>
      )}
    </header>
  );
}

export default HeaderContainer;
