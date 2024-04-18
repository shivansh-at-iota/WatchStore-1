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
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <Box className="slider-container">
      <Slider {...settings}>
        <Box component="img" src="./Images/lokamt.png" alt="LOKAMT" width={16} height={36}/>
        <Box component="img" src="./Images/financialexpress.png" alt="financialexpress" width={16} height={36}/>
        <Box component="img" src="./Images/abp.png" alt="abp" width={16} height={36}/>
        <Box component="img" src="./Images/silicon.png" alt="silicon" width={16} height={36}/>
        <Box component="img" src="./Images/rewired.png" alt="rewired" width={16} height={36}/>
      </Slider>
    </Box>
  );
}

export default BrandsLogo;