import React from 'react';
import Select from 'react-select';

import './index.css';

const CategorySelector = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];

  return (
    <>
      <form>
        <label>
          Suggestion category:
          <Select options={options} className="category-select" />
        </label>
      </form>
    </>
  );
};

export default CategorySelector;
