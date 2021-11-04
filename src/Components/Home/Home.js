import React from "react";
import About from "../About/About";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import PopularDestinations from "../PopularDestinations/PopularDestinations";
import Vedio from "../Vedio/Vedio";
import WhyChoseus from "../WhyChoseUS/WhyChoseus";

const Home = () => {
  return (
    <div>
      <HeaderBanner></HeaderBanner>
      <About></About>
      <PopularDestinations></PopularDestinations>
      <WhyChoseus></WhyChoseus>

      <Vedio></Vedio>


      <PopularDestinations></PopularDestinations>

    </div>
  );
};

export default Home;
