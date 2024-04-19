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
      style={{ ...style, display: "block", background: "lightgray" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "lightgray" }}
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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box
      sx={{
        bgcolor: "lightgray",
        my: "25px",
        paddingTop: "80px",
        paddingBottom: "120px",
        mx: "25px",
      }}
    >
      <Typography variant="h4" sx={{ marginLeft: "45%", marginBottom: "50px" }}>
        Featured Brands
      </Typography>
      <Box className="slider-container">
        <Slider {...settings}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              bgcolor: "white",
              maxWidth: "200px",
              borderRadius: "50px",
            }}
          >
            <Box component="img" src="./Images/omega.png" />
            <Typography variant="p">Omega</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              bgcolor: "white",
              maxWidth: "200px",
              borderRadius: "50px",
            }}
          >
            <Box component="img" src="./Images/patek.png" />
            <Typography variant="p">Patek</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              bgcolor: "white",
              maxWidth: "200px",
              borderRadius: "50px",
            }}
          >
            <Box component="img" src="./Images/vacheron.png" />
            <Typography variant="p">Vacheron</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              bgcolor: "white",
              maxWidth: "200px",
              borderRadius: "50px",
            }}
          >
            <Box component="img" src="./Images/cartier.png" />
            <Typography variant="p">Cartier</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              bgcolor: "white",
              maxWidth: "200px",
              borderRadius: "50px",
            }}
          >
            <Box component="img" src="./Images/patek.png" />
            <Typography variant="p">Patek</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              bgcolor: "white",
              maxWidth: "200px",
              borderRadius: "50px",
            }}
          >
            <Box component="img" src="./Images/omega.png" />
            <Typography variant="p">Omega</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              bgcolor: "white",
              maxWidth: "200px",
              borderRadius: "50px",
            }}
          >
            <Box component="img" src="./Images/patek.png" />
            <Typography variant="p">Patek</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              bgcolor: "white",
              maxWidth: "200px",
              borderRadius: "50px",
            }}
          >
            <Box component="img" src="./Images/vacheron.png" />
            <Typography variant="p">Vacheron</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              bgcolor: "white",
              maxWidth: "200px",
              borderRadius: "50px",
            }}
          >
            <Box component="img" src="./Images/cartier.png" />
            <Typography variant="p">Cartier</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              bgcolor: "white",
              maxWidth: "200px",
              borderRadius: "50px",
            }}
          >
            <Box component="img" src="./Images/patek.png" />
            <Typography variant="p">Patek</Typography>
          </Box>
        </Slider>
      </Box>
    </Box>
  );
}

export default FeaturedBrands;
