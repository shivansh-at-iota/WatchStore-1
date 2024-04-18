import React from "react";
import Box from "@mui/material/Box";
import Collections from "./Collections";
import Categories from "./Categories";
import Banner from "./Banner";
import Navbar from "./Navbar";
import BrandsLogo from "./BrandsLogo";
import FeaturedBrands from "./FeaturedBrands";
import Promises from "./Promises";
import Story from "./Story";
import Instagram from "./Instagram";
import Editorial from "./Editorial";
import BackToTop from "./BackToTop";
import Footer from "./Footer";
import { Outlet } from 'react-router-dom'
import Watch from "./Watch";

function App() {

  return (
    <>
      <Box sx={{maxWidth: "100%vw", overflow: "hidden"}}>

        <Navbar />
        <Banner />
        <BrandsLogo />
        <FeaturedBrands />
        <Collections />
        <Categories />

        <Outlet />

        <Watch/>
        <Promises />
        <Story />
        <Instagram />
        <Editorial />
        <BackToTop />
        <Footer />

      </Box>
    </>
  );
}

export default App;