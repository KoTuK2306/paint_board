import { FC } from 'react';

import { Cursor, Cursors, CursorsType } from './cursor/cursor';
import { Style } from './custom-cursors.style';

export const CustomCursors: FC = () => {
  const classes = Style();

  return (
    <div className={classes.cursorsPanel}>
      {Object.keys(Cursors).map((cursorName) => (
        <Cursor cursor={cursorName as CursorsType} className={classes.cursor} />
      ))}
    </div>
  );
};
