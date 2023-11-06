import React, { useEffect, useState } from "react"
import "./login.css"
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import { useHistory } from 'react-router-dom'; 
import { Typography } from "@mui/material";
import { editUserProfile, signup } from "../state/api";
import {Icon} from 'react-icons-kit';
import Alert from '@mui/material/Alert';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
const EditProfile = ({ CartItem,user }) => {
    const [selected, setSelected] = useState("");
    const [image , setImage] = useState("")
    
      const [name , setName] = useState("")
      const [email , setEmail] = useState("")
      const [password , setPassword] = useState("")
      const [phoneNumber , setPhoneNumber] = useState("")   
      console.log(user.statue)
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
  
    const user1 ={ name: name,
      email:email,
      phoneNumber:phoneNumber,
      image:image,
      statue :selected,
      password: password
    
    }
    
         await  editUserProfile(user._id, user1);

    
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
    <div class="field input-field">
                    <input
                  type="text"
                  name="password"
                  placeholder="Mot de passe"
     value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
             />
      
                    
                    </div>
       
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
                    <div class="field button-field">
                        <button onClick={handleFormSubmit}>Modifier</button>
                    </div>
                
                  
                </div>
            </div>
          
   
            
        </div>
      </section>
    </>
  )
}

export default EditProfile
