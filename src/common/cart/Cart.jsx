import React, { useEffect, useState } from "react"
import "./style.css"
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"
import { addCommande, useGetUtilisateursQuery } from "../../state/api";
import { Link } from "react-router-dom";

const Cart = ({ CartItem, addToCart, decreaseQty , user}) => {
  // Stpe: 7   calucate total of items
  const userss = useGetUtilisateursQuery();
  const [selected, setSelected] = useState([]);
var [total, settotal] = useState(0);
  const users =userss.data
  const totalPrice = selected.reduce((a,v) =>  a = a + v.value , 0 )

  var total = 0 
  const updatedNums = CartItem.map((number)=>{
   
if(number.prix !== undefined)

 {   return total =parseFloat(number.prix) + total;
}
});
const handleFormSubmit = async(values) => {

const commande ={
  user_id : user._id ,
  user_email : user.email,
  Total :  total + totalPrice ,
  product : CartItem,

};
await addCommande(commande);

  }
  function handleChange1(event, id) {
    const productExit = selected.find((select) => select.id === id)
    const productExit1 = CartItem.find((item) => item._id === id)

    if (productExit) {
      var value = parseFloat(event.replace(",", "."));
      productExit.value = value;
      productExit1.prixF = value;
   
    setSelected([...selected])

    }
    else{   var value = parseFloat(event.replace(",", "."));
    productExit1.prixF = value;
    setSelected([...selected, { value: value , id: id }]);}
  
 }

  // prodcut qty total
  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>
          {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

          <div className='cart-details'>
            {CartItem.length === 0 && <h1 className='no-items product'>Aucun article n'est ajouté au panier</h1>}

            {/* yasma hami le cart item lai display garaaxa */}
            {CartItem.map((item, index) => {
          

              return ( <>    {item.typeP == "document" && (<>  <div className='cart-list product d_flex' key={index}>
                        
              <div className='img'>
              {users == undefined  ? (<>sxxdd</>) : (<>{users.map((user) => {return( <>    {item.auteur == user._id ? (    <img src={user.image} alt='' />     ):
      (<></>)}</> ) })}</>)}
             
              </div>
              <div className='cart-details'>
                <h3>{item.titre}</h3>
                <FormControl          >
  <FormLabel id="demo-row-radio-buttons-group-label"    style={{fontSize:"20px"}} color="secondary"  ></FormLabel>
  <RadioGroup
  
    aria-labelledby="demo-radio-buttons-group-label"
  name="radio-buttons-group"
    onChange = {(e) =>handleChange1(e.target.value,item._id)}

  >
    <FormControlLabel value={item.prixLecture}  control={<Radio   color="default" />} label={    <div className='price'>
            <h4 style={{ fontSize:"15px"}}>Prix de lecture : {item.prixLecture} dt  / {item.period} mois </h4>
             
              {/* step : 3  
                 if hami le button ma click garryo bahne 
                */} 
            </div>}/>
    <FormControlLabel value={item.prixTelechargement} control={<Radio color="default"  />} label={      <div className='price'>
           
           <h4 style={{ fontSize:"15px"}}>Prix de télechargement : {item.prixTelechargement} dt</h4>
           {/* step : 3  
              if hami le button ma click garryo bahne 
             */}
         </div>} />
 
  </RadioGroup>
</FormControl> 
            
      
             
            
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
            {item.typeP == "video" && (<>  <div className='cart-list product d_flex' key={index}>
                        
                        <div className='img'>
                        {users == undefined  ? (<>sxxdd</>) : (<>{users.map((user) => {return( <>    {item.auteur == user._id ? (    <img src={user.image} alt='' />     ):
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
                      {item.typeP == "packs" && (<>  <div className='cart-list product d_flex' key={index}>
                        
                        <div className='img'>
                        {users == undefined  ? (<>sxxdd</>) : (<>{users.map((user) => {return( <>    {item.auteur == user._id ? (    <img src={user.image} alt='' />     ):
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

          <div className='cart-total product'>
            <h2>Cart Summary</h2>
            
            <div className=' d_flex'>
    
              <h4>Total Price :</h4>
              <h3>{total + totalPrice} dt 
              
          </h3>

            </div>
            <h4>  <img src="./images/accept.png" alt='' style={{height:"20px", width:"20px", marginTop:"10px", marginBottom:"-5px"}} />  J’ai lu et j’accepte les <Link to="/Reglement"  style={{ color:"#0000a1", textDecoration: "underline"}}>conditions générales * </Link></h4>
            <br/>
            { user._id == undefined  ? (     <Link to='/login'>
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