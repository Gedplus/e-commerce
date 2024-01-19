import React, { useEffect, useState } from 'react'



import { useHistory } from 'react-router-dom'; 


import Shop from '../shop/Shop' 


import { useGetDocumentQuery } from '../../state/api'
import Categories from '../document/categorie'
import {  useParams } from 'react-router-dom';
import DocAvanCard from './DocAvanCard';
const DocAvan = ({ addToCart, shopItems,user }) => {
    const { data, isLoading } = useGetDocumentQuery();
    const [mot1, setMot] = useState("");
    const history = useHistory ();
    const { id } = useParams();
    const { mot } = useParams();
    console.log(mot)
    useEffect(() => {
      const loadUserDetails = async() => {
  
        setMot(mot)
  
 
      }
      loadUserDetails();
    }, [mot]);
  return (
    <>
       <section className='shop1 background '>
        <div className='container containerM d_flex  '>
          <Categories  />

          <div className='contentWidth'>
          <header class="h1">RECHERCHE AVANCÉE DANS "{id}" </header>
          <form  className="searchwidth1" onSubmit={() =>       history.push (`/rechercheAvancée/${id}/${mot1}`)}>
          <div className='search-box1 f_flex ' >
       
            <input type='text' placeholder='Essayez-moi !...' style={{marginLeft:"20px"}} defaultValue={mot}  onChange={(e) => setMot(e.target.value)} />
            <span onClick={() =>       history.push (`/rechercheAvancée/${id}/${mot1}`)}>  <i className='fa fa-search'></i></span>
          </div></form>
          <ul class="horizontal-list  " >
  <li>  
    
  <button class="buttonType2" role="button" onClick={() => {window.location.href=`/rechercheAvancée/PFE/${id}/${mot}`}}>

  PFE

</button>
     
    
</li>
         <li>   <button  role="button"class="buttonType" onClick={() => {window.location.href=`/rechercheAvancée/Mémoire/${id}/${mot}`}}>
  Mémoire
</button>  </li>
         <li>   <button class="buttonType" role="button" onClick={() => {window.location.href=`/rechercheAvancée/Thése/${id}/${mot}`}}>

  Thése

</button>
      </li>
<li>   <button class="buttonType" role="button" onClick={() => {window.location.href=`/rechercheAvancée/Article/${id}/${mot}`}}>
 
  Article

</button>  </li>
         <li>  <button class="buttonType1" role="button" onClick={() => {window.location.href=`/rechercheAvancée/Ouvrage/${id}/${mot}`}}>

  Ouvrage

</button>  
   </li>
</ul>
            <section className='shop-items'>
        <div className=' d_flex'>
          {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

          <div className='shop-details'>
              <DocAvanCard addToCart={addToCart} shopItems={shopItems}  user={user || {}} />

            </div>
            </div>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}
export default DocAvan