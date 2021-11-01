import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer ">
      <section className="container ">
        <div className="row pt-5">
          <div className="col-lg-3">
            <h5> Happy Travling </h5>
            <hr
              className="w-25 mx-auto"
              style={{
                height: 4,
                color: "white",
              }}
            />

            <p>
              Land behold it created good saw after she'd Our set living. Signs
              midst dominion creepeth morning laboris nisi ufsit aliquip.
            </p>
          </div>
          <div className="col-lg-3 ">
            <h5> NEXT COURSES </h5>
            <hr
              className="w-25 mx-auto"
              style={{
                height: 4,
                color: "white",
              }}
            />

            <p> Flutter </p>
            <p> Dart </p>
            <p> SQL </p>
            <p> Oracle </p>
          </div>
          <div className="col-lg-3 ">
            <h5> ABPUT LEARN </h5>
            <hr
              className="w-25 mx-auto"
              style={{
                height: 4,
                color: "white",
              }}
            />

            <p> Prices </p>
            <p> Apply </p>
            <p> Tearms & Condition </p>
            <p> Register</p>
          </div>
          <div className="col-lg-3 ">
            <h5> Contact Us</h5>
            <hr
              className="w-25 mx-auto"
              style={{
                height: 4,
                color: "white",
              }}
            />

            <p> 76/A, Green Lane, Dhanmondi, NYC demomail89@gmail.com </p>
            <p> 01798561626 </p>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="pt-3 pb-0">
            <div className="d-flex justify-content-center">
              <div>
                <span className="d-flex text-dark py-3 ms-auto ">
                  <div className="social-icons-f">
                    <a href="" target="_blank">
                      <span className="icon-users rounded-circle  p-3">
                        <i className="fab fa-facebook-f"></i>
                      </span>
                    </a>
                  </div>
                  <div className="social-icons-f ms-3 ">
                    <a href="" target="_blank">
                      <span className="icon-users rounded-circle  p-3">
                        <i className="fab fa-twitter"></i>
                      </span>
                    </a>
                  </div>
                  <div className="social-icons-f ms-3 ">
                    <a href="" target="_blank">
                      <span className="icon-users rounded-circle  p-3">
                        <i className="fab fa-linkedin-in"></i>
                      </span>
                    </a>
                  </div>
                  <div className="social-icons-f ms-3 ">
                    <a href="" target="_blank">
                      <span className="icon-users rounded-circle  p-3">
                        <i className="fab fa-instagram"></i>
                      </span>
                    </a>
                  </div>
                </span>
              </div>
            </div>
            <p className="text-center text-white ">
              Copyright © 2020 AmarSoft All Rights Reserved by j Islam .
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
