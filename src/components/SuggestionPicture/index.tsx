import React from 'react';

import './index.css';

type SuggestionPictureProps = {
  src: string;
};

const SuggestionPicture = ({ src }: SuggestionPictureProps) => {
  return (
    <>
      <img className="suggestion-img" src={src} />
    </>
  );
};

export default SuggestionPicture;
