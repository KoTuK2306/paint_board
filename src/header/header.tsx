import React from 'react';
import { Styles } from './header.module';
import { Colors } from '../constants/colors';

function Header() {
  const classes = Styles(Colors);
  return (
    <div className={classes.header}>
      <div className={`${classes.colorPanel} ${classes.headerEl}`}>
        {Object.values(Colors).map(() => (
          <div className={classes.color} />
        ))}
      </div>
      <div className={classes.headerEl} />
      <div className={classes.headerEl} />
      <div className={classes.headerEl} />
    </div>
  );
}

export default Header;
