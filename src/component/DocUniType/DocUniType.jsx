import React, { useState } from 'react'



import { useHistory } from 'react-router-dom'; 


import Shop from '../shop/Shop' 


import { useGetDocumentQuery } from '../../state/api'
import Categories from '../document/categorie'
import {  useParams } from 'react-router-dom';

import DocUniTypeCard from './DocUniTypeCard';
const DocUniType = ({ addToCart, shopItems,user }) => {
    const { data, isLoading } = useGetDocumentQuery();
    const [mot, setMot] = useState("");
    const history = useHistory ();
    const { id } = useParams();
    const { uni } = useParams();
    const handleSearch = () => {
      if(mot!=="")
 {  history.push (`/rechercheAvancée/${id}/${uni}/${mot}`)
    }
    }
  return (
    <>
       <section className='shop1 background '>
        <div className='container containerM d_flex  '>
          <Categories  />

          <div className='contentWidth'>
          <header class="h1">RECHERCHE AVANCÉE DANS "{uni}" </header>
          <form  className="searchwidth1" onSubmit={handleSearch}>
          <div className='search-box1 f_flex ' >
       
            <input type='text' placeholder='Essayez-moi !...' style={{marginLeft:"20px"}}   onChange={(e) => setMot(e.target.value)} />
            <span onClick={handleSearch}>  <i className='fa fa-search'></i></span>
          </div></form>
          <ul class="horizontal-list  " >
  <li>  
    
  <button className={`${id === "PFE" ?"buttonType22":"buttonType2"}`} role="button" onClick={() => {window.location.href=`/docType/PFE/${uni}`}}>

  PFE

</button>
    
     
</li>
         <li>   <button  role="button" className={`${id === "Mémoire" ?"buttonType3":"buttonType"}`} onClick={() => {window.location.href=`/docType/Mémoire/${uni}`}}>
  Mémoire
</button>  </li>
         <li>   <button className={id == "Thèse" ?"buttonType3":"buttonType"}  role="button" onClick={() => {window.location.href=`/docType/Thèse/${uni}`}}>

  Thèse

</button>
      </li>
<li>   <button  className={id == "Article" ?"buttonType3":"buttonType"}role="button" onClick={() => {window.location.href=`/docType/Article/${uni}`}}>
 
  Article

</button>  </li>
         <li>  <button className={id == "Ouvrage" ?"buttonType11":"buttonType1"}  role="button" onClick={() => {window.location.href=`/docType/Ouvrage/${uni}`}}>

  Ouvrage

</button>  
   </li>
</ul>
            <section className='shop-items'>
        <div className=' d_flex'>
          {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

          <div className='shop-details'>
              <DocUniTypeCard addToCart={addToCart} shopItems={shopItems} user={user || {}}  />

            </div>
            </div>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}
export default DocUniType