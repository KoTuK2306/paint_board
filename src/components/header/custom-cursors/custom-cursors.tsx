import { FC } from 'react';

import { Cursor, Cursors } from './cursor';
import type { CursorsType } from './cursor';

import { Style } from './custom-cursors.style';

export const CustomCursors: FC = () => {
  const classes = Style();

  return (
    <div className={classes.cursors}>
      {Object.keys(Cursors).map((cursorName) => (
        <Cursor key={cursorName} cursor={cursorName as CursorsType} className={classes.cursor} />
      ))}
    </div>
  );
};
