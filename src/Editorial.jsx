import { Box, Button, Divider, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

function Editorial() {

    const Mobile = useMediaQuery('(min-width:1200px)');
    return (
        <Box sx={{ my: 8 }}>
            <Stack direction="row" justifyContent="space-between" sx={{ py: 4 }}>
                <Typography variant='h5' sx={{ mx: 8 }}>
                    Editorial Latest Articles
                </Typography>
                <Button variant="text" endIcon={<ArrowForwardOutlinedIcon />} sx={{ mx: 8, bgcolor: "white", color: "black" }}>
                    VIEW ALL
                </Button>
            </Stack>

            <Stack direction="row" gap={2} sx={{ mx: 8, display: "flex", flexDirection: Mobile ? 'row' : 'column'}}>
                <Box flex={2} sx={{ bgcolor: "#737661", color: "white" , display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <Box component="img" src='./Images/editorial.png' width="100%" />
                    <Typography sx={{ px: 2, paddingTop: 2 }}>
                        HOW TO SET TIME ON ROLEX - A COMPREHENSIVE GUIDE
                    </Typography>
                    <Typography sx={{ p: 2 }}>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                    </Typography>
                    <Divider variant="middle" component="li" sx={{ bgcolor: "white", height: "0.25px", marginTop: 4 }} />
                    <Typography sx={{ p: 2 }}>
                        March 12, 2024
                    </Typography>
                </Box>

                <Box flex={1}  sx={{ bgcolor: "#494B4A", color: "white" , display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                    <Typography sx={{ px: 2, paddingTop: 2 }}>
                        IN-DEPTH COLLECTOR'S GUIDE TO THE ORIGINAL PIAGET POLO
                    </Typography>
                    <Typography sx={{ p: 2 }}>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered.There are many variations of passages of Lorem Ipsum available.
                    </Typography>
                    <Divider variant="middle" component="li" sx={{ bgcolor: "white", height: "0.25px", marginTop: 4 }} />
                    <Typography sx={{ p: 2 }}>
                        March 12, 2024
                    </Typography>
                    <Box component="img" src='./Images/news.png' width="100%" />
                </Box>

                <Box flex={1.25} sx={{ bgcolor: "#833430", color: "white", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <Box component="img" src='./Images/blog.png' width="100%"/>
                    <Typography sx={{ paddingLeft: 2, paddingTop: 2 }}>
                        YEAR IN REVIEW THE WATCH I WORE MOST IN 2023
                    </Typography>
                    <Typography sx={{ py: 2, paddingLeft: 2 }}>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered.There are many variations of passages of Lorem Ipsum available.
                    </Typography>
                    <Divider variant="middle" component="li" sx={{ bgcolor: "white", height: "0.25px", marginTop: 4 }} />
                    <Typography sx={{ py: 2, paddingLeft: 2 }}>
                        March 12, 2024
                    </Typography>
                </Box>
            </Stack>
        </Box>
    )
}

export default Editorial