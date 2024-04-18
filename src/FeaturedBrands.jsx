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

    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (

    <Box sx={{ bgcolor: "lightgray", my: "25px", paddingTop: "25px", paddingBottom: "50px", mx: "25px" }}>

      <Typography variant="h5" sx={{ marginLeft: "50%", marginBottom: "50px" }}>Featured Brands</Typography>
      <Box className="slider-container">
        <Slider {...settings}>

          <Box sx={{ display: "flex" }}>
            <Box component="img" src="./Images/omega.png" sx={{ height: "40px", width: "25px" }} />
            <Typography variant="subtitle1">Omega</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box component="img" src="./Images/patek.png" sx={{ height: "40px", width: "25px" }} />
            <Typography variant="subtitle1">Patek</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box component="img" src="./Images/vacheron.png" sx={{ height: "40px", width: "25px" }} />
            <Typography variant="subtitle1">Vacheron</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box component="img" src="./Images/cartier.png" sx={{ height: "40px", width: "25px" }} />
            <Typography variant="subtitle1">Cartier</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box component="img" src="./Images/patek.png" sx={{ height: "40px", width: "25px" }} />
            <Typography variant="subtitle1">Patek</Typography>
          </Box>

          <Box sx={{ display: "flex" }}>
            <Box component="img" src="./Images/omega.png" sx={{ height: "40px", width: "25px" }} />
            <Typography variant="subtitle1">Omega</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box component="img" src="./Images/patek.png" sx={{ height: "40px", width: "25px" }} />
            <Typography variant="subtitle1">Patek</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box component="img" src="./Images/vacheron.png" sx={{ height: "40px", width: "25px" }} />
            <Typography variant="subtitle1">Vacheron</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box component="img" src="./Images/cartier.png" sx={{ height: "40px", width: "25px" }} />
            <Typography variant="subtitle1">Cartier</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box component="img" src="./Images/patek.png" sx={{ height: "40px", width: "25px" }} />
            <Typography variant="subtitle1">Patek</Typography>
          </Box>

        </Slider>
      </Box></Box>
  );
}

export default FeaturedBrands;