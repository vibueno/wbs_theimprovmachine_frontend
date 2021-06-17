import React from 'react';

import useBackground from '../../hooks/useBackground';

import { msgPageNotFound1, msgPageNotFound2 } from '../../vars/messages';

import './index.css';

const PageNotFound = () => {
  useBackground('bg-page-not-found');

  return (
    <div className="page-not-found-container">
      <div className="page-not-found-text">{msgPageNotFound1}</div>
      <div className="page-not-found-text">{msgPageNotFound2}</div>
    </div>
  );
};

export default PageNotFound;
