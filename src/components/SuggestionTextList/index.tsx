import React from 'react';

import SuggestionTextListProps from '../../types/SuggestionTextListProps';

import './index.css';

const SuggestionTextList = ({
  category,
  textList
}: SuggestionTextListProps) => {
  return (
    <>
      <div className="suggestions-container">
        <div className="category-title">{category}</div>
        {textList.map((textColumn, index) => (
          <div key={index} className="suggestion-text">
            {Object.keys(textColumn).map(textItem => (
              <p key={textItem}>{textColumn[textItem]}</p>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default SuggestionTextList;
