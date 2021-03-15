import React from 'react';

import ErrorObject from '../../types/ErrorObject';

import './styles.css';

const Error = ({ message, severity }: ErrorObject) => {
  return <div className={`error-container ${severity}`}>{message}</div>;
};

export default Error;
