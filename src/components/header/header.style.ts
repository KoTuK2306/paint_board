import { createUseStyles } from 'react-jss';

import { Colors } from '../../constants/index';

export const Styles = createUseStyles({
  header: {
    display: 'grid',
    background: Colors.gray,
    width: '100',
    gridTemplateColumns: 'repeat(4, 25%)',
    alignContent: 'center',
  },
  headerEl: {
    height: '36px',
    borderRight: `1px solid ${Colors.white}`,
  },
  color: {
    background: ({ color }) => color,
    height: '14px',
    width: '14px',
    border: `1px solid ${Colors.black}`,
    borderRadius: '6px',
    cursor: 'pointer',
  },
  colorPanel: {
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 14px)',
    gridTemplateRows: 'repeat(2, 14px)',
    gap: '4px',
    alignContent: 'center',
    justifyContent: 'center',
  },
});
