import { useLayoutEffect } from 'react';

export default function useBackground(background: string) {
  useLayoutEffect(() => {
    function updateBackground(background: string) {
      document.body.className = '';
      document.body.classList.add(background);
    }

    updateBackground(background);
  }, []);
}
