import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Collections() {
    return (
        <div>

            <div style={{ display: 'flex', width: '100vw' }}>
                <Box
                    height={600}
                    width={800}
                    my={4}
                    marginRight={40}
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
                    width={800}
                    my={4}
                    display="flex flex-column"
                    alignItems="left"
                    gap={4}
                    p={2}

                >
                    <img src='./Images/luxury.png' style={{ width: '400px', height: '400px' }}></img>
                    <h3>LUXURY LEGACY</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                    <h5>DISCOVER MORE</h5>
                </Box>
                <Box
                    height={600}
                    width={800}
                    my={4}
                    display="flex flex-column"
                    alignItems="left"
                    gap={4}
                    p={2}

                >
                    <img src='./Images/NW1.png' style={{ width: '400px', height: '400px' }}></img>
                    <h3>ICONIC MASTERPIECES</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                    <h5>DISCOVER MORE</h5>
                </Box>
                <Box
                    height={600}
                    width={800}
                    my={4}
                    display="flex flex-column"
                    alignItems="left"
                    gap={4}
                    p={2}

                >
                    <img src='./Images/Chrono.png' style={{ width: '400px', height: '400px' }}></img>
                    <h3>CHRONO CLASSICS</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                    <h5>DISCOVER MORE</h5>
                </Box>


            </div>
        </div>
    )
}

export default Collections