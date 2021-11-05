import React from "react";
import About from "../About/About";
import Events from "../Events/Events";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import PopularDestinations from "../PopularDestinations/PopularDestinations";
import Vedio from "../Vedio/Vedio";
import WhyChoseus from "../WhyChoseUS/WhyChoseus";

const Home = () => {
  return (
    <div>
      <HeaderBanner></HeaderBanner>
      <About></About>
    
    <Events> </Events>
      {/* <PopularDestinations></PopularDestinations> */}
      <WhyChoseus></WhyChoseus>

      <Vedio></Vedio>


      <PopularDestinations></PopularDestinations>

    </div>
  );
};

export default Home;
