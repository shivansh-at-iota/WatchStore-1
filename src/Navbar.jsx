import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, Button, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

function Navbar() {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  return (
    <AppBar position="static" sx={{ bgcolor: "black" }}>
      <StyledToolbar>
        <Box
          component="img"
          flex={0.5}
          sx={{
            height: 64,
            padding: 4,
            marginLeft: 4,
          }}
          alt="Your logo."
          src="./Images/header_logo_iwc.png"
        />
        <Box flex={2} sx={{ justifyContent: "space-evenly", alignContent: "center", alignItems: "center", marginLeft: "20%", display: { xs: "none", sm: "block" } }}>
          <Button href="#">Buy</Button>
          <Button href="#">Sell</Button>
          <Button href="#">Index</Button>
          <Button href="#">About Us</Button>
          <Button href="#">Blog</Button>
        </Box>
        <Box flex={0.5}>
          <SearchIcon />
          <FavoriteBorderIcon />
          <PersonOutlineRoundedIcon />
          <NotificationsOutlinedIcon />
        </Box>
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;