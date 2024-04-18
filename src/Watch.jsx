import { Box, Button, Stack, useMediaQuery } from '@mui/material'
import React from 'react'

function Watch() {
    const Mobile = useMediaQuery('(min-width:800px)');
    return (
        <Box m={16} sx={{bgcolor: "lightgray"}}>
            <Stack direction="row" gap={4} sx={{display: "flex", flexDirection: Mobile ? 'row' : 'column'}}>
                <Box flex={1} m={4}>
                    <h1 style={{ fontWeight: 'lighter' }}>Track Real-Time</h1>
                    <h1>Watch Prices</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <Button variant="contained" style={{ marginTop: '30px' }} sx={{ bgcolor: "black" }}>GO TO WATCH INDEX</Button>
                </Box>

                <Box flex={1.5}>
                    <img src='./Images/aboutWatch.png' style={{ width: '100%', height: '400px' }}></img>
                </Box>
            </Stack>
        </Box>
    )
}

export default Watch