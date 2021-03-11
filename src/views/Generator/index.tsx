import React, { useEffect, useState } from 'react';

import { setBackground } from '../../utils/background';

import mapCategoriesforSelector from '../../utils/suggestioncategories';
import apiRequest from '../../utils/api';

import CategorySelector from '../../components/CategorySelector';
import SuggestionPictures from '../../views/SuggestionPictures';

import Picture from '../../types/Picture';

import './index.css';

const Generator = () => {
  useEffect(() => {
    setBackground('bg-generator');
  }, []);

  const [categories, setCategories] = useState([]);
  const [pictureList, setPictureList] = useState<Picture[]>([]);

  useEffect(() => {
    setPictureList([
      {
        id: 1,
        url: 'https://apod.nasa.gov/apod/image/2103/ZodiacalLightBarn1024.jpg'
      },
      { id: 2, url: 'https://picsum.photos/600/800' },
      { id: 3, url: 'https://picsum.photos/600/800' }
    ]);
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
        <CategorySelector options={mapCategoriesforSelector(categories)} />
        <SuggestionPictures pictureList={pictureList} />
      </div>
    </>
  );
};

export default Generator;
