import React, { useState } from "react"
import "./login.css"
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import { useHistory } from 'react-router-dom'; 
import { Typography } from "@mui/material";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [statue, setSelected] = useState("");
  const [image , setImage] = useState("")
  const [phoneNumber , setPhoneNumber] = useState("")
  const history = useHistory ();
  const role = "utilisateur"
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
        statue,
        image,
        phoneNumber,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
  
       
      });
      history.push ('/login');
  }

  return (
    <> 
      <section class="container1 forms">
        <div class="form signup">
            <div class="form-content">
                <header class="h">S'inscrire</header>
                <form onSubmit={handleSubmit}>
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
                        <input type="password" placeholder="Mot de passe" class="password" onChange={(e) => setPassword(e.target.value)}  />
                       
                    
                    </div>
                    <div class="field input-field">
                        <input type="password" placeholder="Mot de passe" class="password"/>
                        <i class="fa fa-eye-slash eye-icon" aria-hidden="true"></i>
                    
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
                        <button>S'inscrire</button>
                    </div>
                
                    <div class="form-link">
                        <span>Vous avez déjà un compte?<a href="#" class="login-link">Connexion</a></span>
                    </div>
                </form>
            </div>
            <div class="line"></div>
            <div class="media-options">
                <a href="#" class="field facebook">
                <i class="fab fa-facebook-f  facebook-icon"></i>
                

<span>Inscrivez-vous avec Facebook</span>                </a>
            </div>
            <div class="media-options">
                <a href="#" class="field google">
              <img src="images/google.png" alt="" class="google-img" />
<span>Inscrivez-vous avec Google</span>                </a> 
            </div>
            
        </div>
      </section>
    </>
  )
}

export default Signup
