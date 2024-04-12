import React from "react";

import styled, {keyframes, css} from "styled-components"


import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Brands from "./Carousel";
import Collections from "./Collections";
import Categories from "./Categories";


function App() {
  const pages = ['Buy', 'Sell', 'Index', 'AboutUs', 'Blog'];

  const logos = [
  "./Images/lokamt.png",
  "./Images/financialexpress.png",
  "./Images/abp.png",
  "./Images/silicon.png",
  "./Images/rewired.png"
  ]

  

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: 'black', height: '100px', width: '100vw' }} >
        <Container maxWidth="xl" style={{ alignItems: 'flex-start' }}>
          <Toolbar>
            <Box
              component="img"
              sx={{
                height: 80,
                alignSelf: 'self-start',
                marginLeft: '20px'
              }}
              alt="Your logo."
              src='./Images/header_logo_iwc.png'
            />



            <Link href="#" color="inherit" style={{ marginLeft: '250px' }}>
              {'Buy'}
            </Link>

            <Link href="#" color="inherit" style={{ marginLeft: '20px' }}>
              {'Sell'}
            </Link>

            <Link href="#" color="inherit" style={{ marginLeft: '20px' }}>
              {'Index'}
            </Link>
            <Link href="#" color="inherit" style={{ marginLeft: '20px' }}>
              {'AboutUs'}
            </Link>
            <Link href="#" color="inherit" style={{ marginLeft: '20px' }}>
              {'Blog'}
            </Link>





            <Box component={Button} style={{ marginLeft: '600px' }}>

              <Box
                component="img"
                style={{ marginLeft: '25px' }}
                sx={{
                  height: 50,
                }}
                alt=""
                src='https://t3.ftcdn.net/jpg/04/99/34/78/360_F_499347841_IXq0bLOPN4MkKAa71nP3WMQq6LVlgeTO.jpg'
              />

              <Box
                component="img"
                style={{ marginLeft: '25px' }}
                sx={{
                  height: 50,
                }}
                alt=""
                src='data:image/png;base64,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'
              />

              <Box
                component="img"
                style={{ marginLeft: '25px' }}
                sx={{
                  height: 50,
                }}
                alt=""
                src='data:image/png;base64,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'
              />

              <Box
                component="img"
                style={{ marginLeft: '25px' }}
                sx={{
                  height: 50,
                }}
                alt=""
                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAZlBMVEX///8AAAC0tLSlpaXt7e1XV1cQEBDo6Ojy8vIyMjKoqKigoKCxsbH4+Pji4uLKysqRkZFoaGiHh4fU1NQdHR1OTk5AQEAtLS1gYGCamprc3Ny9vb1HR0d8fHwICAg4ODglJSUXFxcxkcrUAAADQUlEQVRoge1Z2baqMAy1IoJQBplFFPz/n7xN8DgVJCm9b+4XWSXdljRT082GjDY77PeHrKXPoCPbC8Qts899EQ9cbHOHwHotyyv8hna5/Vpxdrnn5Z16qH2r5GdFWUXwFFXq8WyVHDQux0dpXeuNUngyPiZK7Y1VcleI/R+5Mkn3R/4gT2XgOIFMbZP7vXhDb83Qd+dOaOjOng3usNSpAeX6IJBUd66iPKahlGF6LIv7UJWsovbTkWbI5AtRIrNhHE9X6N5zRw6p6dcLxjeNseZbnH+Y0e3pgK8NE1OLs93Z2W2D/23EHuO+pdG8RIQ7MsR87l1PyDmYn6odmzyDeaclKWRnZ2y0BmdZzhHPNEJFBHOOFMkjJO4vGzMBUEpF2qm44iqmhWS/pcluoRzg2OMJ4h5VuKPs/BP+TcnnVOlcCd/oQQaqFJe8SVHJqmQannlBJUMuNqKaFzIgCNXUD4X8zil7ouZZGywi5FpuRvNmRMr1aFB6SpS9cAwRkNNr0wjCBSs5+hCIaDvqgyVyuDcbsEXacnauCblLSxk/8h/5j/xH/j/Ivc6EvKOdMeLehLynlemtKokGHrk6f91o5UJCLXCfgNxFS/+SV/sBTuSU7nLz85ihac0Gg0MUHs4oggk9lT/gH4lfe1w+xOkIaUbQKisvmCpXSlfm2y8bY0jemze4lO/1ClYl/wCcF4ql8ILHOOZ2AiLCoQ5Mhehr7Jk+qK4xWPh4AhDut4IRm+QGXQhALL4X0g6hUTGP8Gu7YCuMlQJAxcydu/GfS37z5AHcsemAik0QYsifAaQZIQL9xRkbVus6hZsE22K6D0Kfolp9B9SCL9Wfo2BIAzte6ciHCWM+83PbNE4TejHIytOYytVjU0tudch0anRmWAK30Fzl5XpsLfQY4FXLs2ioJgo7vymWJy6jmDlKJ4GjIQB1ldqLAFpPlyl5lht6Yirg7IDcwq3FZIsR3EJzRAOAV1Sfg7D7NnzOA4f+SL2Qxgcrdzmw9Pdl6iPG8PEO6lk+YidJdJYuuXY1WnCWx54X59i1F/WKjPWO/H41dyjL8YpF9Bai8x+w7fUCYkOLiu0LfUPsrNPh52lXXK9FmebkZf8DErokYx0UY5cAAAAASUVORK5CYII='
                
              />

            </Box>

          </Toolbar>


          

          
        </Container>
      </AppBar>
             
      <Box

      
            component="img"
            sx={{
              height: 500,
              width: '100vw',
            }}
            alt="Your Banner"
            src='./Images/banner.png'
          />

          <div>
          <Wrapper>
            <Marquee>
              <MarqueeGroup>
                {logos.map((el, index) => (
                  <ImageGroup key={index}>
                    <Image src={el}/>
                  </ImageGroup>
                ))}
              </MarqueeGroup>
            </Marquee>
          </Wrapper>
          </div>


          <Brands/>
          <Collections/>
          <Categories/>
    </>
  )
}

export default App

const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`

const Marquee = styled.div`
    display: flex;
    width : 1200px;
    user-select: none;
`

const scrollX = keyframes`
    from{
      left: translateX(0);
    }
    to{
      transform: translateX(-100%)
    }
`

const MarqueeGroup = styled.div`
    flex-shrink : 0;
    display : flex;
    align-items: center;
    justify-content: space-around;
    white-space: nowrap;
    width: 100%

    animation: ${scrollX} 10s linear infinite;
`

const ImageGroup = styled.div`
    display: grid;
    place-items: center;
    width: clamp(10rem , 1rem + 40vmin, 30rem);
    padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`

const Image = styled.img`
    object-fit: contain;
    width: 100%;
    height: 100%,
    border-radius: 0.5rem;
    aspect-ratio: 16/9;
    padding: 5px 20px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px  0px;
`