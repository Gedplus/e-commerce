import React from 'react'



import Home from '../component/mainpage/Home'

import Shop from '../component/shop/Shop'


const Pages = ({productItems, addToCart,CartItem,shopItems ,user}) => {
  return (
    <>
   
      <Home CartItem ={CartItem}/>
      
 
      <Shop shopItems={shopItems} addToCart={addToCart} user={user || {}}/>
    

    </>
  )
}

export default Pages
