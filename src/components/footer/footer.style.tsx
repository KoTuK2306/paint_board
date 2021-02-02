import { createUseStyles } from 'react-jss';
import color from 'color';

import { Colors } from '../../style-constants';
import '../../fonts/Montserrat/Montserrat.css';

export const Styles = createUseStyles({
  footer: {
    background: color(Colors.gray).darken(0.75).hex(),
  },
  footerText: {
    padding: 10,
    color: color(Colors.gray).darken(0.45).hex(),
    fontFamily: 'Montserrat-Regular',
  },
});
