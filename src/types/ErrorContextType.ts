import ErrorObject from './ErrorObject';

type ErrorContextType = {
  error: ErrorObject;
  setError: (errorObject: ErrorObject) => void;
};

export default ErrorContextType;
