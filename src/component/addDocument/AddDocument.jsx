import React, { useEffect, useState } from "react"
import { addDocument, addReclamation, getArticle } from "../../state/api";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Select from "@mui/material/Select";
import { useHistory } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { Alert, Box, Button, Card, CardMedia, CircularProgress, MenuItem, TextField, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Slider from '@mui/material/Slider';
import { Cascader } from 'antd';
import { toast } from "react-toastify";
const AddDocument = ({user}) => {
    const [selected, setSelected] = useState("");
    const [erreur1, setErreur1] = useState(false);
    const [erreur, setErreur] = useState(false);
    const [erreur3, setErreur3] = useState(false);
const [type, setType] = useState("");
const [image , setImage] = useState("")
const [universite , setUniversite] = useState("")
const [file, setFile] = useState("");
const [Annee , setAnnée] = useState("")
const [description, setDescription] = useState("");
const [prive, setprive] = useState("");
var prixt = 0
const [Titre, setTitre] = useState("");
const [period, setPeriod] = useState(6);
const [value, setValue] = useState(0);
const [image1 , setImage1] = useState("https://res.cloudinary.com/djkoevvlt/image/upload/v1703074820/jaedv92epr9q7mawdjwj.jpg")
const history = useHistory ();





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
          value: "Institut préparatoire aux études d’ingénieurs de Tunis ",
          label: "Institut préparatoire aux études d’ingénieurs de Tunis ",
         
        },
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
          value: "Institut Bourguiba des langues vivantes ",
          label: "Institut Bourguiba des langues vivantes ",
        
        },
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
    { value: 'Université de Carthage',
    label: 'Université de Carthage',
    children: [ 
      {
        value: "Ecole National d'Ingénieur de Carthage",
        label: "Ecole National d'Ingénieur de Carthage",
      
      },
      {
        value: "Ecole Nationale d'Architecture et d'Urbanisme de Tunis",
        label: "Ecole Nationale d'Architecture et d'Urbanisme de Tunis",
      
      },
      {
        value: "Ecole Nationale d'Ingénieurs de Bizerte",
        label: "Ecole Nationale d'Ingénieurs de Bizerte",
      
      },
      {
        value: "Ecole Polytechnique de Tunisie",
        label: "Ecole Polytechnique de Tunisie",
      
      },
      {
        value: "Ecole Supérieure de l'Audiovisuel et du Cinéma de Gammarth",
        label: "Ecole Supérieure de l'Audiovisuel et du Cinéma de Gammarth",
      
      },
      {
        value: "Ecole Supérieure des Statistiques et d'Analyse de l'Information",
        label: "Ecole Supérieure des Statistiques et d'Analyse de l'Information",
      
      },
      {
        value: "Faculté des Sciences Economiques et de Gestion de Nabeul",
        label: "Faculté des Sciences Economiques et de Gestion de Nabeul",
      
      },
      {
        value: "Faculté des Sciences Juridiques, Politiques et Sociales de Tunis",
        label: "Faculté des Sciences Juridiques, Politiques et Sociales de Tunis",
      
      },
      {
        value: "Faculté des Sciences de Bizerte",
        label: "Faculté des Sciences de Bizerte",
      
      },
      {
        value: "Institut National des Sciences Appliquées et de Technologie",
        label: "Institut National des Sciences Appliquées et de Technologie",
      
      },
      {
        value: "Institut National du Travail et des Etudes Sociales de Tunis",
        label: "Institut National du Travail et des Etudes Sociales de Tunis",
      
      },
      {
        value: "Institut Préparatoire aux Etudes Scientifiques et Techniques de la Marsa",
        label: "Institut Préparatoire aux Etudes Scientifiques et Techniques de la Marsa",
      
      },
      {
        value: "Institut Préparatoire aux Etudes d'Ingénieur Nabeul",
        label: "Institut Préparatoire aux Etudes d'Ingénieur Nabeul",
      
      },
      {
        value: "Institut Préparatoire aux Etudes d'Ingénieur de Bizerte",
        label: "Institut Préparatoire aux Etudes d'Ingénieur de Bizerte",
      
      },
      {
        value: "Institut Superieur des Technologies de l’Environnement de l’Urbanisme et de Bâtiment",
        label: "Institut Superieur des Technologies de l’Environnement de l’Urbanisme et de Bâtiment",
      
      },
      {
        value: "Institut Supérieur de Gestion de Bizerte",
        label: "Institut Supérieur de Gestion de Bizerte",
      
      },
      {
        value: "Institut Supérieur des Beaux Arts de Nabeul",
        label: "Institut Supérieur des Beaux Arts de Nabeul",
      
      },
      {
        value: "Institut Supérieur des Cadres de l'Enfance",
        label: "Institut Supérieur des Cadres de l'Enfance",
      
      },
      {
        value: "Institut Supérieur des Etudes Touristique de Sidi Dhrif",
        label: "Institut Supérieur des Etudes Touristique de Sidi Dhrif",
      
      },
      {
        value: "Institut Supérieur des Langues de Nabeul",
        label: "Institut Supérieur des Langues de Nabeul",
      
      },
      {
        value: "Institut Supérieur des Langues de Tunis",
        label: "Institut Supérieur des Langues de Tunis",
      
      },
      {
        value: "Institut Supérieur des Sciences Appliquées et de la Technologie de Mateur",
        label: "Institut Supérieur des Sciences Appliquées et de la Technologie de Mateur",
      
      },
      {
        value: "Institut Supérieur des Sciences et Technologies de l Environnement de Borj C",
        label: "Institut Supérieur des Sciences et Technologies de l Environnement de Borj C",
      
      },
      {
        value: "Institut Supérieur des Tech. Information et de Comm. BC",
        label: "Institut Supérieur des Tech. Information et de Comm. BC",
      
      },
      {
        value: "Institut des Hautes Etudes Commerciales de Carthage",
        label: "Institut des Hautes Etudes Commerciales de Carthage",
      
      },
      {
        value: "Sup'Com",
        label: "Sup'Com",
      
      },
      {
        value: "Université de Carthage",
        label: "Université de Carthage",
      
      },
    ],

    },
    { value: 'Université de la Manouba',
    label: 'Université de la Manouba',
    children: [
      {
        value: "Institut supérieur de documentation de Tunis ",
        label: "Institut supérieur de documentation de Tunis ",
      
      },
      {
        value: "Ecole Nationale des Sciences de l'Informatique",
        label: "Ecole Nationale des Sciences de l'Informatique",
      
      },
      {
        value: "Ecole Supérieure de Commerce de Tunis",
        label: "Ecole Supérieure de Commerce de Tunis",
      
      },
      {
        value: "Ecole Supérieure de l'Economie Numérique de la Manouba",
        label: "Ecole Supérieure de l'Economie Numérique de la Manouba",
      
      },
      {
        value: "Ecole Supérieure des Sciences et Technologies du Design",
        label: "Ecole Supérieure des Sciences et Technologies du Design",
      
      },
      {
        value: "Faculté des Lettres, des Arts et des Humanités la Manouba",
        label: "Faculté des Lettres, des Arts et des Humanités la Manouba",
      
      },
      {
        value: "Institut Supérieur de Biotechnologie de Sidi Thabet",
        label: "Institut Supérieur de Biotechnologie de Sidi Thabet",
      
      },
      {
        value: "Institut Supérieur de Comptabilité et d Administration des Entreprises",
        label: "Institut Supérieur de Comptabilité et d Administration des Entreprises",
      
      },
      {
        value: "Institut Supérieur de l Education spécialisée de Ksar Saïd",
        label: "Institut Supérieur de l Education spécialisée de Ksar Saïd",
      
      },
      {
        value: "Institut Supérieur de l'Histoire de la Tunisie Contemporaine",
        label: "Institut Supérieur de l'Histoire de la Tunisie Contemporaine",
      
      },
      {
        value: "Institut Supérieur des Arts du Multimédia de la Manouba",
        label: "Institut Supérieur des Arts du Multimédia de la Manouba",
      
      },
      {
        value: "Institut Supérieur du Sport et de l'Education Physique de Ksar Saïd",
        label: "Institut Supérieur du Sport et de l'Education Physique de Ksar Saïd",
      
      },
      {
        value: "Institut de Presse et des Sciences de l'Information",
        label: "Institut de Presse et des Sciences de l'Information",
      
      },
    ],},
    { value: 'Université Ezzitouna',
    label: 'Université Ezzitouna',
    children: [
      {
        value: "Centre des Etudes Islamiques de Kairouan",
        label: "Centre des Etudes Islamiques de Kairouan",
      
      },
      {
        value: "Institut Supérieur de Civilisation Islamique de Tunis",
        label: "Institut Supérieur de Civilisation Islamique de Tunis",
      
      },
      {
        value: "Université Ez-Zitouna",
        label: "Université Ez-Zitouna",
      
      },
      
    ],},
    { value: 'Université de Jendouba',
    label: 'Université de Jendouba',
    children: [
      {
        value: "Faculté des Sciences Juridiques, Economiques et de Gestion de Jendouba",
        label: "Faculté des Sciences Juridiques, Economiques et de Gestion de Jendouba",
      
      },
      {
        value: "Institut Supérieur des Etudes Appliquées en Humanités du Kef",
        label: "Institut Supérieur des Etudes Appliquées en Humanités du Kef",
      
      },
      {
        value: "Institut Supérieur des Langues Appliquées et Informatique de Béja",
        label: "Institut Supérieur des Langues Appliquées et Informatique de Béja",
      
      },
      {
        value: "Institut Supérieur des Sciences Humaines de Jendouba",
        label: "Institut Supérieur des Sciences Humaines de Jendouba",
      
      },
      {
        value: "Institut supérieur de biotechnologie de Béja",
        label: "Institut supérieur de biotechnologie de Béja",
      
      },
      {
        value: "Institut supérieur de l'informatique du Kef",
        label: "Institut supérieur de l'informatique du Kef",
      
      },
      {
        value: "Institut supérieur de musique et de théâtre du Kef",
        label: "Institut supérieur de musique et de théâtre du Kef",
      
      },
      {
        value: "Institut supérieur des arts et métiers de Siliana",
        label: "Institut supérieur des arts et métiers de Siliana",
      
      },
    ],},
    { value: 'Université de Sousse',
    label: 'Université de Sousse',
    children: [
      {
        value: "Ecole Nationale d'Ingénieurs de Sousse",
        label: "Ecole Nationale d'Ingénieurs de Sousse",
      
      },
      {
        value: "Ecole Supérieure des Sciences et des technologies de Hammam Sousse",
        label: "Ecole Supérieure des Sciences et des technologies de Hammam Sousse",
      
      },
      {
        value: "Faculté de Droit et des Sciences Politiques de Sousse",
        label: "Faculté de Droit et des Sciences Politiques de Sousse",
      
      },
      {
        value: "Faculté de Médecine de Sousse",
        label: "Faculté de Médecine de Sousse",
      
      },
      {
        value: "Faculté des Lettres et des Sciences Humaines de Sousse",
        label: "Faculté des Lettres et des Sciences Humaines de Sousse",
      
      },
      {
        value: "Faculté des Sciences Economiques et de Gestion de Sousse",
        label: "Faculté des Sciences Economiques et de Gestion de Sousse",
      
      },
      {
        value: "Institut Supérieur d Informatique et des Technologies de Communication de HS",
        label: "Institut Supérieur d Informatique et des Technologies de Communication de HS",
      
      },  {
        value: "Institut Supérieur de Finances et de Fiscalité de Sousse",
        label: "Institut Supérieur de Finances et de Fiscalité de Sousse",
      
      },
      {
        value: "Institut Supérieur de Gestion de Sousse",
        label: "Institut Supérieur de Gestion de Sousse",
      
      },
      {
        value: "Institut Supérieur de Musique de Sousse",
        label: "Institut Supérieur de Musique de Sousse",
      
      },
      {
        value: "Institut Supérieur des Beaux Arts de Sousse",
        label: "Institut Supérieur des Beaux Arts de Sousse",
      
      },
      {
        value: "Institut Supérieur des Sciences Appliquées et de Technologie de Sousse",
        label: "Institut Supérieur des Sciences Appliquées et de Technologie de Sousse",
      
      },
      {
        value: "Institut Supérieur des Sciences infirmières de Sousse",
        label: "Institut Supérieur des Sciences infirmières de Sousse",
      
      },
      {
        value: "Institut Supérieur du Transport et de la Logistique de Sousse",
        label: "Institut Supérieur du Transport et de la Logistique de Sousse",
      
      },
      {
        value: "Institut des Hautes Etudes Commerciales de Sousse",
        label: "Institut des Hautes Etudes Commerciales de Sousse",
      
      },
    ],},
    { value: 'Université de Monastir',
    label: 'Université de Monastir',
    children: [
      {
        value: "Ecole Nationale d'Ingénieurs de Monastir",
        label: "Ecole Nationale d'Ingénieurs de Monastir",
      
      },
      {
        value: "Faculté de Médecine Dentaire de Monastir",
        label: "Faculté de Médecine Dentaire de Monastir",
      
      },
      {
        value: "Faculté de Médecine de Monastir",
        label: "Faculté de Médecine de Monastir",
      
      },
      {
        value: "Faculté de Pharmacie de Monastir",
        label: "Faculté de Pharmacie de Monastir",
      
      },
      {
        value: "Faculté des Sciences Economiques et de Gestion de Mahdia",
        label: "Faculté des Sciences Economiques et de Gestion de Mahdia",
      
      },
      {
        value: "Faculté des Sciences de Monastir",
        label: "Faculté des Sciences de Monastir",
      
      },
      {
        value: "Institut Préparatoire aux Etudes d'Ingénieurs de Monastir",
        label: "Institut Préparatoire aux Etudes d'Ingénieurs de Monastir",
      
      },
      {
        value: "Institut Supérieur d'Informatique de Mahdia",
        label: "Institut Supérieur d'Informatique de Mahdia",
      
      },
      {
        value: "Institut Supérieur d'Informatique et de Mathématiques de Monastir",
        label: "Institut Supérieur d'Informatique et de Mathématiques de Monastir",
      
      },
      {
        value: "Institut Supérieur de Biotechnologie de Monastir",
        label: "Institut Supérieur de Biotechnologie de Monastir",
      
      },
      {
        value: "Institut Supérieur des Etudes Appliquées en Humanités de Mahdia",
        label: "Institut Supérieur des Etudes Appliquées en Humanités de Mahdia",
      
      },
      {
        value: "Institut Supérieur des Langues Appliquées de Moknine",
        label: "Institut Supérieur des Langues Appliquées de Moknine",
      
      },
      {
        value: "Institut Supérieur des Métiers de la Mode de Monastir",
        label: "Institut Supérieur des Métiers de la Mode de Monastir",
      
      },
      {
        value: "Institut supérieur des Arts et Métiers de Mahdia",
        label: "Institut supérieur des Arts et Métiers de Mahdia",
      
      },
      {
        value: "Institut supérieur des sciences appliquées et de technologie de Mahdia",
        label: "Institut supérieur des sciences appliquées et de technologie de Mahdia",
      
      },
    ],},
    { value: 'Université de Kairouan',
    label: 'Université de Kairouan',
    children: [
      {
        value: "Faculté des Lettres et des Sciences Humaines de Kairouan",
        label: "Faculté des Lettres et des Sciences Humaines de Kairouan",
      
      },
      {
        value: "Institut Supérieur d Informatique et de Gestion de Kairouan",
        label: "Institut Supérieur d Informatique et de Gestion de Kairouan",
      
      },
      {
        value: "Institut Supérieur des Arts et Métiers de Kairouan",
        label: "Institut Supérieur des Arts et Métiers de Kairouan",
      
      },
      {
        value: "Institut Supérieur des Arts et Métiers de Kasserine",
        label: "Institut Supérieur des Arts et Métiers de Kasserine",
      
      },
      {
        value: "Institut Supérieur des Arts et Métiers de Sidi Bouzid",
        label: "Institut Supérieur des Arts et Métiers de Sidi Bouzid",
      
      },
      {
        value: "Institut Supérieur des Etudes Appliquées en Sciences Humaines de Sbeïtla",
        label: "Institut Supérieur des Etudes Appliquées en Sciences Humaines de Sbeïtla",
      
      },
      {
        value: "Institut Supérieur des Etudes Juridiques et Politiques de Kairouan",
        label: "Institut Supérieur des Etudes Juridiques et Politiques de Kairouan",
      
      },
      {
        value: "Institut Supérieur des Mathématiques Appliquées et de l Informatique de Kair",
        label: "Institut Supérieur des Mathématiques Appliquées et de l Informatique de Kair",
      
      },
      {
        value: "Institut Supérieur des Sciences Appliquées et de Technologie de Kairouan",
        label: "Institut Supérieur des Sciences Appliquées et de Technologie de Kairouan",
      
      },
    ],},
       { value: 'Université de Sfax',
    label: 'Université de Sfax',
    children: [
      {
        value: "Ecole Nationale d'Ingénieurs de Sfax",
        label: "Ecole Nationale d'Ingénieurs de Sfax",
      
      },
      {
        value: "Ecole Nationale d’Electronique et des Télécommunications de Sfax",
        label: "Ecole Nationale d’Electronique et des Télécommunications de Sfax",
      
      },
      {
        value: "Ecole Supérieure de Commerce de Sfax",
        label: "Ecole Supérieure de Commerce de Sfax",
      
      },
      {
        value: "Ecole Supérieure des Sciences et Techniques de la Santé de Sfax",
        label: "Ecole Supérieure des Sciences et Techniques de la Santé de Sfax",
      
      },
      {
        value: "Faculté de Droit de Sfax",
        label: "Faculté de Droit de Sfax",
      
      },
      {
        value: "Faculté de Médecine de Sfax",
        label: "Faculté de Médecine de Sfax",
      
      },
      {
        value: "Faculté des Lettres et Sciences Humaines de Sfax",
        label: "Faculté des Lettres et Sciences Humaines de Sfax",
      
      },
      {
        value: "Faculté des Sciences Economiques et de Gestion de Sfax",
        label: "Faculté des Sciences Economiques et de Gestion de Sfax",
      
      },
      {
        value: "Faculté des Sciences de Sfax",
        label: "Faculté des Sciences de Sfax",
      
      },
      {
        value: "Institut Préparatoire aux Etudes d'Ingénieurs de Sfax",
        label: "Institut Préparatoire aux Etudes d'Ingénieurs de Sfax",
      
      },
      {
        value: "Institut Supérieur d'Administration des Affaires de Sfax",
        label: "Institut Supérieur d'Administration des Affaires de Sfax",
      
      },
      {
        value: "Institut Supérieur d'Informatique et de Multimédia de Sfax",
        label: "Institut Supérieur d'Informatique et de Multimédia de Sfax",
      
      },
      {
        value: "Institut Supérieur de Biotechnologies de Sfax",
        label: "Institut Supérieur de Biotechnologies de Sfax",
      
      },
      {
        value: "Institut Supérieur de Gestion Industrielle de Sfax",
        label: "Institut Supérieur de Gestion Industrielle de Sfax",
      
      },
      {
        value: "Institut Supérieur de Musique de Sfax",
        label: "Institut Supérieur de Musique de Sfax",
      
      },
      {
        value: "Institut Supérieur des Arts et Métiers de Sfax",
        label: "Institut Supérieur des Arts et Métiers de Sfax",
      
      },
      {
        value: "Institut Supérieur du Sport et de l'Education Physique de Sfax",
        label: "Institut Supérieur du Sport et de l'Education Physique de Sfax",
      
      },
      {
        value: "Institut des Hautes Etudes Commerciales de Sfax",
        label: "Institut des Hautes Etudes Commerciales de Sfax",
      
      },
    ],},
    { value: 'Université de Gabes',
    label: 'Université de Gabes',
    children: [
      {
        value: "Ecole Nationale d'Ingénieurs de Gabès",
        label: "Ecole Nationale d'Ingénieurs de Gabès",
      
      },
      {
        value: "Faculté des Sciences de Gabès",
        label: "Faculté des Sciences de Gabès",
      
      },
      {
        value: "Institut Supérieur d'Informatique de Medenine",
        label: "Institut Supérieur d'Informatique de Medenine",
      
      },
      {
        value: "Institut Supérieur d'Informatique et de Multimédia de Gabès",
        label: "Institut Supérieur d'Informatique et de Multimédia de Gabès",
      
      },
      {
        value: "Institut Supérieur de Biologie Appliquée de Medenine",
        label: "Institut Supérieur de Biologie Appliquée de Medenine",
      
      },
      {
        value: "Institut Supérieur de Gestion de Gabès",
        label: "Institut Supérieur de Gestion de Gabès",
      
      },
      {
        value: "Institut Supérieur des Arts et Métiers de Gabès",
        label: "Institut Supérieur des Arts et Métiers de Gabès",
      
      },
      {
        value: "Institut Supérieur des Arts et Métiers de Tataouine",
        label: "Institut Supérieur des Arts et Métiers de Tataouine",
      
      },
      {
        value: "Institut Supérieur des Etudes Juridiques de Gabès",
        label: "Institut Supérieur des Etudes Juridiques de Gabès",
      
      },
      {
        value: "Institut Supérieur des Langues de Gabès",
        label: "Institut Supérieur des Langues de Gabès",
      
      },
      {
        value: "Institut Supérieur des Sciences Appliquées et de Technologie de Gabès",
        label: "Institut Supérieur des Sciences Appliquées et de Technologie de Gabès",
      
      },
      {
        value: "Institut Supérieur des Sciences Humaines de Médenine",
        label: "Institut Supérieur des Sciences Humaines de Médenine",
      
      },
      {
        value: "Institut Supérieur des Sciences et Techniques des Eaux de Gabès",
        label: "Institut Supérieur des Sciences et Techniques des Eaux de Gabès",
      
      },
      {
        value: "Institut supérieur des systèmes industriels de Gabès",
        label: "Institut supérieur des systèmes industriels de Gabès",
      
      },
      {
        value: "Université de Gabès",
        label: "Université de Gabès",
      
      },
    ],},
    { value: 'Université de Gafsa',
    label: 'Université de Gafsa',
    children: [
      {
        value: "Faculté des Sciences de Gafsa",
        label: "Faculté des Sciences de Gafsa",
      
      },
      {
        value: "Institut Préparatoire aux Etudes d'Ingénieur de Gafsa",
        label: "Institut Préparatoire aux Etudes d'Ingénieur de Gafsa",
      
      },
      {
        value: "Institut Supérieur d Arts et métiers de Gafsa",
        label: "Institut Supérieur d Arts et métiers de Gafsa",
      
      },
      {
        value: "Institut Supérieur d'Administration des Entreprises de Gafsa",
        label: "Institut Supérieur d'Administration des Entreprises de Gafsa",
      
      },
      {
        value: "Institut Supérieur des Etudes Appliquées en Humanités de Gafsa",
        label: "Institut Supérieur des Etudes Appliquées en Humanités de Gafsa",
      
      },
      {
        value: "Institut Supérieur des Etudes Appliquées en Humanités de Tozeur",
        label: "Institut Supérieur des Etudes Appliquées en Humanités de Tozeur",
      
      },
      {
        value: "Institut Supérieur des Sciences Appliquées et de Technologie de Gafsa",
        label: "Institut Supérieur des Sciences Appliquées et de Technologie de Gafsa",
      
      },
      {
        value: "Institut Supérieur du Sport et de l Education Physique de Gafsa",
        label: "Institut Supérieur du Sport et de l Education Physique de Gafsa",
      
      },
      {
        value: "Institut supérieur des sciences sociales et de l'éducation de Gafsa",
        label: "Institut supérieur des sciences sociales et de l'éducation de Gafsa",
      
      },
      {
        value: "Université de Gafsa",
        label: "Université de Gafsa",
      
      },
    ],},
    { value: 'Université Virtuelle',
    label: 'Université Virtuelle',
    children: [
      {
        value: "Institut Supérieur de l'Education et de la Formation Continue",
        label: "Institut Supérieur de l'Education et de la Formation Continue",
      
      },
 
      
    ],},
    { value: 'Instituts Supérieurs des Etudes Technologiques',
    label: 'Instituts Supérieurs des Etudes Technologiques',
    children: [
      {
        value: "Institut Supérieur des Etudes Technologiques de Bizerte",
        label: "Institut Supérieur des Etudes Technologiques de Bizerte",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Béja",
        label: "Institut Supérieur des Etudes Technologiques de Béja",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Charguia",
        label: "Institut Supérieur des Etudes Technologiques de Charguia",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Gabès",
        label: "Institut Supérieur des Etudes Technologiques de Gabès",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Gafsa",
        label: "Institut Supérieur des Etudes Technologiques de Gafsa",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Jendouba",
        label: "Institut Supérieur des Etudes Technologiques de Jendouba",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Jerba",
        label: "Institut Supérieur des Etudes Technologiques de Jerba",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Kairouan",
        label: "Institut Supérieur des Etudes Technologiques de Kairouan",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Kasserine",
        label: "Institut Supérieur des Etudes Technologiques de Kasserine",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Kebili",
        label: "Institut Supérieur des Etudes Technologiques de Kebili",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Ksar Hellal",
        label: "Institut Supérieur des Etudes Technologiques de Ksar Hellal",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Kélibia",
        label: "Institut Supérieur des Etudes Technologiques de Kélibia",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Mahdia",
        label: "Institut Supérieur des Etudes Technologiques de Mahdia",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Médenine",
        label: "Institut Supérieur des Etudes Technologiques de Médenine",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Nabeul",
        label: "Institut Supérieur des Etudes Technologiques de Nabeul",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Radès",
        label: "Institut Supérieur des Etudes Technologiques de Radès",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Sfax",
        label: "Institut Supérieur des Etudes Technologiques de Sfax",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Sidi Bouzid",
        label: "Institut Supérieur des Etudes Technologiques de Sidi Bouzid",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Siliana",
        label: "Institut Supérieur des Etudes Technologiques de Siliana",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Sousse",
        label: "Institut Supérieur des Etudes Technologiques de Sousse",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Tataouine",
        label: "Institut Supérieur des Etudes Technologiques de Tataouine",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Tozeur",
        label: "Institut Supérieur des Etudes Technologiques de Tozeur",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Zaghouan",
        label: "Institut Supérieur des Etudes Technologiques de Zaghouan",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques du Kef",
        label: "Institut Supérieur des Etudes Technologiques du Kef",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques en Communications (El Ghazala)",
        label: "Institut Supérieur des Etudes Technologiques en Communications (El Ghazala)",
      
      },
    ],},
    { value: 'Centres de recherche et de services',
    label: 'Centres de recherche et de services',
    children: [
      {
        value: "CRE-Dialogue des Civilisations et Religions Comparées Sousse",
        label: "CRE-Dialogue des Civilisations et Religions Comparées Sousse",
      
      },
      {
        value: "Centre National Universitaire de Documentation Scientifique et Technique",
        label: "Centre National Universitaire de Documentation Scientifique et Technique",
      
      },
      {
        value: "Centre National des Recherches en Sciences des Matériaux de Borj Cedria",
        label: "Centre National des Recherches en Sciences des Matériaux de Borj Cedria",
      
      },
      {
        value: "Centre d'Etudes et de Recherches Economiques et Sociales",
        label: "Centre d'Etudes et de Recherches Economiques et Sociales",
      
      },
      {
        value: "Centre de Recherches et des Technologies de l'Energie de Borj Cedria",
        label: "Centre de Recherches et des Technologies de l'Energie de Borj Cedria",
      
      },
      {
        value: "Centre de Recherches et des Technologies des Eaux",
        label: "Centre de Recherches et des Technologies des Eaux",
      
      },
      {
        value: "Institut National de Recherche et d'Analyse Physico-chimique",
        label: "Institut National de Recherche et d'Analyse Physico-chimique",
      
      },
    ],},
    { value: 'Université étrangère ou privée',
    label: 'Université étrangère ou privée',
    children: [
      {
        value: 'Université étrangère ou privée',
        label: 'Université étrangère ou privée',
      
      },
 
      
    ],},
  ];

      function onChange(value) {
   
        setUniversite(value[1])
        if(value[1] ==  "Université étrangère ou privée") {
          setprive("setprive")
        }
      }
   

    
      const submitImage = async (e) => {
        if(type =="" || universite == ""  || Titre== "" || file=="" ||  Annee =="" || description =="") {
          setErreur3(true)
        }  else 
       { e.preventDefault();
        setErreur1(true)
        const formData = new FormData();
        formData.append("title", Titre);
        formData.append("file", file);
        formData.append("type", type);
        formData.append("prixLecture", value);
        formData.append("prixTelechargement", prixt);
        formData.append("Annee", Annee);
        formData.append("auteur",  user._id);
        formData.append("description", description);
        formData.append("image", image1);
        formData.append("universite", universite);
        formData.append("accepte", false);
        formData.append("period", period);
      
        const result = await axios.post(
          "https://api.bibintunisie.com/upload-files",
          formData,
          {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          }
        );
        console.log(result.data.status)
        if (result.data.status == "ok") {
 
          toast.success("Document ajouter  avec succès")
          setTimeout(()=>{
   
            history.push("/")
        },300)
      
   
        }      else {
          setErreur(true)
          toast.error("Docuement non ajouter")
          setErreur1(false)
        }}
      };
      console.log(erreur3 ," requis")
       
     
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

       
    
        
  
        const handleChange2 = (event) => {
            setType(event.target.value);
          };
          const handleChange4 = (event, newValue) => {
            if (typeof newValue === 'number') {
              setValue(newValue);
            }
          };
          const dropdownRender = (menus) => (
            <div className="boxca" >
              {menus}
           
            </div>
          );
  return (
    <>
      <section class="container3 forms">
        <div class="form1 login">
           
            <div class="form-content">
                <header class="h">Ajouter un document <br/>        {erreur1==true ?( <CircularProgress />):(<></>)} </header>
                <br/>
                {erreur3==true ?(<Alert severity="error">Tous les champs sont requis .Il faut remplir tous les champs de document .</Alert>):(<></>)}
                {erreur==true ?(<Alert severity="error">Le document est trop volumineux.</Alert>):(<></>)}
         
             <div  class="form2" >
             <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
          Upload votre document:
        </Typography>
        <div class="field input-field">
        <input           type="file"
          class="form-control"
          accept="application/pdf"
          required
          onChange={(e) => setFile(e.target.files[0])}/><br/> <br/>
 
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
           Thèse ou autre (niveau doctorat)
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
        <Cascader options={options} onChange={onChange} className="uniwidth" style={{height:"50px"}} placeholder="Université dont vous avez travaillé votre document "  />
           
                    </div>
                    {prive == "setprive" && (<><div class="field input-field" >
                        <input type="text" placeholder="Écrivez le nom de votre université étrangére ou privée" class="input" onChange={(event) => {setUniversite(event.target.value)}} />
                    </div></>) }
                    {console.log(universite,"ssssssssss")}
                    <div class="field input-field">
                    <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
        Année de soutenance ou de publication :
        </Typography>
                    <input type="month" id="start" placeholder="Année" name="start"  onChange={(event) => {setAnnée(event.target.value)}} />
                
                    </div>
                    <br/><br/>
          {type === "PFE" && (<>
                      <br/>
                        <Box sx={{ width: 270 }}>
        <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
          Prix de mode lecture : {value} dt
        </Typography>
        <Slider
        
              className="slider"
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
       className="slider"
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
             className="slider"
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
    className="slider"
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
        className="slider"
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
        className="slider"
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
       className="slider"
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
            className="slider"
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
     className="slider"
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


{user.approved === true && type==="Article"  && (<>        <Box sx={{ width: 270 }}>
<Typography id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} > 
Prix de mode lecture :  {value}
</Typography>
<Slider
  value={value}
  min={0}
  step={0.001}
  max={8000}
  color="secondary"
  className="slider"
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
           className="slider"
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
className="slider"
  getAriaValueText={valueLabelFormat}
  valueLabelFormat={valueLabelFormat}
  onChange={handleChange4}
  valueLabelDisplay="auto"
  aria-labelledby="non-linear-slider"
/>
</Box></> )}
{ user.approved === false && type==="Article"  && (<>  <Typography color="red" id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} > 
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
  className="slider"
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
               className="slider"
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
className="slider"
  getAriaValueText={valueLabelFormat}
  valueLabelFormat={valueLabelFormat}
  onChange={handleChange4}
  valueLabelDisplay="auto"
  aria-labelledby="non-linear-slider"
/>
</Box></> )}

{user.approved === true && type==="Ouvrage"  && (<>        <Box sx={{ width: 270 }}>
<Typography id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} > 
Prix de mode lecture :  {value}
</Typography>
<Slider
  value={value}
  min={0}
  step={0.001}
  max={12000}
  color="secondary"
  className="slider"
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
            className="slider"
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
className="slider"
  getAriaValueText={valueLabelFormat}
  valueLabelFormat={valueLabelFormat}
  onChange={handleChange4}
  valueLabelDisplay="auto"
  aria-labelledby="non-linear-slider"
/>
</Box></> )}
{ user.approved === false && type==="Ouvrage"  && (<>  <Typography color="red" id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} > 
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
  className="slider"
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
                 className="slider"
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
className="slider"
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
      <br/>
                    
                        <ReactQuill
              theme="snow"
          
              placeholder="Sommaire ou description " class="input" value={description} onChange={setDescription} 
            />
      <br/>
                    <Typography id="non-linear-slider"  style={{fontSize:"17px"}}  gutterBottom>
          Page de garde pour votre document (pas obligatoire) :   
        </Typography>
                    <div class="field input-field">
                    <input accept="image/*"
             type="file" placeholder="Email"
             onChange={convertToBase646}/>

                    </div>{console.log(user.approved )}
                     <div class="field button-field">
                     {user.approved === false && type==="Ouvrage"  ||  user.approved === false && type==="Article" ? (         
                         <button type="submit" style={{backgroundColor:"grey"}} disabled  onClick={submitImage}  >Envoyer</button> ) :(<button type="submit"   onClick={submitImage}  >Envoyer</button>) }
                     
          </div><br/>   {erreur1==true ?(           <CircularProgress className="addProgress" />):(<></>)}
          {erreur3==true ?(<Alert severity="error">Tous les champs sont requis .Il faut remplir tous les champs de document .</Alert>):(<></>)}
                </div>
                 
             </div>
     
            </div>
            <ToastContainer
            position="top-right"
            autoClose={250}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
          />
          
      </section>
      
    </>
  )
}

export default AddDocument
