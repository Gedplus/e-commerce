import React from "react"
import Dcard from "./Dcard"

const Discount = ({addToCart}) => {
  return (
    <>
      <section className='Discount background NewArrivals'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <img src="./images/vid.png" />
              <h2>Liste videos</h2>
            </div>
            <div className='heading-right row '>
              <span>Voir tout</span>
              <i className='fas fa-caret-right'></i>
            </div>
          </div>
          <Dcard addToCart={addToCart} />
        </div>
      </section> 
    </>
  )
}

export default Discount