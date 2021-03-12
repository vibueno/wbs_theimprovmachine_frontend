import React from 'react';
import SuggestionPictureList from '../../components/SuggestionPictureList';

import SuggestionPictureListProps from '../../types/SuggestionPictureListProps';

const SuggestionPictures = ({ pictureList }: SuggestionPictureListProps) => {
  return <SuggestionPictureList pictureList={pictureList} />;
};

export default SuggestionPictures;
