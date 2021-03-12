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
        {description}
      </div>
    </>
  );
};

export default SuggestionPicture;