import React from 'react'

import { Link } from "react-router-dom"

import Avatar from '@mui/material/Avatar';
import "./Style.css"



import { useGetDocumentQuery } from '../../state/api'
import { Box, Stack, Typography } from '@mui/material'
const MonCompte = ({ CartItem,user }) => {
    const data1 = [
        {
          cateImg: "./images/category/open-boo.png",
          cateName: "Mes achats",
          catlink:"MesDocuments",
        },
        {
          cateImg: "./images/category/open-boo.png",
          cateName: "Mes Documents",
          catlink: "MesDocuments",
        },
        {
          cateImg: "./images/category/open-boo.png",
          cateName: "Ajouter Document",
          catlink: "AddDocument",
        },
        {
          cateImg: "./images/category/application.png",
          cateName: "Mon solde",
          catlink: "MesDocuments", 
        },
       {
          cateImg: "./images/category/book.png",
          cateName: "Demande de versement de mon solde",
          catlink: "verification",
        }, {
          cateImg: "./images/category/book.png",
          cateName: "Demande de vérification de mon compte",
          catlink: "verification",
        },
       
      ]
      const handleClose = () => {
        window.localStorage.clear();
        window.location.href ="./login"
    };
  return (
    <>
         <section className='shop background'>
        <div className='container d_flex'>
   
       
            <section className='shop ' >
   
<div className='category ' style={{width:"100%", marginTop:"40px",height:"750px"}}>
<Box    sx={{
                display: "flex",
        
                alignItems: "center",
                textTransform: "none",
                gap: "0.5rem",
                width: "210px",
                marginLeft:"35px"
              
              }} >
<Stack direction="row" spacing={6}  style={{width:"100px", height:"100px"}} >
      <Avatar
        alt="Remy Sharp"
        src={user.image}
        sx={{width:"70px", height:"70px"}}
      />
    </Stack>
<h4 style={{marginLeft:"-20px", marginTop:"-20px"}}>{user.name}</h4></Box>
    
        {data1.map((value, index) => {
          return (
            <Link to={`${value.catlink}`} >
            <div className='box f_flex' key={index}>
 
              <span>{value.cateName}</span>
            
            </div></Link>
            
          )
        })}
        <Link onClick={handleClose} >
            <div className='box f_flex'>
 
              <span>Déconnection</span>
            
            </div></Link>
      </div>
      </section>


          <div className='contentWidth '>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                
              </div>
              <div className='heading-right row '>
        
              </div>
            </div>
            <section className='shop-items'>
        <div className=' d_flex'>
          {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

          <div className='boxCompte'>
     

            </div>
            </div>
            </section>
          </div>
        </div>
      </section>
  
    </>
  )
}

export default MonCompte