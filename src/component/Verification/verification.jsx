import React, { useState } from "react"
import { addContact, addReclamation, editUser } from "../../state/api";
import { useHistory } from 'react-router-dom'; 
import { Typography } from "@mui/material";

const Verification = ({ CartItem,user }) => {
  const history = useHistory ();
  const [image , setImage] = useState("")
  const [phoneNumber , setPhoneNumber] = useState("")
const id = user._id
const [users, setUser] = useState(user);

  const [cin , setCin] = useState("")
   
    const userEdit ={
      CIN: cin,
      justificative:  image,
      demande: true,

      
      };
    const handleFormSubmit = async() => {
  
     
      
   
      await editUser(id, {...user, demande: true, justificative: image , CIN: cin , phoneNumber: phoneNumber});
      history.push ('/');
 
      };
      function convertToBase64(e){
        console.log(e);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
        
          setCin(reader.result)
      
       
        };
        reader.onerror = error => {
          console.log("error: ", error);
        }}
        function convertToBase641(e){
            console.log(e);
            var reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = () => {
           
              setImage(reader.result)
      
           
            };
            reader.onerror = error => {
              console.log("error: ", error);
            }}
       
 

  return (
    <>
      <section class="container4 forms">
        <div class="form1 login">
           
            <div class="form-content">
                <header class="h">Demande de verification <img  style={{height:"25px", width:"25px"}} alt="checked" src="./images/checked.png"/></header>
                <br/>
            
                <div class="div mobile"> 
                <img src="./images/reclamation.png" alt=''  style={{width:"400px", height:"400px", marginTop:"70px"}}/>
                
            </div>
            </div>
            <div class="div">
            <div class="form-content">
             
            <div  class="form2">
            <Typography id="non-linear-slider"  style={{fontSize:"17px"}}  gutterBottom>
            CIN ou passeport :
        </Typography>
            <div class="field input-field">
                    <input accept="image/*"
             type="file" placeholder="Email"
             onChange={convertToBase64}/>

                    </div>
                    <Typography id="non-linear-slider"  style={{fontSize:"17px"}}  gutterBottom>
                    Pièce justificative de votre emploi :
        </Typography>
                    <div class="field input-field">
                    <input accept="image/*"
             type="file"   placeholder="Email"
             onChange={convertToBase641}/>
        
                    </div>
                    <div class="field input-field">
                        <input type="text" placeholder="Numéro de téléphone" class="input" onChange={(e) => setPhoneNumber(e.target.value)} />
                    </div>
                    <div class="field button-field">
                        <button type="submit" onClick={handleFormSubmit} >Envoyer</button>
                    </div>
                  
                    
    </div>
            </div>
            </div>
        </div>
     
      </section>
      
    </>
  )
}

export default Verification
