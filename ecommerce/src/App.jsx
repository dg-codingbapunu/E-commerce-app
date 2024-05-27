import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NoPage from "./pages/nopage/NoPage";
import Home from "./pages/home/Home";
import ProductInfo from "./pages/productinfo/ProductInfo";
import ScrollTop from "./components/scrollTop/ScrollTop";
import CartPage from "./pages/cart/CartPage";
import AllProduct from "./pages/allproduct/AllProduct";
import Signup from "./pages/register/Signup";
import Login from "./pages/register/Login";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProductPage from "./pages/admin/AddProductPage";
import UpdateProductPage from "./pages/admin/UpdateProductPage";
import MyState from "./context/myState";
import { Toaster } from "react-hot-toast";
import { ProctedRouteForUser } from "./protectedRoute/ProctedRouteForUser";
import { ProctedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin";
const App = () => {
  return (
    <MyState>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/productinfo" element={<ProductInfo />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/allproduct" element={<AllProduct />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/user-dashboard"
            element={
              <ProctedRouteForUser>
                <UserDashboard />
              </ProctedRouteForUser>
            }
          />
          <Route
            path="/admin-dashboard"
            element={
              <ProctedRouteForAdmin>
                <AdminDashboard />
              </ProctedRouteForAdmin>
            }
          />
          <Route
            path="addproduct"
            element={
              <ProctedRouteForAdmin>
                <AddProductPage />
              </ProctedRouteForAdmin>
            }
          />
          <Route
            path="updateproduct"
            element={
              <ProctedRouteForAdmin>
                <UpdateProductPage />
              </ProctedRouteForAdmin>
            }
          />
        </Routes>
        <Toaster />
      </Router>
    </MyState>
  );
};

export default App;
