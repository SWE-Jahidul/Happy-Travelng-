import React from "react";

import "./Vedio.css";
import vedio1 from "../images/Exploring Bhutan - The Travel Vlog.mp4";

const Vedio = () => {
  return (
    <div className="my-3">
      <div>
        <video src={vedio1} width="100%" controls="controls" autoplay="false" />
      </div>
    </div>
  );
};

export default Vedio;
