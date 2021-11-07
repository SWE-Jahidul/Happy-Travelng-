import React from "react";
import About from "../About/About";
import Events from "../Events/Events";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import PopularDestination from "../PopularDestination/PopularDestination";
import Vedio from "../Vedio/Vedio";
import WhyChoseus from "../WhyChoseUS/WhyChoseus";

const Home = () => {
  return (
    <div>
      <HeaderBanner></HeaderBanner>
      <About></About>

      <Events> </Events>
      <WhyChoseus></WhyChoseus>

      <Vedio></Vedio>

      <PopularDestination></PopularDestination>
    </div>
  );
};

export default Home;
