import "./Home.scss";


import Category from "./category/category";
import Banner from "../../components/home/banner/banner";
// import Banner from "../../components/home/banner/banner";
import Products from "../products/product";

const Home = () => {
  return (
    <div >
        <Banner/>
      <div className="main-content">
        <div className="layout">
           <Category /> 
           <Products />
        </div>
      </div>
    </div>
  );
};

export default Home;
