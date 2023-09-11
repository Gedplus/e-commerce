import React, { useState } from "react"
import { addDocument, addReclamation } from "../../state/api";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Select from "@mui/material/Select";
import { Box, Button, Card, CardMedia, MenuItem, TextField, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Slider from '@mui/material/Slider';
import { Cascader } from 'antd';
const AddDocument = ({user}) => {
    const [selected, setSelected] = useState("");
  
const [type, setType] = useState();
const [image , setImage] = useState("")
const [universite , setUniversite] = useState("")

const [Annee , setAnnée] = useState("")
const [description, setDescription] = useState("");
var prixt = 0
const [Titre, setTitre] = useState("");
const [period, setPeriod] = useState(6);
const [value, setValue] = useState(0);
const [image1 , setImage1] = useState("")
function convertToBase646(e){
  console.log(e);
  var reader = new FileReader();
  reader.readAsDataURL(e.target.files[0]);
  reader.onload = () => {

    setImage1(reader.result)

  };
  reader.onerror = error => {
    console.log("error: ", error);
  }}
      const options = [
        {
          value: 'Université de Tunis',
          label: 'Université de Tunis',
          children: [
            {
              value: "Ecole Nationale Supérieure d'Ingénieurs de Tunis",
              label: "Ecole Nationale Supérieure d'Ingénieurs de Tunis",
             
            },
            {
              value: "Ecole Normale Supérieure",
              label: "Ecole Normale Supérieure",
             
            },
            {
              value: "Ecole Supérieure des Sciences Economiques et Commerciales de Tunis",
              label: "Ecole Supérieure des Sciences Economiques et Commerciales de Tunis",
             
            },
            {
              value: "Faculté des Sciences Humaines et Sociales de Tunis",
              label: "Faculté des Sciences Humaines et Sociales de Tunis",
             
            },
            {
              value: "Institut Préparatoire aux Etudes Littéraires et de Sciences Humaines de Tunis",
              label: "Institut Préparatoire aux Etudes Littéraires et de Sciences Humaines de Tunis",
             
            },
            {
              value: "Institut Préparatoire aux Etudes d'Ingénieurs de Tunis",
              label: "Institut Préparatoire aux Etudes d'Ingénieurs de Tunis",
             
            },
            {
              value: "Institut Supérieur d'Art Dramatiques",
              label: "Institut Supérieur d'Art Dramatique",
             
            },
            {
              value: "Institut Supérieur de Gestion de Tunis",
              label: "Institut Supérieur de Gestion de Tunis",
             
            },
            {
              value: "Institut Supérieur de Musique",
              label: "Institut Supérieur de Musique",
             
            },
            {
              value: "Institut Supérieur de l'Animation pour la Jeunesse et la Culture",
              label: "Institut Supérieur de l'Animation pour la Jeunesse et la Culture",
             
            },
            {
              value: "Institut Supérieur des Beaux Arts de Tunis",
              label: "Institut Supérieur des Beaux Arts de Tunis",
             
            },
            {
              value: "Institut Supérieur des Etudes Appliquées en Humanité de Tunis",
              label: "Institut Supérieur des Etudes Appliquées en Humanité de Tunis",
             
            },
            {
              value: "Institut Supérieur des Métiers du Patrimoine de Tunis",
              label: "Institut Supérieur des Métiers du Patrimoine de Tunis",
             
            },
            {
              value: "Institut Supérieur des affaires de Tunis",
              label: "Institut Supérieur des affaires de Tunis",
             
            },
            {
              value: "Institut Supérieur des Études Appliquées en Humanités de Zaghouan",
              label: "Institut Supérieur des Études Appliquées en Humanités de Zaghouan",
             
            },
            
    
    
          ],
        },
        {
          value: 'Université de Tunis EL Manar',
          label: 'Université de Tunis EL Manar',
          children: [
            {
              value: "Ecole Nationale d'Ingénieurs de Tunis",
              label: "Ecole Nationale d'Ingénieurs de Tunis",
            
            },
            {
              value: "Faculté de Droit et des Sciences Politiques de Tunis",
              label: "Faculté de Droit et des Sciences Politiques de Tunis",
            
            },
            {
              value: "Faculté de Médecine de Tunis",
              label: "Faculté de Médecine de Tunis",
            
            },
            {
              value: "Faculté des Sciences Economiques et de Gestion de Tunis",
              label: "Faculté des Sciences Economiques et de Gestion de Tunis",
            
            },
            {
              value: "Faculté des Sciences de Tunis",
              label: "Faculté des Sciences de Tunis",
            
            },
            {
              value: "Institut Bourguiba des Langues Vivantes",
              label: "Institut Bourguiba des Langues Vivantes",
            
            },
            {
              value: "Institut Préparatoire aux Etudes d'Ingénieurs d El Manar",
              label: "Institut Préparatoire aux Etudes d'Ingénieurs d El Manar",
            
            },
            {
              value: "Institut Supérieur d'Informatique d'El Manar",
              label: "Institut Supérieur d'Informatique d'El Manar",
            
            },
            
            {
              value: "Institut Supérieur des Sciences Biologiques Appliquées",
              label: "Institut Supérieur des Sciences Biologiques Appliquées",
            
            },
            
            {
              value: "Institut Supérieur des Sciences Humaines de Tunis",
              label: "Institut Supérieur des Sciences Humaines de Tunis",
            
            },
            
            {
              value: "Institut Supérieur des Technologies Médicales",
              label: "Institut Supérieur des Technologies Médicales",
            
            },
            
            
    
          ],
        },
      ];
      function onChange(value) {
   
        setUniversite(value[1])
      }
    const handleFormSubmit = async(values) => {
      if (user.approved == true ){
        const document ={
    
          document: image,
          type: type,
          prixLecture: value,
          prixTelechargement: prixt,
          Annee: Annee,
          auteur: user._id,
        titre: Titre,
        description: description, 
image:image1,
      
        universite: universite,
        accepte : true,
        period : period,
        };
        await addDocument(document);
      }
      else {
        const document ={

          document: image,
          type: type,
          prixLecture: value,
          prixTelechargement: prixt,
          image:image1,
          auteur: user._id,
        titre: Titre,
        description: description, 
        Annee:Annee,
       
        universite: universite,
        accepte : false,
        period : period,
        };
        await addDocument(document);

      }
      
      
      };

    
   
       
     
             function valueLabelFormatD(value) {
            
              return value;
              }
function valueLabelFormat(value) {

    
    var ss=  value.toString()
    const str2 = '00';
    const str = '0';

    if (ss.length == 3)
    {ss= ss.concat('', str2)}
    if (ss.length == 4)
    {ss= ss.concat('', str)}

     return  ss;
    
    }
    const handleChange7 = (event, newValue) => {
      if (typeof newValue === 'number') {
        setPeriod(newValue);
      }
    };
  function convertToBase64(e){
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {

      setImage(reader.result)

    };
    reader.onerror = error => {
      console.log("error: ", error);
    }}

       
        function calculateValue(value) {
          var ss=  value.toString()
         const str2 = '00';
         const str = '0';
      
        if (ss.length == 3)
        {ss= ss.concat('', str2)}
        if (ss.length == 4)
        {ss= ss.concat('', str)}

          return  ss;
        }
        
        
        function calculateValue1(value) {
          var ss = 0
          if( value == 0 ){
            ss= 0
          } else {
            ss=  value + 0.90
          }
  
          return  ss;
         
        }
        function calculateValue2(value) {
          var ss = 0
          if( value == 0 ){
            ss= 0
          } else {
            ss=  value + 1.80
          }
       
          return  ss;
        
        }
        function calculateValue3(value) {
          var ss = 0
          if( value == 0 ){
            ss= 0
          } else {
            ss=  value + 2.80
          }
  
          return  ss;
        }
        function calculateValue4(value) {
          var ss = 0
          if( value == 0 ){
            ss= 0
          } else {
            ss=  value + 5.80
          }
       
          return  ss;
        }
        function calculateValue5(value) {
          var ss = 0
          if( value == 0 ){
            ss= 0
          } else {
            ss=  value + 9.80
          }
      
          return  ss;
        }
        const handleChange2 = (event) => {
            setType(event.target.value);
          };
          const handleChange4 = (event, newValue) => {
            if (typeof newValue === 'number') {
              setValue(newValue);
            }
          };
          
  return (
    <>
      <section class="container3 forms">
        <div class="form1 login">
           
            <div class="form-content">
                <header class="h">Ajouter un document</header>
                <br/>
               
             <form  class="form2" onSubmit={handleFormSubmit}>
             <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
          Upload votre document:
        </Typography>
        <div class="field input-field">
   <input type="file"    onChange={convertToBase64}    required /> <br/> <br/>
 
                     </div>
                     <br/>
                     <FormControl
       fullWidth
          >
            <InputLabel
              color="secondary"
              id="demo-simple-select-label"
            >
           Type de votre document
            </InputLabel>
            <Select
            
     
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Type de votre document"
              color="secondary"
              onChange={handleChange2}
            >
          
                  <MenuItem value="PFE">
           PFE ou autre (niveau licence)
                  </MenuItem>
                  <MenuItem value="Mémoire">
                 Mémoire ou autre (niveau mastére)
                  </MenuItem>
                  <MenuItem value="Thése">
           Thése ou autre (niveau doctorat)
                  </MenuItem>
                  <MenuItem value="Article">
       Article
                  </MenuItem>
                  <MenuItem value="Ouvrage">
 Ouvrage
                  </MenuItem>
      
           
            </Select>
          </FormControl>
          <br/>
          <br/>
          <div class="field input-field">
                <Cascader options={options} onChange={onChange} placeholder="Université dont vous avez travaillé votre document "     style={{width:"940px"}} />
                    </div>
                    <div class="field input-field">
                        <input type="text" placeholder="Année" class="input" onChange={(event) => {setAnnée(event.target.value)}} />
                    </div>
          {type === "PFE" && (<>
                      <br/>
                        <Box sx={{ width: 270 }}>
        <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
          Prix de mode lecture : {value} dt
        </Typography>
        <Slider
              style={{width:"400px"}}
          value={value}
          min={0} 
          step={0.001}
          max={4000}
          color="secondary"
        
          getAriaValueText={valueLabelFormat}
          valueLabelFormat={valueLabelFormat}
          onChange={handleChange4}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
        />
      </Box>     <Box sx={{ width: 270 }}>
          <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
         Durée de mode lecture : {period} mois
        </Typography>
        <Slider
              style={{width:"400px"}}
          value={period}
          min={6}
          step={1}
          max={12}
          color="secondary"
        
          getAriaValueText={valueLabelFormatD}
          valueLabelFormat={valueLabelFormatD}
          onChange={handleChange7}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
        />
      </Box>          <Box sx={{ width: 270 }}>
        <Typography id="non-linear-slider"   style={{fontSize:"18px"}} gutterBottom>
        Prix de mode téléchargement : { value == 0 ?(<>{prixt =value } </>):(<>{prixt =value + 4000} dt</>)}
        </Typography>
        <Slider
             style={{width:"400px"}}
          value={value}
          min={0}
          step={0.001}
          max={4000}
   disabled
          getAriaValueText={valueLabelFormat}
          valueLabelFormat={valueLabelFormat}
          onChange={handleChange4}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
        />
      </Box></>
                )} {type === "Mémoire" && (<>
                  <Box sx={{ width: 270 }}>
  <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
  Prix de mode lecture :  {value}
  </Typography>
  <Slider
    value={value}
    min={0}
    style={{width:"400px"}}
    step={0.001}
    max={6000}
    color="secondary"
  
    getAriaValueText={valueLabelFormat}
    valueLabelFormat={valueLabelFormat}
    onChange={handleChange4}
    valueLabelDisplay="auto"
    aria-labelledby="non-linear-slider"
  />
</Box>          <Box sx={{ width: 270 }}>
        <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
       Durée de mode lecture : {period} mois
      </Typography>
      <Slider
            style={{width:"400px"}}
        value={period}
        min={6}
        step={1}
        max={12}
        color="secondary"
      
        getAriaValueText={valueLabelFormatD}
        valueLabelFormat={valueLabelFormatD}
        onChange={handleChange7}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
    </Box>     <Box sx={{ width: 270 }}>
  <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
  Prix de mode téléchargement :   { value == 0 ?(<>{prixt =value } </>):(<>{prixt =value + 6000}</>)}
  </Typography>
  <Slider
       style={{width:"400px"}}
    value={value}
    min={0}
    step={0.001}
    max={6000}
disabled
    getAriaValueText={valueLabelFormat}
    valueLabelFormat={valueLabelFormat}
    onChange={handleChange4}
    valueLabelDisplay="auto"
    aria-labelledby="non-linear-slider"
  />
</Box></>
          )}
           {type === "Thése" && (<>
                  <Box sx={{ width: 270 }}>
  <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
  Prix de mode lecture : {value}
  </Typography>
  <Slider
       style={{width:"400px"}}
    value={value}
    min={0}
    step={0.001}
    max={8000}
    color="secondary"
  
    getAriaValueText={valueLabelFormat}
    valueLabelFormat={valueLabelFormat}
    onChange={handleChange4}
    valueLabelDisplay="auto"
    aria-labelledby="non-linear-slider"
  />
</Box>   
<Box sx={{width: 270 }}>
        <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
       Durée de mode lecture : {period} mois
      </Typography>
      <Slider
            style={{width:"400px"}}
        value={period}
        min={6}
        step={1}
        max={12}
        color="secondary"
      
        getAriaValueText={valueLabelFormatD}
        valueLabelFormat={valueLabelFormatD}
        onChange={handleChange7}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
    </Box>           <Box sx={{ width: 270 }}>
  <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
  Prix de mode téléchargement : { value == 0 ?(<>{prixt =value } </>):(<>{prixt =value + 8000}</>)}
  </Typography>
  <Slider
       style={{width:"400px"}}
    value={value}
    min={0}
    step={0.001}
    max={8000}
disabled
    getAriaValueText={valueLabelFormat}
    valueLabelFormat={valueLabelFormat}
    onChange={handleChange4}
    valueLabelDisplay="auto"
    aria-labelledby="non-linear-slider"
  />
</Box></>
          )}


{user.statue === "professionnel" && user.approved === true && type==="Article"  && (<>        <Box sx={{ width: 270 }}>
<Typography id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} > 
Prix de mode lecture :  {value}
</Typography>
<Slider
  value={value}
  min={0}
  step={0.001}
  max={8000}
  color="secondary"
  style={{width:"400px"}}
  getAriaValueText={valueLabelFormat}
  valueLabelFormat={valueLabelFormat}
  onChange={handleChange4}
  valueLabelDisplay="auto"
  aria-labelledby="non-linear-slider"
/>
</Box>      <Box sx={{ width: 270 }}>
          <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
         Durée de mode lecture : {period} mois
        </Typography>
        <Slider
              style={{width:"400px"}}
          value={period}
          min={6}
          step={1}
          max={12}
          color="secondary"
        
          getAriaValueText={valueLabelFormatD}
          valueLabelFormat={valueLabelFormatD}
          onChange={handleChange7}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
        />
      </Box>       <Box sx={{ width: 270 }}>
<Typography id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} >
Prix de mode téléchargement: { value == 0 ?(<>{prixt =value } </>):(<>{prixt =value + 8000}</>)}
</Typography>
<Slider
  value={value}
  min={0}
  step={0.001}
  max={8000}
disabled
style={{width:"400px"}}
  getAriaValueText={valueLabelFormat}
  valueLabelFormat={valueLabelFormat}
  onChange={handleChange4}
  valueLabelDisplay="auto"
  aria-labelledby="non-linear-slider"
/>
</Box></> )}
{user.statue === "professionnel" && user.approved === false && type==="Article"  && (<>  <Typography color="red" id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} > 
La soumission de ce type de document est conditionnée à la vérification préalable de votre compte
</Typography>        <Box sx={{ width: 270 }}>
<Typography id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} > 
Prix de mode lecture :  {value}
</Typography>
<Slider
  value={value}
  min={0}
  step={0.001}
  max={8000}
  disabled
  color="secondary"
  style={{width:"400px"}}
  getAriaValueText={valueLabelFormat}
  valueLabelFormat={valueLabelFormat}
  onChange={handleChange4}
  valueLabelDisplay="auto"
  aria-labelledby="non-linear-slider"
/>
</Box>      <Box sx={{ width: 270 }}>
          <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
         Durée de mode lecture : {period} mois
        </Typography>
        <Slider
              style={{width:"400px"}}
          value={period}
          min={6}
          step={1}
          max={12}
          color="secondary"
          disabled
          getAriaValueText={valueLabelFormatD}
          valueLabelFormat={valueLabelFormatD}
          onChange={handleChange7}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
        />
      </Box>       <Box sx={{ width: 270 }}>
<Typography id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} >
Prix de mode téléchargement: { value == 0 ?(<>{prixt =value } </>):(<>{prixt =value + 8000}</>)}
</Typography>
<Slider
  value={value}
  min={0}
  step={0.001}
  max={8000}
