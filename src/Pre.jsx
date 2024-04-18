import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, useMediaQuery } from '@mui/material'
import React from 'react'

function Pre() {

    const preOwned = [
        {
            category: "Pre Owned",
            img: "./Images/Chrono.png",
            name: "ROLEX",
            details: "ROLEX Oyster Perpetual Sea-Dweller 43mm Ceramic Bonzol Stainless Steel",
            price: "from $200.50"
        },
        {
            category: "Pre Owned",
            img: "./Images/luxury.png",
            name: "AUDEMARS PIGUET",
            details: "ROLEX Oyster Perpetual Sea-Dweller 43mm Ceramic Bonzol Stainless Steel",
            price: "from $200.50"
        },
        {
            category: "Pre Owned",
            img: "./Images/insta1.png",
            name: "AUDEMARS PIGUET",
            details: "ROLEX Oyster Perpetual Sea-Dweller 43mm Ceramic Bonzol Stainless Steel",
            price: "from $200.50"
        },
        {
            category: "Pre Owned",
            img: "./Images/NW1.png",
            name: "ROLEX",
            details: "ROLEX Oyster Perpetual Sea-Dweller 43mm Ceramic Bonzol Stainless Steel",
            price: "from $200.50"
        },
    ]

    const Mobile = useMediaQuery('(min-width:800px)');

    return (
        <Box sx={{ display: "flex", flexDirection: Mobile ? 'row' : 'column', alignItems: Mobile? 'normal':'center', justifyContent: 'space-evenly', my: 4 }}>
            {preOwned.map((item, index) => (
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

export default Pre