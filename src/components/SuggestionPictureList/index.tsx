import React from 'react';

import SuggestionPicture from '../SuggestionPicture';

import './index.css';

const SuggestionPictureList = () => {
  return (
    <>
      <div className="suggestion-pictures-container">
        <SuggestionPicture src="https://picsum.photos/600/800" />
        <SuggestionPicture src="https://picsum.photos/600/800" />
        <SuggestionPicture src="https://picsum.photos/600/800" />
      </div>
    </>
  );
};

export default SuggestionPictureList;
