import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';



import logo from '../../assets/logo.svg';
// import theme from './Theme'

function ElevationScroll ( props ) {
  const { children } = props;
  const trigger = useScrollTrigger( {
    disableHysteresis: true,
    threshold: 0,
  } );

  return React.cloneElement( children, {
    elevation: trigger ? 4 : 0,
  } );
}

const useStyles = makeStyles( theme => ( {
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },
  logo: {
    height: '8em'
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgourndColor: 'transparent'
    }/* NOTE &:hover는 sass같은 것인지 확인 */
  },
  tabContainer: {
    marginLeft: 'auto'
    /* NOTE 메뉴버튼들 우측정렬 안 됨. V4에서는 됨. 해결 됨.*/
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px'
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '125px',
    marginLeft: '50px',
    marginRight: '25px',
    height: '45px',
  }
} ) );

export default function Header ( props ) {
  const classes = useStyles();

  const [ value, setValue ] = useState( 0 );

  const handleChange = ( e, value ) => {
    setValue( value );
    /* NOTE Click할 때 아래에 줄 생기게 만든다 */
  };

  useEffect( () => {
    if ( window.location.pathname === "/" && value !== 0 ) {
      setValue( 0 );
    }
    else if
      ( window.location.pathname === "/services" && value !== 0 ) {
      setValue( 1 );
    }
    else if
      ( window.location.pathname === "/revolution" && value !== 0 ) {
      setValue( 2 );
    }
    else if
      ( window.location.pathname === "/about" && value !== 0 ) {
      setValue( 3 );
    }
    else if
      ( window.location.pathname === "/contact" && value !== 0 ) {
      setValue( 4 );
    }
    else if
      ( window.location.pathname === "/estimate" && value !== 0 ) {
      setValue( 5 );
    }
  } );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => setValue( 0 )}
              disableRipple
            >
              {/* NOTE disableRipple */}
              <img alt="Com logo" src={logo} className={classes.logo} />
            </Button>

            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              indicatorColor="primary"
            >
              <Tab className={classes.tab} component={Link} to="/" label="Home" />
              <Tab className={classes.tab} component={Link} to="/revolution" label="The Revolution" />
              <Tab className={classes.tab} component={Link} to="/services" label="Services" />
              <Tab className={classes.tab} component={Link} to="/about" label="About Us" />
              <Tab className={classes.tab} component={Link} to="/contact" label="Contact" />
            </Tabs>
            <Button variant="contained" color="secondary" className={classes.button}>
              Free Estimate
            </Button>

          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
      {/* NOTE toolbar의 top margin, Header의 높이만큼 이격*/}
    </React.Fragment>
  );
}