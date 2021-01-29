import { createUseStyles } from 'react-jss';

import { Colors } from '../../constants/index';

export const Styles = createUseStyles({
  header: {
    display: 'grid',
    background: Colors.gray,
    width: '100%',
    gridTemplateColumns: 'repeat(4, 25%)',
    alignContent: 'center',
  },
  headerEl: {
    height: 36,
    borderRight: `1px solid ${Colors.white}`,
  },
  color: {
    height: 14,
    width: 14,
    border: `1px solid ${Colors.black}`,
    borderRadius: 6,
    background: ({ color }) => color,
    cursor: 'pointer',
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
