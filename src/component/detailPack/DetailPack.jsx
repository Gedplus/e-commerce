import React, { useEffect, useState } from 'react'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import { editDocumentE, editDocumentI, editDocumentP, editDocumentU, getDocument, getMedia, getPackid, useGetMediaQuery, useGetUtilisateursQuery } from '../../state/api';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, IconButton, Typography } from '@mui/material';



const DetailPack= () => {
    const [Pack, setPack] = useState(initialValues);
    const [count, setCount] = useState(0);
    const { data, isLoading } = useGetMediaQuery();
    const userss = useGetUtilisateursQuery();

    const users =userss.data
    const { id } = useParams();
    useEffect(() => {
        const loadMediaDetails = async() => {
            const response = await getPackid(id);
            setPack(response.data);
   
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
           
    return (
        <>
      <section class="container2 forms">
        <div class="form1 login">
           
            <div class="form-content">
                <header class="h">{Pack.title}</header>
                <br/>
                <p>{Pack.description}</p>
             
<div>
<Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(2, minmax(0, 1fr))"
       style={{marginTop:"50px",marginLeft:"70px"}}
            >
            {Pack.videos== undefined ? (<></>):(<>{Pack.videos.map((video) =>{
    return(<>
        {data == undefined ? (
            <></>):(<>{data.map((media) =>{
                return(<>{media._id== video ?(<>    {media.videos== undefined ? (<></>):(<>{media.videos.map((video) =>{
                    return(
                        <Card sx={{ maxWidth: 345 }} style={{boxShadow:"0px 2px 10px "}}>
                                    {users == undefined  ? (<>sxxdd</>) : (<>{users.map((user) => {return( <>  
                                      {media.auteur == user._id ? (     <CardHeader
        avatar={
            <Avatar alt= {user.name} src={user.image} />
        }
        action={
          <IconButton aria-label="settings">
     
          </IconButton>
        }
        title= {user.name}
      

      />

          ):
          (<></>)}</> ) })}</>)}
                        
                        <CardActionArea>
                        <video preload="auto" width="352" height="208" controls>
                        <source src={`http://localhost:5001${video}` } />
                       
                        </video>
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                             {media.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            {media.description}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button color="primary" variant="contained" style={{marginRight:10}}  component={Link} to={`/detailVideo/${media._id}`}>Savoir plus</Button> 
  
      </CardActions>
                      </Card>
                      
                    )
                   })
                
                   }</>)} </>):(<></>)}
            
            </>)})}
            
            
            </>
            
            
            
            )}
        
  </>  )
   })

   }</>)} </Box></div>
         
            </div>
         
        </div>

      </section>
      
    </>
    )

}
export default DetailPack;
const initialValues = {
    titre: "",
    description: "",
    universite: "",
    type: "",
  
  };