disabled
style={{width:"400px"}}
  getAriaValueText={valueLabelFormat}
  valueLabelFormat={valueLabelFormat}
  onChange={handleChange4}
  valueLabelDisplay="auto"
  aria-labelledby="non-linear-slider"
/>
</Box></> )}
{user.statue === "etudiant"  && type==="Article"  && (<>    <Typography color="red" id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} > 
La soumission de ce type de document est conditionnée à la vérification préalable de votre compte
</Typography>      <Box sx={{ width: 270 }}>
<Typography id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} > 
Prix de mode lecture :  {value}
</Typography>
<Slider
  value={value}
  min={0}
  step={0.001}
  max={8000}
  color="secondary"
  disabled
  style={{width:"400px"}}
  getAriaValueText={valueLabelFormat}
  valueLabelFormat={valueLabelFormat}
  onChange={handleChange4}
  valueLabelDisplay="auto"
  aria-labelledby="non-linear-slider"
/>
</Box>      <Box sx={{ width: 270 }}>
          <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
         Durée de mode lecture : {period} mois
        </Typography>
        <Slider
              style={{width:"400px"}}
          value={period}
          min={6}
          step={1}
          max={12}
          color="secondary"
          disabled
          getAriaValueText={valueLabelFormatD}
          valueLabelFormat={valueLabelFormatD}
          onChange={handleChange7}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
        />
      </Box>       <Box sx={{ width: 270 }}>
