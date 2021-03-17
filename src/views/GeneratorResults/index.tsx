import React from 'react';

import SuggestionResult from '../../views/SuggestionResult';

import SuggestionList from '../../types/SuggestionList';

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
