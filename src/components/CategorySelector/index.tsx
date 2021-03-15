import React, { useState } from 'react';

/*
It is recommended not to use CSS classes with the react-select component
as pointed out on their website:
https://react-select.com/styles#using-classnames
Unfortunately, I didn't find a good way to change CSS properties (e.g., margins)
depending on viewport size.
 */

import Select from 'react-select';

import Button from '../Button';

import CategorySelectorProps from '../../types/CategorySelectorProps';
import CategorySelectOption from '../../types/CategorySelectOption';
import AmountSelectOption from '../../types/AmountSelectOption';

import './index.css';

const CategorySelector = React.forwardRef(
  (
    {
      categoryOptions,
      amountOptions,
      onSubmitHandler,
      onResetHandler
    }: CategorySelectorProps,
    ref
  ) => {
    const [category, setCategory] = useState<CategorySelectOption['value']>();
    const [amount, setAmount] = useState<AmountSelectOption['value']>();

    const { categorySelectRef, amountSelectRef } = ref;

    return (
      <>
        <form
          onSubmit={e => onSubmitHandler(e, category, amount)}
          className="category-selector-form"
        >
          <Select
            options={categoryOptions}
            placeholder="Category"
            className="select-category"
            onChange={option => {
              if (option)
                setCategory(option!.value as CategorySelectOption['value']);
              else setCategory('');
            }}
            isClearable
            ref={categorySelectRef}
          />

          <Select
            options={amountOptions}
            placeholder="Amount"
            className="select-amount"
            onChange={option => {
              if (option)
                setAmount(option!.value as AmountSelectOption['value']);
              else setAmount('');
            }}
            isClearable
            ref={amountSelectRef}
          />

          <Button
            id="category-selector-form-submit"
            label="hit me!"
            btnStyle="btn-forth btn-form-submit"
          />

          <Button
            id="category-selector-reset"
            label="Reset"
            btnStyle="btn-back btn-reset"
            clickHandler={e => {
              onResetHandler(e, categorySelectRef, amountSelectRef);
            }}
          />
        </form>
      </>
    );
  }
);

CategorySelector.displayName = 'CategorySelector';

export default CategorySelector;
