import { useEffect, useState } from 'react';
import { fromEvent, interval } from 'rxjs';
import { throttle } from 'rxjs/operators';

interface SizeBrowser {
  browserWidth: number;
  browserHeight: number;
}

export const useResizeBrowser = (): SizeBrowser => {
  const [browserWidth, setBrowserWidth] = useState(0);
  const [browserHeight, setBrowserHeight] = useState(0);

  useEffect(() => {
    setBrowserHeight(window.innerHeight);
    setBrowserWidth(document.body.clientWidth);
  }, []);

  useEffect(() => {
    const onResize = () => {
      setBrowserHeight(window.innerHeight);
      setBrowserWidth(document.body.clientWidth);
    };

    const resizeObserver$ = fromEvent(window, 'resize')
      .pipe(throttle(() => interval(50)))
      .subscribe(onResize);

    return () => {
      resizeObserver$.unsubscribe();
    };
  }, []);

  return { browserWidth, browserHeight };
};
