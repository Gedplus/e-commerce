import React, { useState } from "react"
import "./style.css"
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"
import { Editsolde, addCommande, useGetUtilisateursQuery } from "../../state/api";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import axios from "axios";
const Cart = ({ CartItem, addToCart, decreaseQty , user}) => {
  // Stpe: 7   calucate total of items
  const userss = useGetUtilisateursQuery();
  const [selected, setSelected] = useState([]);

  const users =userss.data

  const totalPrice = CartItem.reduce((price, item) => price +  parseFloat(item.prixF), 0)
  var total = 0 
console.log(CartItem) 
console.log(totalPrice)

/*
const handleFormSubmit = async(values) => {
  setTimeout(()=>{
    for(let index=0 ; index< CartItem?.length; index++){ 
        Editsolde(CartItem[index]?.auteur ,{solde: CartItem[index]?.prixF} )
    }
   
},300)

}
 const handleFormSubmit = async(values) => {

const commande ={
  user_id : user._id ,
  user_email : user.email,
  Total :  total + totalPrice ,
  product : CartItem,

};
await addCommande(commande);

  } 
 */
  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios.post("https://api.bibintunisie.com/payement/payement/" , {amount : total + totalPrice} )
    .then((res) => {
      const {result} = res.data;
window.location.href= result.link
    }) .catch((err) => console.error(err))
  }

  // prodcut qty total
  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>
          {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

          <div className='cart-details'>
          <div className='cart-total product cart1'>
            <h2>Cart Summary</h2>
            
            <div className=' d_flex'>
    
              <h4>Total Price :</h4>
              <h3>{total + totalPrice} dt 
              
          </h3>

            </div>
            <h4>  <img src="./images/accept.png" alt='' style={{height:"20px", width:"20px", marginTop:"10px", marginBottom:"-5px"}} />  J’ai lu et j’accepte les <Link to="/Reglement"  style={{ color:"#0000a1", textDecoration: "underline"}}>conditions générales * </Link></h4>
            <br/>
            { user._id === undefined  ? (     <Link to='/login'>
          <button className="button-18" style={{backgroundColor:"#0000a1", color:"#fff"}}>Confirmer votre commande
</button></Link>):(     <button className="button-18" style={{backgroundColor:"#0000a1", color:"#fff"}} onClick={handleFormSubmit}>Confirmer votre commande
</button>)}
        
          </div>
            {CartItem.length === 0 && <h1 className='no-items product'>Aucun article n'est ajouté au panier</h1>}

            {/* yasma hami le cart item lai display garaaxa */}
            {CartItem.map((item, index) => {
          

              return ( <> {console.log(CartItem)}   {item.typeP === "document" && (<>  <div className='cart-list product d_flex' key={index}>
                        
              <div className='img'>
              {users === undefined  ? (<>sxxdd</>) : (<>{users.map((user) => {return( <>    {item.auteur === user._id ? ( <>  <Stack direction="row" spacing={6}  className="profile1">
      <Avatar
        alt="Remy Sharp"
        src={user.image}
        
        class="imgavatar"

      />
    </Stack>
        <img src={item.image} alt='' />   
<div className='product-like1'>{user.approved === true ?(<img  style={{height:"25px", width:"25px"}} alt="checked" src="./images/checked.png"/>):(<></>)}
              
              
              </div>   </>    ):
      (<></>)}</> ) })}</>)}
             
              </div>
              <div className='cart-details'>
                <h3>Titre : {item.titre}</h3>

                {users === undefined  ? (<>sxxdd</>) : (<>{users.map((user) => {return( <>    {item.auteur === user._id ? (     <h4 style={{ fontSize:"18px", marginLeft:"20px",marginTop:"10px"}}>  Auteur : {user.name} </h4> ):
            (<></>)}</> ) })}</>)}
          
           
                {item.typeF=="Lecture" ?( <h4 style={{ fontSize:"18px", marginLeft:"20px", marginTop:"10px"}}>Prix lecture : {item.prixF} dt / {item.period} mois  </h4>):( <h4 style={{ fontSize:"18px", marginLeft:"20px", marginTop:"10px"}}>Prix téléchargement : {item.prixF} dt </h4>)}

         
            
              </div>
           
  
              <div className='cart-items-function'>
            
                  <button className='removeCart' onClick={() => decreaseQty(index)} >
                    <i className='fas fa-times close'></i>
                  </button>
                
                {/* stpe: 5 
                product ko qty lai inc ra des garne
                */}
                
              </div>

              <div className='cart-item-price'></div>
            </div></>)} 


























            {item.typeP === "video" && (<>  <div className='cart-list product d_flex' key={index}>
                        
                        <div className='img'>
                        {users === undefined  ? (<>sxxdd</>) : (<>{users.map((user) => {return( <>    {item.auteur === user._id ? (    <img src={user.image} alt='' />     ):
                (<></>)}</> ) })}</>)}
                       
                        </div>
                        <div className='cart-details'>
                          <h3>{item.name}</h3>
                
 <br/>
                      <h4 style={{ fontSize:"18px", marginLeft:"20px"}}>Prix : {item.prix} dt / {item.period} mois  </h4>
                       
                        {/* step : 3  
                           if hami le button ma click garryo bahne 
                          */} 

          

                      
                
                       
                      
                        </div>
                        <div className='cart-items-function'>
                      
                            <button className='removeCart' onClick={() => decreaseQty(index)} >
                              <i className='fas fa-times close'></i>
                            </button>
                          
                          {/* stpe: 5 
                          product ko qty lai inc ra des garne
                          */}
                          
                        </div>
          
                        <div className='cart-item-price'></div>
                      </div></>)} 
                      {item.typeP === "packs" && (<>  <div className='cart-list product d_flex' key={index}>
                        
                        <div className='img'>
                        {users === undefined  ? (<>sxxdd</>) : (<>{users.map((user) => {return( <>    {item.auteur === user._id ? (    <img src={user.image} alt='' />     ):
                (<></>)}</> ) })}</>)}
                       
                        </div>
                        <div className='cart-details'>
                          <h3>{item.title}</h3>
                
 <br/>
                      <h4 style={{ fontSize:"18px", marginLeft:"20px"}}>Prix : {item.prix} dt / {item.period} mois  </h4>
                       
                        {/* step : 3  
                           if hami le button ma click garryo bahne 
                          */} 

          

                      
                
                       
                      
                        </div>
                        <div className='cart-items-function'>
                      
                            <button className='removeCart' onClick={() => decreaseQty(index)} >
                              <i className='fas fa-times close'></i>
                            </button>
                          
                          {/* stpe: 5 
                          product ko qty lai inc ra des garne
                          */}
                          
                        </div>
          
                        <div className='cart-item-price'></div>
                      </div></>)} 
            </> 
            )
            })}
          </div>

          <div className='cart-total product cart2'>
            <h2>Cart Summary</h2>
            
            <div className=' d_flex'>
    
              <h4>Total Price :</h4>
              <h3>{total + totalPrice} dt 
              
          </h3>

            </div>
            <h4>  <img src="./images/accept.png" alt='' style={{height:"20px", width:"20px", marginTop:"10px", marginBottom:"-5px"}} />  J’ai lu et j’accepte les <Link to="/Reglement"  style={{ color:"#0000a1", textDecoration: "underline"}}>conditions générales * </Link></h4>
            <br/>
            { user._id === undefined  ? (     <Link to='/login'>
          <button className="button-18" style={{backgroundColor:"#0000a1", color:"#fff"}}>Confirmer votre commande
</button></Link>):(     <button className="button-18" style={{backgroundColor:"#0000a1", color:"#fff"}} onClick={handleFormSubmit}>Confirmer votre commande
</button>)}
        
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart