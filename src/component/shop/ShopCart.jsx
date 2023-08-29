import React, { useState } from "react"
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import { editDocumentE, editDocumentI, editDocumentP, editDocumentU, useGetCustomersQuery, useGetDocumentQuery, useGetUtilisateursQuery } from '../../state/api'
const ShopCart = ({ shopItems, addToCart }) => {
  const { data, isLoading } = useGetDocumentQuery();
  const userss = useGetUtilisateursQuery();
  const users =userss.data
  const [count, setCount] = useState(0);
  const handleFormSubmit = async(id,document1) => {

  setCount(1)
    await editDocumentI(id, document1 );
  
  };
  const handleFormSubmitU = async(id,document1) => {
 
    setCount(1)
      await editDocumentU(id, document1 );
    
    };
    const handleFormSubmitE = async(id,document1) => {
    
      setCount(1)
        await editDocumentE(id, document1 );
      
      };
      const handleFormSubmitP = async(id,document1) => {

        setCount(1)
          await editDocumentP(id, document1 );
        
        };
            
  return (
    <>    
    {data == undefined  ? (<>Loading....</>) : (<>{data.map((shopItems, index) => {
        return (
        <>  {shopItems.statue == "etudiant" ? ( <div className='cart-list product d_flex' key={shopItems._id}>
        <div className='img'>
        {users == undefined  ? (<>sxxdd</>) : (<>{users.map((user) => {return( <>    {shopItems.auteur == user._id ? (  <>   <img src={user.image} alt='' />   
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
</Badge></div><div className='product-like'>{user.approved == true ?(<img  style={{height:"40px", width:"40px"}} src="./images/checked.png"/>):(<></>)}
              
              
              </div>   
          </> ):
          (<></>)}</> ) })}</>)}
      


        </div>
        <div className='cart-details'>
          <h4  style={{ fontSize:"15px"}}>Titre du document : {shopItems.titre}</h4>
  
          {users == undefined  ? (<>sxxdd</>) : (<>{users.map((user) => {return( <>    {shopItems.auteur == user._id ? (     <h4 style={{ fontSize:"15px"}}>  Auteur : {user.name} </h4> ):
          (<></>)}</> ) })}</>)}
        
          <h4 style={{color:"grey" , fontWeight:"300", fontSize:"15px"}}>  {shopItems.type}</h4>
         
          <h4 style={{color:"grey" , fontWeight:"300"}}>  {shopItems.universite}</h4>
       
      <div className='price'>
      <h4 style={{ fontSize:"15px"}}>Prix de lecture : {shopItems.prixLecture}dt / {shopItems.period} mois</h4>
       
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
      
      <button className='incCart ' onClick={() => addToCart({...shopItems , typeP:"document", prixF:""})}>
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
                  {users == undefined  ? (<>sxxdd</>) : (<>{users.map((user) => {return( <>    {shopItems.auteur == user._id ? (      <>   <img src={user.image} alt='' />   
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
              
              
          </div>   </>  ):
                    (<></>)}</> ) })}</>)}
              
                  </div>
                  <div className='cart-details'>
                    <h4  style={{ fontSize:"15px"}}>Titre du document : {shopItems.titre}</h4>
                   
                    {users == undefined  ? (<>sxxdd</>) : (<>{users.map((user) => {return( <>    {shopItems.auteur == user._id ? (     <h4 style={{ fontSize:"15px"}}>  Auteur : {user.name} </h4> ):
                    (<></>)}</> ) })}</>)}
                  
                    <h4 style={{color:"grey" , fontWeight:"300", fontSize:"15px"}}>  {shopItems.type}</h4>
                   
                    <h4 style={{color:"grey" , fontWeight:"300"}}>  {shopItems.universite}</h4>
                 
                <div className='price'>
                <h4 style={{ fontSize:"15px"}}>Prix de lecture : {shopItems.prixLecture}dt  / {shopItems.period} mois </h4>
                 
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
                
                <button className='incCart ' onClick={() => addToCart({...shopItems , typeP:"document", prixF:""})}>
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
        )
      })} </>)}
      
    </>
  )
}

export default ShopCart