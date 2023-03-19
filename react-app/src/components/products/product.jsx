import "./product.scss";
import Product from "./product/product";

const Products = () => {
  return (
    <div className="products-container">
      <div className="sec-heading">section handling </div>
      <div className="products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Products;
