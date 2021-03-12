import React, { useState } from 'react';
import Select from 'react-select';

import CategorySelectorProps from '../../types/CategorySelectorProps';
import CategorySelectOption from '../../types/CategorySelectOption';

import Button from '../Button';

import './index.css';

const CategorySelector = ({
  options,
  onSubmitHandler
}: CategorySelectorProps) => {
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

  const [category, setCategory] = useState<CategorySelectOption['value']>();
  const [amount, setAmount] = useState<number>();

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          onSubmitHandler(category, amount);
        }}
        className="category-selector-form"
      >
        <Select
          options={options}
          styles={styles}
          placeholder="Category"
          className="category-select"
          onChange={option =>
            setCategory(option!.value as CategorySelectOption['value'])
          }
        />
        <input
          type="number"
          className="suggestions-amount"
          id="suggestionsAmount"
          name="suggestionsAmount"
          placeholder="Amount"
          min="1"
          max="5"
          required
          onChange={e => setAmount(e.target.value as any)}
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
