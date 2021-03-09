import React, { useEffect, useState, MouseEvent } from 'react';

import useWindowSize from '../../hooks/useWindowSize';
import useScrollPosition from '../../hooks/useScrollPosition';

import './index.css';

const BackToTop = () => {
  const [width, height] = useWindowSize();
  const scrollYPosition = useScrollPosition();

  const [backToTopActive, setBackToTopActive] = useState(false);

  const updateState = () => {
    if (
      window.innerHeight + window.pageYOffset >=
      document.body.offsetHeight / 0.75
    ) {
      window.setTimeout(function () {
        setBackToTopActive(true);
      }, 100);
    } else {
      window.setTimeout(function () {
        setBackToTopActive(false);
      }, 100);
    }
  };

  const scrollToTop = () => {
    window.scrollTo(window.pageXOffset, 0);
  };

  useEffect(() => {
    updateState();
  }, [width, height, scrollYPosition]);

  const clickHandler = (e: MouseEvent) => {
    scrollToTop();
  };

  return backToTopActive ? (
    <button className="backToTop" onClick={clickHandler}>
      &#8679;
    </button>
  ) : null;
};

export default BackToTop;
