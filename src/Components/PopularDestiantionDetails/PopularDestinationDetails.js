import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";

const PopularDestinationDetails = () => {
  const { destinationId } = useParams();

  const [populardestinationdetails, setPopularDestinationDetails] = useState(
    []
  );

  const [
    currentpopulardestinationdetails,
    setCurrentpopulardestinationdetails,
  ] = useState();

  useEffect(() => {
    fetch("../populardes.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("my data", data);
        setPopularDestinationDetails(data);
      });
  }, []);

  useEffect(() => {
    let mydes = populardestinationdetails.filter(
      (des) => des.id == destinationId
    );
    setCurrentpopulardestinationdetails(mydes[0]);
    console.log(mydes);
  }, [populardestinationdetails]);

  return (
    <div>
      <div>
        <h1> Destination </h1>
        <div className="headerdiv my-5">
          {currentpopulardestinationdetails && (
            <div className="container mt-3">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <img
                    className="card-img-top"
                    src={currentpopulardestinationdetails.image}
                    style={{}}
                    alt="Card image cap"
                  />
                  <h5 className="text-dark pt-2">
                    {currentpopulardestinationdetails.countryName}{" "}
                  </h5>
                </div>

                <div className="col-lg-6 col-md-6 col-12">
                  <h3 className="margin-left"> Details of {currentpopulardestinationdetails.countryName } </h3>
                  <p>{currentpopulardestinationdetails.dicription}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopularDestinationDetails;