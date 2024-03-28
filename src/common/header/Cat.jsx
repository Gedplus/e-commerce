import React from "react"
import { Link } from "react-router-dom"
import school from "../../image/school.png"
const CategoriesS = () => { 
  const data = [
    {
      cateImg: school,
      cateName: "Université de Tunis",
      sousCat :[ {
        cateImg:  school,
        cateName: "Ecole Nationale Supérieure d'Ingénieurs de Tunis",
      },
      {
        cateImg:  school,
        cateName: "Institut préparatoire aux études d’ingénieurs de Tunis ",
      },
      {
        cateImg:  school,
        cateName: "Ecole Normale Supérieure",
      },
      {
        cateImg:  school,
        cateName: "Ecole Supérieure des Sciences Economiques et Commerciales de Tunis",
      },
      {
        cateImg:  school,
        cateName: "Faculté des Sciences Humaines et Sociales de Tunis",
      },
      {
        cateImg:  school,
        cateName: "Institut Préparatoire aux Etudes Littéraires et de Sciences Humaines de Tunis",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur d'Art Dramatique",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur de Gestion de Tunis",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur de Musique",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur de l'Animation pour la Jeunesse et la Culture",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Beaux Arts de Tunis",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Etudes Appliquées en Humanité de Tunis",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Métiers du Patrimoine de Tunis",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des affaires de Tunis",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Études Appliquées en Humanités de Zaghouan",
      },

      ]
    },
    {
      cateImg:  school,
      cateName: "Université de Tunis EL Manar",
      sousCat :[ {
        cateImg: school,
        cateName: "Ecole Nationale d'Ingénieurs de Tunis",
      },
      {
        cateImg: school,
        cateName: "Institut Bourguiba des langues vivantes",
      },
      {
        cateImg:  school,
        cateName: "Faculté de Droit et des Sciences Politiques de Tunis",
      },
      {
        cateImg:  school,
        cateName: "Faculté de Médecine de Tunis",
      },
      {
        cateImg:  school,
        cateName: "Faculté des Sciences Economiques et de Gestion de Tunis",
      },
      {
        cateImg: school,
        cateName: "Faculté des Sciences de Tunis",
      },
      {
        cateImg: school,
        cateName: "Institut Préparatoire aux Etudes d'Ingénieurs d El Manar",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur d'Informatique d'El Manar",
      },
      {
        cateImg: school,
        cateName: "Institut Supérieur des Sciences Biologiques Appliquées",
      },
      {
        cateImg: school,
        cateName: "Institut Supérieur des Sciences Humaines de Tunis",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Technologies Médicales",
      },
  
    ]
    
      
    },
    {
      cateImg:  school,
      cateName: "Université de Carthage",
      sousCat :[ {
        cateImg:  school,
        cateName: "Ecole National d'Ingénieur de Carthage",
      },    {
        cateImg:  school,
        cateName: "Ecole Nationale d'Architecture et d'Urbanisme de Tunis",
      },
      {
        cateImg:  school,
        cateName: "Ecole Nationale d'Ingénieurs de Bizerte",
      },
      {
        cateImg: school,
        cateName: "Ecole Polytechnique de Tunisie",
      },
      {
        cateImg: school,
        cateName: "Ecole Supérieure de l'Audiovisuel et du Cinéma de Gammarth",
      },
      {
        cateImg:  school,
        cateName: "Ecole Supérieure des Statistiques et d'Analyse de l'Information",
      },
      {
        cateImg: school,
        cateName: "Faculté des Sciences Economiques et de Gestion de Nabeul",
      },
      {
        cateImg:  school,
        cateName: "Faculté des Sciences Juridiques, Politiques et Sociales de Tunis",
      },
      {
        cateImg:  school,
        cateName: "Faculté des Sciences de Bizerte",
      },
      {
        cateImg:  school,
        cateName: "Institut National des Sciences Appliquées et de Technologie",
      },
      {
        cateImg:  school,
        cateName: "Institut National du Travail et des Etudes Sociales de Tunis",
      },
      {
        cateImg:  school,
        cateName: "Institut Préparatoire aux Etudes Scientifiques et Techniques de la Marsa",
      },
      {
        cateImg:  school,
        cateName: "Institut Préparatoire aux Etudes d'Ingénieur Nabeul",
      },
      {
        cateImg:  school,
        cateName: "Institut Préparatoire aux Etudes d'Ingénieur de Bizerte",
      },
      {
        cateImg:  school,
        cateName: "Institut Superieur des Technologies de l’Environnement de l’Urbanisme et de Bâtiment",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur de Gestion de Bizerte",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Beaux Arts de Nabeul",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Cadres de l'Enfance",
      },
      {
        cateImg: school,
        cateName: "Institut Supérieur des Etudes Touristique de Sidi Dhrif",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Langues de Nabeul",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Langues de Tunis",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Sciences Appliquées et de la Technologie de Mateur",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Sciences et Technologies de l Environnement de Borj C",
      },
      {
        cateImg: school,
        cateName: "Institut Supérieur des Tech. Information et de Comm. BC",
      },
      {
        cateImg:  school,
        cateName: "Institut des Hautes Etudes Commerciales de Carthage",
      },
      {
        cateImg:  school,
        cateName: "Sup'Com",
      },
      {
        cateImg:  school,
        cateName: "	Université de Carthage",
      },
     
    ]
    },
    {
      cateImg:  school,
      cateName: "Université de la Manouba",
      sousCat :[ {
        cateImg:  school,
        cateName: "Ecole Nationale des Sciences de l'Informatique",
      },
      {
        cateImg:  school,
        cateName: "Institut supérieur de documentation de Tunis ",
      },
      {
        cateImg:  school,
        cateName: "Ecole Supérieure de Commerce de Tunis",
      },
      {
        cateImg:  school,
        cateName: "Ecole Supérieure de l'Economie Numérique de la Manouba",
      },
      {
        cateImg:  school,
        cateName: "Ecole Supérieure des Sciences et Technologies du Design",
      },
      {
        cateImg:  school,
        cateName: "Faculté des Lettres, des Arts et des Humanités la Manouba",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur de Biotechnologie de Sidi Thabet",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur de Comptabilité et d Administration des Entreprises",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur de l Education spécialisée de Ksar Saïd",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur de l'Histoire de la Tunisie Contemporaine",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Arts du Multimédia de la Manouba",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur du Sport et de l'Education Physique de Ksar Saïd",
      },
      {
        cateImg:  school,
        cateName: "	Institut de Presse et des Sciences de l'Information",
      },
   

]
    },
    {
      cateImg:  school,
      cateName: "Université Ezzitouna",
      sousCat :[ {
        cateImg:  school,
        cateName: "Centre des Etudes Islamiques de Kairouan",
      },
    
      {
        cateImg:  school,
        cateName: "Institut Supérieur de Civilisation Islamique de Tunis",
      },
      {
        cateImg:  school,
        cateName: "Université Ez-Zitouna",
      },
    
    
    
    
    
    ]
    },
    {
      cateImg:  school,
      cateName: "Université de Jendouba",
      sousCat :[ {
        cateImg:  school,
        cateName: "Faculté des Sciences Juridiques, Economiques et de Gestion de Jendouba",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Etudes Appliquées en Humanités du Kef",
      },
      {
        cateImg: school,
        cateName: "Institut Supérieur des Langues Appliquées et Informatique de Béja",
      },
      {
        cateImg:  school,
        cateName: "	Institut Supérieur des Sciences Humaines de Jendouba",
      },
      {
        cateImg:  school,
        cateName: "Institut supérieur de biotechnologie de Béja",
      },
      {
        cateImg:  school,
        cateName: "Institut supérieur de l'informatique du Kef",
      },
      {
        cateImg:  school,
        cateName: "Institut supérieur de musique et de théâtre du Kef",
      },
      {
        cateImg:  school,
        cateName: "Institut supérieur des arts et métiers de Siliana",
      },
    
    
    
    ]
    },
    {
      cateImg:  school,
      cateName: "Université de Sousse",
      sousCat :[ {
        cateImg:  school,
        cateName: "Ecole Nationale d'Ingénieurs de Sousse",
      },
      {
        cateImg:  school,
        cateName: "Ecole Supérieure des Sciences et des technologies de Hammam Sousse",
      },
      {
        cateImg: school,
        cateName: "	Faculté de Droit et des Sciences Politiques de Sousse",
      },
      {
        cateImg:  school,
        cateName: "Faculté de Médecine de Sousse",
      },
      {
        cateImg:  school,
        cateName: "Faculté des Lettres et des Sciences Humaines de Sousse",
      },
      {
        cateImg: school,
        cateName: "Faculté des Sciences Economiques et de Gestion de Sousse",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur d Informatique et des Technologies de Communication de HS",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur de Finances et de Fiscalité de Sousse",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur de Gestion de Sousse",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur de Musique de Sousse",
      },
      {
        cateImg: school,
        cateName: "Institut Supérieur des Beaux Arts de Sousse",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Sciences Appliquées et de Technologie de Sousse",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Sciences infirmières de Sousse",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur du Transport et de la Logistique de Sousse",
      },
      {
        cateImg:  school,
        cateName: "Institut des Hautes Etudes Commerciales de Sousse",
      },
    
    
    
    
    ]
    },
    {
      cateImg:  school,
      cateName: "Université de Monastir",
      sousCat :[ {
        cateImg: school,
        cateName: "Ecole Nationale d'Ingénieurs de Monastir",
      },
      {
        cateImg:  school,
        cateName: "Faculté de Médecine Dentaire de Monastir",
      },
      {
        cateImg:  school,
        cateName: "Faculté de Médecine de Monastir",
      },
      {
        cateImg:  school,
        cateName: "Faculté de Pharmacie de Monastir",
      },
      {
        cateImg:  school,
        cateName: "Faculté des Sciences Economiques et de Gestion de Mahdia",
      },
      {
        cateImg:  school,
        cateName: "Faculté des Sciences de Monastir",
      },
      {
        cateImg:  school,
        cateName: "Institut Préparatoire aux Etudes d'Ingénieurs de Monastir",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur d'Informatique de Mahdia",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur d'Informatique et de Mathématiques de Monastir",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur de Biotechnologie de Monastir",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Etudes Appliquées en Humanités de Mahdia",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Langues Appliquées de Moknine",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Métiers de la Mode de Monastir",
      },
      {
        cateImg:  school,
        cateName: "Institut supérieur des Arts et Métiers de Mahdia",
      },
      {
        cateImg:  school,
        cateName: "Institut supérieur des sciences appliquées et de technologie de Mahdia",
      },

    
    ]
    },
    {
      cateImg:  school,
      cateName: "Université de Kairouan",
      sousCat :[ {
        cateImg:  school,
        cateName: "Faculté des Lettres et des Sciences Humaines de Kairouan",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur d Informatique et de Gestion de Kairouan",
      },
      {
        cateImg: school,
        cateName: "Institut Supérieur des Arts et Métiers de Kairouan",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Arts et Métiers de Kasserine",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Arts et Métiers de Sidi Bouzid",
      },
      {
        cateImg: school,
        cateName: "Institut Supérieur des Etudes Appliquées en Sciences Humaines de Sbeïtla",
      },
    
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Etudes Juridiques et Politiques de Kairouan",
      },
      {
        cateImg: school,
        cateName: "Institut Supérieur des Mathématiques Appliquées et de l Informatique de Kair",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Sciences Appliquées et de Technologie de Kairouan",
      },
     
    
    ]


    },
    {
      cateImg: school,
      cateName: "Université de Sfax",
      sousCat :[ {
        cateImg:  school,
        cateName: "Ecole Nationale d'Ingénieurs de Sfax",
      },
      {
        cateImg:  school,
        cateName: "Ecole Nationale d’Electronique et des Télécommunications de Sfax",
      },
      {
        cateImg: school,
        cateName: "Ecole Supérieure de Commerce de Sfax",
      },
      {
        cateImg:  school,
        cateName: "Ecole Supérieure des Sciences et Techniques de la Santé de Sfax",
      },
      {
        cateImg:  school,
        cateName: "Faculté de Droit de Sfax",
      },
      {
        cateImg:  school,
        cateName: "Faculté de Médecine de Sfax",
      },
      {
        cateImg:  school,
        cateName: "Faculté des Lettres et Sciences Humaines de Sfax",
      },
      {
        cateImg:  school,
        cateName: "Faculté des Sciences Economiques et de Gestion de Sfax",
      },
      {
        cateImg:  school,
        cateName: "Faculté des Sciences de Sfax",
      },
      {
        cateImg:  school,
        cateName: "Institut Préparatoire aux Etudes d'Ingénieurs de Sfax",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur d'Administration des Affaires de Sfax",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur d'Informatique et de Multimédia de Sfax",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur de Biotechnologies de Sfax",
      },
    
      {
        cateImg:  school,
        cateName: "Institut Supérieur de Gestion Industrielle de Sfax",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur de Musique de Sfax",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Arts et Métiers de Sfax",
      },
      {
        cateImg: school,
        cateName: "Institut Supérieur du Sport et de l'Education Physique de Sfax",
      },
      {
        cateImg:  school,
        cateName: "Institut des Hautes Etudes Commerciales de Sfax",
      },
   
    
    
    
    ]
    },
    {
      cateImg:  school,
      cateName: "Université de Gabes",
      sousCat :[ {
        cateImg: school,
        cateName: "Ecole Nationale d'Ingénieurs de Gabès",
      },
      {
        cateImg: school,
        cateName: "Faculté des Sciences de Gabès",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur d'Informatique de Medenine",
      },
      {
        cateImg: school,
        cateName: "Institut Supérieur d'Informatique et de Multimédia de Gabès",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur de Biologie Appliquée de Medenine",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur de Gestion de Gabès",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Arts et Métiers de Gabès",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Arts et Métiers de Tataouine",
      },
    
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Etudes Juridiques de Gabès",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Langues de Gabès",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Sciences Appliquées et de Technologie de Gabès",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Sciences Humaines de Médenine",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Sciences et Techniques des Eaux de Gabès",
      },
      {
        cateImg:  school,
        cateName: "Institut supérieur des systèmes industriels de Gabès",
      },
      {
        cateImg:  school,
        cateName: "Université de Gabès",
      },
  

    
    
    
    
    ]


    },
    {
      cateImg:  school,
      cateName: "Université de Gafsa",
      sousCat :[ {
        cateImg:  school,
        cateName: "Faculté des Sciences de Gafsa",
      },
      {
        cateImg: school,
        cateName: "Institut Préparatoire aux Etudes d'Ingénieur de Gafsa",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur d Arts et métiers de Gafsa",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur d'Administration des Entreprises de Gafsa",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Etudes Appliquées en Humanités de Gafsa",
      },
    
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Etudes Appliquées en Humanités de Tozeur",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Sciences Appliquées et de Technologie de Gafsa",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur du Sport et de l Education Physique de Gafsa",
      },
      {
        cateImg:  school,
        cateName: "Institut supérieur des sciences sociales et de l'éducation de Gafsa",
      },
      {
        cateImg:  school,
        cateName: "Université de Gafsa",
      },
    ]
    },
    {
      cateImg:  school,
      cateName: "Université Virtuelle",
      sousCat :[ {
        cateImg:  school,
        cateName: "Institut Supérieur de l'Education et de la Formation Continue",
      },]
    },
    {
      cateImg:  school,
      cateName: "Instituts Supérieurs des Etudes Technologiques",
      sousCat :[ {
        cateImg:  school,
        cateName: "Institut Supérieur des Etudes Technologiques de Bizerte",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Etudes Technologiques de Béja",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Etudes Technologiques de Charguia",
      },
      {
        cateImg: school,
        cateName: "Institut Supérieur des Etudes Technologiques de Gabès",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Etudes Technologiques de Gafsa",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Etudes Technologiques de Jendouba",
      },
      {
        cateImg: school,
        cateName: "	Institut Supérieur des Etudes Technologiques de Jerba",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Etudes Technologiques de Kairouan",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Etudes Technologiques de Kasserine",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Etudes Technologiques de Kebili",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Etudes Technologiques de Ksar Hellal",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Etudes Technologiques de Kélibia",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Etudes Technologiques de Mahdia",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Etudes Technologiques de Médenine",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Etudes Technologiques de Nabeul",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Etudes Technologiques de Radès",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Etudes Technologiques de Sfax",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Etudes Technologiques de Sidi Bouzid",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Etudes Technologiques de Siliana",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Etudes Technologiques de Sousse",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur des Etudes Technologiques de Tataouine",
      },   {
        cateImg:  school,
        cateName: "Institut Supérieur des Etudes Technologiques de Tozeur",
      },   {
        cateImg: school,
        cateName: "Institut Supérieur des Etudes Technologiques de Zaghouan",
      },   {
        cateImg:  school,
        cateName: "Institut Supérieur des Etudes Technologiques du Kef",
      },   {
        cateImg:  school,
        cateName: "Institut Supérieur des Etudes Technologiques en Communications (El Ghazala)",
      },
      
    
    
    
    
    
    
    
    ]
    
    },
    {
      cateImg:  school,
      cateName: "Centres de recherche et de services",
      sousCat :[ {
        cateImg:  school,
        cateName: "CRE-Dialogue des Civilisations et Religions Comparées Sousse",
      },
      {
        cateImg:  school,
        cateName: "Centre National Universitaire de Documentation Scientifique et Technique",
      },
      {
        cateImg:  school,
        cateName: "Centre National des Recherches en Sciences des Matériaux de Borj Cedria",
      },
      {
        cateImg: school,
        cateName: "Centre d'Etudes et de Recherches Economiques et Sociales",
      },
      {
        cateImg:  school,
        cateName: "Centre de Recherches et des Technologies de l'Energie de Borj Cedria",
      },
      {
        cateImg:  school,
        cateName: "Centre de Recherches et des Technologies des Eaux",
      },
    
      {
        cateImg:  school,
        cateName: "Institut National de Recherche et d'Analyse Physico-chimique",
      },
    
    ]
    },
    {
      cateImg:  school,
      cateName: "Université étrangère ou privée",
      sousCat :[{
        cateImg:  school,
        cateName: "Faculté Privée de Montplaisir / Tunis",
      },
      {
        cateImg:  school,
        cateName: "Institut Privé des Hautes Etudes de Tunis",
      },
      {
        cateImg:  school,
        cateName: "Faculté Privée de Droit, d’Economie et de Gestion / Tunis",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur Privé Polytechnique/ Tunis",
      },  {
        cateImg:  school,
        cateName: "Ecole Supérieure Privée de Carthage des Sciences et d’Ingénierie / Tunis",
      },
      {
        cateImg:  school,
        cateName: "Ecole Supérieure Privée de Carthage de Management",
      },  {
        cateImg:  school,
        cateName: "Ecole Supérieure Privée d’Ingénieurs et d’Etudes Technologiques de Tunis",
      },
      {
        cateImg:  school,
        cateName: "Faculté Privée des Sciences de Gestion et de Technologie à Mégrine",
      },
      {
        cateImg:  school,
        cateName: "Ecole Centrale Supérieure Privée des Sciences Paramédicales et de la Santé",
      },
      {
        cateImg:  school,
        cateName: "Ecole Supérieure Privée de Technologie et de Management",
      },   {
        cateImg:  school,
        cateName: "Ecole Supérieure Privée de Technologies de l'Information et d’Administration des Entreprises",
      }, {
        cateImg:  school,
        cateName: "Ecole Supérieure Internationale Privée de Tunis",
      }, {
        cateImg:  school,
        cateName: "Ecole Méditerranéenne Supérieure Privée des Affaires",
      },
      {
        cateImg:  school,
        cateName: "Ecole Supérieure Privée d'Ingénierie et de Technologie",
      },
      {
        cateImg:  school,
        cateName: "Ecole Supérieure Privée de l'Aéronautique et des Technologies",
      },
      {
        cateImg:  school,
        cateName: "Ecole Supérieure Privée d'Architecture, d'Audiovisuel et du Design",
      },
      {
        cateImg:  school,
        cateName: "Faculté Privée Ibn Khaldoun de Droit, des Sciences Economiques et de Gestion",
      },
      {
        cateImg:  school,
        cateName: "Ecole Supérieure Privée des Sciences Appliquées et de Management",
      },  {
        cateImg:  school,
        cateName: "Institut Supérieur Privé des Sciences Paramédicales ' Mahmoud Materi'",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur Privé Tunis Dauphine",
      },
      {
        cateImg:  school,
        cateName: "Ecole Supérieure Privée d’Administration des Affaires et de Droit « Avicenne»",
      },
      {
        cateImg:  school,
        cateName: "Ecole Centrale Supérieure Privée des Lettres, des Arts et des Sciences de la Communication",
      },
      {
        cateImg:  school,
        cateName: "Ecole Supérieure Privée Centrale Polytechnique",
      },
      {
        cateImg:  school,
        cateName: "Ecole Centrale Supérieure Privée de Droit et de Gestion",
      },   {
        cateImg:  school,
        cateName: "Faculté Privée des Sciences de la Santé de Tunis",
      },
      {
        cateImg:  school,
        cateName: "Faculté Privée des Sciences Juridiques, Sociales, Economiques et de Gestion de Tunis",
      },
      {
        cateImg:  school,
        cateName: "Faculté Méditerranéenne Privée des Sciences Informatiques, d’Economie et de Gestion de Tunis",
      },
      {
        cateImg:  school,
        cateName: "Ecole Supérieure Privée Polytechnique Ibn Khaldoun",
      },
      {
        cateImg:  school,
        cateName: "Ecole Supérieure Privée d’Informatique et d’Administration des Affaires/Tunis",
      },
      {
        cateImg:  school,
        cateName: "Ecole Méditerranéenne Supérieure Privée Polytechnique",
      },
      {
        cateImg:  school,
        cateName: "Ecole Internationale Supérieure Privée Polytechnique de Tunis",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur Privé Méditerranéen de Technologie",
      },
      {
        cateImg:  school,
        cateName: "École supérieure privée d'ingénierie d'informatique et d'administration des affaires",
      },
      {
        cateImg:  school,
        cateName: "Ecole Supérieure Privée de technologie et d’ingénierie",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur privé d’administration des Entreprises / Tunis",
      },
      {
        cateImg:  school,
        cateName: "Institut International Supérieur Privé des Etudes Numériques et Audiovisuelles / Tunis",
      },
      {
        cateImg:  school,
        cateName: "Ecole Internationale Supérieure privée de Droit et des Affaires",
      },
      {
        cateImg:  school,
        cateName: "Ecole Supérieure Privée des Affaires",
      },
      {
        cateImg:  school,
        cateName: "Faculté privée des sciences politiques et économiques",
      },
      {
        cateImg:  school,
        cateName: "Ecole supérieure privée de management de Tunis",
      },
      {
        cateImg:  school,
        cateName: "Ecole supérieure privée d'Assurance et de Finance",
      },
      {
        cateImg:  school,
        cateName: "Ecole centrale supérieure privée de droit et des sciences politiques de Tunis",
      },
      {
        cateImg:  school,
        cateName: "Ecole centrale supérieure privée d'informatique et de communication de Tunis",
      },
      {
        cateImg:  school,
        cateName: "Ecole supérieure privée des sciences juridiques, économiques et politiques",
      },
      {
        cateImg:  school,
        cateName: "Faculté Privée de droit, des sciences politiques et de gestion 'Mahmoud El Matri'",
      },
      {
        cateImg:  school,
        cateName: "Ecole Supérieure Privée d'informatique et de Technologie",
      },
      {
        cateImg:  school,
        cateName: "Ecole supérieure privée Magrébine des sciences et technologie",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur Privé des Technologies de la Digitalisation",
      },
      {
        cateImg:  school,
        cateName: "Ecole internationale Supérieure Privée de Gestion Hôtelière",
      },
      {
        cateImg:  school,
        cateName: "Ecole Supérieure Privée d'Informatique et de Technologie de digitalisation",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur Polytechnique Privé des Sciences Avancées du Sud",
      },
      {
        cateImg:  school,
        cateName: "Ecole Supérieure Privée des Etudes Administratives et Commerciales de Sfax",
      },
      {
        cateImg:  school,
        cateName: "Faculté Privée des Sciences Paramédicales de Sfax",
      },
      {
        cateImg:  school,
        cateName: "Ecole Supérieure Internationale Privée de Technologie / Sfax",
      },
      {
        cateImg:  school,
        cateName: "Ecole Internationale Supérieure Privée des Affaires / Sfax",
      },
      {
        cateImg:  school,
        cateName: "Ecole Polytechnique Internationale Supérieure Privée de Sfax",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur Privé des Sciences de la santé de Sousse",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur Privé des Sciences Infirmières 'EL AMED'",
      },
      {
        cateImg:  school,
        cateName: "Ecole Supérieure Privée d’Ingénierie, des Sciences et de Technologie de Sousse",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur Privé des Sciences Infirmières 'Etoile de formation'",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur Privé des Sciences Infirmières de Sousse",
      },
      {
        cateImg:  school,
        cateName: "Ecole Supérieure Polytechnique Privée de Sousse",
      },
      {
        cateImg:  school,
        cateName: "Institut Privé des Hautes Etudes de Sousse",
      },
      {
        cateImg:  school,
        cateName: "Ecole Supérieure Privée de Technologie, d’Informatique et de Gestion de Sousse",
      },
      {
        cateImg:  school,
        cateName: "Ecole Internationale Supérieure Privée Polytechnique de Sousse",
      },
      {
        cateImg:  school,
        cateName: "Ecole Supérieure Privée d’Ingénierie et de Technologie appliquée/ Sousse",
      },
      {
        cateImg:  school,
        cateName: "Faculté Privée de Gestion et des Sciences de l’Administration de Sousse",
      },
      {
        cateImg:  school,
        cateName: "Ecole Supérieure Internationale Privée de Management de Sousse",
      },
      {
        cateImg:  school,
        cateName: "Ecole Supérieure Privée d’Economie et de Gestion de Sousse",
      },
      {
        cateImg:  school,
        cateName: "Ecole supérieure privée de technologie avancée de Sousse",
      },
      {
        cateImg:  school,
        cateName: "Ecole supérieure privée des sciences commerciales et des affaires",
      },
      {
        cateImg:  school,
        cateName: "Ecole internationale supérieure privée de management et de marketing de Sousse",
      },
      {
        cateImg:  school,
        cateName: "Ecole supérieure privée des technologies numériques'l'Horizon'",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur privé des sciences et technologie en informatique appliquée de Sousse",
      },
      {
        cateImg:  school,
        cateName: "Ecole Méditerranéenne Supérieure Privée des Sciences Informatiques, d’Economie et de Gestion de Nabeul",
      },
      {
        cateImg:  school,
        cateName: "Ecole Supérieure Privée de Technologie de l’Information et de Management de Nabeul",
      },
      {
        cateImg:  school,
        cateName: "Faculté Privée des sciences de l’informatique et de management de Nabeul",
      },
      {
        cateImg:  school,
        cateName: "Institut Supérieur Privé des Sciences Infirmières de Kairouan",
      },
      {
        cateImg:  school,
        cateName: "Ecole Supérieure Privée des Sciences Appliquées et de Technologie de Gabès",
      },
      {
        cateImg:  school,
        cateName: "Ecole supérieure privée de technologie et de management de Gabès",
      },
      {
        cateImg:  school,
        cateName: "Ecole Supérieure Polytechnique Privée de Monastir",
      },
      {
        cateImg:  school,
        cateName: "Ecole Supérieure Privée d’ingénieurs de Monastir",
      },
      {
        cateImg:  school,
        cateName: "Ecole Supérieure Privée d’ingénieurs de Gafsa",
      },
      {
        cateImg:  school,
        cateName: "Autre université étrangère ou privée",
      },
    ]
    },
  ]
  return (
    <>
      <div className='category  catD' >
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
             <span>{value.cateName}</span> 
             <i className='fa fa-chevron-down'></i>
             <div className='sub-menu-1'>
             {value.sousCat.map((value, index) => {
          return (
            <Link  onClick={() => {window.location.href=`/doc/${value.cateName}`}}>
          
             <div className='box f_flex' key={index}>
            
            <img src={value.cateImg} alt='' />
        <span>{value.cateName}</span></div>     </Link>  
               ) }) } </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default CategoriesS