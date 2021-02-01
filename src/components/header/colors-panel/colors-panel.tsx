import { FC } from 'react';
import classnames from 'classnames';

import { Colors } from 'style-constants';
import { Styles, ColorsStyles } from './colors-panel.style';

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
