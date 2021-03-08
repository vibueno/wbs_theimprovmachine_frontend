import React from 'react';
import './App.css';

import { startupMessage } from './vars/messages';
import { fillInStrTemplate } from './utils/strtemplate';

const App = () => {
  const message = fillInStrTemplate(startupMessage, [
    {
      param: 'appName',
      value: 'The Improv Machine'
    }
  ]);

  return <div className="App">{message}</div>;
};

export default App;
