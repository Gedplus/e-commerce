import React from 'react'






import Shop from '../shop/Shop' 


import { useGetDocumentQuery } from '../../state/api'
import Categories from '../document/categorie'
import DocSearchCard from './DocSearchCard'


const DocSearch = ({ addToCart, shopItems,user }) => {
    const { data, isLoading } = useGetDocumentQuery();
  return (
    <>
       <section className='shop1 background '>
        <div className='container containerM d_flex  '>
          <Categories  />

          <div className='contentWidth'>
          <ul class="horizontal-list  " >
  <li>  
    
  <button class="buttonType2" role="button" onClick={() => {window.location.href=`/docType/PFE`}}>

  PFE

</button>
    
    
</li>
         <li>   <button  role="button"class="buttonType" onClick={() => {window.location.href=`/docType/Mémoire`}}>
  Mémoire
</button>  </li>
         <li>   <button class="buttonType" role="button" onClick={() => {window.location.href=`/docType/Thése`}}>

  Thése

</button>
      </li>
<li>   <button class="buttonType" role="button" onClick={() => {window.location.href=`/docType/Article`}}>
 
  Article

</button>  </li>
         <li>  <button class="buttonType1" role="button" onClick={() => {window.location.href=`/docType/Ouvrage`}}>

  Ouvrage

</button>  
   </li>
</ul>
            <section className='shop-items'>
        <div className=' d_flex'>
          {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

          <div className='shop-details'>
              <DocSearchCard  addToCart={addToCart} shopItems={shopItems} />

            </div>
            </div>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}
export default DocSearch