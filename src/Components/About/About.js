import React from "react";

import img1 from "../images/young-tourist-couple-take-rest-near-waterfall-while-hiking-forest-looking-away-search-attractions-travel-concept_1150-1939.jpg";

const About = () => {
  return (
    <div className="container my-3">

        <h3 className="my-5">  About Us</h3>
      <div className="row d-flex align-items-center">

        <div className="col-lg-6">
          <img
            src={img1}
            className="d-block w-100"
            style={{
              minHeight: "10%",
              maxHeight: 400,
            }}
            alt="..."
          />
        </div>
        <div className="col-lg-6">
          <h1>Get ready for real time adventure</h1>

          <p>
            Let’s start your journey with us, your dream will come true. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam quis nostrud exercitation.
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


    </div>
  );
};

export default About;
