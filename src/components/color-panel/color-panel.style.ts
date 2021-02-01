import { createUseStyles } from 'react-jss';

import { Colors } from '../../constants/colors';

export const ColorsStyles = createUseStyles({
  color: {
    height: 14,
    width: 14,
    border: `1px solid ${Colors.black}`,
    borderRadius: 6,
    background: ({ color }) => color,
    cursor: 'pointer',
  },
});

export const Styles = createUseStyles({
  section: {
    height: 36,
    borderRight: `1px solid ${Colors.white}`,
  },
  colorPanel: {
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 14px)',
    gridTemplateRows: 'repeat(2, 14px)',
    gap: 4,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
