import { FC } from 'react';
import { useDispatch } from 'react-redux';
import classnames from 'classnames';

import { Colors } from 'style-constants';
import { setColor } from 'slices';
import { Styles, ColorsStyles } from './colors-panel.style';

export const ColorsPanel: FC = () => {
  const dispatch = useDispatch();
  const classes = Styles();

  return (
    <div className={classnames(classes.colorPanel, classes.section)}>
      {Object.values(Colors).map((color) => (
        <button
          onClick={() => dispatch(setColor(color))}
          type="button"
          className={ColorsStyles({ color }).color}
          aria-label="Select color"
        />
      ))}
    </div>
  );
};
