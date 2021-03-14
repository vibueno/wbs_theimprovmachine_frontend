import React from 'react';
import './styles.css';

import ErrorObject from '../../types/ErrorObject';

const Error = ({ message, severity }: ErrorObject) => {
  return <div className={`error-container ${severity}`}>{message}</div>;
};

export default Error;
