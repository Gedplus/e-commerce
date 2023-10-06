import React from "react"
import { Link } from "react-router-dom"
const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/open-boo.png",
      cateName: "PFE ou autre (niveau licence)",
      catlink:"PFE",
    },
    {
      cateImg: "./images/category/open-boo.png",
      cateName: "Mémoire ou autre (niveau Mastére)",
      catlink: "Mémoire",
    },
    {
      cateImg: "./images/category/open-boo.png",
      cateName: "Thése ou autre (niveau doctorat)",
      catlink: "Thése",
    },
    {
      cateImg: "./images/category/application.png",
      cateName: "Article",
      catlink: "Article", 
    },
    {
      cateImg: "./images/category/book.png",
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