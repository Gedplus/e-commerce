import React, { useState } from "react"
import { useGetDocumentQuery , editDocumentDE, editDocumentDI, editDocumentDU, editDocumentE, editDocumentI, editDocumentP, editDocumentU ,useGetUtilisateursQuery} from '../../state/api'
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import icon1 from "../../image/icon1.png"
import icon2 from "../../image/icon2.png"
import icon3 from "../../image/icon3.png"
import checked from "../../image/checked.png"
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { Button, CardActions } from "@mui/material";
const MesDocs = ({ shopItems, addToCart,user }) => {
  const { data, isLoading } = useGetDocumentQuery();
  const [likes, setLikes] = useState([]);
  const userss = useGetUtilisateursQuery();
  const [isExpanded, setIsExpanded] = useState([]);
  const users =userss.data

 
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

  return (
    <>    
    {data === undefined  ? (<>Loading....</>) : (<>{data.map((shopItems, index) => { 
        return (
        <>  {user._id === shopItems.auteur && (<>
        
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


        <Stack direction="row" spacing={2} style={{marginLeft: "25px"}}>
      <Button variant="outlined" startIcon={<ThumbUpOffAltIcon />}  onClick={ () => handleFormSubmit(shopItems._id, {interessant: shopItems.interessant + 1} )}>
     J'aime   {likes.includes(shopItems._id) ? shopItems.interessant + 1  : shopItems.interessant }
      </Button>
  
    </Stack>
</div>
<div className='product-like'>{user.approved === true ?(<img  style={{height:"25px", width:"25px"}} className="Aprover" alt="checked" src={checked} />):(<></>)}
              
              
              </div>    
        </div>
      
        <div className='cart-details' >
            <h4  >Titre : {shopItems.titre}</h4>
    
            {users === undefined  ? (<>sxxdd</>) : (<>{users.map((user) => {return( <>    {shopItems.auteur === user._id ? (     <h4 >  Auteur : {user.name} </h4> ):
            (<></>)}</> ) })}</>)}
          
            <h4 style={{color:"grey" , fontWeight:"300"}}>  {shopItems.type} - {shopItems.Annee}</h4>
           
            <h4 style={{color:"grey" , fontWeight:"300"}}>  {shopItems.universite}</h4>
            <CardActions>       <Button
          variant="primary"
       
          fullWidth
          onClick={ () => handleFormSubmitD(shopItems._id )}
        >
       voir la description 
        </Button></CardActions>
        {isExpanded.includes(shopItems._id) ? <p> {shopItems.description}</p> :<></>}

 
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
   
   
        <Stack direction="row" spacing={2} style={{marginLeft: "25px"}}>
      <Button variant="outlined" startIcon={<ThumbUpOffAltIcon />}  onClick={ () => handleFormSubmit(shopItems._id, {interessant: shopItems.interessant + 1} )}>
     J'aime   {likes.includes(shopItems._id) ? shopItems.interessant + 1  : shopItems.interessant }
      </Button>
  
    </Stack>
</div>
<div className='product-like'>{user.approved === true ?(<img  style={{height:"25px", width:"25px"}} alt="checked" src={checked}/>):(<></>)}
              
              
              </div>   
        </div>

        <div className='cart-details' >
            <h4  >Titre  : {shopItems.titre}</h4>
    
            {users === undefined  ? (<>sxxdd</>) : (<>{users.map((user) => {return( <>    {shopItems.auteur === user._id ? (     <h4 >  Auteur : {user.name} </h4> ):
            (<></>)}</> ) })}</>)}
          
            <h4 style={{color:"grey" , fontWeight:"300"}}>  {shopItems.type} - {shopItems.Annee}</h4>
           
            <h4 style={{color:"grey" , fontWeight:"300"}}>  {shopItems.universite}  </h4>
            <CardActions>       <Button
          variant="primary"
       
          fullWidth
          onClick={ () => handleFormSubmitD(shopItems._id )}
        >
       voir la description 
        </Button></CardActions>
        {isExpanded.includes(shopItems._id) ? <p> {shopItems.description}</p> :<></>}

       
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
      


     
         
         
         
        </> )}
         </>
        
        
        
        
        
        
        
        
        
        )
      })} </>)}
     
    </>
  )
}

export default MesDocs