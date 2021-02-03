import { FC } from 'react';

import { Styles } from './footer.style';

export const Footer: FC = () => {
  const classes = Styles();

  return (
    <footer className={classes.footer}>
      <p className={classes.text}>© Paint board {new Date().getFullYear()}</p>
    </footer>
  );
};
