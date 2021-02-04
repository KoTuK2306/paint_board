import { FC } from 'react';

import { ReactComponent as BlueAnimeCursor } from './assets/blueAnimeCursor.svg';
import { ReactComponent as BlueCursor } from './assets/blueCursor.svg';
import { ReactComponent as BlueEmptyCursor } from './assets/blueEmptyCursor.svg';
import { ReactComponent as GrayTelegramCursor } from './assets/grayTelegramCursor.svg';
import { ReactComponent as PurpleGradientCursor } from './assets/purpleGradientCursor.svg';
import { ReactComponent as YellowCursor } from './assets/yellowCursor.svg';

export const Cursors = {
  BlueAnimeCursor,
  BlueCursor,
  BlueEmptyCursor,
  GrayTelegramCursor,
  PurpleGradientCursor,
  YellowCursor,
};

export type CursorsType = keyof typeof Cursors;

interface Props {
  cursor: CursorsType;
  cursors?: string;
  className?: string;
}

export const Cursor: FC<Props> = ({ cursor, className }) => {
  const CurrentCursor = Cursors[cursor];

  return <CurrentCursor className={className} />;
};
