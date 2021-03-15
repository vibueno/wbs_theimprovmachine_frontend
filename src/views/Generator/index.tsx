import React, { useEffect, useState, useRef, useContext } from 'react';

import { ErrorContext } from '../../vars/context';

import useBackground from '../../hooks/useBackground';

import GeneratorResults from '../../views/GeneratorResults';
import CategorySelector from '../../components/CategorySelector';

import { maxSuggestionAmount, errorSeverity } from '../../vars/constants';
import { msgRequiredField, msgMaxSuggestionAmount } from '../../vars/messages';

import SuggestionCategory from '../../types/SuggestionCategory';
import SuggestionList from '../../types/SuggestionList';

import apiRequest from '../../utils/api';

import {
  mapCategoriesforSelector,
  getSuggestionAmountList
} from '../../utils/suggestioncategories';

import {
  RequiredFieldError,
  MaxSuggestionAmountError
} from '../../utils/error';

import { fillInStrTemplate } from '../../utils/strtemplate';

import './index.css';

const Generator = () => {
  const { setError } = useContext(ErrorContext);

  const [categories, setCategories] = useState<SuggestionCategory[]>([]);
  const [suggestionList, setSuggestionList] = useState<SuggestionList[]>([]);

  const categorySelectRef = useRef(null);
  const amountSelectRef = useRef(null);
  const ref = { categorySelectRef, amountSelectRef };

  const validateInput = (category: string, amount: number) => {
    if (!category || !amount)
      throw new RequiredFieldError(
        fillInStrTemplate(msgRequiredField, [
          { param: 'fields', value: 'category and amount' }
        ])
      );
    if (amount > maxSuggestionAmount)
      throw new MaxSuggestionAmountError(
        fillInStrTemplate(msgMaxSuggestionAmount, [
          { param: 'amount', value: maxSuggestionAmount }
        ])
      );
  };

  const onSubmitHandler = async (
    e: MouseEvent,
    category: string,
    amount: number
  ) => {
    e.preventDefault();

    try {
      validateInput(category, amount);
      setError({ message: null });
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
      setError({ message: null });
    } catch (e) {
      setError({ message: e.message, severity: errorSeverity.critical });
      return;
    }

    const categoryObject = categories.find(cat => cat.name === category);
    const suggestion = {
      category: categoryObject.title,
      contenttype: categoryObject.contenttype,
      suggestions: response.data.suggestions
    };

    setSuggestionList([...suggestionList, suggestion]);
  };

  const onResetHandler = (
    e: MouseEvent,
    categorySelectRef: HTMLFormElement,
    amountSelectRef: HTMLFormElement
  ) => {
    e.preventDefault();
    const target = e.target as Element;
    const form = target.parentNode as HTMLFormElement;
    form.reset();
    categorySelectRef.current.select.clearValue();
    amountSelectRef.current.select.clearValue();
    setSuggestionList([]);
    setError({ message: null });
  };

  useBackground('bg-generator');

  useEffect(() => {
    const getCategories = async () => {
      const url = new URL('categories', process.env.REACT_APP_BACKENDHOST!);
      let response;

      try {
        response = await apiRequest(url.href);
        setCategories(response.data);
        setError({ message: null });
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
        <CategorySelector
          categoryOptions={mapCategoriesforSelector(categories)}
          amountOptions={getSuggestionAmountList(maxSuggestionAmount)}
          onSubmitHandler={onSubmitHandler}
          onResetHandler={onResetHandler}
          ref={ref}
        />
        <GeneratorResults suggestionList={suggestionList} />
      </div>
    </>
  );
};

export default Generator;
