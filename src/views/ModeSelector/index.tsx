import React, { MouseEvent } from 'react';
import { useHistory } from 'react-router-dom';

import useBackground from '../../hooks/useBackground';

import SelectorCard from '../../components/SelectorCard';

import { ctntModeSelectorGen, ctntModeSelectorGames } from '../../vars/content';

import './index.css';

const ModeSelector = () => {
  useBackground('bg-mode-selector');

  const history = useHistory();

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
      <div className="selectors-container">
        <div className="selector-container">
          <div className="cards-container">
            <SelectorCard
              content={ctntModeSelectorGen}
              btnId="btn-mode-generator"
              btnLabel="Generator"
              clickHandler={onClickHandler}
            />
            <SelectorCard
              content={ctntModeSelectorGames}
              btnId="btn-mode-games"
              btnLabel="Games"
              clickHandler={onClickHandler}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModeSelector;
