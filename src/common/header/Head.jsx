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
            <label> +88012 3456 7894</label>
            <i className='fa fa-envelope'></i>
            <label> support@ui-lib.com</label>
          </div>
          <div className='right row RText'>
            <label>Theme FAQ"s</label>
            <label>{t('Header.Hello-world')}</label>
            <button onClick={()=> handlClick('fr')}>    <span>🏳️‍⚧️</span>FR</button>
            <button onClick={()=> handlClick('en')}> <span>🏳️‍⚧️</span>EN</button>
                  <button onClick={()=> handlClick('ar')}> <span>🏳️‍⚧️</span>AR</button>
         
         
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
