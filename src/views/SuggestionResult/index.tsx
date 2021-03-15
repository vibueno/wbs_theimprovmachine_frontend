import React from 'react';

import SuggestionPictureList from '../../components/SuggestionPictureList';
import SuggestionTextList from '../../components/SuggestionTextList';

import { categoryContentType } from '../../vars/constants';

const SuggestionResult = ({ suggestion }: []) => {
  console.log(suggestion);

  if (suggestion.contenttype === categoryContentType.image) {
    return (
      <SuggestionPictureList
        category={suggestion.category}
        pictureList={suggestion.suggestions}
      />
    );
  } else if (suggestion.contenttype === categoryContentType.text) {
    return (
      <SuggestionTextList
        category={suggestion.category}
        textList={suggestion.suggestions}
      />
    );
  }
};

export default SuggestionResult;
