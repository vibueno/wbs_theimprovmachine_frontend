import { createContext } from 'react';
import ErrorContextType from '../types/ErrorContextType';

export const ErrorContext = createContext(<ErrorContextType>{
  error: { message: '', severity: '' },
  setError: e => console.warn('no error provider')
});
