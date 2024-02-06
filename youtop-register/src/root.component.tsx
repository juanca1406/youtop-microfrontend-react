import { I18nextProvider } from 'react-i18next';
import Scenery from './components/slight/slight';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import i18n from "i18next";
import es from "./translations/es.json";
import Registrar from './components/form/register';
import { useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

i18n.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      translation: es,
    },

  },
});




function Root() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="Root">
          <Scenery />
          <br /><br />
          <div >

            <Registrar />
          </div>
        </div>
      </Router>
    </I18nextProvider>
  )
}

export default Root