import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Signup from "./singnup";
import Navbar from "./navbar";
import Home from "./home";
import Product from "./Product";
import Cart from "./Cart";
import Footer from "./Footer";

import "./App.css";
import "./home.css";
import "./product.css";
import "./Cart.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

