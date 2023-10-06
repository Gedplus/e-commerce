import React from 'react'






import Shop from '../shop/Shop' 


import { useGetDocumentQuery } from '../../state/api'
import Categories from '../document/categorie'
import MesDocs from './MesDocs'
const MesDocuments = ({ addToCart, shopItems,user }) => {
    const { data, isLoading } = useGetDocumentQuery();
  return (
    <>
    <section className='shop1 background '>
     <div className='container d_flex  '>
       <Categories  />

       <div className='contentWidth'>
         <div className='heading d_flex'>
           <div className='heading-left row  f_flex'>
             <h2>Catalogue de la bibliothèque</h2>
           </div>
           <div className='heading-right row '>
             <span>Voir tout</span>
              <i className='fas fa-caret-right'></i>
           </div> 
         </div>
         <section className='shop-items'>
     <div className=' d_flex'>
       {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

       <div className='shop-details'>
       <MesDocs addToCart={addToCart} shopItems={shopItems} user={user || {}} />

         </div>
         </div>
         </section>
       </div>
     </div>
   </section>
    </>
  )
}
export default MesDocuments