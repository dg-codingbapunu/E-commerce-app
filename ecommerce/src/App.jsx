import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NoPage from "./pages/nopage/NoPage";
import Home from "./pages/home/Home";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
