import React from 'react';

import SuggestionPictureProps from '../../types/SuggestionPictureProps';

const SuggestionPicture = ({
  id,
  url,
  description,
  imagepage,
  authorname,
  authorpage,
  onLoadHandler
}: SuggestionPictureProps) => {
  return (
    <>
      <div className="suggestion-img-container">
        <a href={imagepage}>
          <img
            className="suggestion-img"
            src={url}
            onLoad={() => {
              onLoadHandler(id, false);
            }}
          />
        </a>
      </div>
    </>
  );
};

export default SuggestionPicture;
