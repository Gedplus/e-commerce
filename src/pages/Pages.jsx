import React from 'react'

import Discount from '../component/discount/Discount'

import Home from '../component/mainpage/Home'

import Shop from '../component/shop/Shop'
import TopCate from '../component/top/TopCate'
import Wrapper from '../component/wrapper/Wrapper'

const Pages = ({productItems, addToCart,CartItem,shopItems ,user}) => {
  return (
    <>
   
      <Home CartItem ={CartItem}/>
      
 
      <Shop shopItems={shopItems} addToCart={addToCart} user={user || {}}/>
    

    </>
  )
}

export default Pages
