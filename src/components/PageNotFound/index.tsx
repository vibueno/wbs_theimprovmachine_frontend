import React from 'react';

import { useHistory } from 'react-router';
import useBackground from '../../hooks/useBackground';

import Button from '../../components/Button';

import { msgPageNotFound1, msgPageNotFound2 } from '../../vars/messages';

import './index.css';

const PageNotFound = () => {
  useBackground('bg-page-not-found');

  const history = useHistory();

  const onClickHandler = () => {
    history.push('/');
  };

  return (
    <div className="page-not-found-container">
      <div className="page-not-found-text">{msgPageNotFound1}</div>
      <div className="page-not-found-text">{msgPageNotFound2}</div>
      <Button
        id="btn-pagenotfound-return"
        label="&#9003; Go home"
        btnStyle="btn-back btn-pagenotfound"
        clickHandler={onClickHandler}
      />
    </div>
  );
};

export default PageNotFound;
