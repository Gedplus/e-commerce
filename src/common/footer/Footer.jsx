import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid3'>
          <div className='box'style={{marginRight: "100px"}}>
            <h1>Bibin</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
       
          </div>

          <div className='box'>
            <h2>À propos de nous</h2>
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
              <li>Terms & Conditions</li>
             
            </ul>
          </div>
          <div className='box'>
            <h2>Contactez-nous</h2>
            <ul>
              <li>70 Washington Square South, New York, NY 10012, United States </li>
              <li>Email: uilib.help@gmail.com</li>
              <li>Phone: +1 1123 456 780</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer