import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Cart from "./components/cart/cart";
import Category from "./components/category/category";
import Home from "./components/home/Home";
// import Product from "./components/products/product";
import Singleproduct from "./components/single-product/singleproduct";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Newsletter from "./components/footer/newsletter/newsletter";
import Appcontext from "./utils/context";
import Banner from "./components/home/banner/banner";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Appcontext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/singleproduct/:id" element={<Singleproduct />} />
        </Routes>
        <Banner/>
        {/* <Newsletter /> */}
        {/* <Footer /> */}
        </Appcontext>
      </BrowserRouter>
    </div>
  );
}

export default App;
