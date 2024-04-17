import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";


function Categories() {


  return (
    <>
      <div>
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
            <Button variant="contained" href="/" sx={{ color: "gray" }}>New Watches</Button>
            <Button variant="contained" href="/pre" sx={{ color: "gray" }}>Pre Owned</Button>
            <Button variant="contained" href="/under" sx={{ color: "gray" }}>Under Retail</Button>
          </ButtonGroup>
        </Box>
      </div>
    </>
  )
}

export default Categories