<Typography id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} >
Prix de mode téléchargement: { value == 0 ?(<>{prixt =value } </>):(<>{prixt =value + 8000}</>)}
</Typography>
<Slider
  value={value}
  min={0}
  step={0.001}
  max={8000}
disabled
style={{width:"400px"}}
  getAriaValueText={valueLabelFormat}
  valueLabelFormat={valueLabelFormat}
  onChange={handleChange4}
  valueLabelDisplay="auto"
  aria-labelledby="non-linear-slider"
/>
</Box></> )}
{user.statue === "professionnel" && user.approved === true && type==="Ouvrage"  && (<>        <Box sx={{ width: 270 }}>
<Typography id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} > 
Prix de mode lecture :  {value}
</Typography>
<Slider
  value={value}
  min={0}
  step={0.001}
  max={12000}
  color="secondary"
  style={{width:"400px"}}
  getAriaValueText={valueLabelFormat}
  valueLabelFormat={valueLabelFormat}
  onChange={handleChange4}
  valueLabelDisplay="auto"
  aria-labelledby="non-linear-slider"
/>
</Box>      <Box sx={{ width: 270 }}>
          <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
         Durée de mode lecture : {period} mois
        </Typography>
        <Slider
              style={{width:"400px"}}
          value={period}
          min={6}
          step={1}
          max={12}
          color="secondary"
        
          getAriaValueText={valueLabelFormatD}
          valueLabelFormat={valueLabelFormatD}
          onChange={handleChange7}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
        />
      </Box>       <Box sx={{ width: 270 }}>
<Typography id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} >
Prix de mode téléchargement: { value == 0 ?(<>{prixt =value } </>):(<>{prixt =value + 8000}</>)}
</Typography>
<Slider
  value={value}
  min={0}
  step={0.001}
  max={12000}
