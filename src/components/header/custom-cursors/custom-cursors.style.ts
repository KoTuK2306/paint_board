import { createUseStyles } from 'react-jss';

import { Colors } from 'style-constants';

export const Style = createUseStyles({
  cursorsPanel: {
    height: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 32px)',
    gap: 4,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRight: `1px solid ${Colors.white}`,
  },
  cursor: {
    width: 32,
    height: 32,
    display: 'flex',
    borderRadius: 4,
    cursor: 'pointer',
  },
});
