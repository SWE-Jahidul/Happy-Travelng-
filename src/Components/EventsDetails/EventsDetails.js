import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const EventsDetails = () => {
  const { eventId } = useParams();

  const [eventsdetails, setEventsDetails] = useState([]);
  const [currentEventsDetails, setcurrentEventsDetails] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/eventusers")
      .then((res) => res.json())
      .then((data) => {
        console.log("load data ", data);
        setEventsDetails(data);
      });
  }, []);

  useEffect(() => {
    let myevnt = eventsdetails.filter((eventsdel) => eventsdel._id == eventId);

    setcurrentEventsDetails(myevnt[0]);
    console.log(myevnt);
  }, [eventsdetails]);

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
                    src={currentEventsDetails.thabnil}
                    style={{}}
                    alt="Card image cap"
                  />
                  <h5 className="text-dark pt-2">
                    {currentEventsDetails.discription}{" "}
                    <span style={{ color:'#FF4A52'}}> ($ {currentEventsDetails.payment})</span>
                  </h5>
                </div>

                <div className="col-lg-6 col-md-6 col-12">
                  <h3 className="margin-left">
                    {" "}
                    Details of <span  style={{ color:'#FF4A52'}}> {currentEventsDetails.title}</span>
                  </h3>
                  <p>{currentEventsDetails.aboutplace}</p>
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
