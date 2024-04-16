import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
    return (

        <Box sx={{ backgroundImage: "url(./Images/Chakra.png)", width: "100%", height: "400px", backgroundRepeat: "no-repeat", backgroundColor: "black", backgroundPosition: "right" }}>

            <Stack direction="row" gap={4} justifyContent="space-around">
                <Box component="img" src='./Images/header_logo_iwc.png' sx={{ py: 8 }} width="200px" height="50px" />
                <Box sx={{ color: "white", py: 8 }}>
                    <Typography sx={{ color: "gray" }}>BUY</Typography>
                    <Typography sx={{ paddingTop: 2 }}>Under Retail</Typography>
                    <Typography sx={{ paddingTop: 1 }}>New Watches</Typography>
                    <Typography sx={{ paddingTop: 1 }}>Pre Owned</Typography>
                    <Typography sx={{ paddingTop: 1 }}>Featured Brands</Typography>
                </Box>
                <Box sx={{ color: "white", py: 8 }}>
                    <Typography sx={{ color: "gray" }}>SELL</Typography>
                    <Typography sx={{ paddingTop: 2 }}>How it Works</Typography>
                    <Typography sx={{ paddingTop: 1 }}>Sell Your Watch</Typography>
                    <Typography sx={{ paddingTop: 1 }}>Watch Index</Typography>
                </Box>
                <Box sx={{ color: "white", py: 8 }}>
                    <Typography sx={{ color: "gray" }}>MEDIA</Typography>
                    <Typography sx={{ paddingTop: 2 }}>In the News</Typography>
                    <Typography sx={{ paddingTop: 1 }}>Blogs and Articles</Typography>
                </Box>
                <Box sx={{ color: "white", py: 8 }}>
                    <Typography sx={{ color: "gray" }}>SUPPORT</Typography>
                    <Typography sx={{ paddingTop: 2 }}>Contact Us</Typography>
                    <Typography sx={{ paddingTop: 1 }}>FAQ's</Typography>
                </Box>
            </Stack>
            <Divider variant="middle" component="li" sx={{ bgcolor: "white", height: "0.25px", marginTop: 4 }} />
            <Stack direction="row" gap={4} sx={{ color: "white" }}>
                <Box sx={{ display: "flex", color: "gray" }}>
                    <Typography sx={{ paddingTop: 4, marginLeft: 8 }}>Terms & Conditions</Typography>
                    <Typography sx={{ paddingTop: 4, marginLeft: 4 }}>Privacy Policy</Typography>
                </Box>
                <Box sx={{ justifyContent: "end", alignContent: "end", alignItems: "end", marginLeft: "60%" }}>
                    <Button href="https://www.instagram.com/" endIcon={<InstagramIcon />} sx={{ color: "gray" }}></Button>
                    <Button href="https://web.whatsapp.com/" endIcon={<WhatsAppIcon />} sx={{ color: "gray" }}></Button>
                    <Button href="https://www.youtube.com/" endIcon={<YouTubeIcon />} sx={{ color: "gray" }}></Button>
                </Box>
            </Stack>
        </Box>
    )
}

export default Footer