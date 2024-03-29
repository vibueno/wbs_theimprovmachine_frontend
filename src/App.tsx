import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import { errorSeverity } from './vars/constants';
import { ErrorContext } from './vars/context';

import MainPage from './views/MainPage';
import ModeSelector from './views/ModeSelector';
import Generator from './views/Generator';
import NoRoute from './views/NoRoute';

import Error from './components/Error';
import BackToTop from './components/BackToTop';

import ErrorContextType from './types/ErrorContextType';
import ErrorObject from './types/ErrorObject';

import apiRequest from './utils/api';

// Dotenv set-up
import * as dotenv from 'dotenv';

const App = () => {
  useEffect(() => {
    dotenv.config();

    // Wake up backend
    try {
      const url = new URL('categories', process.env.REACT_APP_BACKENDHOST!);
      apiRequest(url.href);
    } catch (e) {
      setError({ message: e.message, severity: errorSeverity.critical });
    }
  }, []);

  const [error, setError] = useState<ErrorObject>({ message: '' });
  const errorValue: ErrorContextType = { error, setError };

  return (
    <ErrorContext.Provider value={errorValue}>
      <div className="App">
        {error.message !== '' ? (
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
