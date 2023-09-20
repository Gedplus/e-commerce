import React, {  useState } from "react"

import { Link } from "react-router-dom"
import { Box, IconButton, MenuItem,  Menu,  Button,Typography } from "@mui/material";
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
const Search = ({ CartItem,user }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose1 = () => {
  
    setAnchorEl(null)};
    const handleClose = () => {
      window.localStorage.clear();
      window.location.href ="./login"
      setAnchorEl(null)};

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <img src="./images/LOGO.jpeg" alt=''  />
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Rechercher et appuyer sur Entrée...' />
            <span>tout les documents</span>
          </div>
         <div className='icon f_flex width'>
      
         { user._id === undefined  ? ( <><Link to='/login'>
          <button className="button-17">Connexion</button> </Link>
          <Link to='/signup'>
          <button className="button-17" style={{backgroundColor:"#0000a1", color:"#fff"}}>S'identifier</button></Link></>
          ) :(<>
            <Button
   
        onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              
              }}
     style={{backgroundColor:"#f3f5f9"}}
            >
              <Box
                component="img"
                alt="profile"
                src={user.image}
                height="32px"
                width="32px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.85rem"
          
                >
             {user.name}
                </Typography>
            
              </Box>
              <IconButton>
          <ArrowDropDownOutlinedIcon   sx={{ fontSize: "25px" }}/>
        </IconButton>
         
            </Button>
            <Menu
             anchorEl={anchorEl}
             open={isOpen}
             onClose={handleClose1}
             anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            > <MenuItem ><Link to='/MesDocuments'>Mes achats</Link></MenuItem>
               <MenuItem ><Link to='/MesDocuments'>Mes Documents</Link></MenuItem>
                 <MenuItem ><Link to='/AddDocument'>Ajouter Document</Link></MenuItem>
                 <MenuItem ><Link to='/MesDocuments'>Mon solde</Link></MenuItem>
                 <MenuItem ><Link to='/MesDocuments'>Demande de versement de mon solde</Link></MenuItem>
              <MenuItem ><Link to='/verification'>Demande de vérification de mon compte <img  style={{height:"20px", width:"20px"}} alt="checked" src="./images/checked.png"/></Link></MenuItem>
              <MenuItem onClick={handleClose}>Déconnection</MenuItem>
            </Menu>
            
      </>)}
        
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
   <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
          
        </div>
      </section>
    </>
  )
}

export default Search
