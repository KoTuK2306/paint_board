import { createUseStyles } from 'react-jss';
import color from 'color';

import { Colors } from '../../constants';

export const Styles = createUseStyles({
  header: {
    display: 'grid',
    background: color(Colors.gray).darken(0.75).hex(),
    width: '100%',
    gridTemplateColumns: 'repeat(4, 25%)',
    alignContent: 'center',
  },
  section: {
    height: 36,
    borderRight: `1px solid ${Colors.white}`,
    '&:last-child': {
      borderRight: 'none',
    },
  },
});
