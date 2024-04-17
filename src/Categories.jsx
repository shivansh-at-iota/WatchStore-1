import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";


function Categories() {


  return (
    <>
      <Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
              m: 1,
            },
          }}
        >
          <ButtonGroup variant="text" aria-label="Basic button group">
            <NavLink to="/" >
              <Button sx={{ color: "gray" }}>New Watches</Button>
            </NavLink>
            <NavLink to="/pre">
              <Button sx={{ color: "gray" }}>Pre Owned</Button>
            </NavLink>
            <NavLink to="/under">
              <Button sx={{ color: "gray" }} >Under Retail</Button>
            </NavLink>
          </ButtonGroup>
        </Box>
      </Box>
    </>
  )
}

export default Categories