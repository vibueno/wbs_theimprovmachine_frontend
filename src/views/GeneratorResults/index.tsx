import React from 'react';

import SuggestionResult from '../../views/SuggestionResult';

import GeneratorResultsProps from '../../types/GeneratorResultsProps';

const GeneratorResults = ({ suggestionLists }: GeneratorResultsProps) => {
  return (
    <>
      {suggestionLists.map((suggestionList, index) => (
        <SuggestionResult key={index} suggestionList={suggestionList} />
      ))}
    </>
  );
};

export default GeneratorResults;
