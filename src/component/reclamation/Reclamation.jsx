import React, { useState } from "react"
import { addReclamation } from "../../state/api";
import { CircularProgress, Typography } from "@mui/material";
import { toast } from "react-toastify";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import { useHistory } from 'react-router-dom'; 
const Reclamation = () => {
    const [image , setImage] = useState("")
    const [Fname , setFname] = useState("")
    const [email , setEmail] = useState("")
    const [erreur1, setErreur1] = useState(false);
    const history = useHistory ();
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
   console.log("sss", reclamation)
   setErreur1(true)
   const response = await addReclamation(reclamation);
   if (response.status == "201") {

    toast.success("Reclamation envoyer avec succès")

    setTimeout(()=>{
  
      history.push("/")
  },500)
  } else {
    toast.error("Reclamation n'est pas envoyer")
    setErreur1(false)
  }
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
                <header class="h">Réclamation</header>
                <br/>
                <p>Si vous constatez que votre document est présent sans autorisation, vous avez la possibilité de déposer une réclamation en fournissant les informations requises. Une fois que vous aurez prouvé la validité de votre document, notre plateforme vous rétablira l'accès à votre compte ainsi que le solde qu'il contient : </p>
              
                <div class="div mobile"> 
                <img src="./images/reclamation.png" alt=''  style={{width:"400px", height:"400px", marginTop:"70px"}}/>
                
            </div>
            </div>
            <div class="div">
            <div class="form-content">
             
            <div  class="form2"  >
              
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
                    Copie de votre CIN ou passeport :
        </Typography>
                    <div class="field input-field">
                    <input accept="image/*"
             type="file" placeholder="Email"
             onChange={convertToBase64}/>

                    </div><br/>
                    <Typography id="non-linear-slider"  style={{fontSize:"17px"}}  gutterBottom>
                    Pièce justificative de la propriété de votre document :
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
                        <button type="submit"  onClick={handleFormSubmit}>Envoyer</button>
                    </div>
                    <br/>

                    {erreur1==true ?(           <CircularProgress style={{marginLeft:"220px"}}/>):(<></>)}
                    
               </div>
                
            </div>
            </div>
        </div>
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
      </section>
    
    </>
  )
}

export default Reclamation
