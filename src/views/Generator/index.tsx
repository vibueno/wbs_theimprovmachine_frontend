import React, { useEffect, useState, useRef, useContext } from 'react';

import { ErrorContext } from '../../vars/context';

import useBackground from '../../hooks/useBackground';

import GeneratorResults from '../../views/GeneratorResults';
import CategorySelector from '../../components/CategorySelector';

import { maxSuggestionAmount, errorSeverity } from '../../vars/constants';

import SuggestionCategory from '../../types/SuggestionCategory';
import SuggestionList from '../../types/SuggestionList';

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
  const [suggestionList, setSuggestionList] = useState<SuggestionList[]>([]);

  const categorySelectRef = useRef(null);
  const amountSelectRef = useRef(null);
  const ref = { categorySelectRef, amountSelectRef };

  const onSubmitHandler = async (
    e: MouseEvent,
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
      categories.find(cat => cat.name === category),
      response.data.suggestions
    );

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
