import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Menu from "./Components/slight/slight";
import Scenery from "./Components/scenery/scenery";
import './style/root.css'
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import es from "./translations/es.json";
import { useTranslation } from "react-i18next";

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
          titulo={t("kung fu panda")}
          title='kung fu panda'
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