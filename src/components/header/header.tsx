import { FC } from 'react';

import { ColorPanel } from './color-panel';
import { Styles } from './header.style';

export const Header: FC = () => {
  const classes = Styles();

  return (
    <header className={classes.header}>
      <ColorPanel />
      <div className={classes.section} />
      <div className={classes.section} />
      <div className={classes.section} />
    </header>
  );
};
