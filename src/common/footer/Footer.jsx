import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container '>
        <header class="h">   <h1 className="footerM">À propos</h1>
     
            <p>"BiBin" est l'acronyme de "Bibliothèque Tunisienne de l'Intelligence Intellectuelle", une plateforme en ligne qui vise à protéger le droit  d'auteur et  offre la  possibilité aux étudiants et aux professionnels de partager  leurs travaux académiques, articles et  ouvrages tout en leur permettant d'en  tirer profit. </p>
        
            </header>
  
          <div className='container boxM'>
          <div className='container grid3 '>
      
          <div className='box boxM ' >
            
            <h2 className="footerM">Contactez-nous</h2>
            <ul className="center">
              <li>Email: bibintunisie@gmail.com</li>
              <li>Téléphone: +216 25 55 77 80</li>
            </ul> </div>
         
            
               <div class="social-buttons centeritem boxM">
               <h2 className="titresocial" >Suivez-nous</h2>
  <a href="http://www.facebook.com" target="blank" class="social-margin">
    <div class="social-icon facebook">
    <i class="fab fa-facebook-f"></i>
    </div>
  </a>

  <a href="http://linkedin.com/" class="social-margin" target="blank">
    <div class="social-icon linkedin">
    <i class="fab fa-linkedin-in"></i>
    </div>
  </a>

  <a href="http://instagram.com/" target="blank" class="social-margin">
    <div class="social-icon-no-border instagram">
    <i class="fab fa-instagram"></i>
    </div>
  </a>



  <a href="http://youtube.com/" target="blank" class="social-margin">
    <div class="social-icon youtube">
    <i class="fab fa-youtube"></i>
    </div>
  </a>
</div>

          </div>
        </div>
        
        <div className='container display '>
          <div className='container '>

          <div className='box  ' >
            
            <h2 className="footerM">Contactez-nous</h2>
            <ul className="center">
              <li>Email: bibintunisie@gmail.com</li>
              <li>Téléphone: +216 25 55 77 80</li>
            </ul> </div>
            <div class="social-buttons centeritem box">
               <h2 >Suivez-nous</h2>
  <a href="http://www.facebook.com" target="blank" class="social-margin">
    <div class="social-icon facebook">
    <i class="fab fa-facebook-f"></i>
    </div>
  </a>

  <a href="http://linkedin.com/" class="social-margin" target="blank">
    <div class="social-icon linkedin">
    <i class="fab fa-linkedin-in"></i>
    </div>
  </a>

  <a href="http://instagram.com/" target="blank" class="social-margin">
    <div class="social-icon-no-border instagram">
    <i class="fab fa-instagram"></i>
    </div>
  </a>



  <a href="http://youtube.com/" target="blank" class="social-margin">
    <div class="social-icon youtube">
    <i class="fab fa-youtube"></i>
    </div>
  </a>
</div>

            </div></div>
        
        
        
        
        </div>
        
      </footer>
    </>
  )
}

export default Footer