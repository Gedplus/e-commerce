import React, { useEffect, useState } from 'react'

import { Link } from "react-router-dom"

import Avatar from '@mui/material/Avatar';
import "./Style.css"
import {toast} from "react-toastify"
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import {Icon} from 'react-icons-kit';

import {eyeOff} from 'react-icons-kit/feather/eyeOff'; 
import {eye} from 'react-icons-kit/feather/eye'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box, Stack, Typography } from '@mui/material'
import { editUserProfile } from '../../state/api';
const MonCompte = ({ CartItem,user }) => {
  const [selected, setSelected] = useState("");
  const [image , setImage] = useState("")
  const [edit ,setEdit] = useState(true)
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [phoneNumber , setPhoneNumber] = useState("")   
    useEffect(() => {
      const loadUserDetails = async() => {

        setName(user.name);
        setEmail(user.email);
        setPassword(user.password);
        setPhoneNumber(user.phoneNumber);
          setImage(user.image)
          setSelected(user.statue)
  
      }
      loadUserDetails();
    }, [user]);
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

    function convertToBase64(e){
      console.log(e);
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
    
        setImage(reader.result)
    
      };}
      function handleChange1(event) {
        setSelected(event.target.value);
    
      }
      const handleFormSubmit = async() => {
  
        const user1 ={ name: name,
          email:email,
          phoneNumber:phoneNumber,
          image:image,
          statue :selected,
          password: password
        
        }
        
             await  editUserProfile(user._id, user1);

             toast.success("Modification avec succès")
          };
  return (
    <>
         <section className='shop background mobileCompte'>
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


          <div className='contentWidth  '>
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
          <div class="form signup">
            <div class="form-content">
          <div class="field input-field">
          <Typography id="non-linear-slider"  style={{fontSize:"17px"}}  gutterBottom>
          Nom et prénom  :
        </Typography>
                        <input type="text" placeholder="Nom et prénom *" value={name} class="input" onChange={(e) => setName(e.target.value)} />
                    </div><br/>
                    <div class="field input-field">
                    <Typography id="non-linear-slider"  style={{fontSize:"17px"}}  gutterBottom>
                    Email :
        </Typography>
                        <input type="email" placeholder="Email *" class="input" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div><br/>
                    <br/>
                    <FormControl          sx={{ gridColumn: "span 4" }}>
      <FormLabel id="demo-row-radio-buttons-group-label"    style={{fontSize:"17px"}} color="secondary"  >vous êtes étudiant(e) ou professionnel(le) *</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange = {handleChange1}
value={selected}
      >
        <FormControlLabel value="etudiant" control={<Radio   color="default" />} label="etudiant"/>
        <FormControlLabel value="professionnel" control={<Radio color="default"  />} label="professionnel" />
     
      </RadioGroup>
    </FormControl>
<br/>
                    <div class="field input-field">
                    <Typography id="non-linear-slider"  style={{fontSize:"17px"}}  gutterBottom>
                    Numéro de téléphone :
        </Typography>
                        <input type="text" placeholder="Numéro de téléphone" value={phoneNumber} class="input" onChange={(e) => setPhoneNumber(e.target.value)} />
                    </div><br/>
          
                    <div class="field input-field">
                    <Typography id="non-linear-slider"  style={{fontSize:"17px"}}  gutterBottom>
          Ajouté une photo :
        </Typography>
                    <input accept="image/*" 
             type="file" placeholder="Email"  
             onChange={convertToBase64}/>
             <br/>
   {image=="" || image == null ? "":   <img  style={{width:50 , height:50}} src={image}/>}
                    </div>
                <br/><br/><br/>
                <div class="form-link">
                        <Link to="/forget-password" class="forgot-pass">Mot de passe oublié</Link>
                    </div>
                    <div class="field button-field">
                        <button onClick={handleFormSubmit}>Modifier</button>
                    </div>

            </div>
            </div>
            </div>
            </div>
            </section>
          </div>
        </div>
      </section>
      <section className='shop background boxCompte1 gg'>
        <div className='container d_flex'>
   
       
            <section className='shop ' >
   
<div className='category ' style={{width:"90%", marginTop:"-10px",height:"650px"}}>
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
     <Link to="/Profile" >
            <div className='box f_flex' >
 
              <span>Information professionnel</span>
            
            </div></Link>

        <Link onClick={handleClose} >
            <div className='box f_flex'>
 
              <span>Déconnection</span>
            
            </div></Link>
      </div>
      </section>


      
        </div>
      </section>
      <ToastContainer
            position="top-right"
            autoClose={250}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
          />
    </>
  )
}

export default MonCompte