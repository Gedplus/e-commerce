import React, { useState } from "react"
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import { editMediaE, editMediaI, editMediaP, editMediaU, useGetCustomersQuery, useGetMediaQuery, useGetUtilisateursQuery } from '../../state/api'
const VideosCart = ({ shopItems, addToCart }) => {
  const { data, isLoading } = useGetMediaQuery();
  const userss = useGetUtilisateursQuery();
  const users =userss.data
  const [count, setCount] = useState(0);
  const handleFormSubmit = async(id,document1) => {

  setCount(1)
    await editMediaI(id, document1 );
  
  };
  const handleFormSubmitU = async(id,document1) => {

    setCount(1)
      await editMediaU(id, document1 );
    
    };
    const handleFormSubmitE = async(id,document1) => {
    
      setCount(1)
        await editMediaE(id, document1 );
      
      };
      const handleFormSubmitP = async(id,document1) => {
 
        setCount(1)
          await editMediaP(id, document1 );
        
        };
  

  return (
    <>   
    {data == undefined  ? (<>Loading....</>) : (<>{data.map((shopItems, index) => {
        return (
        <>  <div className='cart-list product d_flex' key={shopItems._id}>
        <div className='img'>
        {users == undefined  ? (<>sxxdd</>) : (<>{users.map((user) => {return( <>    {shopItems.auteur == user._id ? (  <>   <img style ={{width:"170px", height:"140px"}} src={user.image} alt='' />   
        <div className=' d_flex'>
        <Badge badgeContent={shopItems.interessant + count} color="primary" style={{marginTop:"5px"}}>
        <Avatar alt="interessant" src="./images/interessant.png"   sx={{ width: 35, height: 35 }} onClick={ () => handleFormSubmit(shopItems._id, {interessant: shopItems.interessant + 1} )}/>
</Badge> <Badge badgeContent={shopItems.utile} color="primary" style={{marginTop:"5px"}}>
        <Avatar alt="utile" src="./images/util.png"   sx={{ width: 35, height: 35 }}  onClick={ () => handleFormSubmitU(shopItems._id, {utile: shopItems.utile + 1} )} />
</Badge>
<Badge badgeContent={shopItems.excellent + count} color="primary" style={{marginTop:"5px"}}>
        <Avatar alt="excellent" src="./images/ex.png"  sx={{ width: 35, height: 35 }}  onClick={ () => handleFormSubmitE(shopItems._id, {excellent: shopItems.excellent + 1} )} />
</Badge>
<Badge badgeContent={shopItems.pasvraiment + count} color="primary" style={{marginTop:"5px"}}>
        <Avatar alt="pas vraiment" src="./images/sm.png"  sx={{ width: 35, height: 35 }}  onClick={ () => handleFormSubmitP(shopItems._id, {pasvraiment: shopItems.pasvraiment + 1} )} />
</Badge></div>
<div className='product-like'>{user.approved == true ?(<img  style={{height:"40px", width:"40px"}} src="./images/checked.png"/>):(<></>)}
              
              
          </div>   
          </> ):
          (<></>)}</> ) })}</>)}
       


        </div>
        <div className='cart-details'>
          <h4  style={{ fontSize:"15px"}}>Titre du video : {shopItems.name}</h4>
         
          {users == undefined  ? (<>sxxdd</>) : (<>{users.map((user) => {return( <>    {shopItems.auteur == user._id ? (     <h4 style={{ fontSize:"15px"}}>  Auteur : {user.name} </h4> ):
          (<></>)}</> ) })}</>)}
        
          <h4 style={{color:"grey" , fontWeight:"300", fontSize:"15px"}}>  {shopItems.description}</h4>
       
       
      <div className='price'>
      <h4 style={{ fontSize:"15px"}}>Prix du  video: {shopItems.prix}dt</h4>
       
        {/* step : 3  
           if hami le button ma click garryo bahne 
          */}
      </div>
      <div className='price'>
      <h4 style={{ fontSize:"15px"}}>Période du  video: {shopItems.period} mois</h4>
       
        {/* step : 3  
           if hami le button ma click garryo bahne 
          */}
      </div>
 
 
      <div className='cartControl d_flex'>
      
      <button className='incCart ' onClick={() => addToCart({...shopItems , typeP:"video"})}>
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
      </div>
         </>
        )
      })} </>)}
      
    </>
  )
}

export default VideosCart