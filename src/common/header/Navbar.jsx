import React, { useState } from "react"
import { Link } from "react-router-dom"
import school from "../../image/school.png"
const Navbar = (user) => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header2'>
        <div className='container d_flex'>
          <div className='catgrories catgroriesMobile d_flex'>
  
       <img src={school} alt='' style={{width:"30px", height:"30px", marginTop:"7px", marginLeft:"-7px", marginRight:"7px"}} />
            <h4>
           Liste des universités <i className='fa fa-chevron-down'></i>
            </h4>
          </div>

          <div className='navlink'>
            <ul className="link f_flex capitalize">
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <li>
                <Link to='/'>Accueil</Link>
              </li>
              <li>
                <Link onClick={() => {window.location.href=`/documents`}}>Documents</Link>
              </li>
          
       
              <li>
                <Link to='/Reclamation'>Réclamation</Link>
              </li>
              { user.user._id == undefined  ? ( 
                <>    </> 
        ) :(  <li>
          <Link to='/MonCompte'>Mon compte</Link> 
        </li>
     
   
     )}
              <li>
                <Link to='/contact'>contact</Link>
              </li>
            </ul>

         
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
