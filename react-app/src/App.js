import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./components/home/Home";
import Product from "./components/products/product";
import Singleproduct from "./components/single-product/singleproduct";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Product />} />
          <Route path="/product/:id" element={<Singleproduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
