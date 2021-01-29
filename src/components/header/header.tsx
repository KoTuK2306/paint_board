import { FC } from 'react';
import classnames from 'classnames';

import { Colors } from '../../constants';
import { Styles, ColorsStyles } from './header.style';

export const Header: FC = () => {
  const classes = Styles();

  return (
    <header className={classes.header}>
      <div className={classnames(classes.colorPanel, classes.section)}>
        {Object.values(Colors).map((color) => (
          <div className={ColorsStyles({ color }).color} />
        ))}
      </div>
      <div className={classes.section} />
      <div className={classes.section} />
      <div className={classes.section} />
    </header>
  );
};
