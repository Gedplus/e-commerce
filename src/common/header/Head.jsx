import React from 'react'

import { useTranslation } from 'react-i18next';

const Head = () => {
  const  [t,i18n] = useTranslation("global");
  function handlClick (lang) {
  
i18n.changeLanguage(lang);
  }
  return (
    <>
 <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +216 25 55 77 80</label>
            <i className='fa fa-envelope'></i>
            <label> bibintunisie@gmail.com</label>
          </div>
          <div className='right row RText'>
       
         
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
