import { FC } from 'react';

import { ColorsPanel } from './colors-panel';
import { CustomCursors } from './custom-cursors';
import { Styles } from './header.style';

export const Header: FC = () => {
  const classes = Styles();

  return (
    <header className={classes.header}>
      <ColorsPanel />
      <CustomCursors />
      <div className={classes.section} />
      <div className={classes.section} />
    </header>
  );
};
