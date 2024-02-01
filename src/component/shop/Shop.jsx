import React from "react"
import Catg from "./Catg"
import ShopCart from "./ShopCart"
import "./Style.css"
import ShopCart1 from "./ShopCart1"
import { Link } from "react-router-dom/cjs/react-router-dom"

const Shop = ({ addToCart, shopItems , user }) => {

  const data1 = [];
  for (let i = 0; i < shopItems.length; i++) {
    if(i <20)
 {   data1.push(
      shopItems[i]

    )}}


console.log(data1, "sata")
  return (
    <>
      <section className='shop background'>
        <div className='container containerM d_flex'>
          <Catg />

          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Catalogue de la bibliothèque</h2>
              </div>
            <div className='heading-right row '>
         </div>
            </div>
            <section className='shop-items'> 
        <div className=' d_flex'>
          {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

          <div className='shop-details'>
              <ShopCart1 addToCart={addToCart} shopItems={shopItems} user={user || {}} />

            </div>
            </div>
            </section>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2></h2>
              </div>
         
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop