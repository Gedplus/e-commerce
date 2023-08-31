import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { useGetPackQuery } from "../../state/api"


const TopCart = (addToCart) => {
  const { data } = useGetPackQuery();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1, 
    autoplay: true,
  }
  return (
    <>
     
   
          
        {data === undefined  ? (<>Loading....</>) : (  <Slider {...settings}> {data.map((shopItems, index) => {
        return (<>
        <div className='cart-list product d_flex' key={shopItems._id}>
        <div className='img'>
      <img style ={{width:"170px", height:"140px"}} src={shopItems.image} alt='' />   
 
        

        </div>
        <div className='cart-details' style={{width:"200px"}}>
          <h4  style={{ fontSize:"15px"}}> {shopItems.title}</h4>


  
       
      <div className='price'>
      <h4 style={{ fontSize:"15px"}}>Prix  : {shopItems.prix}dt</h4>
       
        {/* step : 3  
           if hami le button ma click garryo bahne 
          */}
      </div>
      <div className='price'>
      <h4 style={{ fontSize:"15px"}}>Période  : {shopItems.period} mois</h4>
       
        {/* step : 3  
           if hami le button ma click garryo bahne 
          */}
      </div>
 
 
      <div className='cartControl d_flex'>
      
      <button className='incCart ' onClick={() => addToCart({...shopItems , typeP:"packs"})}>
      Ajouter au panier  <i className='fa-solid fa  fa-plus'></i>
      </button>
      
     
    </div>
        </div>
    
<div></div> 
      </div>
    
      </> )
      })}      </Slider>)}
        
      
      
    </>
  )
}

export default TopCart