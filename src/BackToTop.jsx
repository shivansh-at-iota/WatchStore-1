import React from 'react'
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import { Box, Button } from '@mui/material';


function BackToTop() {
  return (
    <Box sx={{ display: "flex", justifyContent: "end" }}>
      <Button variant="text" href='/' endIcon={<ArrowCircleUpRoundedIcon />} sx={{ mx: 8, bgcolor: "white", color: "black" }}>
        Back To Top
      </Button>
    </Box>
  )
}

export default BackToTop