import "./banner.scss";

import bannerImg from "../../../assests/perfect.png";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>Sales</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            consequuntur cum placeat debitis hic vel saepe voluptate odit.
            Reprehenderit sunt quisquam ad ullam corporis molestias officia
            cumque deserunt numquam dolorum.
          </p>
       
        <div className="ctas">
            <div className="banner-cta">read more</div>
            <div className="banner-cta v2">shop more</div>
        </div>
        </div>
        <img className="banner-img" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
