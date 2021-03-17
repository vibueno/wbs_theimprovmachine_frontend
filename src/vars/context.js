import { createContext } from 'react';
import ErrorObject from '../types/ErrorObject';

export const ErrorContext = createContext({
  error: ErrorObject,
  setError: () => {}
});
