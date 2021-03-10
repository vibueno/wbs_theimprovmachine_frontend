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
      minWidth: '150px',
      maxWidth: '250px',
      margin: '0 1em 0 0',
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
          placeholder="Select a category"
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
          label="enter"
          btnStyle="btn-forth"
        />
      </form>
    </>
  );
};

export default CategorySelector;
