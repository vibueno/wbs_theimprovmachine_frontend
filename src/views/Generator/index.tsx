import React, { useEffect, useState, useContext, FormEvent } from 'react';

import Select from 'react-select';

import Button from '../../components/Button';

import { ErrorContext } from '../../vars/context';

import useBackground from '../../hooks/useBackground';

import GeneratorResults from '../../views/GeneratorResults';

import { maxSuggestionAmount, errorSeverity } from '../../vars/constants';

import SuggestionCategory from '../../types/SuggestionCategory';
import SuggestionList from '../../types/SuggestionList';
import CategorySelectOption from '../../types/CategorySelectOption';
import AmountSelectOption from '../../types/AmountSelectOption';

import apiRequest from '../../utils/api';

import { validateGeneratorInput } from '../../utils/validations';

import {
  mapCategoriesforSelector,
  getSuggestionAmountList,
  createSuggestionObject
} from '../../utils/suggestion';

import './index.css';

const Generator = () => {
  const { setError } = useContext(ErrorContext);

  const [categories, setCategories] = useState<SuggestionCategory[]>([]);
  const [suggestionLists, setSuggestionLists] = useState<SuggestionList[]>([]);

  const [category, setCategory] = useState<CategorySelectOption['value']>(
    undefined
  );
  const [amount, setAmount] = useState<AmountSelectOption['value']>(undefined);

  const onSubmitHandler = async (
    e: FormEvent,
    category: string,
    amount: number
  ) => {
    e.preventDefault();

    try {
      validateGeneratorInput(category, amount);
    } catch (e) {
      setError({ message: e.message, severity: errorSeverity.notice });
      return;
    }
    const url = new URL(
      `suggestions?category=${category}&amount=${amount}`,
      process.env.REACT_APP_BACKENDHOST!
    );

    let response;
    try {
      response = await apiRequest(url.href);
    } catch (e) {
      setError({ message: e.message, severity: errorSeverity.critical });
      return;
    }

    const suggestion = createSuggestionObject(
      categories.find(cat => cat.name === category)!,
      response.data.suggestions
    );

    setSuggestionLists([suggestion, ...suggestionLists]);
  };

  const onResetHandler = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as Element;
    const form = target.parentNode as HTMLFormElement;
    form.reset();
    setSuggestionLists([]);
  };

  useBackground('bg-generator');

  useEffect(() => {
    const getCategories = async () => {
      const url = new URL('categories', process.env.REACT_APP_BACKENDHOST!);
      let response;

      try {
        response = await apiRequest(url.href);
        setCategories(response.data);
      } catch (e) {
        setError({ message: e.message, severity: errorSeverity.critical });
      }
    };
    getCategories();
  }, []);

  return (
    <>
      <h3>Suggestion generator</h3>
      <div className="generator-container">
        <form
          onSubmit={e => onSubmitHandler(e, category!, amount!)}
          className="category-selector-form"
        >
          <Select
            options={mapCategoriesforSelector(categories)}
            placeholder="Category"
            className="select-category"
            onChange={option => {
              if (option)
                setCategory(option!.value as CategorySelectOption['value']);
              else setCategory('');
            }}
            isClearable
          />

          <Select
            options={getSuggestionAmountList(maxSuggestionAmount)}
            placeholder="Amount"
            className="select-amount"
            onChange={option => {
              if (option)
                setAmount(option!.value as AmountSelectOption['value']);
              else setAmount(undefined);
            }}
            isClearable
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
              onResetHandler(e);
            }}
          />
        </form>

        <GeneratorResults suggestionLists={suggestionLists} />
      </div>
    </>
  );
};

export default Generator;
