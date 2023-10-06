import React, { useState } from "react"
import "./login.css"
 
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

  
    fetch("https://api.bibintunisie.com/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
       
        if (data.status === "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data._id);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "./";
        }
      });
  }

  return (
    <>
      <section class="container1 forms">
        <div class="form login">
            <div class="form-content">
                <header class="h">Connexion</header>
                <form class="form2"  onSubmit={handleSubmit}>
                    <div class="field input-field">
                        <input type="email" placeholder="Email" class="input"    onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div class="field input-field">
                        <input type="password" placeholder="Mot de passe" class="password"   onChange={(e) => setPassword(e.target.value)} />
                        <i class="fa fa-eye-slash eye-icon" aria-hidden="true"></i>
                    
                    </div>
                    
                    <div class="field button-field">
                        <button>Connexion</button>
                    </div>
                    <div class="form-link">
                        <a href="#" class="forgot-pass">Mot de passe oublié</a>
                    </div>
                    <div class="form-link">
                        <span>Vous avez déjà un compte? <a href="#" class="signup-link">s'inscrire</a></span>
                    </div>
                </form>
            </div>
            <div class="line"></div>
            <div class="media-options">
                <a href="#" class="field facebook">
                <i class="fab fa-facebook-f  facebook-icon"></i>
                

<span>
Se connecter avec Facebook</span>                </a>
            </div>
            <div class="media-options">
                <a href="#" class="field google">
              <img src="images/google.png" alt="" class="google-img" />
<span>Connectez-vous avec Google</span>                </a> 
            </div>
            
        </div>
      </section>
    </>
  )
}
<script src="./script.js"></script>
export default Login
