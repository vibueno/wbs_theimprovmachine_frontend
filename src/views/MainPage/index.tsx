import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';

import { changeBackground } from '../../utils/background';

import { ctntAppTitle, ctntAppSubtitle } from '../../vars/content';

import './index.css';

const MainPage = () => {
  const history = useHistory();
  const onClickHandler = () => history.push('modeselector');

  useEffect(() => {
    changeBackground('bg-main-page');
  }, []);

  return (
    <>
      <div className="main-page-bg">
        <h1 className="title">{ctntAppTitle}</h1>
        <h2>{ctntAppSubtitle}</h2>
        <div className="btn-enter-container">
          <Button
            id="btn-enter"
            label="Enter&#13;&#10;&#13;&#10;&#9166;"
            btnStyle="btn-enter"
            clickHandler={onClickHandler}
          />
        </div>
      </div>
    </>
  );
};

export default MainPage;
