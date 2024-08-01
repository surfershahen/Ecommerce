import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import LoginSignup from "./pages/LoginSignup";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

import banner_kid from "./Assets/banner_kids.png";
import banner_men from "./Assets/banner_mens.png";
import banner_women from "./Assets/banner_women.png";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={<ShopCategory banner={banner_men} category="men" />}
          />
          <Route
            path="/women"
            element={<ShopCategory banner={banner_women} category="women" />}
          />
          <Route
            path="/kid"
            element={<ShopCategory banner={banner_kid} category="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
