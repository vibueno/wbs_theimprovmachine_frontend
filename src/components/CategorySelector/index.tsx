import React from 'react';
import Select from 'react-select';

import CategorySelectorProps from '../../types/CategorySelectorProps';

import './index.css';

const CategorySelector = ({ options }: CategorySelectorProps) => {
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
