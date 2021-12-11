import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import theme from './Theme';



import logo from '../../assets/logo.svg';
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
  },
  menu: {
    backgroundColor: theme.palette.common.orange,
    color: theme.palette.common.subMenuBackgroundColor,
    borderRadius: '10px'
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.5,
    // backgroundColor: 'blue',
    "&:hover": {
      opacity: 1
    }/* NOTE JSS에서의 SASS nesting사용법 참조( https://crmrelease.tistory.com/89 ) */
  }
} ) );

export default function Header ( props ) {
  const classes = useStyles();
  const [ value, setValue ] = useState( 0 );
  const [ anchorEl, setAnchorEl ] = useState( null );
  const [ open, setOpen ] = useState( false );
  const [ selectedIndex, setSelectedIndex ] = useState( 0 );

  const handleChange = ( e, value ) => {
    setValue( value );
    /* NOTE Click할 때 아래에 줄 생기게 만든다 */
  };

  const handlePopup = ( e ) => {
    setAnchorEl( e.currentTarget );
    setOpen( true );
  };/* NOTE 팝업메뉴 설정(handlePopup) */

  const handleMenuItemClick = ( e, i ) => {
    setAnchorEl( null );
    setOpen( false );
    setSelectedIndex( i );
  };

  const handleClose = ( e ) => {
    setAnchorEl( null );
    setOpen( false );
  };

  const menuOptions = [
    { name: "Services", link: "/services" },
    { name: "Custom Software Development", link: "/customsoftware" },
    { name: "Mobile Apps", link: "/mobileapps" },
    { name: "WebSites Development", link: "/websites" },
  ];
  /* NOTE 아래의 <MenuItem>을 단순화하기 위해 필요한 array */


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
    /* NOTE useEffect 개념 확보할 것 */
    switch ( window.location.pathname ) {
      case "/":
        if ( value !== 0 ) {
          setValue( 0 );
        }
        break;
      case "/services":
        if ( value !== 1 ) {
          setValue( 1 );
          setSelectedIndex( 0 );
        }
        break;
      case "/customsoftware":
        if ( value !== 1 ) {
          setValue( 1 );
          setSelectedIndex( 1 );
        }
        break;
      case "/mobileapps":
        if ( value !== 1 ) {
          setValue( 1 );
          setSelectedIndex( 2 );
        }
        break;
      case "/websites":
        if ( value !== 1 ) {
          setValue( 1 );
          setSelectedIndex( 3 );
        }
        break;
      case "/revolution":
        if ( value !== 2 ) {
          setValue( 2 );
        }
        break;
      case "/about":
        if ( value !== 3 ) {
          setValue( 3 );
        }
        break;
      case "/contact":
        if ( value !== 4 ) {
          setValue( 4 );
        }
        break;
      case "/estimate":
        if ( value !== 5 ) {
          setValue( 5 );
        }
        break;

      default:
        break;
    }
  }, [ value ] );

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
              <Tab
                className={classes.tab}
                component={Link}
                to="/"
                label="Home" />
              <Tab
                aria-owns={anchorEl ? 'simple-menu' : undefined}
                aria-haspopup={anchorEl ? 'true' : undefined}
                className={classes.tab}
                component={Link}
                onMouseOver={( event ) => handlePopup( event )}
                to="/services"
                label="Services" />
              {/* NOTE 팝업메뉴 적용 handlePopup */}
              <Tab
                className={classes.tab}
                component={Link}
                to="/revolution"
                label="The Revolution" />
              <Tab
                className={classes.tab}
                component={Link}
                to="/about"
                label="About Us" />
              <Tab
                className={classes.tab}
                component={Link}
                to="/contact"
                label="Contact" />
            </Tabs>
            <Button variant="contained" color="secondary" className={classes.button}>
              Free Estimate
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              classes={{ paper: classes.menu }}
              MenuListProps={{ onMouseLeave: handleClose }}
              elevation={0}
            >
              {/* NOTE 아래는 jsx에서 region 사용하는 방식 */}

              {/* classes.menu에 대한 참조 ( https://v4.mui.com/api/menu/#css ) */}
              {/*               <MenuItem
                className={classes.menuItem}
                component={Link}
                onClick={() => {
                  handleClose();
                  setValue( 1 );
                }}
                to="services"
                classes={{ root: classes.menuItem }}
              >
                Services
              </MenuItem>
              <MenuItem
                component={Link}
                onClick={() => {
                  handleClose();
                  setValue( 1 );
                }}
                to="customsoftware"
                classes={{ root: classes.menuItem }}
              >
                Custom Software Development
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setValue( 1 );
                }}
                component={Link}
                to="mobileapps"
                classes={{ root: classes.menuItem }}
              >
                Moblie App Development
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setValue( 1 );
                }}
                component={Link}
                to="websites"
                classes={{ root: classes.menuItem }}
              >
                Websites Development
              </MenuItem> */}

              {/* NOTE link는 {Link} component를 사용한다. */}
              {menuOptions.map( ( option, i ) => (
                <MenuItem
                  key={option}
                  component={Link}
                  to={option.link}
                  classes={{ root: classes.menuItem }}
                  onClick={( event ) => {
                    handleMenuItemClick( event, i );
                    setValue( 1 );
                    handleClose();
                  }}
                  selected={i === setSelectedIndex && value === 1}
                >
                  {option.name}
                </MenuItem>
              ) )}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
      {/* NOTE toolbar의 top margin, Header의 높이만큼 이격*/}
    </React.Fragment>
  );
}