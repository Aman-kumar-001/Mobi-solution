import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/header";
import footer from "../components/footer";
import home from "../components/home";
import product from "../components/products";
import cart from "../components/cart";
import singleproduct from "../components/single-product";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<home />} />
          <Route path="/category/:id" element={<product />} />
          <Route path="/product/:id" element={<singleproduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
