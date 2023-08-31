import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = (user) => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header2'>
        <div className='container d_flex'>
          <div className='catgrories d_flex'>
            <span class='fas fa-border-all'></span>
      
            <h4>
           Liste des universités <i className='fa fa-chevron-down'></i>
            </h4>
          </div>

          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <li>
                <Link to='/'>Accueil</Link>
              </li>
              <li>
                <Link to='/documents'>Documents</Link>
              </li>
              <li>
                <Link to='/videos'>Videos</Link>
              </li>
              <li>
                <Link to='/packs'>Packs videos</Link>
              </li>
          
              { user.user._id === undefined  ? ( 
                <>    </> 
        ) :(<>   <li>
          <Link to='/AddDocument'>Ajouter Document</Link>
        </li>
     
   
        { user.user.demande === false  ? ( 
        <li>
          <Link to='/verification'>Demande de verification</Link>
        </li>):(<></>)}</>)}
              <li>
                <Link to='/Reclamation'>Reclamation</Link>
              </li>
          
              <li>
                <Link to='/contact'>contact</Link>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
