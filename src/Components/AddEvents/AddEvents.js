import React, { useState } from "react";

import "./addEvents.css";
const AddEvents = () => {
  const [title, setTitle] = useState("");
  const [thabnil, setThambnil] = useState("");
  const [discription, setDiscription] = useState("");
  const [payment, setPayment] = useState("");
  const [aboutplace, setAboutPlace] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDiscription = (e) => {
    setDiscription(e.target.value);
  };

  const handlepayment = (e) => {
    setPayment(e.target.value);
  };

  const handleThumbnil = (e) => {
    setThambnil(e.target.value);
  };

  const handleDetailsOfPlace = (e) => {
    setAboutPlace(e.target.value);
  };
  const handelevent = () => {
    const data = { title, discription, payment, thabnil, aboutplace };

    fetch("http://localhost:5000/addevents", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  console.log(title);  
  return (
    <div>
      <div>
        <div className="d-flex justify-content-center ">
          <div className="events-card shadow-lg my-5 px-5" style={{ height:600}}>
            <h3 className="py-3"> Add New Events </h3>

            <div className="form-group my-4">
              <input
                type="text"
                onChange={handleThumbnil}
                required
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Thambnil"
              />
            </div>

            <div className="form-group my-4">
              <input
                type="text"
                onChange={handleTitle}
                required
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Title"
              />
            </div>

            <div className="form-group my-4">
              <input
                type="text"
                onChange={handleDiscription}
                required
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Discription"
              />
            </div>

            <div className="form-group my-4">
              <input
                type="number"
                required
                onChange={handlepayment}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Total Cost "
              />
            </div>

            <div className="form-group my-4">
              <textarea
                type="text"
                required
                onChange={handleDetailsOfPlace}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Place Details"
              />
            </div>

            <button onClick={handelevent} className="btn btn-sucess">
              {" "}
              AddEvents{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEvents;
