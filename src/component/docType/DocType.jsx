import React from 'react'




import {  useParams } from 'react-router-dom';

import Shop from '../shop/Shop' 


import { useGetDocumentQuery } from '../../state/api'
import Categories from '../document/categorie'

import DocTypeCard from './DocTypeCard'
const DocType = ({ addToCart, shopItems,user }) => {
    const { data, isLoading } = useGetDocumentQuery();
    const { id } = useParams();
    console.log(id)
  return (
    <>
       <section className='shop1 background '>
        <div className='container containerM d_flex  '>
          <Categories  />

          <div className='contentWidth'>
          <ul class="horizontal-list  " >
  <li>  
    
  <button className={`${id === "PFE" ?"buttonType22":"buttonType2"}`} role="button" onClick={() => {window.location.href=`/docType/PFE`}}>

  PFE

</button> 
    
    
</li>
         <li>   <button  role="button"className={`${id === "Mémoire" ?"buttonType3":"buttonType"}`} onClick={() => {window.location.href=`/docType/Mémoire`}}>
  Mémoire
</button>  </li>
         <li>   <button className={id == "Thèse" ?"buttonType3":"buttonType"}  role="button" onClick={() => {window.location.href=`/docType/Thèse`}}>

         Thèse

</button>
      </li>
<li>   <button className={id == "Article" ?"buttonType3":"buttonType"} role="button" onClick={() => {window.location.href=`/docType/Article`}}>
 
  Article

</button>  </li>
         <li>  <button className={id == "Ouvrage" ?"buttonType11":"buttonType1"} role="button" onClick={() => {window.location.href=`/docType/Ouvrage`}}>

  Ouvrage

</button>  
   </li>
</ul>
            <section className='shop-items'>
        <div className=' d_flex'>
          {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

          <div className='shop-details'>
              <DocTypeCard addToCart={addToCart} shopItems={shopItems} user={user || {}} />

            </div>
            </div>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}
export default DocType