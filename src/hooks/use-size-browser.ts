import { useCallback, useEffect, useState } from 'react';

import { useBrowserResize } from './use-browser-resize';

interface SizeBrowser {
  browserWidth: number;
  browserHeight: number;
}

export const useSizeBrowser = (): SizeBrowser => {
  const [browserWidth, setBrowserWidth] = useState(0);
  const [browserHeight, setBrowserHeight] = useState(0);

  useEffect(() => {
    setBrowserHeight(window.innerHeight);
    setBrowserWidth(document.body.clientWidth);
  }, []);

  const onResize = useCallback(() => {
    setBrowserHeight(window.innerHeight);
    setBrowserWidth(document.body.clientWidth);
  }, []);

  useBrowserResize(onResize);

  return { browserWidth, browserHeight };
};
