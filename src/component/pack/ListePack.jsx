import React from 'react'









import Categories from '../document/categorie';

import PackCart from './PackCard';
const ListePack = ({ addToCart, shopItems }) => {
    
  return (
    <><section className='shop-items ' >
        <div className='container d_flex '>

            <Categories/>
        
          
           
            
            <section className='homeSlide  contentWidth'>
        <div className='container'>
        <div className='shop-details'>
              <PackCart addToCart={addToCart} shopItems={shopItems} />

            </div>
         
        </div>
      </section>
        </div>
    </section>
  
    </>
  )
}

export default ListePack