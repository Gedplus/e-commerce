import React from 'react'








import { useGetDocumentQuery } from '../../state/api'
import Categories from '../document/categorie';
import VideosCart from './VideosCard';
const ListeVideo = ({ addToCart, shopItems }) => {
    const { data, isLoading } = useGetDocumentQuery();
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