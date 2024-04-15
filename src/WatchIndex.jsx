import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function WatchIndex() {
    return (
        <Container maxWidth="200" style={{ display: 'flex'}}>
            <Box
                height={370}
                width={500}
                marginLeft={8}
                marginRight={0}
                my={6}
                display="flex flex-column"
                alignItems="center"
                bgcolor={'lightgray'}
                gap={4}
                p={2}

            >
                <h1 style={{fontWeight: 'lighter'}}>Track Real Time</h1>
                <h1>Watch Prices</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <Button variant="contained" style={{marginTop:'30px'}} sx={{bgcolor: "black"}}>GO TO WATCH INDEX</Button>
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
                <img src='./Images/aboutWatch.png' style={{ width: '800px', height: '400px' }}></img>
                
            </Box>
        </Container>
    )
}

export default WatchIndex