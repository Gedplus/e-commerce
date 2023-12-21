import React, { useEffect, useState } from "react"
import "./login.css"
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import { useHistory } from 'react-router-dom'; 
import { Typography } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { editUserProfile, signup } from "../state/api";
import {Icon} from 'react-icons-kit';
import Alert from '@mui/material/Alert';
import { Link } from "react-router-dom"
import { CircularProgress } from "@mui/material";

import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
const EditProfile = ({ user }) => {
    const [selected, setSelected] = useState("");
    const [image , setImage] = useState("")
    const [erreur1, setErreur1] = useState(false);
    const history = useHistory ();
      const [name , setName] = useState("")
      const [email , setEmail] = useState("")
      const [password , setPassword] = useState("")
      const [phoneNumber , setPhoneNumber] = useState("")   
      console.log(user ,"sahar")
      
      useEffect(() => {
        const loadUserDetails = async() => {
  
          setName(user.name);
          setEmail(user.email);
          setPassword(user.password);
          setPhoneNumber(user.phoneNumber);
            setImage(user.image)
            setSelected(user.statue)
    
        }
        loadUserDetails(user);
      }, []);
  function handleChange1(event) {
    setSelected(event.target.value);
 }
 function convertToBase64(e){
  console.log(e);
  var reader = new FileReader();
  reader.readAsDataURL(e.target.files[0]);
  reader.onload = () => {

    setImage(reader.result)

  };
  reader.onerror = error => {
    console.log("error: ", error);
  }}


  const handleFormSubmit = async() => {
    setErreur1(true)
    const user1 ={ name: name,
      email:email,
      phoneNumber:phoneNumber,
      image:image,
      statue :selected,
      password: password
    
    }
    
         await  editUserProfile(user._id, user1);

         toast.success("Modification avec succès")
         setTimeout(()=>{

          window.location.href=`/`
      },500)
      };


  return (
    <> 
      <section class="container1 forms">
        <div class="form signup">
            <div class="form-content">
            
                <div>
                <div class="field input-field">
                        <input type="text" placeholder="Nom et prénom *" value={name} class="input" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div class="field input-field">
                        <input type="email" placeholder="Email *" class="input"  value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <br/>
                    <FormControl          sx={{ gridColumn: "span 4" }}>
      <FormLabel id="demo-row-radio-buttons-group-label"    style={{fontSize:"17px"}} color="secondary"  >vous êtes étudiant(e) ou professionnel(le) *</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={selected}
        onChange = {handleChange1}

      >
        <FormControlLabel value="etudiant" control={<Radio   color="default" />} label="etudiant"/>
        <FormControlLabel value="professionnel" control={<Radio color="default"  />} label="professionnel" />
     
      </RadioGroup>
    </FormControl>

       
                    <br/>
                    <Typography id="non-linear-slider"  style={{fontSize:"17px"}}  gutterBottom>
          Ajouté une photo :
        </Typography>
                    <div class="field input-field">
                    <input accept="image/*"
             type="file" placeholder="Email"
             onChange={convertToBase64}/>
         <br/>
   {image=="" || image == null ? "":   <img  style={{width:50 , height:50}} src={image}/>}
                    </div><br/>
                    <br/>
                    <div class="field input-field">
                        <input type="text" placeholder="Numéro de téléphone" value={phoneNumber} class="input" onChange={(e) => setPhoneNumber(e.target.value)} />
                    </div>
                    <div class="form-link">
                        <Link to="/forget-password" class="forgot-pass">Mot de passe oublié</Link>
                    </div>
                    <div class="field button-field">
                        <button onClick={handleFormSubmit}>Modifier</button>
                    </div>
                <br/>
                {erreur1==true ?(           <CircularProgress  className="progress" style={{marginLeft:"120px"}} />):(<></>)}
                  
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
            
        </div>
      </section>
    </>
  )
}

export default EditProfile
