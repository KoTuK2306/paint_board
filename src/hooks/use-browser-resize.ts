import { useEffect } from 'react';
import { fromEvent, interval } from 'rxjs';
import { throttle } from 'rxjs/operators';

export const useBrowserResize = (onResize: (event: Event) => void): void => {
  useEffect(() => {
    const resizeObserver$ = fromEvent(window, 'resize')
      .pipe(throttle(() => interval(50)))
      .subscribe(onResize);

    return () => {
      resizeObserver$.unsubscribe();
    };
  }, [onResize]);
};
