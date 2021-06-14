import { useLayoutEffect } from 'react';

export default function useBackground(background: string) {
  useLayoutEffect(() => {
    function updateBackground(background: string) {
      document.body.className = '';
      // https://css-tricks.com/restart-css-animation/
      /* eslint-disable */
      document.body.offsetWidth;
      /* eslint-enable */
      document.body.classList.add(background);
    }

    updateBackground(background);
  }, []);
}
