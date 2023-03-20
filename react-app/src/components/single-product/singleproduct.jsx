import "./singleproduct.scss";

import RelatedProducts from "./relatedproduct/relatedproduct";

import {
    faFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";

import pod1 from "../../assests/earbuds-prod-2.webp";

const singleproduct = () => {
    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={pod1} alt="" />
                    </div>
                    <div className="right">
                        <span className="name">Product name</span>
                        <span className="price">price</span>
                        <span className="desc">product description</span>
                        
                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span>-</span>
                                <span>0</span>
                                <span>+</span>
                            </div>
                            <button className="add-to-cart-button">
                                <FaCartPlus size={20}/>
                                Add to cart
                            </button>
                        </div>
                         
                         <span className="divider" />
                         <div className="info-item">
                            <span className="text-bold">
                                Category:-
                            <span>Headphones</span>
                            </span>
                            <span className="text-bold">
                                Share:
                            <span className="socail-icons">
                                <FaLinkedinIn size={16}/>
                                <faFacebookF size={16}/>
                                <FaPinterest size={16} />
                               <FaInstagram size={16}/>
                               <FaTwitter size={16}/>
                            </span>
                            </span>
                         </div>

                    </div>
                </div>
                 <RelatedProducts /> 
            </div>
        </div>
    );
};

export default singleproduct;