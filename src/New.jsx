import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

function New() {

    const newWatches = [
        {
            category: "New Watches",
            img: "./Images/NW1.png",
            name: "ROLEX",
            details: "ROLEX Oyster Perpetual Sea-Dweller 43mm Ceramic Bonzol Stainless Steel",
            price: "from $200.50"
        },
        {
            category: "New Watches",
            img: "./Images/Chrono.png",
            name: "AUDEMARS PIGUET",
            details: "ROLEX Oyster Perpetual Sea-Dweller 43mm Ceramic Bonzol Stainless Steel",
            price: "from $200.50"
        },
        {
            category: "New Watches",
            img: "./Images/luxury.png",
            name: "ROLEX",
            details: "ROLEX Oyster Perpetual Sea-Dweller 43mm Ceramic Bonzol Stainless Steel",
            price: "from $200.50"
        },
        {
            category: "New Watches",
            img: "./Images/insta1.png",
            name: "AUDEMARS PIGUET",
            details: "ROLEX Oyster Perpetual Sea-Dweller 43mm Ceramic Bonzol Stainless Steel",
            price: "from $200.50"
        },


    ]

    return (
        <Box sx={{ display: "flex", flexDirection: 'row', justifyContent: 'space-evenly', my: 4 }}>
            {newWatches.map((item, index) => (
                <Box style={{ display: 'flex ' }} key={index}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                image={item.img}
                                alt={item.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.details}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" fontWeight={1000} marginTop={10}>
                                    {item.price}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        {/* <CardActions>
        <Button size="small" color="primary">
          {item.price}
        </Button>
      </CardActions> */}
                    </Card>
                </Box>
            ))}
        </Box>
    )
}

export default New