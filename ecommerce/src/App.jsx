import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NoPage from "./pages/nopage/NoPage";
import Home from "./pages/home/Home";
import ProductInfo from "./pages/productinfo/ProductInfo";
import ScrollTop from "./components/scrollTop/ScrollTop";
const App = () => {
  return (
    <div>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/productinfo" element={<ProductInfo />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
