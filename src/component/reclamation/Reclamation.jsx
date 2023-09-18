import React, { useState } from "react"
import { addReclamation } from "../../state/api";
import { Typography } from "@mui/material";


const Reclamation = () => {
    const [image , setImage] = useState("")
    const [Fname , setFname] = useState("")
    const [email , setEmail] = useState("")
    const [Message , setMessage] = useState("")
    const [cin , setCin] = useState("")
    const [phoneNumber , setPhoneNumber] = useState("")
    const reclamation ={
        Email: email,
        phoneNumber: phoneNumber,
          NomPrenom: Fname,
          CIN: cin,
          justificative:  image,
          message: Message,
      
      };
    const handleFormSubmit = async(values) => {
   
        await addReclamation(reclamation);

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
      <section class="container2 forms">
        <div class="form1 login">
           
            <div class="form-content">
                <header class="h">Formulaire espace de réclamation</header>
                <br/>
                <p>Si vous constatez que votre document est présent sans autorisation, vous avez la possibilité de déposer une réclamation en fournissant les informations requises. Une fois que vous aurez prouvé la validité de votre document, notre plateforme vous rétablira l'accès à votre compte ainsi que le solde qu'il contient : </p>
              
                <div class="div mobile"> 
                <img src="./images/reclamation.png" alt=''  style={{width:"400px", height:"400px", marginTop:"70px"}}/>
                
            </div>
            </div>
            <div class="div">
            <div class="form-content">
             
            <form  class="form2" onSubmit={handleFormSubmit}>
              
                <div class="field input-field">
                        <input type="text" placeholder="Nom et prénom" class="input"  onChange={(event) => {setFname(event.target.value)}}/>
                    </div>
                    <div class="field input-field">
                        <input type="email" placeholder="Email" class="input" onChange={(event) => {setEmail(event.target.value)}} />
                    </div>
                    <div class="field input-field">
                        <input type="text" placeholder="Numéro de téléphone" class="input" onChange={(e) => setPhoneNumber(e.target.value)} />
                    </div><br/>
                    <Typography id="non-linear-slider"  style={{fontSize:"17px"}}  gutterBottom>
          Upload votre CIN ou passport :
        </Typography>
                    <div class="field input-field">
                    <input accept="image/*"
             type="file" placeholder="Email"
             onChange={convertToBase64}/>

                    </div><br/>
                    <Typography id="non-linear-slider"  style={{fontSize:"17px"}}  gutterBottom>
          Upload votre piéce justificatif :
        </Typography>
                    <div class="field input-field">
                    <input accept="image/*"
             type="file"   placeholder="Email"
             onChange={convertToBase641}/>
        
                    </div>
                    <div class="field1 input-field">
                        <textarea type="text" placeholder="Message" class="input" onChange={(event) => {setMessage(event.target.value)}} />
                    </div>
                
                    <div class="field button-field">
                        <button type="submit" >Envoyer</button>
                    </div>
                  
                    
               </form>
                
            </div>
            </div>
        </div>
     
      </section>
      
    </>
  )
}

export default Reclamation
