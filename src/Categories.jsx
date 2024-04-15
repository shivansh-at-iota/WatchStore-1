import React, { useState , useEffect} from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
// import CardActions from '@mui/material/CardActions';

function Categories() {



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

  const underRetail = [
    {
      category: "Under Retail",
      img: "./Images/luxury.png",
      name: "AUDEMARS PIGUET",
      details: "ROLEX Oyster Perpetual Sea-Dweller 43mm Ceramic Bonzol Stainless Steel",
      price: "from $200.50"
    },
    {
      category: "Under Retail",
      img: "./Images/insta1.png",
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

  const [activecategory, setActivecategory] = useState([newWatches]);

  useEffect(() => {
    setActivecategory(newWatches);
  }, [activecategory])
  

  return (
    <>
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
            <Button onClick={() => setActivecategory(newWatches)}>New Watches</Button>
            <Button onClick={() => setActivecategory(preOwned)}>Pre Owned</Button>
            <Button onClick={() => setActivecategory(underRetail)}>Under Retail</Button>
          </ButtonGroup>
        </Box>
      </div>

      <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-evenly' }}>
        {activecategory.map((item, index) => (
          <div style={{display: 'flex '}} key={index}>
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
          </div>
        ))}
      </div>
    </>
  )
}

export default Categories