import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import footerAdornment from '../../assets/Footer_Adornment.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';

const useStyles = makeStyles( theme => ( {
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    zIndex: 1302,
    position: 'relative',
  },
  /* NOTE position: 'relative'로 drawer z-index를 Header와 Footer 밑으로 가라앉힘 */
  adornment: {
    width: '25em',
    verticalAlignment: 'bottom',
    [ theme.breakpoints.down( 'md' ) ]: {
      width: '21em'
    },
    [ theme.breakpoints.down( 'xs' ) ]: {
      width: '15em'
    },
  },
  mainContainer: {
    position: 'absolute',
    color: '#FFF'
  },
  link: {
    color: '#FFF',
    fontFamily: 'Arial',
    fontSize: '0.75em',
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  gridItem: {
    margin: '3em'
  },
  icon: {
    height: '4em',
    width: '4em',
    [ theme.breakpoints.down( 'md' ) ]: {
      width: '3em',
      height: '3em'
    },
    [ theme.breakpoints.down( 'xs' ) ]: {
      width: '2em',
      height: '2em'
    }
  },
  socialContainer: {
    position: 'absolute',
    marginTop: '-6em',
    right: '1.5em',
    [ theme.breakpoints.down( 'md' ) ]: {
      right: '1em'
    },
    [ theme.breakpoints.down( 'xs' ) ]: {
      right: '0.6em'
    },
  }
} ) );

export default function Footer ( props ) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justifyContent="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/"
                className={classes.link}
                onClick={() => props.setValue( 0 )}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/services"
                className={classes.link}
                onClick={() => {
                  props.setValue( 1 );
                  props.setSelectedIndex( 0 );
                }}
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                to="/customsoftware"
                className={classes.link}
                onClick={() => {
                  props.setValue( 1 );
                  props.setSelectedIndex( 1 );
                }}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                component={Link}
                to="/mobileapps"
                className={classes.link}
                onClick={() => {
                  props.setValue( 1 );
                  props.setSelectedIndex( 2 );
                }}
              >
                iOS/Android App Development
              </Grid>
              <Grid
                item
                component={Link}
                to="/websites"
                className={classes.link}
                onClick={() => {
                  props.setValue( 1 );
                  props.setSelectedIndex( 3 );
                }}
              >
                Websites Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/revolution"
                className={classes.link}
                onClick={() => props.setValue( 2 )}
              >
                Revolution
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                className={classes.link}
                onClick={() => props.setValue( 2 )}
              >
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                className={classes.link}
                onClick={() => props.setValue( 2 )}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                className={classes.link}
                onClick={() => props.setValue( 2 )}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/about"
                className={classes.link}
                onClick={() => props.setValue( 3 )}
              >
                About Us
              </Grid>
              <Grid
                item
                component={Link}
                to="/about"
                className={classes.link}
                onClick={() => props.setValue( 3 )}
              >
                History
              </Grid>
              <Grid
                item
                component={Link}
                to="/about"
                className={classes.link}
                onClick={() => props.setValue( 3 )}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/contact"
                className={classes.link}
                onClick={() => props.setValue( 4 )}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      {/* <Hidden xsDown> */}
      <img
        alt="Black decorative slash"
        src={footerAdornment}
        className={classes.adornment}
      />
      {/* </Hidden> */}

      {/* <Hidden smUp>
        <img
          alt="Black decorative slash"
          src={analytics}
          className={classes.adornment}
        />
      </Hidden> */}
      <Grid
        container
        spacing={2}
        justifyContent="flex-end"
        className={classes.socialContainer}
      >
        <Grid item component={'a'} href="https://www.facebook.com/" rel="noopener noreferer" target="_blank">
          <img alt="facebook logo" src={facebook} className={classes.icon} />
        </Grid>
        <Grid item component={'a'} href="https://www.twitter.com/" rel="noopener noreferer" target="_blank">
          <img alt="twitter logo" src={twitter} className={classes.icon} />
        </Grid>
        <Grid item component={'a'} href="https://www.instagram.com/" rel="noopener noreferer" target="_blank">
          <img alt="instagram logo" src={instagram} className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
}