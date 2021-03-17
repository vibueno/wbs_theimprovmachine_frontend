import React from 'react';
import { useHistory } from 'react-router-dom';

import useBackground from '../../hooks/useBackground';

import Button from '../../components/Button';

import { ctntAppTitle, ctntAppSubtitle } from '../../vars/content';

import './index.css';

const MainPage = () => {
  const history = useHistory();
  const onClickHandler = () => history.push('modeselector');

  useBackground('bg-main-page');

  return (
    <>
      <div className="cover-container">
        <h1>{ctntAppTitle}</h1>
        <h2>{ctntAppSubtitle}</h2>
        <div className="btn-enter-container">
          <Button
            id="btn-enter"
            label="Enter&#13;&#10;&#13;&#10;&#9166;"
            btnStyle="btn-forth btn-enter"
            clickHandler={onClickHandler}
          />
        </div>
      </div>
    </>
  );
};

export default MainPage;
