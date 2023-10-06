import React from "react"
import Sdata from "./Sdata"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Sdata1 from "./sdata1"
const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "-10px" }}>{dots}</ul>
    },
  }
  return (<>
    <div className="slidetaille" >
      <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <>
              <div className='box d_flex top' key={index}>
              
                  <img src={value.cover}  style={{width:"1000px"}} alt='' />
               
              </div>
            </>
          )
        })}
      </Slider>
    </div>
    <div className="slidetaille1">
      <Slider {...settings} style={{marginTop:"-60px"}}>
        {Sdata1.map((value, index) => {
          return (
            <>
              <div className='box d_flex top' key={index}>
              
                  <img src={value.cover}  style={{width:"300px"}} alt='' />
               
              </div>
            </>
          )
        })}
      </Slider>
    </div></>
  )
}

export default SlideCard
