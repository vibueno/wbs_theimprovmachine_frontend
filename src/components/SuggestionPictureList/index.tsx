import React, { useState, useEffect } from 'react';

import SuggestionPicture from '../SuggestionPicture';
import Spinner from '../Spinner';

import SuggestionPictureListProps from '../../types/SuggestionPictureListProps';

const SuggestionPictureList = ({
  categoryTitle,
  suggestionList
}: SuggestionPictureListProps) => {
  const [picsLoading, setPicsLoading] = useState<boolean[]>([]);
  const [allPicsLoaded, setAllPicsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setAllPicsLoaded(
      picsLoading.filter(picLoading => picLoading === true).length === 0
    );
  }, [picsLoading]);

  const onLoadHandler = (id: number, loading: boolean) => {
    picsLoading[id] = loading;
    setPicsLoading([...picsLoading]);
  };

  const getContainerClass = (show: boolean): string => {
    if (show) return 'suggestions-container';
    else return 'suggestions-container-hidden';
  };

  return (
    <>
      {!allPicsLoaded ? <Spinner /> : null}
      <div className={`${getContainerClass(allPicsLoaded)}`}>
        <h4>{categoryTitle}</h4>
        {suggestionList.map((picture, index) => (
          <SuggestionPicture
            id={index}
            key={index}
            url={picture.url}
            description={picture.description}
            imagepage={picture.imagepage}
            authorname={picture.authorname}
            authorpage={picture.authorpage}
            onLoadHandler={onLoadHandler}
          />
        ))}
      </div>
    </>
  );
};

export default SuggestionPictureList;
