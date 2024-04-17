import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

function Instagram() {
    return (
        <Box sx={{ bgcolor: "black", color: "white" }}>
            <Stack direction="row" justifyContent="space-between" sx={{ py: 4 }}>
                <Typography variant='h5' sx={{ mx: 8 }}>
                    Our Instagram
                </Typography>
                <Button variant="contained" endIcon={<ArrowForwardOutlinedIcon />} sx={{ mx: 8, bgcolor: "black", color: "white" }}>
                    VIEW ALL
                </Button>
            </Stack>
            <Stack direction="row" sx={{ paddingBottom: 2, overflow: "hidden" }}>
                <Box component="img" src='./Images/insta1.png' />
                <Box component="img" src='./Images/insta2.png' />
                <Box component="img" src='./Images/insta3.png' />
                <Box component="img" src='./Images/insta4.png' />
                <Box component="img" src='./Images/insta5.png' />
            </Stack>
        </Box>
    )
}

export default Instagram