import React from "react";

import "./Contact.css";

const Contact = () => {
  return (
    <div className="row p-5">
      <h1 className="p-3"> Contact Us </h1>
      <div className="col-lg-9 col-md-9 col-12">
        <h3 className="" style={{alignItems:'left'}}>Get In Touch</h3>
      </div>

      <div className="col-lg-3  col-md-9 col-12 contact_details">
        <div className="d-flex justify-content-around align-items-center">
          <div>
            <i class="fas fa-home fa-2x"></i>{" "}
          </div>
          <div>
            <p className="fw-bold">Buttonwood, California.</p>
            <p>Rosemead, CA 91770</p>
          </div>
        </div>
        <br />

        <div className="d-flex justify-content-around align-items-center">
          <div>
            <i class="fas fa-phone fa-2x"></i>
          </div>
          <div>
            <p className="fw-bold">+1 253 565 2365</p>
            <p>Mon to Fri 9am to 6pm</p>
          </div>
        </div>
        <br />

        <div className="d-flex justify-content-around align-items-center">
          <div>
            <i class="fas fa-envelope-open-text fa-2x"></i>
          </div>
          <div>
            <p className="fw-bold">support@colorlib.com</p>
            <p>Send us your query anytime!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
