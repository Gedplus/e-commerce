import React, {  useEffect, useState } from "react"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import { Link } from "react-router-dom"
import { Box, IconButton, MenuItem,  Menu,  Button,Typography } from "@mui/material";
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Modal from '@mui/material/Modal';
import Categories from "../../component/mainpage/Categories";
import CategoriesS from "./Cat";
import checked from "../../image/checked.png"
import { useHistory } from 'react-router-dom'; 
import logo1 from "../../image/LOGO.jpeg"
import school from "../../image/school.png"
import { useLocation } from 'react-router-dom';
const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Search = ({ CartItem,user }) => {
  // fixed Header 
  const [mot, setMot] = useState("");
  const history = useHistory ();
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const mot1 = location.pathname.split("/")[2];
  useEffect(() => {
    const loadUserDetails = async() => {
if(path == 'recherche')
 {     setMot(mot1)}


    }
    loadUserDetails();
  }, [mot1]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const handleClose2 = () => setOpen(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose1 = () => {
  
    setAnchorEl(null)};
    const handleClose = () => {
      window.localStorage.clear();
      window.location.href ="./login"
      setAnchorEl(null)};
      const handleSearch = () => {
        if(mot!=="")
   {     history.push (`/recherche/${mot}`)}

      }

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <Link to="/">
          <div className='logo width '>
            <img src={logo1} alt=''  />
          </div></Link>
          <form  className="searchwidth" onSubmit={ handleSearch  }>
          <div className='search-box f_flex searchM' >
       
            <input type='text' placeholder='Vos mots-clés' style={{marginLeft:"20px"}} defaultValue={mot}   onChange={(e) => setMot(e.target.value)} />
            <span onClick={handleSearch}>  <i className='fa fa-search'></i></span>
          </div></form>
         <div className='icon f_flex '>
      
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
             {user.name} {user.approved === true ?<img  style={{height:"20px", width:"20px"}} alt="checked" src={checked}/> :<></>}
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
            > <MenuItem onClick={handleClose1} ><Link to='/Achats'  >Mes achats</Link></MenuItem>
               <MenuItem onClick={handleClose1} ><Link to='/MesDocuments'>Mes Documents</Link></MenuItem>
                 <MenuItem onClick={handleClose1} ><Link to='/AddDocument'>Ajouter Document</Link></MenuItem>
                 <MenuItem  onClick={handleClose1} ><Link to='/solde'>Mon solde</Link></MenuItem>
               
              <MenuItem onClick={handleClose1} ><Link to='/verification'>Demande de vérification de mon compte <img  style={{height:"20px", width:"20px"}} alt="checked" src={checked}/></Link></MenuItem>
              <MenuItem onClick={handleClose}>Déconnexion</MenuItem>
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
      <div className="SearchMobile">
      <div className=' container c_flex ' >
        <Button  onClick={handleOpen}>
      <div className='catgrories d_flex'>
      <img src={school} alt='' style={{width:"20px", height:"20px", marginTop:"7px", marginRight:"7px"}} /> 
      
            <h4>
           Liste des universités <i className='fa fa-chevron-down'></i>
            </h4>
          </div></Button>
          {open === true ? (<CategoriesS/>):(<></>)}
          <form  className="searchwidth" onSubmit={handleSearch}>
        <div className='search-box f_flex'>
           
            <input type='text' placeholder='Vos mots-clés' defaultValue={mot}  style={{marginLeft:"20px"}}  onChange={(e) => setMot(e.target.value)} />
            <span  onClick={handleSearch}>  <i className='fa fa-search'></i></span>
          </div>
          </form>
       
     </div></div>
    </>
  )
}

export default Search
