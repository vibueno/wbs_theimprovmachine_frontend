import React from 'react';

import SuggestionTextListProps from '../../types/SuggestionTextListProps';

const SuggestionTextList = ({
  category,
  textList
}: SuggestionTextListProps) => {
  return (
    <>
      <div className="suggestions-container">
        <h4>{category}</h4>
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
