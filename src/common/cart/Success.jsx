
import { Alert } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Editsolde, addCommande } from '../../state/api';

const Success = ({ CartItem, addToCart, decreaseQty , user}) => {
    const [result, setResult] = useState(' ');
    const urlSearchString = window.location.search;

    const params = new URLSearchParams(urlSearchString);
    const totalPrice = CartItem.reduce((price, item) => price +  parseFloat(item.prixF), 0)
    var total = 0 
    const commande ={
        user_id : user._id ,
        user_email : user.email,
        Total :  total + totalPrice ,
        product : CartItem,
      
      };

   useEffect(()=>{
    axios.post(`https://api.bibintunisie.com/payement/payement/${params.get('payment_id')}`).then((res) => {
        setResult(res.data.result.status)
    })
    .catch((err) => console.error(err))
  
   },[])
   useEffect(()=>{

    if(result === "SUCCESS" )
{    for(let index=0 ; index< CartItem?.length; index++){ 
        Editsolde(CartItem[index]?.auteur ,{solde:  parseFloat(CartItem[index]?.prixF)} )
    }
    setTimeout(()=>{
    addCommande(commande);},4000)

    setTimeout(()=>{
        localStorage.removeItem("item");
        window.location.href ="./"
    },6000)
    }


  
   },[result,commande])

   

return(<>
{result === "SUCCESS" ? ( <Alert severity="success">success </Alert>):(<>loading...</>)}
</>)


}

export default Success