import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';

import { changeBackground } from '../../utils/background';

import { ctntModeSelectorGen, ctntModeSelectorGames } from '../../vars/content';

import './index.css';

const ModeSelector = () => {
  changeBackground('mode-selector-bg');

  const handleOnClick = () => history.push('');
  const history = useHistory();
  return (
    <>
      <div className="mode-selector-bg">
        <div className="row">
          <div className="column">
            <div className="selection-container">
              <p className="text">{ctntModeSelectorGen}</p>
              <Button
                label="Generator"
                btnStyle="btn-mode-selector"
                clickHandler={handleOnClick}
              />
            </div>
          </div>
          <div className="column">
            <div className="selection-container">
              <p className="text">{ctntModeSelectorGames}</p>
              <Button
                label="Games"
                btnStyle="btn-mode-selector"
                clickHandler={handleOnClick}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModeSelector;
