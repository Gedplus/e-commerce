import React, { useState } from 'react'



import { useHistory } from 'react-router-dom'; 


import Shop from '../shop/Shop' 


import { useGetDocumentQuery } from '../../state/api'
import Categories from '../document/categorie'
import {  useParams } from 'react-router-dom';
import DocUniCard from './DocUniCard'
const DocUni = ({ addToCart, shopItems,user }) => {
    const { data, isLoading } = useGetDocumentQuery();
    const [mot, setMot] = useState("");
    const history = useHistory ();
    const { id } = useParams();
  return (
    <>
       <section className='shop1 background '>
        <div className='container containerM d_flex  '>
          <Categories  />

          <div className='contentWidth'>
          <header class="h1">RECHERCHE AVANCÉE DANS "{id}" </header>
          <form  className="searchwidth1" onSubmit={() =>       history.push (`/rechercheAvancée/${id}/${mot}`)}>
          <div className='search-box1 f_flex ' >
       
            <input type='text' placeholder='Essayez-moi !...' style={{marginLeft:"20px"}}   onChange={(e) => setMot(e.target.value)} />
            <span onClick={() =>       history.push (`/rechercheAvancée/${id}/${mot}`)}>  <i className='fa fa-search'></i></span>
          </div></form>
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
              <DocUniCard addToCart={addToCart} shopItems={shopItems} />

            </div>
            </div>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}
export default DocUni