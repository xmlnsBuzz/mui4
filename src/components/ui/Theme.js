import { createTheme } from '@material-ui/core/styles';
// import blue from '@material-ui/core/colors/blue';
// import orange from '@material-ui/core/colors/orange';

const siaBlue = "#006594";
const siaOrange = "#ff9f11";
const siaGreen = "#9bc63f";
const siaGrey = "#868686";

export default createTheme( {
  palette: {
    common: {
      blue: siaBlue,
      orange: `${siaOrange}`,
      green: `${siaGreen}`,
      subMenuBackgroundColor: '#fff',
    },
    primary: {
      main: siaBlue,
    },
    secondary: {
      main: `${siaOrange}`,
    },
    underscore: {
      main: `${siaGreen}`
    },
  },

  typography: {
    tab: {
      fontFamily: 'Roboto',
      textTransform: 'none',
      color: '#FFF',
      fontWeight: '700',
      fontSize: '1rem',
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: '#FFF'
    },
    h2: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: siaBlue,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: 'Pacifico',
      fontSize: '2.5rem',
      color: siaBlue,
      // lineHeight: 1.5,
    },
    h4: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '1.75rem',
      color: siaBlue,
      // lineHeight: 1.5,
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: `${siaGrey}`,
    },
    learnButton: {
      borderColor: siaBlue,
      borderWidth: 2,
      textTransform: 'none',
      color: siaBlue,
      borderRadius: 50,
      fontFamily: 'Roboto',
      fontWeight: 'bold'
    },
/*     learnButtonHero: {
      borderColor: siaBlue,
      color: siaBlue,
      borderWidth: 2,
      textTransform: 'none',
      borderRadius: 50,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
    }
 */  }
} );

