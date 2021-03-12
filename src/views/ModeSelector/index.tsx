import React, { MouseEvent, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';

import { setBackground } from '../../utils/background';
import { ctntModeSelectorGen, ctntModeSelectorGames } from '../../vars/content';

import './index.css';

const ModeSelector = () => {
  useEffect(() => {
    setBackground('bg-mode-selector');
  }, []);

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
            <section className="card">
              <div className="card-text-container">
                <p className="card-text">{ctntModeSelectorGen}</p>
              </div>
              <div className="card-btn-container">
                <Button
                  id="btn-mode-generator"
                  label="Generator"
                  btnStyle="btn-forth card-btn"
                  clickHandler={onClickHandler}
                />
              </div>
            </section>

            <section className="card">
              <div className="card-text-container">
                <p className="card-text">{ctntModeSelectorGames}</p>
              </div>
              <div className="card-btn-container">
                <Button
                  id="btn-mode-games"
                  label="Games"
                  btnStyle="btn-forth card-btn"
                  clickHandler={onClickHandler}
                />
              </div>
            </section>
          </div>

          <div className="btn-back-container">
            <Button
              id="btn-back"
              label="&#9003; Back"
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
