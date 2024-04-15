import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

function Editorial() {
    return (
        <Box sx={{my: 8}}>
            <Stack direction="row" justifyContent="space-between" sx={{ py: 4 }}>
                <Typography variant='h5' sx={{ mx: 8 }}>
                    Editorial Latest Articles
                </Typography>
                <Button variant="text" endIcon={<ArrowForwardOutlinedIcon />} sx={{ mx: 8, bgcolor: "white", color: "black" }}>
                    VIEW ALL
                </Button>
            </Stack>
        </Box>
    )
}

export default Editorial