import React from 'react'






import Shop from '../shop/Shop'
import ShopCart from '../shop/ShopCart'
import Catg from '../shop/Catg'
import Categories from './categorie'
import { useGetDocumentQuery } from '../../state/api'
const Documents = ({ addToCart, shopItems }) => {
    const { data, isLoading } = useGetDocumentQuery();
  return (
    <><section className='shop-items ' >
        <div className='container d_flex '> 

            <Categories/>
        
          
           
            
            <section className='homeSlide  contentWidth'>
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