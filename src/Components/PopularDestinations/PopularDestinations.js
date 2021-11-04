import React from "react";
import usePopularDestination from "../Hooks/usePopularDestination";
import PopularDestination from "../PopularDestination/PopularDestination";

const PopularDestinations = () => {
  const [populardestinations] = usePopularDestination();
  return (
    <div className="container">
      <h1 className="py-3"> Popular Destination</h1>
      <div className="row">
        {populardestinations.map((populardestination) => (
          <PopularDestination
            key={populardestination.id}
            populardestination={populardestination}
          ></PopularDestination>
        ))}
      </div>
    </div>
  );
};

export default PopularDestinations;
