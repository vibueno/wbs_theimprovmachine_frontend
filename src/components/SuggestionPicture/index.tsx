import React from 'react';

import './index.css';

import SuggestionPictureProps from '../../types/SuggestionPictureProps';

const SuggestionPicture = ({
  url,
  description,
  imagepage,
  authorname,
  authorpage
}: SuggestionPictureProps) => {
  return (
    <>
      <div className="suggestion-img-container">
        <a href={imagepage}>
          <img className="suggestion-img" src={url} />
        </a>
        <p className="suggestion-img-desc">{description}</p>
      </div>
    </>
  );
};

export default SuggestionPicture;
