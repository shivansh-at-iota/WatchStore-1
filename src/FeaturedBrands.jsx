import { Box, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function FeaturedBrands() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (

    <Box sx={{bgcolor: "lightgray", margin: "25px", paddingTop: "25px"}}>
  
  <Typography variant="h5" sx={{marginLeft: "50%"}}>Featured Brands</Typography>
    <Box className="slider-container">
      <Slider {...settings}>
        
      <Box component="img" src="./Images/NW1.png" sx={{height: "280px", width: "20px"}}/>
      <Box component="img" src="./Images/NW1.png" sx={{height: "280px", width: "20px"}}/>
      <Box component="img" src="./Images/NW1.png" sx={{height: "280px", width: "20px"}}/>
      <Box component="img" src="./Images/NW1.png" sx={{height: "280px", width: "20px"}}/>
      <Box component="img" src="./Images/NW1.png" sx={{height: "280px", width: "20px"}}/>
      </Slider>
    </Box></Box>
  );
}

export default FeaturedBrands;