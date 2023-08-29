import React from "react"
import Catg from "../shop/Catg"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/School.png",
      cateName: "Université de Tunis",
      sousCat :[ {
        cateImg:  "./images/School.png",
        cateName: "Université de Tunis EL Manar",
      },
      {
        cateImg:  "./images/School.png",
        cateName: "Université de Carthage",
      },
      {
        cateImg:  "./images/School.png",
        cateName: "Université de la Manouba",
      },
      {
        cateImg:  "./images/School.png",
        cateName: "Université Ezzitouna",
      },
      {
        cateImg:  "./images/School.png",
        cateName: "Université de Jendouba",
      },
      {
        cateImg:  "./images/School.png",
        cateName: "Université de Sousse",
      },
      {
        cateImg:  "./images/School.png",
        cateName: "Université de Monastir",
      },
      {
        cateImg:  "./images/School.png",
        cateName: "Université de Kairouan",
      },
      {
        cateImg:  "./images/School.png",
        cateName: "Université de Sfax",
      },
      {
        cateImg:  "./images/School.png",
        cateName: "Université de Gabes",
      },
      {
        cateImg:  "./images/School.png",
        cateName: "Université de Gafsa",
      },
      {
        cateImg:  "./images/School.png",
        cateName: "Université Virtuelle",
      },
      {
        cateImg:  "./images/School.png",
        cateName: "Instituts Supérieurs des Etudes Technologiques",
      },
      {
        cateImg:  "./images/School.png",
        cateName: "Centres de recherche et de services",
      },

      ]
    },
    {
      cateImg:  "./images/School.png",
      cateName: "Université de Tunis EL Manar",
      sousCat :[ {
        cateImg:  "./images/School.png",
        cateName: "Université de Tunis EL Manar",
      },]
    },
    {
      cateImg:  "./images/School.png",
      cateName: "Université de Carthage",
      sousCat :[ {
        cateImg:  "./images/School.png",
        cateName: "Université de Tunis EL Manar",
      },]
    },
    {
      cateImg:  "./images/School.png",
      cateName: "Université de la Manouba",
      sousCat :[ {
        cateImg:  "./images/School.png",
        cateName: "Université de Tunis EL Manar",
      },]
    },
    {
      cateImg:  "./images/School.png",
      cateName: "Université Ezzitouna",
      sousCat :[ {
        cateImg:  "./images/School.png",
        cateName: "Université de Tunis EL Manar",
      },]
    },
    {
      cateImg:  "./images/School.png",
      cateName: "Université de Jendouba",
      sousCat :[ {
        cateImg:  "./images/School.png",
        cateName: "Université de Tunis EL Manar",
      },]
    },
    {
      cateImg:  "./images/School.png",
      cateName: "Université de Sousse",
      sousCat :[ {
        cateImg:  "./images/School.png",
        cateName: "Université de Tunis EL Manar",
      },]
    },
    {
      cateImg:  "./images/School.png",
      cateName: "Université de Monastir",
      sousCat :[ {
        cateImg:  "./images/School.png",
        cateName: "Université de Tunis EL Manar",
      },]
    },
    {
      cateImg:  "./images/School.png",
      cateName: "Université de Kairouan",
      sousCat :[ {
        cateImg:  "./images/School.png",
        cateName: "Université de Tunis EL Manar",
      },]
    },
    {
      cateImg:  "./images/School.png",
      cateName: "Université de Sfax",
      sousCat :[ {
        cateImg:  "./images/School.png",
        cateName: "Université de Tunis EL Manar",
      },]
    },
    {
      cateImg:  "./images/School.png",
      cateName: "Université de Gabes",
      sousCat :[ {
        cateImg:  "./images/School.png",
        cateName: "Université de Tunis EL Manar",
      },]
    },
    {
      cateImg:  "./images/School.png",
      cateName: "Université de Gafsa",
      sousCat :[ {
        cateImg:  "./images/School.png",
        cateName: "Université de Tunis EL Manar",
      },]
    },
    {
      cateImg:  "./images/School.png",
      cateName: "Université Virtuelle",
      sousCat :[ {
        cateImg:  "./images/School.png",
        cateName: "Université de Tunis EL Manar",
      },]
    },
    {
      cateImg:  "./images/School.png",
      cateName: "Instituts Supérieurs des Etudes Technologiques",
      sousCat :[ {
        cateImg:  "./images/School.png",
        cateName: "Université de Tunis EL Manar",
      },]
    },
    {
      cateImg:  "./images/School.png",
      cateName: "Centres de recherche et de services",
      sousCat :[ {
        cateImg:  "./images/School.png",
        cateName: "Université de Tunis EL Manar",
      },]
    },
  ]
  const data1 = [
    {
      cateImg: "./images/category/open-boo.png",
      cateName: "PFE ou autre (niveau licence)",
    },
    {
      cateImg: "./images/category/open-book.png",
      cateName: "Mémoire ou autre (niveau Mastére)",
    },
    {
      cateImg: "./images/category/agenda.png",
      cateName: "Thése ou autre (niveau doctorat)",
    },
    {
      cateImg: "./images/category/application.png",
      cateName: "Article",
    },
    {
      cateImg: "./images/category/book.png",
      cateName: "Ouvrage",
    },
    {
      cateImg: "./images/category/contract.png",
      cateName: "Autre",
    },
  ]

  return (
    < > 
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} style={{width:"30px", height:"30px"}} alt='' />
             <span>{value.cateName}</span> 
             <i className='fa fa-chevron-down'></i>
             <div className='sub-menu-1'>
             {value.sousCat.map((value, index) => {
          return (
             <div className='box f_flex' key={index}>
            <img src={value.cateImg} style={{width:"30px", height:"30px"}}alt='' />
              <span>{value.cateName}</span></div>
               ) }) } </div>
            </div>
          )
        })}
            <section className='shop ' >
<div className='category ' style={{width:"100%", marginTop:"40px"}}>
        <div className='chead d_flex'>
          <h1>Type des documents </h1>
      
        </div>
        {data1.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' style={{width:"40px", height:"40px"}} />
              <span>{value.cateName}</span>
            
            </div>
            
          )
        })}
     
      </div>
      </section>
      </div>
     
    </>
  )
}

export default Categories