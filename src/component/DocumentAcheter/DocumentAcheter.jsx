import React from 'react'






import Shop from '../shop/Shop'

import { useGetDocumentQuery } from '../../state/api'
import Categories from '../document/categorie';

import CollapsibleTable from './DocuementAcheterCard';
const DocumentsAcheter = ({   user}) => {

  return (
    <><section className='shop-items ' >
        <div className='container d_flex '> 

            <Categories/>
         
          
           
            
            <section className='homeSlide  contentWidth'>
        <div className='container'>
        <div className='shop-details'>
              <CollapsibleTable   user={user || {}}/>

            </div>
         
        </div>
      </section>
        </div>
    </section>
  
    </>
  )
}

export default DocumentsAcheter