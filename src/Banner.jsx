import { Box, Button, Typography } from "@mui/material";
import React from "react";

function Banner() {
  return (
    <Box>
      <Typography
        variant="h3"
        position="absolute"
        top="25%"
        left="25%"
        sx={{
          color: "lightgray",
          zIndex: 0,
          display: { lg: "block", md: "none", sm: "none", xs: "none" },
        }}
      >
        BUY. SELL. TRADE. COSIGN. LEARN.
      </Typography>
      <Box
        component="img"
        sx={{
          height: 500,
          width: "100%",
        }}
        alt="Your Banner"
        src="./Images/banner.png"
      />
    </Box>
  );
}

export default Banner;
