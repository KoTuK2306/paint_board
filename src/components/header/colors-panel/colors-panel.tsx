import { FC } from 'react';
import classnames from 'classnames';

import { Styles, ColorsStyles } from './colors-panel.style';
import { Colors } from '../../../constants';

export const ColorsPanel: FC = () => {
  const classes = Styles();

  return (
    <div className={classnames(classes.colorPanel, classes.section)}>
      {Object.values(Colors).map((color) => (
        <div className={ColorsStyles({ color }).color} />
      ))}
    </div>
  );
};
