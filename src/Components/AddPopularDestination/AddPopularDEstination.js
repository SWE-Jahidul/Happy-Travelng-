import React, { useState } from "react";

const AddPopularDEstination = () => {
  const [title, setTitle] = useState("");
  const [thabnil, setThambnil] = useState("");
  const [discription , setDiscription ] = useState("");

  const handleThumbnil = (e) => {
    setThambnil(e.target.value);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };


  const handleDiscription = (e) => {
    setDiscription(e.target.value);
  }

  const handdestinationt = () => {
    const data = { title,  thabnil ,discription };

    fetch("http://localhost:5000/adddestination", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));

  }

  return (
    <div>
      <div className="d-flex justify-content-center ">
        <div
          className="events-card shadow-lg my-5 px-5"
          style={{ height: 600 }}
        >
          <h3 className="py-3"> Add New Popular Destination </h3>

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
            <textarea
              type="text"
              onChange={handleDiscription}
              required
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Disciption"
            />
          </div>


          <button onClick={handdestinationt} className="btn btn-sucess">
            {" "}
            Add Destination{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPopularDEstination;
