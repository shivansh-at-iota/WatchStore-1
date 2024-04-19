import { Box, Button, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'

function Story() {
    const Mobile = useMediaQuery('(min-width:1200px)');
    return (
        <Box sx={{ p: 8, bgcolor: "black" }}>
            <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", color: "white" }}>
                <Typography variant='h5'>
                    To put premium watches within the
                </Typography>
                <Typography variant='h5'>
                    reach of everyone
                </Typography>
            </Box>

            <Stack direction="row" sx={{display: "flex", flexDirection: Mobile ? 'row' : 'column'}}>
                <Box component="img" src='./Images/aboutWatch.png' sx={{ p: 8 }} />
                <Box sx={{ p: 8 }}>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", color: "white" }}>
                        <Box sx={{ py: 4 }}>
                            <Typography variant='h4' sx={{ fontWeight: 200 }}>
                                Story
                            </Typography>
                            <Typography variant='h4'>
                                About Us
                            </Typography>
                        </Box>
                        <Typography variant='subtitle1'>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </Typography>
                        <Button variant='contained' sx={{ marginTop: "100px", bgcolor: "white", color: "black", px: 6 }}>
                            DISCOVER MORE
                        </Button>
                    </Box>
                </Box>
            </Stack>
        </Box>
    )
}

export default Story