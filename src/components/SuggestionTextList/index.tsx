import React from 'react';

import SuggestionTextListProps from '../../types/SuggestionTextListProps';

import './index.css';

const SuggestionTextList = ({ textList }: SuggestionTextListProps) => {
  return (
    <>
      <div className="suggestion-texts-container">
        {textList.map((text, index) => (
          <p key={index} className="suggestion-text">
            {text.text}
          </p>
        ))}
      </div>
    </>
  );
};

export default SuggestionTextList;
