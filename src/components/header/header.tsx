import { FC } from 'react';
import { Colors } from '../../constants';
import { Styles } from './header.style';

export const Header: FC = () => {
  const classes = Styles(Colors);
  return (
    <div className={classes.header}>
      <div className={`${classes.colorPanel} ${classes.headerEl}`}>
        {Object.values(Colors).map((color) => (
          <div className={`${classes.color} ${Styles({ color }).color}`} />
        ))}
      </div>
      <div className={classes.headerEl} />
      <div className={classes.headerEl} />
      <div className={classes.headerEl} />
    </div>
  );
};
