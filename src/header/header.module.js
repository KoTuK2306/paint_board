import { createUseStyles } from 'react-jss';
import { Colors } from '../constants';

export const Styles = createUseStyles({
  header: {
    backgroundColor: '#222222',
    width: '100%',
    height: '50px',
    display: 'grid',
    gridTemplateColumns: '25% 25% 25% 25%',
    alignContent: 'center',
  },
  headerEl: {
    backgroundColor: '#222222',
    height: '36px',
    border: '1px solid white',
  },
  color: {
    height: '13px',
    width: '13px',
    backgroundColor: Colors.purple,
    border: '1px solid #222222',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  colorPanel: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 20px)',
    gridTemplateRows: '45% 45%',
    alignContent: 'center',
    justifyContent: 'center',
  },
});
