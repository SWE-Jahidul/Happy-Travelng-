import React, { useState } from "react";

import "./Contact.css";

const Contact = () => {
  const [messages, setMessages] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const handelMessages = (e) => {
    setMessages(e.target.value);
  };

  const hadelname = (e) => {
    setName(e.target.value);
  };

  const handelemail = (e) => {
    setEmail(e.target.email);
  };

  const handelSubject = (e) => {
    setSubject(e.target.subject);
  };


  const handelsentdata = () =>{
    const data = { messages, name, email, subject };


    fetch("http://localhost:5000/usergetintouch", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  
  return (
    <div className="row p-5 d-flex align-items-center">
      <h1 className="p-3"> Contact Us </h1>
      <div className="col-lg-9 col-md-9 col-12 p-5">
        <h3 className="getintouchtitle my-3">Get In Touch</h3>

        <div class="form-group">
          <textarea
            class="form-control"
            placeholder="Enter Messages"
            onChange={handelMessages}
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>

          <div class="row my-3">
            <div class="col">
              <input
                type="text"
                class="form-control"
                onChange={hadelname}
                placeholder="Enter Name "
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                onChange={handelemail}
                placeholder="Enter Email"
              />
            </div>
          </div>

          <input
            type="text"
            className="my-3 form-control"
            onChange={handelSubject}
            placeholder="Enter Subject"
          />
          <div className="getintouchtitle py-2">
            <button type="button" onChange={handelsentdata} class="btn btn-primary btn-lg w-25">
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
