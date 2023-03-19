import "../category/category.scss";

import cat1 from "../../../assests/cat-1.jpg";
import cat2 from "../../../assests/cat-2.jpg";
import cat3 from "../../../assests/cat-3.jpg";
import cat4 from "../../../assests/cat-4.jpg";

const Category = () => {
  return (
  <div className="shop-by-category">
    <div className="categories">
      <div className="category">
        <img src={cat1} alt=""  />
       </div>
       <div className="category">
        <img src={cat2} alt=""  />
       </div>
       <div className="category">
        <img src={cat3} alt=""  />
       </div>
       <div className="category">
        <img src={cat4} alt=""  />
       </div>
    </div>
  </div>
  );
};

export default Category;
