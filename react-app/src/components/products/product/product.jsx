import pod1 from "../../../assests/earbuds-prod-1.webp"; 

import "./product.scss"

const Product = () => {
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={pod1} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">Product name</span>
                <span className="price">&#8377;499</span>
            </div>
        </div>
    );
};

export default Product;
