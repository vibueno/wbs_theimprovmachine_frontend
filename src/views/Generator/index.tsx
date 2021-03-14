import React, { useEffect, useState, useRef, useContext } from 'react';

import { ErrorContext } from '../../vars/context';

import useBackground from '../../hooks/useBackground';

import {
  mapCategoriesforSelector,
  getSuggestionAmountList
} from '../../utils/suggestioncategories';

import { fillInStrTemplate } from '../../utils/strtemplate';

import apiRequest from '../../utils/api';

import CategorySelector from '../../components/CategorySelector';
import SuggestionPictures from '../../views/SuggestionPictures';
import SuggestionTexts from '../../views/SuggestionTexts';

import SuggestionPictureProps from '../../types/SuggestionPictureProps';
import SuggestionTextProps from '../../types/SuggestionTextProps';
import SuggestionCategory from '../../types/SuggestionCategory';

import {
  categoryContentType,
  maxSuggestionAmount,
  errorSeverity
} from '../../vars/constants';

import { msgRequiredField, msgMaxSuggestionAmount } from '../../vars/messages';

import {
  RequiredFieldError,
  MaxSuggestionAmountError
} from '../../utils/error';

import './index.css';

const Generator = () => {
  const { setError } = useContext(ErrorContext);

  const [categories, setCategories] = useState<SuggestionCategory[]>([]);
  const [pictureList, setPictureList] = useState<SuggestionPictureProps[]>([]);
  const [textList, setTextList] = useState<SuggestionTextProps[]>([]);

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

    if (categoryObject !== undefined) {
      switch (categoryObject.contenttype) {
        case categoryContentType.image:
          setPictureList(response.data.suggestions);
          break;

        case categoryContentType.text:
          setTextList(response.data.suggestions);
      }
    }
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
    setPictureList([]);
    setTextList([]);
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
        {pictureList.length ? (
          <SuggestionPictures pictureList={pictureList} />
        ) : null}
        {textList.length ? <SuggestionTexts textList={textList} /> : null}
      </div>
    </>
  );
};

export default Generator;
