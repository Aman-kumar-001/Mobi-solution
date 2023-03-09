import { useEffect, useState , useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import {CgShoppingCart } from "react-icons/cg";
import {AiOutlineHeart} from "react-icons/ai";

import Serach  from "./search/search";
import cart from "../cart/cart";
import { Context } from "../../utils/context";

import "./header.scss"
const Header = () => {
       const [scrolled, setscrolled] = useState(false);
       const handleScroll = () => {
         const offset = window.scrollY;
         if(offset>200){
         setscrolled(true);
       } else{
        setscrolled(false);
       }
       };

        useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`main-header ${scrolled ? 'sticky-header' : ""}`}>
            <div className="header-content">
                <ul className="left">
                    <li>Home</li>
                    <li>About</li>
                    <li>Categories</li>
                </ul>
                <div className="center">Mobi-solution</div>
                <div className="right">
                    <TbSearch />
                     <AiOutlineHeart /> 
                    <span className="cart-icon">
                       <CgShoppingCart />
                       <span>5</span>
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;
