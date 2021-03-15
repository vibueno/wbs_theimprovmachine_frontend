import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import { ErrorContext } from './vars/context';

import MainPage from './views/MainPage';
import ModeSelector from './views/ModeSelector';
import Generator from './views/Generator';
import NoRoute from './views/NoRoute';

import Error from './components/Error';
import BackToTop from './components/BackToTop';

import ErrorObject from './types/ErrorObject';

// Dotenv set-up
import * as dotenv from 'dotenv';

const App = () => {
  useEffect(() => {
    dotenv.config();
  }, []);

  const [error, setError] = useState<ErrorObject>();
  const errorValue = { error, setError };

  return (
    <ErrorContext.Provider value={errorValue}>
      <div className="App">
        {error ? (
          <Error message={error.message} severity={error.severity} />
        ) : null}
        <Switch>
          <Route exact path="/modeselector">
            <ModeSelector />
          </Route>
          <Route exact path="/generator">
            <Generator />
          </Route>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="*">
            <NoRoute />
          </Route>
        </Switch>
        <BackToTop btnStyle="back-to-top" />
      </div>
    </ErrorContext.Provider>
  );
};

export default App;
