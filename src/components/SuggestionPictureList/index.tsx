import React from 'react';

import SuggestionPicture from '../SuggestionPicture';

import SuggestionPictureListProps from '../../types/SuggestionPictureListProps';

import './index.css';

const SuggestionPictureList = ({ pictureList }: SuggestionPictureListProps) => {
  return (
    <>
      <div className="suggestion-pictures-container">
        {pictureList.map(picture => (
          <SuggestionPicture key={picture.id} src={picture.url} />
        ))}
      </div>
    </>
  );
};

export default SuggestionPictureList;
