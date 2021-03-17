import React from 'react';

import SuggestionPicture from '../SuggestionPicture';
import SuggestionPictureListProps from '../../types/SuggestionPictureListProps';

const SuggestionPictureList = ({ pictureList }: SuggestionPictureListProps) => {
  return (
    <>
      <div className="suggestions-container">
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
