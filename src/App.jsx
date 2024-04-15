import React from "react";
import Box from "@mui/material/Box";
import Collections from "./Collections";
import Categories from "./Categories";
import Banner from "./Banner";
import Navbar from "./Navbar";
import BrandsLogo from "./BrandsLogo";
import FeaturedBrands from "./FeaturedBrands";
import WatchIndex from "./WatchIndex";
import Promises from "./Promises";

function App() {

  return (
    <>
      <Box>
        
        <Box><Navbar/></Box>
        <Box><Banner/></Box>
        <Box><BrandsLogo/></Box>
        <Box><FeaturedBrands/></Box>
        <Box><Collections /></Box>
        <Box><Categories /></Box>
        <WatchIndex/>
        <Promises/>
        
      </Box>
    </>
  );
}

export default App;