disabled
style={{width:"400px"}}
  getAriaValueText={valueLabelFormat}
  valueLabelFormat={valueLabelFormat}
  onChange={handleChange4}
  valueLabelDisplay="auto"
  aria-labelledby="non-linear-slider"
/>
</Box></> )}
{user.statue === "professionnel" && user.approved === false && type==="Ouvrage"  && (<>  <Typography color="red" id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} > 
La soumission de ce type de document est conditionnée à la vérification préalable de votre compte
</Typography>        <Box sx={{ width: 270 }}>
<Typography id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} > 
Prix de mode lecture :  {value}
</Typography>
<Slider
  value={value}
  min={0}
  step={0.001}
  max={12000}
  disabled
  color="secondary"
  style={{width:"400px"}}
  getAriaValueText={valueLabelFormat}
  valueLabelFormat={valueLabelFormat}
  onChange={handleChange4}
  valueLabelDisplay="auto"
  aria-labelledby="non-linear-slider"
/>
</Box>      <Box sx={{ width: 270 }}>
          <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
         Durée de mode lecture : {period} mois
        </Typography>
        <Slider
              style={{width:"400px"}}
          value={period}
          min={6}
          step={1}
          max={12}
          color="secondary"
          disabled
          getAriaValueText={valueLabelFormatD}
          valueLabelFormat={valueLabelFormatD}
          onChange={handleChange7}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
        />
      </Box>       <Box sx={{ width: 270 }}>
