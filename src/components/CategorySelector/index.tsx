import React, { FormEvent } from 'react';

import Select from 'react-select';

import CategorySelectorProps from '../../types/CategorySelectorProps';

import Button from '../Button';

import './index.css';

const CategorySelector = ({ options }: CategorySelectorProps) => {
  const styles = {
    container: (base: any) => ({
      ...base,
      flex: '40%',
      minWidth: '170px',
      maxWidth: '250px',
      fontFamily: 'Cairo-Regular',
      color: '#000'
    })
  };

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as Element;
    console.log(target);
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className="category-selector-form">
        <Select
          options={options}
          styles={styles}
          placeholder="Category"
          className="category-select"
        />
        <input
          type="number"
          className="suggestions-amount"
          id="suggestionsAmount"
          name="suggestionsAmount"
          placeholder="Amount"
          min="1"
          max="5"
        />

        <Button
          id="category-selector-form-submit"
          label="hit me!"
          btnStyle="btn-forth btn-form-submit"
        />
      </form>
    </>
  );
};

export default CategorySelector;
