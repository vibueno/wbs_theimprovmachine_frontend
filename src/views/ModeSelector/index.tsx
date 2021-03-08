import React, { MouseEvent } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';

import { changeBackground } from '../../utils/background';

import { ctntModeSelectorGen, ctntModeSelectorGames } from '../../vars/content';

import './index.css';

const ModeSelector = () => {
  const history = useHistory();
  changeBackground('mode-selector-bg');

  const onClickHandler = (e: MouseEvent) => {
    console.log(e.target);
    history.push('/modeselector');
  };
  return (
    <>
      <div className="mode-selector-bg">
        <div className="row">
          <div className="column">
            <div className="selection-container">
              <div className="selection-container-text">
                <p className="text">{ctntModeSelectorGen}</p>
              </div>
              <div className="selection-container-btn">
                <Button
                  id="btn-mode-generator"
                  label="Generator"
                  btnStyle="btn-mode-selector"
                  clickHandler={onClickHandler}
                />
              </div>
            </div>
          </div>
          <div className="column">
            <div className="selection-container">
              <div className="selection-container-text">
                <p className="text">{ctntModeSelectorGames}</p>
              </div>
              <div className="selection-container-btn">
                <Button
                  id="btn-mode-games"
                  label="Games"
                  btnStyle="btn-mode-selector"
                  clickHandler={onClickHandler}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModeSelector;
