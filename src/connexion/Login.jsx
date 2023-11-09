import React, { useState } from "react"
import "./login.css"
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
import { loginUser } from "../state/api";
import { Link } from "react-router-dom"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
  const handleFormSubmit = async() => {
    const user ={

      email:email, 
      password: password,
  

    };
    const response = await loginUser(user);
      console.log("dddd", response.data)
        if (response.status == "200") {
          alert("login successful");
          window.localStorage.setItem("token", response.data._id);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "./";
        }
  
  }
  return ( 
    <>
      <section class="container1 forms">
        <div class="form login">
            <div class="form-content">
                <header class="h">Connexion</header>
                <div class="form2" >
                    <div class="field input-field">
                        <input type="email" placeholder="Email" class="input"     onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div class="field input-field">
                    <input
                  type={type}
                  name="mot de passe"
                  placeholder="Password"
     
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
             />
             <span className="eye-icon" onClick={handleToggle}>
                  <Icon icon={icon} size={25}/>
              </span>
                    
                    </div>
                    
                    <div class="field button-field">
                        <button onClick={handleFormSubmit}>Connexion</button>
                    </div>
                    <div class="form-link">
                        <Link to="/forget-password" class="forgot-pass">Mot de passe oublié</Link>
                    </div>
                    <div class="form-link">
                        <span>Vous avez déjà un compte? <Link to="/signup" class="signup-link">s'inscrire</Link></span>
                    </div>
                </div>
            </div>

        </div>
      </section>
    </>
  )
}
<script src="./script.js"></script>
export default Login
