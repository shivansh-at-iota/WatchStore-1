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
import Instagram from "./Instagram";
import Editorial from "./Editorial";
import BackToTop from "./BackToTop";
import Footer from "./Footer";
import {Outlet} from 'react-router-dom'

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

        <Outlet/>

        <WatchIndex/>
        <Promises/>
        <Story/>
        <Instagram/>
        <Editorial/>
        <BackToTop/>
        <Footer/>
      </Box>
    </>
  );
}

export default App;