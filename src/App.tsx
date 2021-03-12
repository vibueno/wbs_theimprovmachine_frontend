import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from './views/MainPage';
import ModeSelector from './views/ModeSelector';
import Generator from './views/Generator';

// Dotenv set-up
import * as dotenv from 'dotenv';

const App = () => {
  useEffect(() => {
    dotenv.config();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route path="/modeselector">
          <ModeSelector />
        </Route>
        <Route path="/generator">
          <Generator />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
      {/* <BackToTop btnStyle="back-to-top" /> */}
    </div>
  );
};

export default App;
