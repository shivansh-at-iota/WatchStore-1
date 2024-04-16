import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

function Footer() {
    return (

        <Box sx={{ backgroundImage: "url(./Images/Chakra.png)", width: "100%", height: "400px", backgroundRepeat: "no-repeat", backgroundColor: "black" }}>

            <Stack direction="row" gap={4} justifyContent="space-around">
                <Box component="img" src='./Images/header_logo_iwc.png' sx={{py: 8}}>

                </Box>
                <Box sx={{color: "white", py: 8}}>
                    <Typography sx={{color: "gray"}}>BUY</Typography>
                    <Typography sx={{paddingTop: 2}}>Under Retail</Typography>
                    <Typography sx={{paddingTop: 1}}>New Watches</Typography>
                    <Typography sx={{paddingTop: 1}}>Pre Owned</Typography>
                    <Typography sx={{paddingTop: 1}}>Featured Brands</Typography>
                </Box>
                <Box sx={{color: "white", py: 8}}>
                    <Typography sx={{color: "gray"}}>SELL</Typography>
                    <Typography sx={{paddingTop: 2}}>How it Works</Typography>
                    <Typography sx={{paddingTop: 1}}>Sell Your Watch</Typography>
                    <Typography sx={{paddingTop: 1}}>Watch Index</Typography>
                </Box>
                <Box sx={{color: "white", py: 8}}>
                    <Typography sx={{color: "gray"}}>MEDIA</Typography>
                    <Typography sx={{paddingTop: 2}}>In the News</Typography>
                    <Typography sx={{paddingTop: 1}}>Blogs and Articles</Typography>
                </Box>
                <Box sx={{color: "white", py: 8}}>
                    <Typography sx={{color: "gray"}}>SUPPORT</Typography>
                    <Typography sx={{paddingTop: 2}}>Contact Us</Typography>
                    <Typography sx={{paddingTop: 1}}>FAQ's</Typography>
                </Box>
            </Stack>

        </Box>
    )
}

export default Footer