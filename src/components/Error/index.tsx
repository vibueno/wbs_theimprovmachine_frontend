import React, { useContext, useEffect } from 'react';

import { ErrorContext } from '../../vars/context';

import ErrorObject from '../../types/ErrorObject';

import './styles.css';

const Error = ({ message, severity }: ErrorObject) => {
  const { setError } = useContext(ErrorContext);

  useEffect(() => {
    setTimeout(() => setError({ message: '' }), 5000);
  }, []);

  return <div className={`error-container ${severity}`}>{message}</div>;
};

export default Error;
