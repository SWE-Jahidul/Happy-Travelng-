import React, { useState } from "react";
import { useEffect } from "react";

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

      <div className="allusers">
        <div className="row">
          {events?.map((pd) => (
            <div className="user border p-2 m-2">
              <h1>{pd.title}</h1>
              <p> {pd.discription}</p>
              <p> {pd.payment}</p>

              <button
                onClick={() => handelDelete(pd._id)}
                className="btn btn-danger w-25 p-1 m-2"
              >
                {" "}
                Delete
              </button>

              <button className="btn btn-sucess w-25 p-1 m-2"> Update </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
