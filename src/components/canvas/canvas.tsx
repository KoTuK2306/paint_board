import { FC, useEffect, useRef } from 'react';
import { fromEvent } from 'rxjs';
import { map, pairwise, switchMap, takeUntil } from 'rxjs/operators';

import { useSizeBrowser } from 'hooks';
import { Position } from './position';
import { drawLine } from './draw-line';

import { Styles } from './canvas.style';

export const Canvas: FC = () => {
  const classes = Styles();
  const { browserHeight, browserWidth } = useSizeBrowser();
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const ctx = ref.current?.getContext('2d');

    if (ref.current && ctx) {
      ctx.lineWidth = 4;

      const mousemove$ = fromEvent<MouseEvent>(ref.current, 'mousemove');
      const mousedown$ = fromEvent<MouseEvent>(ref.current, 'mousedown');
      const mouseup$ = fromEvent<MouseEvent>(ref.current, 'mouseup');
      const mouseout$ = fromEvent<MouseEvent>(ref.current, 'mouseout');

      const points$ = mousemove$.pipe(
        map<MouseEvent, Position>(({ clientX, clientY }) => {
          const { top = 0, left = 0 } = ref.current?.getBoundingClientRect() || {};

          return {
            x: clientX - left,
            y: clientY - top,
          };
        }),
        pairwise<Position>(),
      );

      mousedown$
        .pipe(switchMap(() => points$.pipe(takeUntil(mouseout$), takeUntil(mouseup$))))
        .subscribe((value) => drawLine(ctx, value));
    }
  }, []);

  return (
    <canvas ref={ref} className={classes.canvas} width={`${browserWidth - 2}px`} height={`${browserHeight - 38}px`}>
      Canvas is here
    </canvas>
  );
};
