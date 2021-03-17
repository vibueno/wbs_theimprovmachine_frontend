import React from 'react';

import SuggestionPictureList from '../../components/SuggestionPictureList';
import SuggestionTextList from '../../components/SuggestionTextList';

import SuggestionResultProps from '../../types/SuggestionResultProps';

import SuggestionPictureProps from '../../types/SuggestionPictureProps';
import GenericStringObject from '../../types/GenericStringObject';

import { categoryContentType } from '../../vars/constants';

const SuggestionResult = ({ suggestionList }: SuggestionResultProps) => {
  if (suggestionList.categoryContentType === categoryContentType.image) {
    return (
      <SuggestionPictureList
        categoryTitle={suggestionList.categoryTitle}
        suggestionList={suggestionList.suggestions as SuggestionPictureProps[]}
      />
    );
  } else {
    return (
      <SuggestionTextList
        categoryTitle={suggestionList.categoryTitle}
        suggestionList={suggestionList.suggestions as GenericStringObject[]}
      />
    );
  }
};

export default SuggestionResult;
