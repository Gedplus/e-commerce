import React from "react"

import TopCart from "./TopCart"

const TopCate = (addToCart) => {
  return (
    <>
      <section className='TopCate background'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
            <img src="./images/vid.png" alt="video" />
              <h2>Top packs videos</h2>
            </div>
            <div className='heading-right row '>
              <span>Voir tout</span>
              <i className='fas fa-caret-right'></i>
            </div>
          </div>
          <TopCart addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default TopCate