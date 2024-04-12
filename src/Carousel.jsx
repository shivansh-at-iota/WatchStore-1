import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function Brands() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

 
      
      const brands = [
        {
        name: "Rolex",
        img: './Images/cartier.png'
        },
        {
          name: "Patek Philippe",
          img: './Images/cartier.png'
        },
        {
          name: "Cartier",
          img: './Images/cartier.png'
        },
        {
          name: "Audemars Piguet",
          img: './Images/cartier.png'
        },
        {
          name: "Omega",
          img: './Images/cartier.png'
        },
        {
          name: "Vacheron",
          img: './Images/cartier.png'
        },
    
    ]


    return(
        <>
        <Carousel responsive={responsive}>
        <div style={{height:'400px', backgroundColor: 'gray', width: '100vw'}} >
            <h2 style={{marginLeft: '50vw', fontWeight: 'lighter', paddingTop: '50px'}}>Featured Brands</h2>
            <div style={{display:'flex', justifyContent: 'space-around'}}>
              
              {brands.map((d, index) => (
                <div key={index} style={{backgroundColor: 'white', display: 'flex', borderRadius: '50px', marginLeft:'50px', marginTop: '100px'} }>
                  <img src={d.img} alt=""/>
                  <p>{d.name}</p>
                </div>
              ))}
             
            </div>
          </div>
        </Carousel>
        </>
    )
}