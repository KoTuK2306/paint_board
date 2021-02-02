import { FC } from 'react';

import { Styles } from './footer.style';

export const Footer: FC = () => {
  const classes = Styles();

  return (
    <footer className={classes.footer}>
      <p className={classes.footerText}>© Paint board 2021</p>
    </footer>
  );
};
