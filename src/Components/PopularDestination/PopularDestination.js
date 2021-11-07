import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./PopularDestination.css";

const PopularDestination = () => {
  const [populardestination, setPopularDestination] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/popularDestinationusers")
      .then((res) => res.json())
      .then((result) => {
        console.log("test data", result);
        setPopularDestination(result);
      });
  }, []);

  return (
    <div className="row container">
      {populardestination?.map((pds) => (
        <div className="col-md-4 py-4">
          <div className="card rounded-3">
            <img className="card-img-top" src={pds.thabnil} alt="Card image" />
            <div className="card-img-overlay">
              <Link to={`/populardestinationdetails/${pds._id}`}>
                <h4
                  className="float-left text-white"
                  style={{
                    position: "absolute",
                    bottom: "8px",
                    left: "16px",
                    fontSize: "18px",
                  }}
                >
                  {pds.title}
                </h4>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularDestination;
