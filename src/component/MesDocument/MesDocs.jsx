import React, { useState } from "react"
import { useGetDocumentQuery } from '../../state/api'
const MesDocs = ({ shopItems, addToCart,user }) => {
  const { data, isLoading } = useGetDocumentQuery();
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  return (
    <>    
    {data == undefined  ? (<>Loading....</>) : (<>{data.map((shopItems, index) => {
        return ( <> 
            {user._id === shopItems.auteur && (
        <>  {shopItems.statue == "etudiant" ? ( <div className='cart-list product d_flex' key={shopItems._id}>
        <div className='img'>
          <img src={user.image} alt='' /> 
      
           <div className='product-like'>
               <label>{count}</label> <br />
              <i className='fas fa-heart' onClick={increment}></i>
           </div>


        </div>
        <div className='cart-details'>
          <h4  style={{ fontSize:"15px"}}>Titre du document : {shopItems.titre}</h4>
  
        
          <h4 style={{color:"grey" , fontWeight:"300", fontSize:"15px"}}>  {shopItems.type}</h4>
         
          <h4 style={{color:"grey" , fontWeight:"300"}}>  {shopItems.universite}</h4>
       
      <div className='price'>
      <h4 style={{ fontSize:"15px"}}>Prix de lecture : {shopItems.prixLecture}dt</h4>
       
        {/* step : 3  
           if hami le button ma click garryo bahne 
          */}
      </div>
      <div className='price'>
     
        <h4 style={{ fontSize:"15px"}}>Prix de télechargement : {shopItems.prixTelechargement}dt</h4>
        {/* step : 3  
           if hami le button ma click garryo bahne 
          */}
      </div>
      <div className='cartControl d_flex'>
      
      <button className='incCart ' onClick={() => addToCart(shopItems)}>
      Ajouter au panier  <i className='fa-solid fa  fa-plus'></i>
      </button>
      
     
    </div>
        </div>
        <div className='cart-items-function'>
      
          {/* stpe: 5 
          product ko qty lai inc ra des garne
          */}
     
        </div>
<div></div> <div className='cart-item-price'></div>
<div className='cart-item-price'></div>
   
        <div className='cart-item-price'></div>
      </div>):( <div className='cart-list product d_flex' key={shopItems._id} style={{background:"#FBFCFA"}}>
                  <div className='img'>
                <img src={user.image} alt='' />  =
                  
                    <div className='product-like'>
              
                    <img src="./images/badge.png" alt='' style={{height:"40px", width:"40px"}} />
                </div>
                <div className='product-like' style={{marginTop:"60px",marginLeft:"205px"}}>
               <label>{count}</label> <br />
              <i className='fas fa-heart' onClick={increment}></i>
           </div>
    
                  </div>
                  <div className='cart-details'>
                    <h4  style={{ fontSize:"15px"}}>Titre du document : {shopItems.titre}</h4>
              
 
                  
                    <h4 style={{color:"grey" , fontWeight:"300", fontSize:"15px"}}>  {shopItems.type}</h4>
                   
                    <h4 style={{color:"grey" , fontWeight:"300"}}>  {shopItems.universite}</h4>
                 
                <div className='price'>
                <h4 style={{ fontSize:"15px"}}>Prix de lecture : {shopItems.prixLecture}dt</h4>
                 
                  {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                </div>
                <div className='price'>
               
                  <h4 style={{ fontSize:"15px"}}>Prix de télechargement : {shopItems.prixTelechargement}dt</h4>
                  {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                </div>
                <div className='cartControl d_flex'>
                
                <button className='incCart ' onClick={() => addToCart(shopItems)}>
                Ajouter au panier  <i className='fa-solid fa  fa-plus'></i>
                </button>
                
               
              </div>
                  </div>
                  <div className='cart-items-function'>
                
                    {/* stpe: 5 
                    product ko qty lai inc ra des garne
                    */}
               
                  </div>
<div></div> <div className='cart-item-price'></div>
<div className='cart-item-price'></div>
             
                  <div className='cart-item-price'></div>
                </div>)}
         </>
            )}</>)
      })} </>)}
      
    </>
  )
}

export default MesDocs