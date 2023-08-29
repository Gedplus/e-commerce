import React, { useState } from "react"
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';

import { useGetCustomersQuery, useGetMediaQuery, useGetUtilisateursQuery,useGetPackQuery } from '../../state/api'
const PackCart = ({ shopItems, addToCart }) => {
  const { data, isLoading } = useGetPackQuery();
  const userss = useGetUtilisateursQuery();
  const users =userss.data
  const [count, setCount] = useState(0) 
  const increment = () => {
    setCount(count + 1)
  }
  

  return (
    <>   
    {data == undefined  ? (<>Loading....</>) : (<>{data.map((shopItems, index) => {
        return (
        <>  <div className='cart-list product d_flex' key={shopItems._id}>
        <div className='img'>
      <img style ={{width:"170px", height:"140px"}} src={shopItems.image} alt='' />   
     <div className=' d_flex'>
        <Badge badgeContent={4} color="primary" style={{marginTop:"5px", marginLeft:"-5px"}}>
        <Avatar alt="Remy Sharp" src="./images/interessant.png"   sx={{ width: 30, height: 30 }} onClick={increment}/>
</Badge> <Badge badgeContent={4} color="primary" style={{marginTop:"5px", marginLeft:"-5px"}}>
        <Avatar alt="Remy Sharp" src="./images/util.png"   sx={{ width: 30, height: 30 }} onClick={increment}/>
</Badge>
<Badge badgeContent={4} color="primary" style={{marginTop:"5px" ,marginLeft:"-5px"}}>
        <Avatar alt="Remy Sharp" src="./images/ex.png"  sx={{ width: 30, height: 30  }}  onClick={increment}/>
</Badge>
<Badge badgeContent={4} color="primary" style={{marginTop:"5px" ,marginRight:"35px"}}>
        <Avatar alt="Remy Sharp" src="./images/ex.png"  sx={{ width: 30, height: 30 }}  onClick={increment}/>
</Badge></div>
        

        </div>
        <div className='cart-details'>
          <h4  style={{ fontSize:"15px"}}>Titre du pack videos : {shopItems.title}</h4>
        

          <h4 style={{color:"grey" , fontWeight:"300", fontSize:"15px"}}>  {shopItems.description}</h4>
       
       
      <div className='price'>
      <h4 style={{ fontSize:"15px"}}>Prix du  pack videos : {shopItems.prix}dt</h4>
       
        {/* step : 3  
           if hami le button ma click garryo bahne 
          */}
      </div>
      <div className='price'>
      <h4 style={{ fontSize:"15px"}}>Période du  pack videos : {shopItems.period} mois</h4>
       
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
         </>
        )
      })} </>)}
      
    </>
  )
}

export default PackCart