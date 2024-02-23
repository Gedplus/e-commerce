import React from "react"
import { Link } from "react-router-dom"
import app from "../../image/application.png"
import book from "../../image/book.png"
import opon from "../../image/open-boo.png"
const Catg = () => {
  const data = [
    {
      cateImg: opon,
      cateName: "PFE ou autre (niveau licence)",
      catlink:"PFE",
    },
    {
      cateImg: opon,
      cateName: "Mémoire ou autre (niveau Mastére)",
      catlink: "Mémoire",
    },
    {
      cateImg: opon,
      cateName: "Thèse ou autre (niveau doctorat)",
      catlink: "Thèse",
    },
    {
      cateImg: app,
      cateName: "Article",
      catlink: "Article", 
    },
    {
      cateImg: book,
      cateName: "Ouvrage",
      catlink: "Ouvrage",
    },
 
  ]
  return (
    <>
      <div className='category categoryM'>
        <div className='chead d_flex'>
          <h1>Type des documents </h1>
      
        </div>
        {data.map((value, index) => {
          return (
            <Link onClick={() => {window.location.href=`/docType/${value.catlink}`}}>
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' style={{width:"40px", height:"40px"}} />
              <span>{value.cateName}</span>
            
            </div>
            </Link>
          )
        })}
     
      </div>
    </>
  )
}

export default Catg