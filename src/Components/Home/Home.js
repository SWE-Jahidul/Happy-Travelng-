import React from "react";
import About from "../About/About";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import Vedio from "../Vedio/Vedio";

const Home = () => {
  return (
    <div>
      <HeaderBanner></HeaderBanner>
      <About></About>

      <Vedio></Vedio>
    </div>
  );
};

export default Home;
