import React, { useState } from "react"
import { addContact, addReclamation, editUser } from "../../state/api";
import { useHistory } from 'react-router-dom'; 
import { CircularProgress, Typography } from "@mui/material";
import checked from "../../image/checked.png"
import verification from "../../image/verif.jpg"
import { toast } from "react-toastify";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
const Verification = ({ CartItem,user }) => {
  const history = useHistory ();
  const [image , setImage] = useState("")
  const [erreur1, setErreur1] = useState(false);
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
  
      setErreur1(true)
      
   
      const response = await editUser(id, {...user, demande: true, justificative: image , CIN: cin , phoneNumber: phoneNumber});
    
      if (response.status == "200") {

        toast.success("Demande de vérification envoyer avec succès")
    
        setTimeout(()=>{
      
          history.push("/")
      },500)
      } else {
        toast.error("Demande de vérification n'est pas envoyer")
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
      <section class="container4 forms">
        <div class="form1 login">
           
            <div class="form-content">
                <header class="h">Demande de verification <img  style={{height:"25px", width:"25px"}} alt="checked" src={checked}/></header>
                <br/>
            
                <div class="div mobile"> 
                <img src={verification} alt=''  style={{width:"400px", height:"450px" ,marginTop:"-80px"}}/>
                
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
                    <br/>                 {erreur1==true ?(           <CircularProgress style={{marginLeft:"220px"}}/>):(<></>)}
                    
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

export default Verification
