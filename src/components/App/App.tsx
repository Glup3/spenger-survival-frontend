import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  HomePage,
  NotFoundPage,
  AddTipPage,
  DataPrivacyPage,
  HallOfFamePage,
  ImprintPage,
  MotivationPage,
} from '../../pages';
import { DataProvider } from '../../context/dataContext';

const App = () => {
  return (
    <DataProvider getTips={null}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/tipp-adden" component={AddTipPage} />
          <Route path="/datenschutz" component={DataPrivacyPage} />
          <Route path="/hall-of-fame" component={HallOfFamePage} />
          <Route path="/impressum" component={ImprintPage} />
          <Route path="/motivation" component={MotivationPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </DataProvider>
  );
};

export default App;
