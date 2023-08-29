import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import global_ar from "./translations/ar/global.json";
import global_en from "./translations/en/global.json";
import global_fr from "./translations/fr/global.json";
import { Provider } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import { configureStore } from "@reduxjs/toolkit";
import  {api}  from "./state/api";

const store = configureStore({
  reducer: {

    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});
setupListeners(store.dispatch);

i18next.init({
  interpolation: {escapeValue : false},
  lng:"fr",
  resources:{
    fr:{
      global: global_fr,
    },
    en:{
      global: global_en,
    },
    ar:{
      global: global_ar,
    },
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
      <Provider store={store} >
    <I18nextProvider i18n={i18next}>
    <App />
    </I18nextProvider></Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
