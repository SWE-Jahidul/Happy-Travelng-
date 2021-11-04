import React from "react";

import img1 from "../images/couple-family-traveling-together_1150-7772.jpg";

const WhyChoseus = () => {
  return (
    <div className="container py-3">
      <div className="row d-flex align-items-center">
        <div className="col-lg-6">
          <div  className="float-left">
            <h1>WHY CHOOSE US</h1>

            <p>
              Whether you know exactly where you want to go, or you are looking
              for some ideas, TOUR FASTER has over 4,500 tours and activities
              around the world waiting for you to discover.
            </p>

            <p>
              With new destinations continually added, TOUR FASTER will change
              your life one visit at a time, in fact, by simply re-arranging the
              letters, "TOUR FASTER" changes "TRAVEL". I loved it!!! Couldn't
              believe how great it was, for such a good price. I will definitely
              book other experiences with you all. Thank you!
            </p>

            <button
            className="button-read-more text-dark" 
            data-aos="fade-right"
            data-aos-delay="250"
            
          >
            Read More
          </button>
          </div>
        </div>

        <div className="col-lg-6">
          <img className="img-fluid p-3" src={img1} alt="choose us" />
        </div>
      </div>
    </div>
  );
};

export default WhyChoseus;
