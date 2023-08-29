import React, { useEffect, useState } from "react"
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import { editDocumentE, editDocumentI, editDocumentP, editDocumentU, getCommande, useGetCustomersQuery, useGetDocumentQuery, useGetUtilisateursQuery } from '../../state/api'
import { Link } from "react-router-dom";
const AcheterCart = ({  user  }) => {

  const userss = useGetUtilisateursQuery();
  const users =userss.data
  const [count, setCount] = useState(0);
  const [Achats, setAchats] = useState();

useEffect(() => {
  const loadMediaDetails = async() => {
      const response = await getCommande(user._id);
      setAchats(response.data);

  }
  loadMediaDetails();
}, []);

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
    {Achats == undefined  ? (<>Loading....</>) : (<>{Achats.map((shopItems, index) => {
        return (<>{shopItems.product.map((shopItem, index) => { 
          return (<>
        {shopItem.typeP == "document" && (<> {shopItem.prixF == shopItem.prixLecture ?(<>  <div className='cart-list product d_flex' key={shopItem._id}>
        <div className='img'>
        {users == undefined  ? (<>sxxdd</>) : (<>{users.map((user) => {return( <>    {shopItem.auteur == user._id ? (  <>   <img  src={user.image} alt='' />   
     <div className=' d_flex'>
        <Badge badgeContent={shopItem.interessant + count} color="primary" style={{marginTop:"5px"}}>
        <Avatar alt="interessant" src="./images/interessant.png"   sx={{ width: 35, height: 35 }} onClick={ () => handleFormSubmit(shopItem._id, {interessant: shopItem.interessant + 1} )}/>
</Badge> <Badge badgeContent={shopItem.utile} color="primary" style={{marginTop:"5px"}}>
        <Avatar alt="utile" src="./images/util.png"   sx={{ width: 35, height: 35 }}  onClick={ () => handleFormSubmitU(shopItem._id, {utile: shopItem.utile + 1} )} />
</Badge>
<Badge badgeContent={shopItem.excellent + count} color="primary" style={{marginTop:"5px"}}>
        <Avatar alt="excellent" src="./images/ex.png"  sx={{ width: 35, height: 35 }}  onClick={ () => handleFormSubmitE(shopItem._id, {excellent: shopItem.excellent + 1} )} />
</Badge>
<Badge badgeContent={shopItem.pasvraiment + count} color="primary" style={{marginTop:"5px"}}>
        <Avatar alt="pas vraiment" src="./images/sm.png"  sx={{ width: 35, height: 35 }}  onClick={ () => handleFormSubmitP(shopItem._id, {pasvraiment: shopItem.pasvraiment + 1} )} />
</Badge></div><div className='product-like'>{user.approved == true ?(<img  style={{height:"40px", width:"40px"}} src="./images/checked.png"/>):(<></>)}
              
              
              </div>   
          </> ):
          (<></>)}</> ) })}</>)} 

      


        </div>
        <div className='cart-details' style={{marginLeft: "-350px" , width:"250px"}}>
          <h4  style={{ fontSize:"15px"}}>Titre du document : {shopItem.titre}</h4>
          
        
          {users == undefined  ? (<>sxxdd</>) : (<>{users.map((user) => {return( <>    {shopItem.auteur == user._id ? (     <h4 style={{ fontSize:"15px"}}>  Auteur : {user.name} </h4> ):
          (<></>)}</> ) })}</>)}
        
          <h4 style={{color:"grey" , fontWeight:"300", fontSize:"15px"}}>  {shopItem.type}</h4>
         
          <h4 style={{color:"grey" , fontWeight:"300"}}>  {shopItem.universite}</h4>
          <h4 style={{color:"grey" , fontWeight:"300"}}>  {shopItem.description}</h4>
          <br/>

      <div className='cartControl d_flex'>

      <button className='incCart ' >
      <Link  to={`/detail/${shopItem._id}`}>
   Voir plus  <i className='fa-solid fa  fa-plus'></i></Link>
      </button>
      
     
    </div>
        </div>
       
<div></div> 

   
      </div></>):(<><div className='cart-list product d_flex' key={shopItem._id}>
        <div className='img'>
        {users == undefined  ? (<>sxxdd</>) : (<>{users.map((user) => {return( <>    {shopItem.auteur == user._id ? (  <>   <img  src={user.image} alt='' />   
     <div className=' d_flex'>
        <Badge badgeContent={shopItem.interessant + count} color="primary" style={{marginTop:"5px"}}>
        <Avatar alt="interessant" src="./images/interessant.png"   sx={{ width: 35, height: 35 }} onClick={ () => handleFormSubmit(shopItem._id, {interessant: shopItem.interessant + 1} )}/>
</Badge> <Badge badgeContent={shopItem.utile} color="primary" style={{marginTop:"5px"}}>
        <Avatar alt="utile" src="./images/util.png"   sx={{ width: 35, height: 35 }}  onClick={ () => handleFormSubmitU(shopItem._id, {utile: shopItem.utile + 1} )} />
</Badge>
<Badge badgeContent={shopItem.excellent + count} color="primary" style={{marginTop:"5px"}}>
        <Avatar alt="excellent" src="./images/ex.png"  sx={{ width: 35, height: 35 }}  onClick={ () => handleFormSubmitE(shopItem._id, {excellent: shopItem.excellent + 1} )} />
</Badge>
<Badge badgeContent={shopItem.pasvraiment + count} color="primary" style={{marginTop:"5px"}}>
        <Avatar alt="pas vraiment" src="./images/sm.png"  sx={{ width: 35, height: 35 }}  onClick={ () => handleFormSubmitP(shopItem._id, {pasvraiment: shopItem.pasvraiment + 1} )} />
</Badge></div><div className='product-like'>{user.approved == true ?(<img  style={{height:"40px", width:"40px"}} src="./images/checked.png"/>):(<></>)}
              
              
              </div>   
          </> ):
          (<></>)}</> ) })}</>)} 

      


        </div>
        <div className='cart-details' style={{marginLeft: "-350px" , width:"250px"}}>
          <h4  style={{ fontSize:"15px"}}>Titre du document : {shopItem.titre}</h4>
       
        
          {users == undefined  ? (<>sxxdd</>) : (<>{users.map((user) => {return( <>    {shopItem.auteur == user._id ? (     <h4 style={{ fontSize:"15px"}}>  Auteur : {user.name} </h4> ):
          (<></>)}</> ) })}</>)}
        
          <h4 style={{color:"grey" , fontWeight:"300", fontSize:"15px"}}>  {shopItem.type}</h4>
         
          <h4 style={{color:"grey" , fontWeight:"300"}}>  {shopItem.universite}</h4>
          <h4 style={{color:"grey" , fontWeight:"300"}}>  {shopItem.description}</h4>
          <br/>

      <div className='cartControl d_flex'>

      <button className='incCart ' >
      <a href={document}   download="document.pdf">document.pdf</a>
      </button>
      
     
    </div>
        </div>
       
<div></div> 

   
      </div></>) }
        
         </>
         
         ) }
           {shopItem.typeP == "video" && (<>  <div className='cart-list product d_flex' key={shopItem._id}>
        <div className='img'>
        {users == undefined  ? (<>sxxdd</>) : (<>{users.map((user) => {return( <>    {shopItem.auteur == user._id ? (  <>   <img  src={user.image} alt='' />   
     <div className=' d_flex'>
        <Badge badgeContent={shopItem.interessant + count} color="primary" style={{marginTop:"5px"}}>
        <Avatar alt="interessant" src="./images/interessant.png"   sx={{ width: 35, height: 35 }} onClick={ () => handleFormSubmit(shopItem._id, {interessant: shopItem.interessant + 1} )}/>
</Badge> <Badge badgeContent={shopItem.utile} color="primary" style={{marginTop:"5px"}}>
        <Avatar alt="utile" src="./images/util.png"   sx={{ width: 35, height: 35 }}  onClick={ () => handleFormSubmitU(shopItem._id, {utile: shopItem.utile + 1} )} />
</Badge>
<Badge badgeContent={shopItem.excellent + count} color="primary" style={{marginTop:"5px"}}>
        <Avatar alt="excellent" src="./images/ex.png"  sx={{ width: 35, height: 35 }}  onClick={ () => handleFormSubmitE(shopItem._id, {excellent: shopItem.excellent + 1} )} />
</Badge>
<Badge badgeContent={shopItem.pasvraiment + count} color="primary" style={{marginTop:"5px"}}>
        <Avatar alt="pas vraiment" src="./images/sm.png"  sx={{ width: 35, height: 35 }}  onClick={ () => handleFormSubmitP(shopItem._id, {pasvraiment: shopItem.pasvraiment + 1} )} />
</Badge></div><div className='product-like'>{user.approved == true ?(<img  style={{height:"40px", width:"40px"}} src="./images/checked.png"/>):(<></>)}
              
              
              </div>   
          </> ):
          (<></>)}</> ) })}</>)} 

      


        </div>
        <div className='cart-details' style={{marginLeft: "-350px" , width:"250px"}}>
          <h4  style={{ fontSize:"15px"}}>Titre du video : {shopItem.name}</h4>
          
        
          {users == undefined  ? (<>sxxdd</>) : (<>{users.map((user) => {return( <>    {shopItem.auteur == user._id ? (     <h4 style={{ fontSize:"15px"}}>  Auteur : {user.name} </h4> ):
          (<></>)}</> ) })}</>)}
        
          <h4 style={{color:"grey" , fontWeight:"300", fontSize:"15px"}}>  {shopItem.type}</h4>
         
          <h4 style={{color:"grey" , fontWeight:"300"}}>  {shopItem.universite}</h4>
          <h4 style={{color:"grey" , fontWeight:"300"}}>  {shopItem.description}</h4>
          <br/>

      <div className='cartControl d_flex'>
      <Link  to={`/detailVideo/${shopItem._id}`}>
 <button className='incCart ' >
   Voir plus  <i className='fa-solid fa  fa-plus'></i>
      </button>
      </Link>
     
    </div>
        </div>
       
<div></div> 

   
      </div>
        
         </>
         
         ) } {shopItem.typeP == "packs" && (<>  <div className='cart-list product d_flex' key={shopItem._id}>
         <div className='img'>
         {users == undefined  ? (<>sxxdd</>) : (<>{users.map((user) => {return( <>    {shopItem.auteur == user._id ? (  <>   <img  src={user.image} alt='' />   
      <div className=' d_flex'>
         <Badge badgeContent={shopItem.interessant + count} color="primary" style={{marginTop:"5px"}}>
         <Avatar alt="interessant" src="./images/interessant.png"   sx={{ width: 35, height: 35 }} onClick={ () => handleFormSubmit(shopItem._id, {interessant: shopItem.interessant + 1} )}/>
 </Badge> <Badge badgeContent={shopItem.utile} color="primary" style={{marginTop:"5px"}}>
         <Avatar alt="utile" src="./images/util.png"   sx={{ width: 35, height: 35 }}  onClick={ () => handleFormSubmitU(shopItem._id, {utile: shopItem.utile + 1} )} />
 </Badge>
 <Badge badgeContent={shopItem.excellent + count} color="primary" style={{marginTop:"5px"}}>
         <Avatar alt="excellent" src="./images/ex.png"  sx={{ width: 35, height: 35 }}  onClick={ () => handleFormSubmitE(shopItem._id, {excellent: shopItem.excellent + 1} )} />
 </Badge>
 <Badge badgeContent={shopItem.pasvraiment + count} color="primary" style={{marginTop:"5px"}}>
         <Avatar alt="pas vraiment" src="./images/sm.png"  sx={{ width: 35, height: 35 }}  onClick={ () => handleFormSubmitP(shopItem._id, {pasvraiment: shopItem.pasvraiment + 1} )} />
 </Badge></div><div className='product-like'>{user.approved == true ?(<img  style={{height:"40px", width:"40px"}} src="./images/checked.png"/>):(<></>)}
               
               
               </div>   
           </> ):
           (<></>)}</> ) })}</>)} 
 
       
 
 
         </div>
         <div className='cart-details' style={{marginLeft: "-350px" , width:"250px"}}>
           <h4  style={{ fontSize:"15px"}}>Titre du video : {shopItem.title}</h4>
          
         
           {users == undefined  ? (<>sxxdd</>) : (<>{users.map((user) => {return( <>    {shopItem.auteur == user._id ? (     <h4 style={{ fontSize:"15px"}}>  Auteur : {user.name} </h4> ):
           (<></>)}</> ) })}</>)}
         
           <h4 style={{color:"grey" , fontWeight:"300", fontSize:"15px"}}>  {shopItem.type}</h4>
          
           <h4 style={{color:"grey" , fontWeight:"300"}}>  {shopItem.universite}</h4>
           <h4 style={{color:"grey" , fontWeight:"300"}}>  {shopItem.description}</h4>
           <br/>
 
       <div className='cartControl d_flex'>
       <Link  to={`/detailPack/${shopItem._id}`}>
       <button className='incCart ' >
  
    Voir plus  <i className='fa-solid fa  fa-plus'></i>
       </button>
       </Link>
      
     </div>
         </div>
        
 <div></div> 
 
    
       </div>
         
          </>
          
          ) }</>)})}</>  )
      })} </>)}
      
    </>
  )
}

export default AcheterCart