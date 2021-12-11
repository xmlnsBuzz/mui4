import { createTheme } from '@material-ui/core/styles';
// import blue from '@material-ui/core/colors/blue';
// import orange from '@material-ui/core/colors/orange';

const siaBlue = "#2ec2b3";
const siaOrange = "#c07007";
const siaGreen = "#9bc63f"

export default createTheme( {
  palette: {
    common: {
      blue: `${siaBlue}`,
      orange: `${siaOrange}`,
      subMenuBackgroundColor: '#fff',
    },
    primary: {
      main: `${siaBlue}`,
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
      color: '#ffffff',
      fontWeight: '700',
      fontSize: '1rem',
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: '#FFF'
    }

  }
  // palette: {
  //   primary: {
  //     main: `${siaBlue}}`,
  //   },
  //   secondary: {
  //     main: `${siaOrange}`,
  //   },
  // },
} );

