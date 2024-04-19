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
import { Outlet } from "react-router-dom";
import Watch from "./Watch";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Button } from "@mui/material";

function App() {
  return (
    <>
      <Box sx={{ maxWidth: "100%vw", overflow: "hidden" }}>
        <Navbar />
        <Banner />
        <Button variant="contained" startIcon={<WhatsAppIcon/>} sx={{bgcolor: "white", color: "black", p: 2, borderRadius:"50px", position: "fixed", top: "70%", left: "75%"}}>Chat with us</Button>
        <BrandsLogo />
        <Box sx={{ bgcolor: "lightgray" }}>
          <FeaturedBrands />
        </Box>
        <Collections />
        <Categories />

        <Outlet />

        <Watch />
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
