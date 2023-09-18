import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid3'>
          <div className='box footerbox'>
            <h1>Bibin</h1>
            <p>"BiBin" est l'acronyme de "Bibliothèque Tunisienne de l'Intelligence Intellectuelle", une plateforme en ligne conçue dans le but de permettre aux étudiants et aux professionnels de partager leurs travaux académiques, articles et ouvrages. </p>
       
          </div>

          <div className='box'>
            <h2><Link className="Link" to='/Apropo'>À propos de nous</Link></h2>
            <ul>
            <li>
                <Link className="Link" to='/'>Accueil</Link>
              </li>
            <li>
                <Link to='/documents' className="Link">Liste des documents</Link>
              </li>
              <li>
                <Link  className="Link" to='/Reclamation'>Reclamation</Link>
              </li>
              <li>
                <Link className="Link" to='/contact'>contact</Link>
              </li>
              <li><Link className="Link" to='/Reglement'>Terms & Conditions</Link></li>
             
            </ul>
          </div>
          <div className='box boxcontact'>
            <h2>Contactez-nous</h2>
            <ul>
              <li>Email: bibintunisie@gmail.com</li>
              <li>Téléphone: +216 25 55 77 80</li>
            </ul>
               <div class="buttons">
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
        </div>
      </footer>
    </>
  )
}

export default Footer