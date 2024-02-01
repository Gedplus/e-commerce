import React, { useEffect, useState } from "react"
import { useGetDocumentQuery , editDocumentDE, editDocumentDI, editDocumentDU, editDocumentE, editDocumentI, editDocumentP, editDocumentU ,useGetUtilisateursQuery, addWishlist} from '../../state/api'
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import icon1 from "../../image/icon1.png"
import icon2 from "../../image/icon2.png"
import icon3 from "../../image/icon3.png"
import checked from "../../image/checked.png"
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { Button, CardActions } from "@mui/material";
const MesDocs = ({ shopItems, addToCart,user }) => {
  const { data, isLoading } = useGetDocumentQuery();
  const [likes, setLikes] = useState([]);
  const userss = useGetUtilisateursQuery();
  const [isExpanded, setIsExpanded] = useState([]);
  const users =userss.data
  const [likes1, setLikes1] = useState([]);
  const [lon1, setlong1] = useState(0);
  const wishlist = user.wishlist
  const [moin, setmoin] = useState([]);
const name = user.name
const idu = user._id
 var long = 0 
  const handleFormSubmitD= async(id,document1) => {
    if(isExpanded.includes(id) ) { 
        setIsExpanded((prevState) =>
        prevState.filter((prevItem) => prevItem !== id))
}

else {
    setIsExpanded(isExpanded.concat(id))
}}
useEffect(() => {
  const loadUserDetails = async() => {
    if(user.wishlist !== undefined )
  {  setLikes(wishlist)}


  }
  loadUserDetails();
}, [wishlist]);


useEffect(() => {
  const loadUserDetails = async() => {
 
  {  setlong1(1)}


  }
  loadUserDetails();
}, [long]);

const handleFormSubmit = async(id,document1) => {

  if(document1.wishlist?.some(usere => usere._id.includes(idu)) && likes.includes(id)  ) {
    console.log("condi 1")

   setmoin(moin.concat(id))


    setLikes((prevState) =>
    prevState.filter((prevItem) => prevItem !== id))
    addWishlist(id, idu)
   } else   if(document1.wishlist?.some(usere => usere._id.includes(idu)) && !likes.includes(id)  && moin.includes(id) ) {
    setmoin((prevState) =>
    prevState.filter((prevItem) => prevItem !== id))

setLikes(likes.concat(id))
     addWishlist(id, idu)
   }else   if(document1.wishlist?.some(usere => usere._id.includes(idu)) && !likes.includes(id)  && !moin.includes(id) ) {
    setmoin(moin.concat(id))
    console.log("condi 2")


     addWishlist(id, idu)
   }
   
   
   
   else   if(!document1.wishlist?.some(usere => usere._id.includes(idu)) && likes.includes(id)  ) {
    setmoin(moin.concat(id))

    console.log("condi 3")

          setLikes((prevState) =>
          prevState.filter((prevItem) => prevItem !== id))
          addWishlist(id, idu)
   }
  
  
  else{
    setLikes(likes.concat(id))
    console.log("condi 4")

addWishlist(id, idu)
}


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
    <>    {console.log(data,'data5')}
    {lon1 === 0 && (<p> Vous ne disposez d'aucun document pour l'instant </p>) }
    {data === undefined  ? (<></>) : (<>{data.map((shopItems, index) => { 
        return (
        <>  {user._id === shopItems.auteur && (<>
     <div style={{display : "none" }}>   {long = long + 1}{console.log(long)}</div>
        {users === undefined  ? (<></>) : (<> {shopItems.accepte === true && (<>
        
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
        <div className=' d_flex btn-like-margin '>

<Stack direction="row"  >
<Button variant="text"  startIcon={<>{(shopItems?.wishlist?.some(usere => usere._id.includes(idu)) && !moin.includes(shopItems._id) )  || likes.includes(shopItems._id)   ? <ThumbUpAltIcon/> :<ThumbUpOffAltIcon />}</>}  onClick={ () => handleFormSubmit(shopItems._id, shopItems )}>
J'aime&nbsp; { (likes.includes(shopItems._id) && !shopItems?.wishlist?.some(usere => usere._id.includes(idu))) ? (<>{shopItems?.wishlist?.length +1  } </>):(shopItems?.wishlist?.some(usere => usere._id.includes(idu) && moin.includes(shopItems._id))) ?(<>{shopItems?.wishlist?.length -1 } </>):(shopItems?.wishlist?.some(usere => usere._id.includes(idu) && likes.includes(shopItems._id))) ?(<>{shopItems?.wishlist?.length } </>):(<>{shopItems?.wishlist?.length} </>) }
</Button>

</Stack>

<div className='boxLike'> 
{shopItems?.wishlist?.map((wish) => {return( <> {(wish?._id == idu && moin.includes(shopItems._id)) || (wish?._id == idu && likes.includes(shopItems._id))?(<></>):(<><div className='box f_flex' key={index}> <span>{wish?.name}</span></div></>)}  
</> )})}
{likes.includes(shopItems._id) && (<div className=' f_flex' key={index}> <span>{name}</span></div>)}
</div>
</div>
<div className='product-like'>{user.approved === true ?(<img  style={{height:"25px", width:"25px"}} className="Aprover" alt="checked" src={checked} />):(<></>)}
              
              
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
        <div className=' d_flex btn-like-margin '>

<Stack direction="row"  >
<Button variant="text"  startIcon={<>{(shopItems?.wishlist?.some(usere => usere._id.includes(idu)) && !moin.includes(shopItems._id) )  || likes.includes(shopItems._id)   ? <ThumbUpAltIcon/> :<ThumbUpOffAltIcon />}</>}  onClick={ () => handleFormSubmit(shopItems._id, shopItems )}>
J'aime&nbsp; { (likes.includes(shopItems._id) && !shopItems?.wishlist?.some(usere => usere._id.includes(idu))) ? (<>{shopItems?.wishlist?.length +1  } </>):(shopItems?.wishlist?.some(usere => usere._id.includes(idu) && moin.includes(shopItems._id))) ?(<>{shopItems?.wishlist?.length -1 } </>):(shopItems?.wishlist?.some(usere => usere._id.includes(idu) && likes.includes(shopItems._id))) ?(<>{shopItems?.wishlist?.length } </>):(<>{shopItems?.wishlist?.length} </>) }
</Button>

</Stack>

<div className='boxLike'> 
{shopItems?.wishlist?.map((wish) => {return( <> {(wish?._id == idu && moin.includes(shopItems._id)) || (wish?._id == idu && likes.includes(shopItems._id))?(<></>):(<><div className='box f_flex' key={index}> <span>{wish?.name}</span></div></>)}  
</> )})}
{likes.includes(shopItems._id) && (<div className=' f_flex' key={index}> <span>{name}</span></div>)}
</div>
</div>
<div className='product-like'>{user.approved === true ?(<img  style={{height:"25px", width:"25px"}} alt="checked" src={checked}/>):(<></>)}
              
              
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
      


     
         
         
         
        </> )}
         </>
        
        
        
        
        
        
        
        
        
        )
      })} </>)}
     
    </>
  )
}

export default MesDocs