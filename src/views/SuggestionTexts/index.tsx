import React from 'react';
import SuggestionTextList from '../../components/SuggestionTextList';

import SuggestionTextListProps from '../../types/SuggestionTextListProps';

const SuggestionTexts = ({ textList }: SuggestionTextListProps) => {
  return <SuggestionTextList textList={textList} />;
};

export default SuggestionTexts;