<Typography id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} >
Prix de mode téléchargement: { value == 0 ?(<>{prixt =value } </>):(<>{prixt =value + 8000}</>)}
</Typography>
<Slider
  value={value}
  min={0}
  step={0.001}
  max={12000}
disabled
style={{width:"400px"}}
  getAriaValueText={valueLabelFormat}
  valueLabelFormat={valueLabelFormat}
  onChange={handleChange4}
  valueLabelDisplay="auto"
  aria-labelledby="non-linear-slider"
/>
</Box></> )}
{user.statue === "etudiant"  && type==="Ouvrage"  && (<>    <Typography color="red" id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} > 
La soumission de ce type de document est conditionnée à la vérification préalable de votre compte
</Typography>      <Box sx={{ width: 270 }}>
<Typography id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} > 
Prix de mode lecture :  {value}
</Typography>
<Slider
  value={value}
  min={0}
  step={0.001}
  max={12000}
  color="secondary"
  disabled
  style={{width:"400px"}}
  getAriaValueText={valueLabelFormat}
  valueLabelFormat={valueLabelFormat}
  onChange={handleChange4}
  valueLabelDisplay="auto"
  aria-labelledby="non-linear-slider"
/>
</Box>      <Box sx={{ width: 270 }}>
          <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
         Durée de mode lecture : {period} mois
        </Typography>
        <Slider
              style={{width:"400px"}}
          value={period}
          min={6}
          step={1}
          max={12}
          color="secondary"
          disabled
          getAriaValueText={valueLabelFormatD}
          valueLabelFormat={valueLabelFormatD}
          onChange={handleChange7}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
        />
      </Box>       <Box sx={{ width: 270 }}>
