import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";
const EventsDetails = () => {
  const { register, handleSubmit, reset } = useForm();
  const { eventId } = useParams();

  const [eventsdetails, setEventsDetails] = useState([]);
  const [currentEventsDetails, setcurrentEventsDetails] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/eventusers")
      .then((res) => res.json())
      .then((data) => {
        // console.log("load data ", data);
        setEventsDetails(data);
      });
  }, []);

  useEffect(() => {
    if (eventsdetails.length > 0) {
      const myevnt = eventsdetails.find(
        (eventsdel) => eventsdel._id == eventId
      );

      setcurrentEventsDetails(myevnt);
      console.log("my event ", myevnt);
    }
  }, [eventsdetails]);

  const { title } = currentEventsDetails;

  const onSubmit = (data) => {
    // console.log('paice');
    axios
      .post("http://localhost:5000/order", {
        ...{ title },
        ...data,
        status: 1,
      })

      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
      });
  };

  return (
    <div>
      <div>
        <h1> Events </h1>
        <div className="headerdiv my-5">
          {currentEventsDetails && (
            <div className="container mt-3">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <img
                    className="card-img-top"
                    src={currentEventsDetails?.thabnil}
                    style={{}}
                    alt="Card image cap"
                  />
                  <h5 className="text-dark pt-2">
                    {currentEventsDetails?.discription}{" "}
                    <span style={{ color: "#FF4A52" }}>
                      {" "}
                      ($ {currentEventsDetails?.payment})
                    </span>
                  </h5>

                  <div>
                    <h3 className="margin-left">
                      {" "}
                      Details of{" "}
                      <span style={{ color: "#FF4A52" }}>
                        {" "}
                        {currentEventsDetails?.title}
                      </span>
                    </h3>
                    <p>{currentEventsDetails?.aboutplace}</p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-12">
                  <div className="my-3 card py-5 border-0 ">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-group my-4">
                        <input
                          {...register("name", {
                            required: true,
                            maxLength: 20,
                          })}
                          placeholder="Name"
                        />
                      </div>

                      <div className="form-group my-4">
                        <input
                          type="email"
                          {...register("email")}
                          placeholder="Email"
                        />
                      </div>
                      <div className="form-group my-4">
                        <input
                          type="text"
                          {...register("address")}
                          placeholder="Address"
                        />
                      </div>
                      <div className="form-group my-4">
                        <input
                          type="number"
                          {...register("phone")}
                          placeholder="Phone"
                        />
                      </div>
                      <input type="submit" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsDetails;
