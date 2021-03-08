import React from 'react';

import Button from '../../components/Button';

import './index.css';

const MainPage = () => {
  return (
    <>
      <h1 className="title">The Improv Machine</h1>
      <h2>The future of Improv is now</h2>
      <div className="button-container">
        <Button label="Enter->>" />
      </div>
    </>
  );
};

export default MainPage;
