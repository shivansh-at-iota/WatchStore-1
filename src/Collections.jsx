import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Stack, useMediaQuery } from '@mui/material';

function Collections() {
    const Mobile = useMediaQuery('(min-width:800px)');
    return (
        <Box sx={{ width: "100%" }}>

            <Stack direction="row" spacing={2} justifyContent="space-between" flexWrap="wrap" sx={{display: "flex", flexDirection: Mobile ? 'row' : 'column'}}>
                <Box
                    height={600}
                    flex={2}
                    my={4}
                    display="flex flex-column"
                    alignItems="center"
                    alignContent="center"
                    gap={4}
                    p={2}
                >
                    <h1>Curated<br />Collections</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <Button variant="contained" color='secondary'>Explore</Button>
                </Box>
                <Box
                    height={600}
                    flex={0.5}
                    my={4}
                    display="flex flex-column"
                    alignItems="left"
                    gap={4}
                    p={2}

                >
                    <img src='./Images/luxury.png' style={{ height: '400px' }}></img>
                    <h3>LUXURY LEGACY</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                    <h5>DISCOVER MORE</h5>
                </Box>
                <Box
                    height={600}
                    flex={0.5}
                    my={4}
                    display="flex flex-column"
                    alignItems="left"
                    gap={4}
                    p={2}

                >
                    <img src='./Images/NW1.png' style={{ height: '400px' }}></img>
                    <h3>ICONIC MASTERPIECES</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                    <h5>DISCOVER MORE</h5>
                </Box>
                <Box
                    height={600}
                    flex={0.5}
                    my={4}
                    display="flex flex-column"
                    alignItems="left"
                    gap={4}
                    p={2}

                >
                    <img src='./Images/Chrono.png' style={{ height: '400px' }}></img>
                    <h3>CHRONO CLASSICS</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                    <h5>DISCOVER MORE</h5>
                </Box>


            </Stack>
        </Box>
    )
}

export default Collections