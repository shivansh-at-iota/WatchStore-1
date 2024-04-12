import React, { useState } from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

function Categories() {

    // const[activecategory, setActivecategory] = useState("New");

    const watches = [
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
            img: "./Images/watch.png",
            name: "AUDEMARS PIGUET",
            details: "ROLEX Oyster Perpetual Sea-Dweller 43mm Ceramic Bonzol Stainless Steel",
            price: "from $200.50"
        },
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
            img: "./Images/watch.png",
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
        {
            category: "Under Retail",
            img: "./Images/luxury.png",
            name: "AUDEMARS PIGUET",
            details: "ROLEX Oyster Perpetual Sea-Dweller 43mm Ceramic Bonzol Stainless Steel",
            price: "from $200.50"
        },
        {
            category: "Under Retail",
            img: "./Images/watch.png",
            name: "ROLEX",
            details: "ROLEX Oyster Perpetual Sea-Dweller 43mm Ceramic Bonzol Stainless Steel",
            price: "from $200.50"
        },
        {
            category: "Under Retail",
            img: "./Images/NW1.png",
            name: "AUDEMARS PIGUET",
            details: "ROLEX Oyster Perpetual Sea-Dweller 43mm Ceramic Bonzol Stainless Steel",
            price: "from $200.50"
        },
        {
            category: "Under Retail",
            img: "./Images/Chrono.png",
            name: "ROLEX",
            details: "ROLEX Oyster Perpetual Sea-Dweller 43mm Ceramic Bonzol Stainless Steel",
            price: "from $200.50"
        },
    ]

  return (
    <div>
        <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="text" aria-label="Basic button group">
        <Button>New Watches</Button>
        <Button>Pre Owned</Button>
        <Button>Under Retail</Button>
      </ButtonGroup>
    </Box>
    </div>
  )
}

export default Categories