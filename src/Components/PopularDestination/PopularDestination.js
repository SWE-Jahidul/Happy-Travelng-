import React from "react";
import { Link } from "react-router-dom";

import './PopularDestination.css';

const PopularDestination = (props) => {
 
  const { id,countryName, image } = props.populardestination;

  return (
    <div className="col-md-4 py-4">
      <div className="card rounded-3">
        <img className="card-img-top" src={image} alt="Card image" />
        <div className="card-img-overlay">
         
         <Link to={`/populardestinationdetails/${id}`}>

          <h4
            className="float-left text-white"
            style={{
              position: "absolute",
              bottom: "8px",
              left: "16px",
              fontSize: "18px",
            }}
          >
            {countryName}
          </h4>

          </Link>
        </div>
      </div>
    </div>
  )
};

export default PopularDestination;
