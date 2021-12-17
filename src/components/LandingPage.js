import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonArrow from '../components/ui/ButtonArrow';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// import Hidden from '@material-ui/core/Hidden';
import { useTheme } from '@material-ui/core/styles';

import hand from '../animations/landinganimation/img_4.png';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg'
import websitesIcon from '../assets/websiteIcon.svg'

const useStyles = makeStyles( theme => ( {
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
    [ theme.breakpoints.down( 'sm' ) ]: {
      maxWidth: '38em'
    }
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  },

  buttonContainer: {
    marginTop: '1em'
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '.9rem',
    height: 45,
    width: 145,
    '&:hover': {
      backgroundColor: theme.palette.common.blue,
      color: '#FFF'
    }
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '.7em',
    height: 35,
    padding: 5,
    '&:hover': {
      backgroundColor: theme.palette.common.blue,
      color: '#FFF'
    },
    [ theme.breakpoints.down( 'sm' ) ]: {
      marginBottom: '2em',
    }
  },
  mainContainer: {
    marginTop: '5em',
    [ theme.breakpoints.down( 'md' ) ]: {
      marginTop: '3em'
    },
    [ theme.breakpoints.down( 'xs' ) ]: {
      marginTop: '1.5em'
    }
  },
  heroTextContainer: {
    minWidth: '21.5em',
    marginLeft: '1em',
    [ theme.breakpoints.down( 'xs' ) ]: {
      marginLeft: 0,
    }
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange
  },
  subtitle: {
    marginBottom: '1em',
  },
  icon: {
    marginLeft: '2em',
    [ theme.breakpoints.down( 'xs' ) ]: {
      marginLeft: 0
    }
  },
  serviceContainer: {
    marginTop: '12em',
    [ theme.breakpoints.down( 'xs' ) ]: {
      padding: 25
    }
  }
} ) );

export default function LandingPage () {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery( theme.breakpoints.down( 'sm' ) );
  // const matchesMD = useMediaQuery( theme.breakpoints.down( 'md' ) );
  /* NOTE md에서 query할 경우 위와 같이 사용한다 */

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>{/* hero block start */}
        <Grid container justifyContent="flex-end" alignItems="center" direction="row">
          <Grid sm item className={classes.heroTextContainer}>
            <Typography variant="h2" align="center">
              Bringing West Coast Technology
              <br />
              to the Midwest
            </Typography>
            <Grid container justifyContent="center" className={classes.buttonContainer}>
              <Grid item>
                <Button variant="contained" className={classes.estimateButton}>
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnButtonHero}>
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={20}
                    height={20}
                    fill={theme.palette.common.green} />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          {/* <Hidden xsDown> */}
          <Grid sm item className={classes.animation}>
            <img style={{ width: '600px' }} src={hand} alt="hand" />
          </Grid>
          {/* </Hidden> */}
        </Grid>
      </Grid>{/* hero block end */}

      <Grid item>{/* Custom Software start */}
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justifyContent={
            matchesSM
              ? 'center'
              : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined
            }}
          >
            <Typography variant="h4">
              Custom Software Development
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1"> Complete digital solutions, from investigation to {" "}<span className={classes.specialText}>celebration</span>
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow width={20} height={20} fill={theme.palette.common.green} />
            </Button>
          </Grid>
          <Grid item>
            <img
              src={customSoftwareIcon}
              alt="Custom Software Icon"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>{/* Custom Software end */}


      <Grid item>{ " " }{/* iOS/Android Apps start */}
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justifyContent={
            matchesSM
              ? 'center'
              : 'flex-end'}
        >
          <Grid
            item
            style={{
              
              textAlign: matchesSM ? 'center' : undefined
            }}
          >
            <Typography variant="h4">iOS/Android Apps Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1"> Complete digital solutions, from Integrate your web experience or create a standalone app
              {matchesSM ? null : <br />} with either mobile platform.
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow width={20} height={20} fill={theme.palette.common.green} />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : '5em',}}>
            <img
              src={mobileAppsIcon}
              alt="Mobile Apps Icon"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>{/* iOS/Android Apps end */}

      <Grid item>{/* Websites start */}
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justifyContent={
            matchesSM
              ? 'center'
              : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined
            }}
          >
            <Typography variant="h4">
              Websites Development
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
             Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1"> 
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow width={20} height={20} fill={theme.palette.common.green} />
            </Button>
          </Grid>
          <Grid item>
            <img
              src={websitesIcon}
              alt="Websites Icon"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>{/* Websites end */}
      
    </Grid>
  );
}
