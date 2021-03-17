import React from 'react';

import spinnerImage from './spinner.gif';

import './index.css';

const Spinner = () => {
  return (
    <div className="spinner">
      <img src={spinnerImage} />
    </div>
  );
};

export default Spinner;
