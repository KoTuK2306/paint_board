import { createUseStyles } from 'react-jss';

import { Colors } from '../../constants';

export const Styles = createUseStyles({
  canvas: {
    display: 'block',
    border: `1px solid ${Colors.black}`,
  },
});
