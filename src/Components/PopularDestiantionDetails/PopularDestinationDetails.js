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
    fetch("http://localhost:5000/popularDestinationusers")
      .then((res) => res.json())
      .then((data) => {
        console.log("my details data", data);
        setPopularDestinationDetails(data);
      });
  }, []);


  useEffect(() => {
    if(populardestinationdetails.length >0 ){
      const mydes = populardestinationdetails.find(
        (des) => des._id == destinationId
      );
      setCurrentpopulardestinationdetails(mydes);
      console.log("ttttttttttt",mydes);
    }
    
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
                    src={currentpopulardestinationdetails?.thabnil}
                    style={{}}
                    alt="Card image cap"
                  />
                  <h5 className="text-dark pt-2">
                    {currentpopulardestinationdetails?.title}{" "}
                  </h5>
                </div>

                <div className="col-lg-6 col-md-6 col-12">
                  <h3 className="margin-left"> Details of {currentpopulardestinationdetails.title } </h3>
                  <p>{currentpopulardestinationdetails.discription}</p>
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
