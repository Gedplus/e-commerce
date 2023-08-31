import React from "react"
import "./style.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
const Wrapper = () => {
  const data = [
 
    {
      cover: <i class="fa fa-book" ></i>,
      title: "La creation d'esprit",
      decs: "Nous sommes engagés à vous donner le pouvoir de tirer profit de votre propriété intellectuelle.",
    },
    {
      cover: <i class='fas fa-user-shield'></i>,
      title: "La confidence  ",
      decs: "Nous sommes engagés à protéger votre propriété intellectuelle.",
    },
    {
      cover: <i class='fas fa-headset'></i>,
      title: "Assistance 24h/7j",
      decs: "La bibliothèque la plus proche, à votre disposition 7 jours sur 7 et 24 heures sur 24.",
    },
  ]
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
      
              </div>
            )
          })}
          
        </div>
        <div className='container' style={{marginTop:"40px"}}>
        <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <img src='./images/par.png' alt="par" />
              <h2>Partenaires</h2>
            </div>
            <div className='heading-right row '>
              <span>Voir tout</span>
              <i className='fas fa-caret-right'></i>
            </div>
          </div>
          <Slider {...settings}>
     
            <>
              <div className='box product'>
            
                <div className='img'>
                <img  src="./images/lg.png" alt='' style={{width:"200px" , height:"100px"
      }} />
                </div>
              </div>
            </>
       
      </Slider>
         </div>
      </section>
    </>
  )
}

export default Wrapper