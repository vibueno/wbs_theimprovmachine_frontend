import React from 'react';

import './index.css';

import SuggestionPictureProps from '../../types/SuggestionPictureProps';

const SuggestionPicture = ({ url }: SuggestionPictureProps) => {
  return (
    <>
      <img className="suggestion-img" src={url} />
    </>
  );
};

export default SuggestionPicture;
