import React, { MouseEvent } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';

import { changeBackground } from '../../utils/background';

import { ctntModeSelectorGen, ctntModeSelectorGames } from '../../vars/content';

import './index.css';

const ModeSelector = () => {
  const history = useHistory();
  changeBackground('bg-mode-selector');

  const onClickHandler = (e: MouseEvent) => {
    const target = e.target as Element;

    switch (target.id) {
      case 'btn-mode-generator':
        history.push('/generator');
        break;
      case 'btn-back':
        history.push('/');
        break;
      case 'btn-mode-games':
        history.push('/games');
        break;
      default:
    }
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
        <div className="row">
          <div className="btn-back-container">
            <Button
              id="btn-back"
              label="Back &larr;"
              btnStyle="btn-back"
              clickHandler={onClickHandler}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModeSelector;
