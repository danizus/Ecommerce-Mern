import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthLayout from "./components/auth/layout";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import AdminLayout from "./components/admin-view/layout";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminProducts from "./pages/admin-view/products";
import ShoppingLayout from "./components/shopping-view/layout";
import ShoppingCheckout from "./pages/shopping-view/checkout";
import ShoppingList from "./pages/shopping-view/listing";
import NotFound from "./pages/shopping-view/not-found";
import ShoppingAccount from "./pages/shopping-view/account";
import ShoppingHome from "./pages/shopping-view/home";

function App() {
  return (
   <>
    <Routes>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="products" element={<AdminProducts />} />
      </Route>

      <Route path="/shop" element={<ShoppingLayout />}>
        <Route path="checkout" element={<ShoppingCheckout />} />
        <Route path="home" element={<ShoppingHome />} />
        <Route path="listing" element={<ShoppingList />} />
        <Route path="*" element={<NotFound />} />
        <Route path="account" element={<ShoppingAccount />} />
      </Route>
    </Routes>
   </>
  );
}

export default App;
