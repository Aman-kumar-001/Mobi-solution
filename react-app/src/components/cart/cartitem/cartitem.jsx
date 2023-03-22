import "../cartitem/cartitem.scss";

import { MdClose } from "react-icons/md";

import pod2 from "../../../assests/earbuds-prod-4.webp";

const CartItem = () => {
    return(
        <div className="cart-products">
            <div className="cart-product">
                <div className="img-container">
                     <img src={pod2} alt="" /> 
                </div>
                <div className="prod-details">
                    <span className="name">Product name</span>
                    <MdClose className="close-btn" />
                    <div className="quantity-buttons">
                        <span>-</span>
                        <span>0</span>
                        <span>+</span>
                    </div>
                    <div className="text">
                        <span>3</span>
                        <span>X</span>
                        <span className="highlight">&#8377;4567</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
