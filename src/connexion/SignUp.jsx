import React, { useState } from "react"
import "./login.css"
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import { useHistory } from 'react-router-dom'; 
import { Typography } from "@mui/material";
import { signup } from "../state/api";
import {Icon} from 'react-icons-kit';
import Alert from '@mui/material/Alert';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erreur, setErreur] = useState(false);
  const [passwordconf, setPasswordconf] = useState("");
  const [statue, setSelected] = useState("");
  const [image , setImage] = useState("https://i.stack.imgur.com/34AD2.jpg")
  const [phoneNumber , setPhoneNumber] = useState("")
  const history = useHistory ();
  const role = "utilisateur"

  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  const handleToggle = () => {
    if (type==='password'){
       setIcon(eye);
       setType('text')
    } else {
       setIcon(eyeOff)
       setType('password')
    }
  }
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


  const handleFormSubmit = async(values) => {
if (password ==  passwordconf ) {
  const user ={
    name: name ,
    email:email, 
    password: password,
    statue:statue,
    image:image,
    role : "utilisateur",
    phoneNumber:phoneNumber

  };
  console.log(user)
signup(user);
await       history.push ('/login');


}else {
  setErreur(true)
}
   
  }

  function handleSubmit(e) {
    e.preventDefault();

  
    fetch("https://api.bibintunisie.com/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        role,
 
      }),
    })
      .then((res) => res.json())
      .then((data) => {
  
       
      });

  }

  return (
    <> 
      <section class="container1 forms">
        <div class="form signup">
            <div class="form-content">
                <header class="h">S'inscrire</header>
                <div>
                <div class="field input-field">
                        <input type="text" placeholder="Nom et prénom *" class="input" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div class="field input-field">
                        <input type="email" placeholder="Email *" class="input" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <br/>
                    <FormControl          sx={{ gridColumn: "span 4" }}>
      <FormLabel id="demo-row-radio-buttons-group-label"    style={{fontSize:"17px"}} color="secondary"  >vous êtes étudiant(e) ou professionnel(le) *</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange = {handleChange1}

      >
        <FormControlLabel value="etudiant" control={<Radio   color="default" />} label="etudiant"/>
        <FormControlLabel value="professionnel" control={<Radio color="default"  />} label="professionnel" />
     
      </RadioGroup>
    </FormControl>
    <div class="field input-field">
                    <input
                  type={type}
                  name="password"
                  placeholder="Mot de passe"
     
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
             />
             <span className="eye-icon" onClick={handleToggle}>
                  <Icon icon={icon} size={25}/>
              </span>
                    
                    </div>
                    <div class="field input-field">
                    <input
                  type={type}
                  name="password"
                  placeholder="Confirme mot de passe"
     
                  onChange={(e) => setPasswordconf(e.target.value)}
                  autoComplete="current-password"
             />
             <span className="eye-icon" onClick={handleToggle}>
                  <Icon icon={icon} size={25}/>
              </span>
            {erreur==true ?(<Alert severity="error">La confirmation du mot de passe ne correspond pas</Alert>):(<></>)} 
                    </div>
                    <br/>
                    <Typography id="non-linear-slider"  style={{fontSize:"17px"}}  gutterBottom>
          Ajouté une photo :
        </Typography>
                    <div class="field input-field">
                    <input accept="image/*"
             type="file" placeholder="Email"
             onChange={convertToBase64}/>

                    </div>
                    <div class="field input-field">
                        <input type="text" placeholder="Numéro de téléphone" class="input" onChange={(e) => setPhoneNumber(e.target.value)} />
                    </div>
                    <div class="field button-field">
                        <button onClick={handleFormSubmit}>S'inscrire</button>
                    </div>
                
                    <div class="form-link">
                        <span>Vous avez déjà un compte?<a href="#" class="login-link">Connexion</a></span>
                    </div>
                </div>
            </div>
          
   
            
        </div>
      </section>
    </>
  )
}

export default Signup
