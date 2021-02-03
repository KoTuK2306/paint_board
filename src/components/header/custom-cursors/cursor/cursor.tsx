import { FC } from 'react';

import { ReactComponent as BlueAnimeCursor } from '../cursor-icons/blueAnimeCursor.svg';
import { ReactComponent as BlueCursor } from '../cursor-icons/blueCursor.svg';
import { ReactComponent as BlueEmptyCursor } from '../cursor-icons/blueEmptyCursor.svg';
import { ReactComponent as GrayTelegramCursor } from '../cursor-icons/grayTelegramCursor.svg';
import { ReactComponent as PurpleGradientCursor } from '../cursor-icons/purpleGradientCursor.svg';
import { ReactComponent as YellowCursor } from '../cursor-icons/yellowCursor.svg';

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
  className?: string;
}

export const Cursor: FC<Props> = ({ cursor, className }) => {
  const CurrentCursor = Cursors[cursor];

  return <CurrentCursor className={className} />;
};
