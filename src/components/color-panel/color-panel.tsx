import { FC } from 'react';
import classnames from 'classnames';

import { Styles, ColorsStyles } from './color-panel.style';
import { Colors } from '../../constants';

export const ColorPanel: FC = () => {
  const classes = Styles();

  return (
    <div className={classnames(classes.colorPanel, classes.section)}>
      {Object.values(Colors).map((color) => (
        <div className={ColorsStyles({ color }).color} />
      ))}
    </div>
  );
};
