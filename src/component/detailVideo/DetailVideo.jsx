import React, { useEffect, useState } from 'react'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import { editDocumentE, editDocumentI, editDocumentP, editDocumentU, getDocument, getMedia, useGetUtilisateursQuery } from '../../state/api';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';



const DetailVideo= () => {
    const [Media, setMedia] = useState(initialValues);
    const userss = useGetUtilisateursQuery();
    const [count, setCount] = useState(0);
    const [numPages, setNumPages] =useState(null)
    const users =userss.data
    const { id } = useParams();
    useEffect(() => {
        const loadMediaDetails = async() => {
            const response = await getMedia(id);
            setMedia(response.data);
   
        }
        loadMediaDetails();
      }, []);
      
      const handleFormSubmit = async(id,document1) => {
    
        setCount(1)
          await editDocumentI(id, document1 );
        
        };
        const handleFormSubmitU = async(id,document1) => {
       
          setCount(1)
            await editDocumentU(id, document1 );
          
          };
          const handleFormSubmitE = async(id,document1) => {
           
            setCount(1)
              await editDocumentE(id, document1 );
            
            };
            const handleFormSubmitP = async(id,document1) => {
             
              setCount(1)
                await editDocumentP(id, document1 );
              
              };
              function onDocumentSuccess ({numPages}){
setNumPages(numPages)
              }
    return (
        <>
      <section class="container2 forms">
        <div class="form1 login">
           
            <div class="form-content">
                <header class="h">{Media.name}</header>
                <br/>
                <p>{Media.description}</p>
                {users == undefined  ? (<>sxxdd</>) : (<>{users.map((user) => {return( <>    {Media.auteur == user._id ? (  <>  
                
                    <Button

              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              }}
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
          
         
            </Button>
          </> ):
          (<></>)}</> ) })}</>)} 
<div>
{Media.videos== undefined ? (<></>):(<>{Media.videos.map((video) =>{
    return(
        <video preload="auto" width="1000" height="500" controls>
        <source src={`http://localhost:5001${video}` } />
   
        </video>
    )
   })

   }</>)} </div>
         
            </div>
         
        </div>

      </section>
      
    </>
    )

}
export default DetailVideo;
const initialValues = {
    titre: "",
    description: "",
    universite: "",
    type: "",
  
  };