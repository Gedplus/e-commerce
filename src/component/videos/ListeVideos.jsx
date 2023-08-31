import React from 'react'









import Categories from '../document/categorie';
import VideosCart from './VideosCard';
const ListeVideo = ({ addToCart, shopItems }) => {

  return (
    <><section className='shop-items ' >
        <div className='container d_flex '>

            <Categories/>
        
          
           
            
            <section className='homeSlide  contentWidth'>
        <div className='container'>
        <div className='shop-details'>
              <VideosCart addToCart={addToCart} shopItems={shopItems} />

            </div>
         
        </div>
      </section>
        </div>
    </section>
  
    </>
  )
}

export default ListeVideo