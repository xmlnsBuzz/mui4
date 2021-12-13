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
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
    marginBottom: '3em',
    [ theme.breakpoints.down( 'md' ) ]: {
      marginBottom: '2em'
    },
    [ theme.breakpoints.down( 'xs' ) ]: {
      marginBottom: '1.25em'
    }
  },
  logo: {
    height: '8em',
    [ theme.breakpoints.down( 'md' ) ]: {
      height: '7em' /* breakpoints에서의 media query */
    },
    [ theme.breakpoints.down( 'xs' ) ]: {
      height: '5.5em'
    }
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
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
    '&:hover': {
      opacity: 1
    }/* NOTE JSS에서의 SASS nesting사용법 참조( https://crmrelease.tistory.com/89 ) */
  },
  drawerIcon: {
    height: '50px',
    width: '50px'
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent'
    }
    /* NOTE hover할 때 원이 transparent하게 보임 -> 없어짐 */
  },
  drawer: {
    backgroundColor: theme.palette.common.blue
  },
  drawerItem: {
    ...theme.typography.tab,
    color: '#FFF',
    opacity: 0.7
  },
  drawerItemSelected: {
    opacity: 1
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange
  }
} ) );

export default function Header ( props ) {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test( navigator.userAgent );

  const [ openDrawer, setOpenDrawer ] = useState( false );
  const matches = useMediaQuery( theme.breakpoints.down( "md" ) );
  const [ value, setValue ] = useState( 0 );
  const [ anchorEl, setAnchorEl ] = useState( null );
  const [ openMenu, setOpenMenu ] = useState( false );
  const [ selectedIndex, setSelectedIndex ] = useState( 0 );

  const handleChange = ( e, newValue ) => {
    setValue( newValue );
    /* NOTE Click할 때 아래에 줄 생기게 만든다 */
  };

  const handlePopup = ( e ) => {
    setAnchorEl( e.currentTarget );
    setOpenMenu( true );
  };/* NOTE 팝업메뉴 설정(handlePopup) */

  const handleMenuItemClick = ( e, i ) => {
    setAnchorEl( null );
    setOpenMenu( false );
    setSelectedIndex( i );
  };

  const handleClose = ( e ) => {
    setAnchorEl( null );
    setOpenMenu( false );
  };

  const menuOptions = [
    { name: "Services", link: "/services" },
    { name: "Custom Software Development", link: "/customsoftware" },
    { name: "Mobile Apps", link: "/mobileapps" },
    { name: "WebSites Development", link: "/websites" },
  ];
  /* NOTE 아래의 <MenuItem>을 단순화하기 위해 필요한 array */

  const drawerRoutes = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "The Revolution", link: "/revolution" },
    { name: "About Us", link: "/about" },
    { name: "Contact Us", link: "/contact" },
    { name: "Free Estimate", link: "/estimate" },
  ];

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

  const tabs = (
    <React.Fragment>
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
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
      >
        {/* NOTE 아래는 jsx에서 region 사용하는 방식 */}
        {
          //#region //NOTE react jsx에서 region사용방식
        }

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

        {
          //#endregion //NOTE react jsx에서 region사용방식
        }

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
    </React.Fragment>
  );


  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer( false )}
        onOpen={() => setOpenDrawer( true )}
        classes={{ paper: classes.drawer }}
      >
        <List disablePadding>
          {/* {drawerListItem.map( ( listItem ) => (

            <ListItem
              divider
              button
              component={Link}
              to={listItem.link}
              onClick={() => setOpenDrawer( false )}
              selected={value===0}
            >
              <ListItemText
                disableTypography
                className={classes.drawerItem}
              >
                {listItem.name}
              </ListItemText>
            </ListItem>
          ) )} */}
          {/* map을 사용하여 <ListItem> 들을 스스로 단순화 시킴. I'm proud of myself */}

          {
            //#region ListItem map
          }
          <ListItem
            onClick={() => { setOpenDrawer( false ); setValue( 0 ); }}
            divider
            button
            component={Link}
            to="/"
            selected={value === 0}
          >
            <ListItemText
              disableTypography
              className={
                value === 0
                  ? [ classes.drawerItem, classes.drawerItemSelected ]
                  : classes.drawerItem
              }
            >
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => { setOpenDrawer( false ); setValue( 1 ); }}
            divider
            button
            component={Link}
            to="/services"
            selected={value === 1}
          >
            {/* NOTE setOpenDrawer(false)를 빼면 클릭한 후에도 drawer가 닫히지 않는다. */}
            <ListItemText
              disableTypography
              className={
                value === 1
                  ? [ classes.drawerItem, classes.drawerItemSelected ]
                  : classes.drawerItem
              }
            >
              Services
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => { setOpenDrawer( false ); setValue( 2 ); }}
            divider
            button
            component={Link}
            to="/revolution"
            selected={value === 2}
          >
            <ListItemText
              disableTypography
              className={
                value === 2
                  ? [ classes.drawerItem, classes.drawerItemSelected ]
                  : classes.drawerItem

              }
            >
              The Revolution
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => { setOpenDrawer( false ); setValue( 3 ); }}
            divider
            button
            component={Link}
            to="/about"
            selected={value === 3}>
            <ListItemText
              disableTypography
              className={
                value === 3
                  ? [ classes.drawerItem, classes.drawerItemSelected ]
                  : classes.drawerItem

              }
            >
              About Us
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => { setOpenDrawer( false ); setValue( 4 ); }}
            divider
            button
            component={Link}
            to="/contact"
            selected={value === 4}>
            <ListItemText
              disableTypography
              className={
                value === 4
                  ? [ classes.drawerItem, classes.drawerItemSelected ]
                  : classes.drawerItem

              }
            >
              Contact Us
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => { setOpenDrawer( false ); setValue( 5 ); }}
            divider
            button
            component={Link}
            to="/estimate"
            selected={value === 5}
            className={classes.drawerItemEstimate}
          >
            <ListItemText
              disableTypography
              className={
                value === 5
                  ? [ classes.drawerItem, classes.drawerItemSelected ]
                  : classes.drawerItem

              }>
              Free Estimate
            </ListItemText>
          </ListItem>
          {
            //#endregion ListItem map
          }
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer( !openDrawer )}
        disableRipple
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );
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
            {matches ? drawer : tabs}

          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
      {/* NOTE toolbar의 top margin, Header의 높이만큼 이격*/}
    </React.Fragment>
  );
}