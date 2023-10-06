import React, { useEffect, useState } from "react"
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {  useParams } from 'react-router-dom';
import { editDocumentDE, editDocumentDI, editDocumentDU, editDocumentE, editDocumentI, editDocumentP, editDocumentU, getDocType, getDocUni, useGetDocumentQuery, useGetUtilisateursQuery } from '../../state/api'
const DocTypeCard = ({ shopItems, addToCart }) => {
  
  const userss = useGetUtilisateursQuery();
  const { id } = useParams();
  console.log("id",id)
  const users =userss.data
  const [count, setCount] = useState(0);
  const [doc, setDoc] = useState([]); 
  useEffect(() => {
    const loadUserDetails = async() => {
        const response = await getDocType(id);
  setDoc(response.data)
console.log(response.data)
    }
    loadUserDetails();
  }, []);
  const [likes, setLikes] = useState([]);
 

  const [likesE, setLikesE] = useState([]);
  
  const [likesI, setLikesI] = useState([]);
  const handleFormSubmit = async(id,document1) => {
console.log("id", id)
    if(likes.includes(id) ) {
     


      setLikes((prevState) =>
      prevState.filter((prevItem) => prevItem !== id))
      await editDocumentDI(id, document1 );
    }else{
      if(likesE.includes(id)){
        setLikesE((prevState) =>
          prevState.filter((prevItem) => prevItem !== id))
           editDocumentDE(id, document1 );
          setLikes(likes.concat(id))

          await editDocumentI(id, document1 );
      }
      else if(likesI.includes(id)) {
        setLikesI((prevState) =>
        prevState.filter((prevItem) => prevItem !== id))
         editDocumentDU(id, document1 );
        setLikes(likes.concat(id))
        await editDocumentI(id, document1 );
      }
      else
    {  setLikes(likes.concat(id))}
    await editDocumentI(id, document1 );

      
    }

  
  };
  const handleFormSubmitI = async(id,document1) => {
    console.log("id", id)
        if(likesI.includes(id) ) {
         
    
    
          setLikesI((prevState) =>
          prevState.filter((prevItem) => prevItem !== id))
          await editDocumentDU(id, document1 );
        }else{

          if(likes.includes(id)){
            setLikes((prevState) =>
              prevState.filter((prevItem) => prevItem !== id))
               editDocumentDI(id, document1 );
              setLikesE(likesE.concat(id))
              await editDocumentU(id, document1 );
          }
        else if (likesE.includes(id)) {
          setLikesE((prevState) =>
          prevState.filter((prevItem) => prevItem !== id))
           editDocumentDE(id, document1 );
          setLikesI(likesE.concat(id))
          await editDocumentU(id, document1 );
          }
          else
        {  setLikesI(likesE.concat(id))
          await editDocumentU(id, document1 );}



         
    
      
        }
    
      
      };
      const handleFormSubmitE = async(id,document1) => {
        console.log("id", id)
            if(likesE.includes(id) ) {
             
        
        
              setLikesE((prevState) =>
              prevState.filter((prevItem) => prevItem !== id))
              await editDocumentDE(id, document1 );
            }else{
    
              if(likes.includes(id)){
                setLikes((prevState) =>
                  prevState.filter((prevItem) => prevItem !== id))
                   editDocumentDI(id, document1 );
                  setLikesE(likesE.concat(id))
                  await editDocumentE(id, document1 );
              }
              else if (likesI.includes(id)) {
                setLikesI((prevState) =>
                prevState.filter((prevItem) => prevItem !== id))
                 editDocumentDU(id, document1 );
                setLikesE(likesE.concat(id))
                await editDocumentE(id, document1 );
              }
              else
            {  setLikesE(likesE.concat(id))
              await editDocumentE(id, document1 );}
    
    
    
             
        
          
            }
        
          
          };
    
  return (
    <>    
    {doc === undefined  ? (<>Loading....</>) : (<>{doc.map((shopItems, index) => { 
        return (
        <> 
        {users === undefined  ? (<>sxxdd</>) : (<> {shopItems.accepte === true && (<>
        
        {users.map((user) => {return( <>    {shopItems.auteur === user._id ? ( <>
          
          {user.statue === "etudiant" ?(
          
          
          
          <div className='cart-list product d_flex1' key={shopItems._id} >
        <div className='img'>
        <Stack direction="row" spacing={6}  className="profile">
      <Avatar
        alt="Remy Sharp"
        src={user.image}
        class="sahar"
      />
    </Stack>
        <img src={shopItems.image} alt='' />   
        <div className=' d_flex'>

        <Badge badgeContent={likes.includes(shopItems._id) ? shopItems.interessant + 1  : shopItems.interessant } color="primary" style={{marginTop:"5px"  , zIndex:0}}>
        <Avatar alt="interessant" src="./images/icon3.png"   sx={{ width: 30, height: 30 }} onClick={ () => handleFormSubmit(shopItems._id, {interessant: shopItems.interessant + 1} )}/>
</Badge> <Badge  badgeContent={likesE.includes(shopItems._id) ? shopItems.excellent + 1  : shopItems.excellent }  color="primary" style={{marginTop:"5px"  , zIndex:0}}>
        <Avatar alt="utile" src="./images/icon1.png"   sx={{ width: 30, height: 30 }} onClick={ () => handleFormSubmitE(shopItems._id, {excellent: shopItems.excellent + 1} )}  />
</Badge>
<Badge badgeContent={likesI.includes(shopItems._id) ? shopItems.utile + 1  : shopItems.utile } color="primary" style={{marginTop:"5px" , zIndex:0}} >
        <Avatar alt="excellent" src="./images/icon2.png"  sx={{ width: 30, height: 30}} onClick={ () => handleFormSubmitI(shopItems._id, {utile: shopItems.utile + 1} )}  />
</Badge>
</div>
<div className='product-like'>{user.approved === true ?(<img  style={{height:"25px", width:"25px"}} className="Aprover" alt="checked" src="./images/checked.png"/>):(<></>)}
              
              
              </div>    
        </div>
      
        <div className='cart-details' >
            <h4  >Titre : {shopItems.titre}</h4>
    
            {users === undefined  ? (<>sxxdd</>) : (<>{users.map((user) => {return( <>    {shopItems.auteur === user._id ? (     <h4 >  Auteur : {user.name} </h4> ):
            (<></>)}</> ) })}</>)}
          
            <h4 style={{color:"grey" , fontWeight:"300"}}>  {shopItems.type} - {shopItems.Annee}</h4>
           
            <h4 style={{color:"grey" , fontWeight:"300"}}>  {shopItems.universite}</h4>
            <p> {shopItems.description}</p>

 
        <button class="button-82-pushable" role="button" onClick={() => addToCart({...shopItems , typeP:"document", prixF:`${shopItems.prixLecture}`, typeF:"Lecture"})}>
  <span class="button-82-shadow"></span>
  <span class="button-82-edge"></span>
  <span class="button-82-front text">
    Consulter pendant <br/> {shopItems.period} mois / {shopItems.prixLecture} TND
  </span>
</button>
<button class="button-82-pushable1" role="button" onClick={() => addToCart({...shopItems , typeP:"document", prixF:`${shopItems.prixTelechargement}`, typeF:"Telechargement"})} >
  <span class="button-82-shadow1"></span>
  <span class="button-82-edge1"></span>
  <span class="button-82-front1 text1">
   Télécharger <br/> {shopItems.prixTelechargement} TND
  </span>
</button>
     
          </div>
 
  <div></div> 
  



        </div>):(   <div className='cart-list product d_flex1' key={shopItems._id} style={{background:"#d8e5eb"}}>
        <div className='img'>
        <Stack direction="row" spacing={6}  className="profile">
      <Avatar
        alt="Remy Sharp"
        src={user.image}
class="sahar"
      />
    </Stack>
        <img src={shopItems.image} alt='' />   
        <div className=' d_flex'>
   
        <Badge badgeContent={likes.includes(shopItems._id) ? shopItems.interessant + 1  : shopItems.interessant } color="primary" style={{marginTop:"5px"  , zIndex:0}}>
        <Avatar alt="interessant" src="./images/icon3.png"   sx={{ width: 30, height: 30 }} onClick={ () => handleFormSubmit(shopItems._id, {interessant: shopItems.interessant + 1} )}/>
</Badge> <Badge  badgeContent={likesE.includes(shopItems._id) ? shopItems.excellent + 1  : shopItems.excellent }  color="primary" style={{marginTop:"5px"  , zIndex:0}}>
        <Avatar alt="utile" src="./images/icon1.png"   sx={{ width: 30, height: 30 }} onClick={ () => handleFormSubmitE(shopItems._id, {excellent: shopItems.excellent + 1} )}  />
</Badge>
<Badge badgeContent={likesI.includes(shopItems._id) ? shopItems.utile + 1  : shopItems.utile } color="primary" style={{marginTop:"5px" , zIndex:0}} >
        <Avatar alt="excellent" src="./images/icon2.png"  sx={{ width: 30, height: 30}} onClick={ () => handleFormSubmitI(shopItems._id, {utile: shopItems.utile + 1} )}  />
</Badge>
</div>
<div className='product-like'>{user.approved === true ?(<img  style={{height:"25px", width:"25px"}} alt="checked" src="./images/checked.png"/>):(<></>)}
              
              
              </div>   
        </div>

        <div className='cart-details' >
            <h4  >Titre  : {shopItems.titre}</h4>
    
            {users === undefined  ? (<>sxxdd</>) : (<>{users.map((user) => {return( <>    {shopItems.auteur === user._id ? (     <h4 >  Auteur : {user.name} </h4> ):
            (<></>)}</> ) })}</>)}
          
            <h4 style={{color:"grey" , fontWeight:"300"}}>  {shopItems.type} - {shopItems.Annee}</h4>
           
            <h4 style={{color:"grey" , fontWeight:"300"}}>  {shopItems.universite}  </h4>
            <p> {shopItems.description}</p>

       
        <button class="button-82-pushable" role="button" onClick={() => addToCart({...shopItems , typeP:"document", prixF:`${shopItems.prixLecture}`,typeF:"Lecture"})}>
  <span class="button-82-shadow"></span>
  <span class="button-82-edge"></span>
  <span class="button-82-front text">
    Consulter pendant <br/> {shopItems.period} mois / {shopItems.prixLecture} TND
  </span>
</button>
<button class="button-82-pushable1" role="button" onClick={() => addToCart({...shopItems , typeP:"document", prixF:`${shopItems.prixTelechargement}` , typeF:"Telechargement"})} >
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

export default DocTypeCard