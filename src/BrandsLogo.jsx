import { Box } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BrandsLogo() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };
  return (
    <Box className="slider-container">
      <Slider {...settings}>
        <Box component="img" src="./Images/lokamt.png" alt="LOKAMT"/>
        <Box component="img" src="./Images/financialexpress.png" alt="financialexpress"/>
        <Box component="img" src="./Images/abp.png" alt="abp"/>
        <Box component="img" src="./Images/silicon.png" alt="silicon"/>
        <Box component="img" src="./Images/rewired.png" alt="rewired"/>
      </Slider>
    </Box>
  );
}

export default BrandsLogo;