<Typography id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} >
Prix de mode téléchargement: { value == 0 ?(<>{prixt =value } </>):(<>{prixt =value + 8000}</>)}
</Typography>
<Slider
  value={value}
  min={0}
  step={0.001}
  max={12000}
disabled
style={{width:"400px"}}
  getAriaValueText={valueLabelFormat}
  valueLabelFormat={valueLabelFormat}
  onChange={handleChange4}
  valueLabelDisplay="auto"
  aria-labelledby="non-linear-slider"
/>
</Box></> )}
<div class="field input-field">
                        <input type="text" placeholder="Titre" class="input" onChange={(event) => {setTitre(event.target.value)}} />
                    </div>
                   <div class="field1 input-field">
                        <textarea type="text" placeholder="Description" class="input" onChange={(event) => {setDescription(event.target.value)}} />
                    </div>
                    <Typography id="non-linear-slider"  style={{fontSize:"17px"}}  gutterBottom>
          Ajouté une photo :
        </Typography>
                    <div class="field input-field">
                    <input accept="image/*"
             type="file" placeholder="Email"
             onChange={convertToBase646}/>

                    </div>
                     <div class="field button-field">
                         <button type="submit" >Envoyer</button>
          </div>
                </form>
                 
             </div>
     
            </div>

     
      </section>
      
    </>
  )
}

export default AddDocument
