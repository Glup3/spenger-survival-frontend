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

const App = () => {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/tipp-adden" component={AddTipPage} />
          <Route path="/datenschutz" component={DataPrivacyPage} />
          <Route path="/hall-of-fame" component={HallOfFamePage} />
          <Route path="/impressum" component={ImprintPage} />
          <Route path="/motivation" component={MotivationPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
