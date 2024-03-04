import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"
import p1 from "../../image/p1.png"
import p2 from "../../image/p2.png"
import p3 from "../../image/p3.png"
import p4 from "../../image/p4.png"
import p5 from "../../image/p5.png"
const Footer = () => { 
  return (
    <>
      <footer>
        <div className='container '>
        <header class="h">   <h1 className="footerM">À propos</h1>
     
            <p className="textFooter">"BiBin" est l'acronyme de "Bibliothèque Tunisienne de l'Intelligence Intellectuelle", une plateforme en ligne qui vise à protéger le droit  d'auteur et  offre la  possibilité aux étudiants et aux professionnels de partager  leurs travaux académiques, articles et  ouvrages tout en leur permettant d'en  tirer profit. </p>
        
            </header>
  
          <div className='container boxM'>
          <div className='container grid3 '>
      
          <div className='box boxM ' >
            
            <h2 className="footerM">Paiement sécurisé</h2>
            <ul className="center">
           <img src={p1} /> 
           <img src={p2} /> 
           <img src={p3} /> 
           <img src={p4} /> 
           <img src={p5} /> 
            </ul> </div>
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
        
        <div className='container display  '>
          <div className='container '>

          <div className='box  ' >
          <div className='box  ' >
            
            <h2 className="footerM ">Paiement sécurisé</h2>
            <ul className="center ">
           <img src={p1} /> 
           <img src={p2} /> 
           <img src={p3} /> 
           <img src={p4} /> 
           <img src={p5} /> 
            </ul> </div>
            <h2 className="footerM ">Contactez-nous</h2>
            <ul className="center ">
              <li>Email: bibintunisie@gmail.com</li>
              <li>Téléphone: +216 25 55 77 80</li>
            </ul> </div>
    
            <div class="social-buttons  centeritem box">
               <h2  className="textff">Suivez-nous</h2>
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
        
      </footer><div className="footerB">
        <p>Copyright © 2024, present BibinTunisie,Inc.All rights reserved.</p>
      </div>
    </>
  )
}

export default Footer