import { createUseStyles } from 'react-jss';

export const Styles = createUseStyles({
  header: {
    background: '#222222',
    width: '100%',
    height: '50px',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 25%)',
    alignContent: 'center',
  },
  headerEl: {
    backgroundColor: '#222222',
    height: '36px',
    borderRight: '1px solid white',
  },
  color: {
    background: (props) => props.color,
    height: '13px',
    width: '13px',
    border: '1px solid #222222',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  colorPanel: {
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 13px)',
    gridTemplateRows: 'repeat(2, 13px)',
    gridGap: '3px',
    alignContent: 'center',
    justifyContent: 'center',
  },
});
