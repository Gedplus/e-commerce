import React from "react"

const Catg = () => {
  const data = [
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
 
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Type des documents </h1>
      
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' style={{width:"40px", height:"40px"}} />
              <span>{value.cateName}</span>
            
            </div>
            
          )
        })}
     
      </div>
    </>
  )
}

export default Catg