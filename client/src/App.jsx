import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

import Home from "./home";
import Product from "./Product";
import Cart from "./Cart";
import Whislist from "./whislist";
import "./style/variable.css";
import "./style/global.css";
import "./App.css";
import "./home.css";
import "./product.css";
import "./Cart.css";
import Payment from "./Payment";
import Dashboard from "./pages/admin/Dashboard";
import AdminProducts from "./pages/admin/AdminProducts";
import ProductsDetails from "./pages/admin/ProductsDetails";
import Catergory from "./pages/admin/Catergory";
import Coustmers from "./pages/admin/Coustmers";
import Profile from "./pages/profile/Profile";
import Address from "./pages/profile/Address";
import Order from "./pages/profile/Order";

import UserPRotectedRouter from "./components/protoctRouter/UserPRotectedRouter";
import AdminProtectedRouter from "./components/protoctRouter/AdminProtectedRouter";
import ProfileProtectRouter from "./components/protoctRouter/ProfileProtectRouter";

function App() {
  return (
    <BrowserRouter>


      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<UserPRotectedRouter />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/whislist" element={<Whislist />} />
          <Route path="/payment" element={<Payment />} />
        </Route>

        <Route element={<AdminProtectedRouter />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/adminproducts" element={< AdminProducts />} />
          <Route path="/productsdetails" element={<ProductsDetails />} />
          <Route path="/categories" element={<Catergory />} />
          <Route path="/coustmers" element={<Coustmers />} />
        </Route>

        <Route element={<ProfileProtectRouter />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/address" element={<Address />} />
          <Route path="/order" element={<Order />} />
        </Route>

      </Routes>




    </BrowserRouter>


  );
}

export default App;


