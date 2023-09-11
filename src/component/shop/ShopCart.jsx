import React, { useState } from "react"
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import { editDocumentE, editDocumentI, editDocumentP, editDocumentU, useGetDocumentQuery, useGetUtilisateursQuery } from '../../state/api'
const ShopCart = ({ shopItems, addToCart }) => {
  const { data } = useGetDocumentQuery();
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
    {data === undefined  ? (<>Loading....</>) : (<>{data.map((shopItems, index) => { 
        return (
        <> 
        {users === undefined  ? (<>sxxdd</>) : (<> {shopItems.accepte === true && (<>
        
        {users.map((user) => {return( <>    {shopItems.auteur === user._id ? ( <>
          
          {user.statue === "etudiant" ?(
          
          
          
          <div className='cart-list product d_flex' key={shopItems._id} >
        <div className='img'>
        <Stack direction="row" spacing={6}  className="profile">
      <Avatar
        alt="Remy Sharp"
        src={user.image}
        sx={{ width: 56, height: 56 }}
      />
    </Stack>
        <img src={shopItems.image} alt='' />   
<div className='product-like'>{user.approved === true ?(<img  style={{height:"25px", width:"25px"}} alt="checked" src="./images/checked.png"/>):(<></>)}
              
              
              </div>   
        </div>
      
        <div className='cart-details' >
            <h4  style={{ fontSize:"15px"}}>Titre : {shopItems.titre}</h4>
    
            {users === undefined  ? (<>sxxdd</>) : (<>{users.map((user) => {return( <>    {shopItems.auteur === user._id ? (     <h4 style={{ fontSize:"15px"}}>  Auteur : {user.name} </h4> ):
            (<></>)}</> ) })}</>)}
          
            <h4 style={{color:"grey" , fontWeight:"300", fontSize:"15px"}}>  {shopItems.type} - {shopItems.Annee}</h4>
           
            <h4 style={{color:"grey" , fontWeight:"300"}}>  {shopItems.universite}</h4>
         <br/>
 
        <button class="button-82-pushable" role="button" onClick={() => addToCart({...shopItems , typeP:"document", prixF:`${shopItems.prixLecture}`})}>
  <span class="button-82-shadow"></span>
  <span class="button-82-edge"></span>
  <span class="button-82-front text">
    Consulter pendant <br/> {shopItems.period} mois / {shopItems.prixLecture} TND
  </span>
</button>
<button class="button-82-pushable1" role="button" onClick={() => addToCart({...shopItems , typeP:"document", prixF:`${shopItems.prixTelechargement}`})} >
  <span class="button-82-shadow1"></span>
  <span class="button-82-edge1"></span>
  <span class="button-82-front1 text1">
   Télécharger <br/> {shopItems.prixTelechargement} TND
  </span>
</button>
     
          </div>
 
  <div></div> 
  



        </div>):(   <div className='cart-list product d_flex' key={shopItems._id} style={{background:"#d8e5eb"}}>
        <div className='img'>
        <Stack direction="row" spacing={6}  className="profile">
      <Avatar
        alt="Remy Sharp"
        src={user.image}
        sx={{ width: 56, height: 56 }}
      />
    </Stack>
        <img src={shopItems.image} alt='' />   
        <div className=' d_flex'>
        <Badge badgeContent={shopItems.interessant + count} color="primary" style={{marginTop:"5px"}}>
        <Avatar alt="interessant" src="./images/icon3.png"   sx={{ width: 35, height: 35 }} onClick={ () => handleFormSubmit(shopItems._id, {interessant: shopItems.interessant + 1} )}/>
</Badge> <Badge badgeContent={shopItems.utile} color="primary" style={{marginTop:"5px"}}>
        <Avatar alt="utile" src="./images/icon1.png"   sx={{ width: 35, height: 35 }}  onClick={ () => handleFormSubmitU(shopItems._id, {utile: shopItems.utile + 1} )} />
</Badge>
<Badge badgeContent={shopItems.excellent + count} color="primary" style={{marginTop:"5px"}}>
        <Avatar alt="excellent" src="./images/icon2.png"  sx={{ width: 35, height: 35 }}  onClick={ () => handleFormSubmitE(shopItems._id, {excellent: shopItems.excellent + 1} )} />
</Badge>
</div>
<div className='product-like'>{user.approved === true ?(<img  style={{height:"25px", width:"25px"}} alt="checked" src="./images/checked.png"/>):(<></>)}
              
              
              </div>   
        </div>

        <div className='cart-details' >
            <h4  style={{ fontSize:"15px"}}>Titre  : {shopItems.titre}</h4>
    
            {users === undefined  ? (<>sxxdd</>) : (<>{users.map((user) => {return( <>    {shopItems.auteur === user._id ? (     <h4 style={{ fontSize:"15px"}}>  Auteur : {user.name} </h4> ):
            (<></>)}</> ) })}</>)}
          
            <h4 style={{color:"grey" , fontWeight:"300", fontSize:"15px"}}>  {shopItems.type} - {shopItems.Annee}</h4>
           
            <h4 style={{color:"grey" , fontWeight:"300"}}>  {shopItems.universite}  </h4>
         <br/>
       
        <button class="button-82-pushable" role="button" onClick={() => addToCart({...shopItems , typeP:"document", prixF:`${shopItems.prixLecture}`})}>
  <span class="button-82-shadow"></span>
  <span class="button-82-edge"></span>
  <span class="button-82-front text">
    Consulter pendant <br/> {shopItems.period} mois / {shopItems.prixLecture} TND
  </span>
</button>
<button class="button-82-pushable1" role="button" onClick={() => addToCart({...shopItems , typeP:"document", prixF:`${shopItems.prixTelechargement}`})} >
  <span class="button-82-shadow1"></span>
  <span class="button-82-edge1"></span>
  <span class="button-82-front1 text1">
   Télécharger <br/> {shopItems.prixTelechargement} TND
  </span>
</button>
          </div>
          <div className='cart-items-function'>
        
            {/* stpe: 5 
            product ko qty lai inc ra des garne
            */}
       
          </div>
  <div></div> 
  



        </div>)}</> ) :(<>














    </>)}</>)})}
        
        
        
        
        
        </>

        
        )
        
        
        
        
        
        
        
        
        
        
        
        
        
        } </>)}
      


     
         </>
        )
      })} </>)}
     
    </>
  )
}

export default ShopCart