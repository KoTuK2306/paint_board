import { createUseStyles } from 'react-jss';

import { Colors } from '../../constants';

export const Styles = createUseStyles({
  header: {
    display: 'grid',
    background: Colors.gray,
    width: '100%',
    gridTemplateColumns: 'repeat(4, 25%)',
    alignContent: 'center',
  },
  section: {
    height: 36,
    borderRight: `1px solid ${Colors.white}`,
  },
});
