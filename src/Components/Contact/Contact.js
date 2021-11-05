import React from "react";

import "./Contact.css";

const Contact = () => {
  return (
    <div className="row p-5 d-flex align-items-center">
      <h1 className="p-3"> Contact Us </h1>
      <div className="col-lg-9 col-md-9 col-12 p-5">
        <h3 className="getintouchtitle my-3">Get In Touch</h3>

        <div class="form-group">
          <textarea
            class="form-control"
            placeholder="Enter Messages"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>

          <div class="row my-3">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Name "
              />
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Enter Email" />
            </div>
          </div>

          <input
            type="text"
            className="my-3 form-control"
            placeholder="Enter Subject"
          />
          <div className="getintouchtitle py-2">
            <button type="button" class="btn btn-primary btn-lg w-25">
              SEND
            </button>
          </div>
        </div>
      </div>

      <div className="col-lg-3  col-md-9 col-12 contact_details">
        <div className="card p-3 border-1">
          <div className="d-flex justify-content-around align-items-center">
            <div>
              <i class="fas fa-home fa-2x"></i>{" "}
            </div>
            <div>
              <p className="fw-bold">Buttonwood, California.</p>
              <p>Rosemead, CA 91770</p>
            </div>
          </div>
        </div>

        <div className="card p-3 border-1 my-2">
          <div className="d-flex justify-content-around align-items-center">
            <div>
              <i class="fas fa-phone fa-2x"></i>
            </div>
            <div>
              <p className="fw-bold">+1 253 565 2365</p>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
        </div>

        <div className="card p-3 border-1">
          <div className="d-flex justify-content-around align-items-center ">
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
    </div>
  );
};

export default Contact;
