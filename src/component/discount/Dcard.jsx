import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import "../newarrivals/style.css"
import { useGetMediaQuery, useGetUtilisateursQuery } from "../../state/api"

const Dcard = ({addToCart}) => {
  const { data } = useGetMediaQuery();
  const userss = useGetUtilisateursQuery();
  const users =userss.data
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <> 

      {data === undefined  ? (<>Loading....</>) : (        <Slider {...settings}>  {data.map((value, index) => {
          return (
            <>
              <div className='box product d_flex' key={index}>
                <div className='img'>
                {users === undefined  ? (<>sxxdd</>) : (<>{users.map((user) => {return( <>    {value.auteur === user._id && (  
                <>   <img style ={{width:"170px", height:"140px"}} src={user.image} alt='' />   </>)}</>)})}</>)}
      
                </div>
                <div className='cart-details' style={{width:"200px"}}> 
          <h4  style={{ fontSize:"15px"}}>{value.name}</h4>
   
          {users === undefined  ? (<>sxxdd</>) : (<>{users.map((user) => {return( <>    {value.auteur === user._id ? (     <h4 style={{ fontSize:"15px"}}>  Auteur : {user.name}</h4> ):
          (<></>)}</> ) })}</>)}
    
       
       
      <div className='price'>
      <h4 style={{ fontSize:"15px"}}>Prix du  video: {value.prix}dt</h4>
       
        {/* step : 3  
           if hami le button ma click garryo bahne 
          */}
      </div>
      <div className='price'>
      <h4 style={{ fontSize:"15px"}}>Période du  video: {value.period} mois</h4>
       
        {/* step : 3  
           if hami le button ma click garryo bahne 
          */}
      </div>
 
 
      <div className='cartControl d_flex'>
      
      <button className='incCart ' onClick={() => addToCart({...value , typeP:"video"})}>
      Ajouter au panier  <i className='fa-solid fa  fa-plus'></i>
      </button>
      
     
    </div>
        </div>
              </div>
            </>
          )
        })}   </Slider>)}
    
    </>
  )
}

export default Dcard