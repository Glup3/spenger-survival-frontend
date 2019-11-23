import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';

import {
  HomePage,
  NotFoundPage,
  AddTipPage,
  DataPrivacyPage,
  HallOfFamePage,
  ImprintPage,
  AboutPage,
  SuccessfulAddTipPage,
} from '../../pages';
import { DataProvider } from '../../context/dataContext';
import Navbar from '../Navbar';
import ScrollToTop from '../ScrollToTop';

const App = () => {
  return (
    <DataProvider>
      <Router>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/tipp-abgeben" component={AddTipPage} />
            <Route path="/tipp-bestaetigung" component={SuccessfulAddTipPage} />
            <Route path="/datenschutz" component={DataPrivacyPage} />
            <Route path="/hall-of-fame" component={HallOfFamePage} />
            <Route path="/impressum" component={ImprintPage} />
            <Route path="/about" component={AboutPage} />
            <Route component={NotFoundPage} />
          </Switch>
          <CookieConsent buttonText="Jup">
            Diese Seite verwendet Cookies, um dir das bestmögliche Erlebnis zu gewährleisten. Surfst du weiterhin auf
            unserer Seite, stimmst du unserer Cookie-Nutzung und unserer Datenschutzrichtlinie zu.
          </CookieConsent>
        </ScrollToTop>
      </Router>
    </DataProvider>
  );
};

export default App;
