import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';

import { changeBackground } from '../../utils/background';

import './index.css';

const MainPage = () => {
  const history = useHistory();
  const onClickHandler = () => history.push('modeselector');

  changeBackground('main-page-bg');

  return (
    <>
      <div className="main-page-bg">
        <h1 className="title">The Improv Machine</h1>
        <h2>The future of Improv is now</h2>
        <div className="btn-enter-container">
          <Button
            id="btn-main-page"
            label="Enter->>"
            btnStyle=""
            clickHandler={onClickHandler}
          />
        </div>
      </div>
    </>
  );
};

export default MainPage;
