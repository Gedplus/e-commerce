import React from 'react'







import ShopCart from '../shop/ShopCart'

import Categories from './categorie'
import { useGetDocumentQuery } from '../../state/api'
const Documents = ({ addToCart, shopItems }) => {
 
  return (
    <><section className='shop-items ' >
        <div className='container d_flex '> 

            <Categories/>
        
          
           
            
            <section className='homeSlide1  contentWidth'>
        <div className='container'>
        <div className='shop-details'>
              <ShopCart addToCart={addToCart} shopItems={shopItems} />

            </div>
         
        </div>
      </section>
        </div>
    </section>
  
    </>
  )
}

export default Documents