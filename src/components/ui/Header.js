import React, { useState, useEffect, useMemo, useCallback } from 'react';
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
// import { RouterOutlined } from "@material-ui/icons";
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
    marginLeft: 'auto',
    backgourndColor: theme.palette.common.blue,
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
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  },
  menu: {
    backgroundColor: theme.palette.common.orange,
    color: theme.palette.common.subMenuBackgroundColor,
    borderRadius: '10px'
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    backgroundColor: theme.palette.common.orange,
    '&:hover': {
      opacity: 1,
    }/* NOTE JSS에서의 SASS nesting사용법 참조( https://crmrelease.tistory.com/89 ) */
  },
  drawerIcon: {
    height: '50px',
    width: '50px',
    color: theme.palette.common.orange
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    }
    /* NOTE hover할 때 원이 transparent하게 보임 -> 없어짐 */
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,

  },
  drawerItem: {
    ...theme.typography.tab,
    color: '#FFF',
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange
  },
  drawerItemSelected: {
    '& .MuiListItemText-root': {
      opacity: 1,
    }
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1
  }

} ) );

export default function Header ( props ) {
  /* NOTE PROPS 공부하려 개념 익힐 것 */
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test( navigator.userAgent );

  const [ openDrawer, setOpenDrawer ] = useState( false );
  const matches = useMediaQuery( theme.breakpoints.down( "md" ) );
  /* NOTE mediaQuery사용할 때 들어가는 라인 */
  // const [ value, setValue ] = useState( 0 );
  const [ anchorEl, setAnchorEl ] = useState( null );
  const [ open, setOpen ] = useState( false );

  const handleChange = ( e, newValue ) => {
    props.setValue( newValue );
  } ;
  /* NOTE Click할 때 아래에 줄 생기게 만든다 */
  /* NOTE useCallback */

  const handleClick = useCallback( e => {
    setAnchorEl( e.currentTarget );
    setOpen( true );
  }, [] );
  /* NOTE 팝업메뉴 설정(handleClick) */
  /* NOTE useCallback */

  const handleMenuItemClick = ( e, i ) => {
    setAnchorEl( null );
    setOpen( false );
    props.setSelectedIndex( i );
  };

  const handleClose = ( e ) => {
    setAnchorEl( null );
    setOpen( false );
  };

  const menuOptions = useMemo( () => [
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      selectedIndex: 0
    },
    {
      name: "Custom Software Development",
      link: "/customsoftware",
      activeIndex: 1,
      selectedIndex: 1
    },
    {
      name: "iOS/Android Apps Development",
      link: "/mobileapps",
      activeIndex: 1,
      selectedIndex: 2
    },
    {
      name: "WebSites Development",
      link: "/websites",
      activeIndex: 1,
      selectedIndex: 3
    }
  ], [] );
  /* NOTE 아래의 <MenuItem>을 단순화하기 위해 필요한 array */
  /* NOTE useMemo */

  const routes = useMemo( () => [
    { name: "Home", link: "/", activeIndex: 0 },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      ariaOwns: anchorEl ? 'simple-menu' : undefined,
      ariaPopup: anchorEl ? 'true' : undefined,
      mouseOver: event => handleClick( event )
    },
    { name: "The Revolution", link: "/revolution", activeIndex: 2 },
    { name: "About Us", link: "/about", activeIndex: 3 },
    { name: "Contact Us", link: "/contact", activeIndex: 4 },
  ], [ anchorEl, handleClick ] );

  useEffect( () => {
    [ ...menuOptions, ...routes ].forEach( route => {
      switch ( window.location.pathname ) {
        case `${route.link}`:
          if ( props.value !== route.activeIndex ) {
            props.setValue( route.activeIndex );
            if ( route.selectedIndex && route.selectedIndex !== props.selectedIndex ) {
              props.setSelectedIndex( route.selectedIndex );
            }
          }
          break;
        default:
          break;
      }
    } );
  }, [ props.value, menuOptions, props.selectedIndex, routes, props ] );
  /* NOTE useEffect, forEach 개념 확보할 것 */
  /* NOTE useMemo */

  const tabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {/* NOTE error 아래를 routes.map 다음에 '='을 넣었음  */}
        {/* NOTE '=' 하나 잘 못 집어 넣었을 뿐인데...ㅜㅜ */}
        {routes.map( ( route, index ) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ) )}
        {/* NOTE onMouseOver를 mouseOver로 해서 에러났음...ㅜㅜ */}

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
        style={{ zIndex: 1302 }}
        keepMounted
      >
        {/* NOTE style={{zIndex: 1302}}는 menu의 z-index를 appbar보도 위로 올려준다. */}
        {/* NOTE link는 {Link} component를 사용한다. */}
        {menuOptions.map( ( option, i ) => (
          <MenuItem
            key={`${option}${i}`}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={( event ) => {
              handleMenuItemClick( event, i );
              props.setValue( 1 );
              handleClose();
            }}
            selected={i === props.setSelectedIndex && props.value === 1}
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
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map( route => (
            <ListItem
              key={`${route}${route.activeIndex}`}
              divider
              button
              component={Link}
              to={route.link}
              selected={props.value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
              onClick={() => {
                setOpenDrawer( false );
                props.setValue( route.activeIndex );
              }}
            >
              <ListItemText
                disableTypography
                className={classes.drawerItem}
              >
                {route.name}
              </ListItemText>
            </ListItem>
          ) )}

          <ListItem
            onClick={() => {
              setOpenDrawer( false );
              props.setValue( 5 );
            }}
            divider
            button
            component={Link}
            classes={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemSelected
            }}
            to="/estimate"
            selected={props.value === 5}
          >
            <ListItemText
              disableTypography
              className={classes.drawerItem}
            >
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      {/* NOTE 아래는 햄버거 아이콘 */}
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
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => props.setValue( 0 )}
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