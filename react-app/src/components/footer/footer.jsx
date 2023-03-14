import react from "react";
import { FalocationArrow, FaMobileAlt, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import payment from "../../assests/payments.png";

import "../footer/footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quas
            at repudiandae maxime id provide
          </div>
        </div>
        <div className="col">
        <div className="title">contact</div>
        <div className="c-item">
        <FaLocationArrow />
        <div className="text">c.t marg gannipur muzaffurpur</div>
        </div>
        <div className="c-item">
        <FaMobileAlt />
        <div className="text">7903814815</div>
        </div>
        <div className="c-item">
        <FaEnvelope />
        <div className="text">aman790381@gamil.com</div>
        </div>
        </div>
        <div className="col"> 
        <div className="title">categories</div>
        <span className="text">Headphones</span>
        <span className="text">smart watches</span>
        <span className="text">bluetooth speakers</span>
        <span className="text">wireless earbuds</span>
        <span className="text">home theater</span>
        <span className="text">projectors</span>
        </div>
        <div className="col"> <div className="title">Pages</div>
        <span className="text">home</span>
        <span className="text">about</span>
        <span className="text">privacy policy</span>
        <span className="text">return</span>
        <span className="text">term & condition</span>
        <span className="text">contact us</span>
        </div>
      </div>
      <div className="bottam-bar">
        <div className="bottam-bar-content">
            <div className="text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, officia?
            </div>
            <img src={payment} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
