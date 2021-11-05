import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Events.css";
const Events = () => {
  const [events, setEvents] = useState([]);
  const [deleteCount, setDeleteCount] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/eventusers")
      .then((res) => res.json())
      .then((result) => setEvents(result));
  }, [deleteCount]);

  const handelDelete = (id) => {
    fetch(`http://localhost:5000/deleteevents/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => setDeleteCount(result));
    //   console.log(id);
  };
  return (
    <div>
      <h1>Upcoming Events</h1>

      <div className="allusers container">
        <div className="row">
          {events?.map((pd) => (
            <div className="col-md-4 col-lg-4 col-12 py-4">
              <div className="user border pb-3 m-2">
                <img className="img-fluid" src={pd.thabnil} />
                <div className="row d-flex justify-content-around align-items-cente pt-3">
                  <div className="col">
                    <p className=" fw-bold fs-3">{pd.title}</p>

                    <p> {pd.discription}</p>
                  </div>

                  <div className="col">
                    <h1>$ {pd.payment}</h1>
                  </div>
                </div>

                <Link to={`/eventdetails/${pd._id}`}>
                  <button type="button" className="bookthisTourbutton">
                    Book This Tour
                  </button>
                </Link>
                {/* <button
                  onClick={() => handelDelete(pd._id)}
                  className="btn btn-danger w-25 p-1 m-2"
                >
                  {" "}
                  Delete
                </button> */}

                {/* <button className="btn btn-sucess w-25 p-1 m-2">
                  {" "}
                  Update{" "}
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
