import React, { useState } from 'react'




import { Link } from "react-router-dom"


import ShopCart from '../shop/ShopCart'
import { useHistory } from 'react-router-dom'; 
import Categories from './categorie'
import { useGetDocumentQuery } from '../../state/api'
const Documents = ({ addToCart, shopItems }) => {

  return (
    <>
         <section className='shop1 background'>
        <div className='container containerM d_flex'>
          <Categories />

          <div className='contentWidth' >
       
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
              <ShopCart addToCart={addToCart} shopItems={shopItems} />

            </div>
            </div>
            </section>
          </div>
        </div>
      </section>
  
    </>
  )
}

export default Documents