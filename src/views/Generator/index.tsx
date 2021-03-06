import React, { useEffect, useState } from 'react';

import { setBackground } from '../../utils/background';
import mapCategoriesforSelector from '../../utils/suggestioncategories';
import apiRequest from '../../utils/api';

import CategorySelector from '../../components/CategorySelector';
import SuggestionPictures from '../../views/SuggestionPictures';
import SuggestionTexts from '../../views/SuggestionTexts';

import SuggestionPictureProps from '../../types/SuggestionPictureProps';
import SuggestionCategory from '../../types/SuggestionCategory';

import SuggestionTextProps from '../../types/SuggestionTextProps';

import { categoryContentType } from '../../vars/constants';

import './index.css';

const Generator = () => {
  const [categories, setCategories] = useState<SuggestionCategory[]>([]);
  const [pictureList, setPictureList] = useState<SuggestionPictureProps[]>([]);
  const [textList, setTextList] = useState<SuggestionTextProps[]>([]);

  const onSubmitHandler = async (category: string, amount: number) => {
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

  useEffect(() => {
    setBackground('bg-generator');
  }, []);

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
