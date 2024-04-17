import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Stack, Typography } from '@mui/material';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';

function Promises() {
    return (
        <>

            <Box sx={{ bgcolor: "lightgray" }}>
                <Typography variant='h4' px={8} paddingTop={4}>
                    Our Promises
                </Typography>
                <Stack direction='row' justifyContent="space-between" padding={8} gap={4}>
                    <Box>
                        <GppGoodOutlinedIcon />
                        <Typography variant='h6'>
                            Safety and Authenticity
                        </Typography>
                        <Typography variant='subtitle1'>
                            Trusted luxury watch specialist with over 200+ happy customers.
                        </Typography>
                    </Box>
                    <Box>
                        <ShoppingCartOutlinedIcon />
                        <Typography variant='h6'>
                            Buy and Trade
                        </Typography>
                        <Typography variant='subtitle1'>
                            Buy or Trade Authentic Luxury watches with Indian Watch Connoisseur.
                        </Typography>
                    </Box>
                    <Box>
                        <LocalShippingOutlinedIcon />
                        <Typography variant='h6'>
                            Direct to your Doorstep
                        </Typography>
                        <Typography variant='subtitle1'>
                            Order Placed? Sit tight and relax, your watch will be on your wrist within 24-48 hours.
                        </Typography>
                    </Box>
                    <Box>
                        <VolunteerActivismOutlinedIcon />
                        <Typography variant='h6'>
                            Buyer Protection
                        </Typography>
                        <Typography variant='subtitle1'>
                            Authenticated Timepieces, Privacy and Peace of Mind over everything else.
                        </Typography>
                    </Box>
                </Stack>
            </Box>

        </>


    )
}

export default Promises