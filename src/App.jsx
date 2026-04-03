import { Routes, Route } from "react-router-dom";
import HeaderContainer from "./components/header/HeaderContainer";
import HomePage from "./pages/home-page/HomePage";
import ProductsPage from "./pages/products-page/ProductsPage";
import ProductsDetails from "./pages/products-details/ProductsDetails";
import NotFound from "./pages/not-found/NotFound";
import Register from "./pages/register/Register";
import ContactUs from "./pages/contact us/ContactUs";
import Cart from "./pages/cart/Cart";

function App() {

  return (
    <div>
      <HeaderContainer />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
