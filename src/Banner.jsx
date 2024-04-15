import { Box } from "@mui/material";
import React from "react";

function Banner() {
  return (
    <Box
      component="img"
      sx={{
        height: 500,
        width: "100%"
      }}
      alt="Your Banner"
      src="./Images/banner.png"
    />
  );
}

export default Banner;