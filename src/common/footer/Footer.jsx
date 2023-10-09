import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid3'>
          <div className='box footerbox'>
            <h1 className="footerM">À propos</h1>
            <p>"BiBin" est l'acronyme de "Bibliothèque Tunisienne de l'Intelligence Intellectuelle", une plateforme en ligne conçue dans le but de permettre aux étudiants et aux professionnels de partager leurs travaux académiques, articles et ouvrages. </p>
       
          </div>

      
          <div className='box boxM'>
            <h2 className="footerM">Contactez-nous</h2>
            <ul>
              <li>Email: bibintunisie@gmail.com</li>
              <li>Téléphone: +216 25 55 77 80</li>
            </ul>
            <h2 className="footerM">Suivez-nous</h2>
               <div class="buttons" style={{marginTop:"-30px"}}>
         
         <div class="row">
            <button >
            <span><i class="fab fa-facebook-f"></i></span>
            </button>
          
         </div>
         <div class="row">
         <button class="instagram">
            <span><i class="fab fa-instagram"></i></span>
            </button>
         </div>
         <div class="row">
            <button class="twitter">
            <span><i class="fab fa-twitter"></i></span>
            </button>
          
         </div>
      
         <div class="row">
         <button class="youtube">
            <span><i class="fab fa-youtube"></i></span>
            </button>
         </div>
         <div class="row">
            <button class="linkedIn">
            <span><i class="fab fa-linkedin-in"></i></span>
            </button>
          
         </div>
      </div>
          </div>
          <div className='box boxD'>
            <h2 className="footerM">Contactez-nous</h2>
            <ul>
              <li>Email: bibintunisie@gmail.com</li>
              <li>Téléphone: <br/>+216 25 55 77 80</li>
            </ul>
            <h2 className="footerM">Suivez-nous</h2>
               <div class="buttons" style={{marginTop:"-30px"}}>
         
         <div class="row">
            <button >
            <span><i class="fab fa-facebook-f"></i></span>
            </button>
          

         <button class="instagram">
            <span><i class="fab fa-instagram"></i></span>
            </button>
         </div>
         <div class="row">
            <button class="twitter">
            <span><i class="fab fa-twitter"></i></span>
            </button>
          
   
         <button class="youtube">
            <span><i class="fab fa-youtube"></i></span>
            </button>
         </div>
         <div class="row">
            <button class="linkedIn">
            <span><i class="fab fa-linkedin-in"></i></span>
            </button>
          
         </div>
      </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer