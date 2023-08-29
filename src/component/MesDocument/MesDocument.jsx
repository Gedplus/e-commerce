import React from 'react'






import Shop from '../shop/Shop'


import { useGetDocumentQuery } from '../../state/api'
import Categories from '../document/categorie'
import MesDocs from './MesDocs'
const MesDocuments = ({ addToCart, shopItems,user }) => {
    const { data, isLoading } = useGetDocumentQuery();
  return (
    <><section className='shop-items'>
        <div className='container d_flex'>

            <Categories/>
        
          
           
            
            <section className='homeSlide contentWidth'>
        <div className='container'>
        <div className='shop-details1'>
              <MesDocs addToCart={addToCart} shopItems={shopItems} user={user || {}} />

            </div>
         
        </div>
      </section>
        </div>
    </section>
  
    </>
  )
}
export default MesDocuments