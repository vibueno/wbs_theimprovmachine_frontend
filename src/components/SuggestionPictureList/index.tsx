import React from 'react';

import SuggestionPicture from '../SuggestionPicture';
import SuggestionPictureListProps from '../../types/SuggestionPictureListProps';

const SuggestionPictureList = ({
  category,
  pictureList
}: SuggestionPictureListProps) => {
  return (
    <>
      <div className="suggestions-container">
        <div className="category-title">{category}</div>
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
