import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, Button, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


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
        <Box flex={2} sx={{ justifyContent: "space-evenly", alignContent: "center", alignItems: "center", marginLeft: "20%", display: { sm: "none", md: "block" } }}>
          <Button href="#">Buy</Button>
          <Button href="#">Sell</Button>
          <Button href="#">Index</Button>
          <Button href="#">About Us</Button>
          <Button href="#">Blog</Button>
        </Box>
        <Box flex={0.5} sx={{ display: { sm: "none", md: "block" } }}>
          <SearchIcon />
          <FavoriteBorderIcon />
          <PersonOutlineRoundedIcon />
          <NotificationsOutlinedIcon />
        </Box>
        <div >
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{display: {sm: "block", md: "none"}}}
        endIcon={<MenuIcon/>}
      />
  
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Buy</MenuItem>
        <MenuItem onClick={handleClose}>Sell</MenuItem>
        <MenuItem onClick={handleClose}>Index</MenuItem>
        <MenuItem onClick={handleClose}>About Us</MenuItem>
        <MenuItem onClick={handleClose}>Blog</MenuItem>
      </Menu>
    </div>
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;