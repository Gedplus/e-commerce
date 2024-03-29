import React, { useEffect, useState } from "react"
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {  useParams } from 'react-router-dom';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { editDocumentDE, editDocumentDI, editDocumentDU, editDocumentE, editDocumentI, editDocumentP, editDocumentU, getDocUni, getSearch, useGetDocumentQuery, useGetUtilisateursQuery } from '../../state/api'
import { Button, CardActions } from "@mui/material";
const DocSearchCard = ({ shopItems, addToCart }) => {
  
  const userss = useGetUtilisateursQuery();
  const { id } = useParams();
  console.log("id",id)
  const [isExpanded, setIsExpanded] = useState([]);
  const users =userss.data
  const [count, setCount] = useState(0);
  const [doc, setDoc] = useState([]);
  useEffect(() => {
    const loadUserDetails = async() => {
        const response = await getSearch(id);
  setDoc(response.data)
console.log(response.data)
    }
    loadUserDetails();
  }, []);
  const [likes, setLikes] = useState([]);
  

  const handleFormSubmitD= async(id,document1) => {
    if(isExpanded.includes(id) ) { 
        setIsExpanded((prevState) =>
        prevState.filter((prevItem) => prevItem !== id))
}

else {
    setIsExpanded(isExpanded.concat(id))
}}
const handleFormSubmit = async(id,document1) => {
  console.log("id", id)
      if(likes.includes(id) ) {
       
  
  
        setLikes((prevState) =>
        prevState.filter((prevItem) => prevItem !== id))
        await editDocumentDI(id, document1 );
      }else{
      setLikes(likes.concat(id))
      await editDocumentI(id, document1 );}
  
      
    };
    function formatDate(date) {
      const options = {  month: 'short', year: 'numeric' };
      const formattedDate = new Date(date).toLocaleDateString('en-US', options);
    
      // Split the formatted date into day, month, and year parts
      const [month,  year] = formattedDate.split(' ');
    
      // Convert the month abbreviation to uppercase
    
    
      // Return the formatted date with uppercase month abbreviation and desired format
      return ` ${month} ${year}`;
    }
    
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
        class="size-avatar"
      />
    </Stack> 
        <img src={shopItems.image} alt='' className="size-img" />   
        <div className=' d_flex btn-like-margin'>

        <Stack direction="row" spacing={2} >
      <Button variant="text" startIcon={<>{likes.includes(shopItems._id) ? <ThumbUpAltIcon/> :<ThumbUpOffAltIcon />}</>}   onClick={ () => handleFormSubmit(shopItems._id, {interessant: shopItems.interessant + 1} )}>
     J'aime&nbsp;{likes.includes(shopItems._id) ? shopItems.interessant + 1  : shopItems.interessant }
      </Button>
  
    </Stack>
</div>
<div className='product-like'>{user.approved === true ?(<img  style={{height:"25px", width:"25px"}} className="Aprover" alt="checked" src="./images/checked.png"/>):(<></>)}
              
              
              </div>    
        </div>
      
        <div className='cart-details' >
            <h4  >Titre : {shopItems.titre}</h4>
    
            {users === undefined  ? (<>sxxdd</>) : (<>{users.map((user) => {return( <>    {shopItems.auteur === user._id ? (     <h4 >  Auteur : {user.name} </h4> ):
            (<></>)}</> ) })}</>)}
          
            <h4 style={{color:"grey" , fontWeight:"300"}}>  {shopItems.type} - {formatDate(shopItems.Annee)}</h4>
           
            <h4 style={{color:"grey" , fontWeight:"300"}}>  {shopItems.universite}</h4>
            <CardActions>       <Button
          variant="primary"
       
          fullWidth
          onClick={ () => handleFormSubmitD(shopItems._id )}
        >
       voir la description 
        </Button></CardActions>
        {isExpanded.includes(shopItems._id) ? <p  dangerouslySetInnerHTML={{__html:shopItems.description}}></p>  :<></>} 
 
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
class="size-avatar"
      />
    </Stack>
        <img src={shopItems.image} alt='' className="size-img" />   
        <div className=' d_flex btn-like-margin'>
   
        <Stack direction="row" spacing={2}>
      <Button variant="text" startIcon={<>{likes.includes(shopItems._id) ? <ThumbUpAltIcon/> :<ThumbUpOffAltIcon />}</>}   onClick={ () => handleFormSubmit(shopItems._id, {interessant: shopItems.interessant + 1} )}>
     J'aime&nbsp;{likes.includes(shopItems._id) ? shopItems.interessant + 1  : shopItems.interessant }
      </Button>
  
    </Stack>
</div>
<div className='product-like'>{user.approved === true ?(<img  style={{height:"25px", width:"25px"}} alt="checked" src="./images/checked.png"/>):(<></>)}
              
              
              </div>   
        </div>

        <div className='cart-details' >
            <h4  >Titre  : {shopItems.titre}</h4>
    
            {users === undefined  ? (<>sxxdd</>) : (<>{users.map((user) => {return( <>    {shopItems.auteur === user._id ? (     <h4 >  Auteur : {user.name} </h4> ):
            (<></>)}</> ) })}</>)}
          
            <h4 style={{color:"grey" , fontWeight:"300"}}>  {shopItems.type} - {formatDate(shopItems.Annee)}</h4>
           
            <h4 style={{color:"grey" , fontWeight:"300"}}>  {shopItems.universite}  </h4>
            <CardActions>       <Button
          variant="primary"
       
          fullWidth
          onClick={ () => handleFormSubmitD(shopItems._id )}
        >
       voir la description 
        </Button></CardActions>
        {isExpanded.includes(shopItems._id) ? <p  dangerouslySetInnerHTML={{__html:shopItems.description}}></p>  :<></>} 

       
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

export default DocSearchCard