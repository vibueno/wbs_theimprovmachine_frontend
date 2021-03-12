import React from 'react';

import SuggestionPicture from '../SuggestionPicture';
import SuggestionPictureListProps from '../../types/SuggestionPictureListProps';

import './index.css';

const SuggestionPictureList = ({ pictureList }: SuggestionPictureListProps) => {
  return (
    <>
      <div className="suggestion-pictures-container">
        {pictureList.map((picture, index) => (
          <SuggestionPicture
            key={index}
            url={picture.url}
            description={picture.description}
            imagepage={picture.imagepage}
            authorname={picture.authorname}
            authorpage={picture.authorpage}
          />
        ))}
      </div>
    </>
  );
};

export default SuggestionPictureList;
