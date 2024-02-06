import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Menu from "./Components/slight/slight";
import Scenery from "./Components/scenery/scenery";
import './style/root.css'
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import es from "./translations/es.json";
import { useTranslation } from "react-i18next";
import imagen from './img/img.js';
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


function RootTranslation() {
  const { t } = useTranslation();
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} sm={5} xl={2}>
        <Scenery
          image={imagen.kunFuPanda}
          titulo={t("peliculas.kungFuPanda")}
          title='kung fu panda'
          descripcion='el panda Po, un panda que come fideos, es fanático del kung fu e idolatra a los Cinco Furiosos: Mantis, Mono, Víbora, Grulla y Tigresa, un grupo de maestros de kung fu entrenados por el Maestro Shifu'
        />

      </Grid>
      <Grid item xs={6} sm={5} xl={2}>
        <Scenery
          image={imagen.miVillanoFavorito}
          titulo={t("peliculas.miVillanoFavorito")}
          title='kung fu panda'
          descripcion='Gru es un malo que disfruta haciendo maldades a los demás. Desde congelar la cola de clientes en una hamburguesería, hasta crear un globo en forma de animal y dárselo a un niño sólo para tener el placer de hacerlo explotar'
        />

      </Grid>
    </Grid>
  );
}


function Root() {

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="Root">
          <Menu />
          <br /><br />
          <div className='contenedorPrincipal'>
            <Routes>
              <Route path="/" element={
                <RootTranslation />
              } />
            </Routes>
          </div>
        </div>
      </Router>
    </I18nextProvider>
  )
}

export default Root