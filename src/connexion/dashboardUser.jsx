import React, { useEffect, useState } from 'react'




import settings from "../image/settings.png"





import Solde from './solde'
import Categories from '../component/mainpage/Categories'
import { Box } from '@mui/material'
import { Margin } from '@mui/icons-material'
import { addDemande } from '../state/api'
import { Alert } from "@mui/material";
const SoldeUser = ({ addToCart, shopItems,user }) => {
    const solde = user.solde 
    console.log(solde)
    const demande ={
        user: user._id,
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
    }
    const [userSolde , setuserSolde] = useState(0)
    const [erreur1, setErreur1] = useState(false);
    const [userpourcentage, setuserpourcentage] = useState(0)
    const [progress, setprogress ]= useState("0")
    useEffect(() => {
        const loadUserDetails = async() => {
            setuserSolde(( solde /100) * 30 )
 
            setuserpourcentage(userSolde * 100  / 30)
            if(userpourcentage > 100)
            {
                setprogress("1")
            } else {
                setprogress(userpourcentage/100)
            }
        }
        loadUserDetails();
      }, [user ,userSolde , userpourcentage]);

    const size = "200"
    const angle = progress * 360;
    const handleFormSubmit = () => {
  
         addDemande(demande);
        setErreur1 (true)
      };
  return (
    <>
    <section className=' background '>
     <div className='container d_flex  '>

       <div className='contentWidth1'>
         <div className='headingTabeau'>
     
             <h2>Tableau de bord</h2>

       
         </div>
         <section className='shop-items'>
         <div className='ProgressCircle'>
         <div class="grid-containerUser">
       
  <div style={{backgroundColor:"#3fbde2"}}><p  style={{color:"#ffff"}}>Solde </p><p style={{color:"#437284"}}>{userSolde}TND</p></div>
  <div  style={{backgroundColor:"#c1c1c1"}} ><p   style={{color:"#ffff"}}>Pourcentage pour versement </p><p style={{color:"#437284"}}>{userpourcentage}%</p></div>
  <div  style={{backgroundColor:"#989acc"}}><p   style={{color:"#ffff"}}>Nombre des achats</p><p style={{color:"#437284"}}>{user.nbrAchats}</p></div>  

</div></div>
<div className='ProgressCircle'>
<Box
      sx={{
        background: `radial-gradient(#f6f9fc 45%, transparent 46%),
            conic-gradient(transparent 0deg ${angle}deg, white ${angle}deg 360deg),
            #3fbde2`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
</div>
<div className='ProgressCircle'>
<hr className="solid" /></div>
{erreur1==true ?(<Alert severity="success">Votre demande est envoyée</Alert>):(<></>)}
<div className='ProgressCircle'><button className="button-17" onClick={handleFormSubmit}>Demander</button></div>
<div className='ProgressCircle'>
<div className='ProgressCircle' style={{marginTop:0 }}>
    <img  alt="settings"  src={settings} />
    <p>Votre solde est disponible dés qu'il atteint 30 TND. Notre équipe vous contactera pour les modalités de versement</p></div>
    <p>Pour plus de détails, veuillez consulter <a>le réglement général</a></p>
</div>
         </section>
       </div>
     </div>
   </section>
    </>
  )
}
export default SoldeUser