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
import Story from "./Story";

function App() {

  return (
    <>
      <Box>
        
        <Navbar/>
        <Banner/>
        <BrandsLogo/>
        <FeaturedBrands/>
        <Collections />
        <Categories />
        <WatchIndex/>
        <Promises/>
        <Story/>
        
      </Box>
    </>
  );
}

export default App;