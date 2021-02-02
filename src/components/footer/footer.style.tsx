import { createUseStyles } from 'react-jss';
import color from 'color';

import { Colors, Fonts } from 'style-constants';

export const Styles = createUseStyles({
  footer: {
    background: color(Colors.gray).darken(0.75).hex(),
  },
  footerText: {
    padding: 10,
    fontFamily: Fonts.MontserratRegular,
    color: color(Colors.gray).darken(0.45).hex(),
  },
});
