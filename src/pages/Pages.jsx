import React from 'react'
import Annocument from '../component/annocuments/Annu'
import Discount from '../component/discount/Discount'
import FlashDeals from '../component/flashDeals/FlashDeals'
import Home from '../component/mainpage/Home'
import NewArrivals from '../component/newarrivals/NewArrivals'
import Shop from '../component/shop/Shop'
import TopCate from '../component/top/TopCate'
import Wrapper from '../component/wrapper/Wrapper'

const Pages = ({productItems, addToCart,CartItem,shopItems}) => {
  return (
    <>
   
      <Home CartItem ={CartItem}/>
  <TopCate addToCart={addToCart}/>
      
    <Discount addToCart={addToCart}/>

      <Shop shopItems={shopItems} addToCart={addToCart}/>
    
      <Wrapper/>
    </>
  )
}

export default Pages
