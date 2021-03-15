import React from 'react';

import SuggestionList from '../../types/SuggestionList';

import SuggestionResult from '../../views/SuggestionResult';

const GeneratorResults = ({ suggestionList }: SuggestionList) => {
  return (
    <>
      {suggestionList.map((suggestion, index) => (
        <SuggestionResult key={index} suggestion={suggestion} />
      ))}
    </>
  );
};

export default GeneratorResults;
