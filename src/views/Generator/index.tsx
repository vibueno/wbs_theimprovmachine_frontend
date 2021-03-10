import React, { useEffect } from 'react';

import { setBackground } from '../../utils/background';

import CategorySelector from '../../components/CategorySelector';

import './index.css';

const Generator = () => {
  useEffect(() => {
    setBackground('bg-generator');
  }, []);

  return (
    <>
      <div className="generator-container">
        <CategorySelector />
      </div>
    </>
  );
};

export default Generator;
