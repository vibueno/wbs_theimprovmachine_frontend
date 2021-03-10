import React, { useEffect, useState } from 'react';

import { setBackground } from '../../utils/background';

import mapCategoriesforSelector from '../../utils/suggestioncategories';
import apiRequest from '../../utils/api';

import CategorySelector from '../../components/CategorySelector';

import './index.css';

const Generator = () => {
  useEffect(() => {
    setBackground('bg-generator');
  }, []);

  const [categories, setCategories] = useState([]);

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
      <div className="generator-container">
        <CategorySelector options={mapCategoriesforSelector(categories)} />
      </div>
    </>
  );
};

export default Generator;
