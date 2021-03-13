import React, { useEffect, useState } from 'react';

import useBackground from '../../hooks/useBackground';

import mapCategoriesforSelector from '../../utils/suggestioncategories';
import { fillInStrTemplate } from '../../utils/strtemplate';

import apiRequest from '../../utils/api';

import CategorySelector from '../../components/CategorySelector';
import SuggestionPictures from '../../views/SuggestionPictures';
import SuggestionTexts from '../../views/SuggestionTexts';

import SuggestionPictureProps from '../../types/SuggestionPictureProps';
import SuggestionTextProps from '../../types/SuggestionTextProps';
import SuggestionCategory from '../../types/SuggestionCategory';

import { categoryContentType } from '../../vars/constants';

import { msgRequiredField } from '../../vars/messages';

import { RequiredFieldError } from '../../utils/error';

import './index.css';

const Generator = () => {
  const [categories, setCategories] = useState<SuggestionCategory[]>([]);
  const [pictureList, setPictureList] = useState<SuggestionPictureProps[]>([]);
  const [textList, setTextList] = useState<SuggestionTextProps[]>([]);

  const onSubmitHandler = async (
    e: MouseEvent,
    category: string,
    amount: number
  ) => {
    e.preventDefault();

    if (!category || !amount)
      throw new RequiredFieldError(
        fillInStrTemplate(msgRequiredField, [
          { param: 'fields', value: 'category and amount' }
        ])
      );

    const url = new URL(
      `suggestions?category=${category}&amount=${amount}`,
      process.env.REACT_APP_BACKENDHOST!
    );
    const response = await apiRequest(url.href);

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

  const onResetHandler = (e: MouseEvent, selectRef: HTMLFormElement) => {
    e.preventDefault();
    const target = e.target as Element;
    const form = target.parentNode as HTMLFormElement;
    form.reset();
    selectRef.current.select.clearValue();
    setPictureList([]);
    setTextList([]);
  };

  useBackground('bg-generator');

  useEffect(() => {
    const getCategories = async () => {
      const url = new URL('categories', process.env.REACT_APP_BACKENDHOST!);
      const response = await apiRequest(url.href);
      setCategories(response.data);
    };
    getCategories();
  }, []);

  return (
    <>
      <h3>Suggestion generator</h3>
      <div className="generator-container">
        <CategorySelector
          options={mapCategoriesforSelector(categories)}
          onSubmitHandler={onSubmitHandler}
          onResetHandler={onResetHandler}
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
