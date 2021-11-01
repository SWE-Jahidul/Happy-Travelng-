import React, { useEffect } from "react";

import img1 from "../images/female-tourists-are-happy-refreshed-waterfall_1150-5657 (1).jpg";

import img2 from "../images/young-tourist-couple-take-rest-near-waterfall-while-hiking-forest-looking-away-search-attractions-travel-concept_1150-1939.jpg";

import img3 from "../images/young-tourist-couple-take-rest-near-waterfall-while-hiking-forest-looking-away-search-attractions-travel-concept_1150-1939.jpg";

import "./Header.css";

// Aso for Animation
import AOS from "aos";
import "aos/dist/aos.css";

  
const HeaderBanner = () => {


    useEffect(() => {
        AOS.init();
      }, []);


  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={img1}
              className="d-block w-100"
              style={{
                minHeight: "10%",
                maxHeight: 400,
              }}
              alt="..."
            />
            <div className="carousel-caption d-flex align-items-center">
              <div>
                <h1 data-aos="fade-down" data-aos-delay="200">
                  {" "}
                  ENJOY&IMPROVE YOUR SKILLS{" "}
                </h1>

                <p
                  className="text-white fs-5"
                  data-aos="fade-up"
                  data-aos-delay="220"
                >
                  Slider Revolution is the highly acclaimed slide-based
                  displaying solution, thousands of businesses, theme developers
                  and everyday people use and love!
                </p>

                <div>
                  <button
                    className="button-read-more"
                    data-aos="fade-right"
                    data-aos-delay="250"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={img2}
              style={{
                minHeight: "10%",
                maxHeight: 400,
              }}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-flex align-items-center">
              <div>
                <h1 data-aos="fade-down" data-aos-delay="200">
                  ENJOY&SHARE YOUR SKILLS
                </h1>
                <p
                  className="text-white fs-5"
                  data-aos="fade-up"
                  data-aos-delay="220"
                >
                  Slider Revolution is the highly acclaimed slide-based
                  displaying solution, thousands of businesses, theme developers
                  and everyday people use and love!
                </p>

                <div>
                  <button
                    className="button-read-more"
                    data-aos="fade-right"
                    data-aos-delay="250"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={img3}
              style={{
                minHeight: "10%",
                maxHeight: 400,
              }}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-flex align-items-center">
              <div>
                <h1>Are You Ready For Study ?</h1>
                <p className="text-white fs-5">
                  Amar School is well Certify by any kiind of programming
                  language and also any algorithms and Data Stracture .
                </p>

                <div>
                  <button
                    className="button-read-more"
                    data-aos="fade-right"
                    data-aos-delay="250"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HeaderBanner;
