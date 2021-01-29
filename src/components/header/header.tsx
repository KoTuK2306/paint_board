import { FC } from 'react';
import classnames from 'classnames';

import { Colors } from '../../constants';
import { Styles } from './header.style';

export const Header: FC = () => {
  const classes = Styles(Colors);

  return (
    <header className={classes.header}>
      <div className={classnames(classes.colorPanel, classes.headerEl)}>
        {Object.values(Colors).map((color) => (
          <div className={Styles({ color }).color} />
        ))}
      </div>
      <div className={classes.headerEl} />
      <div className={classes.headerEl} />
      <div className={classes.headerEl} />
    </header>
  );
};
