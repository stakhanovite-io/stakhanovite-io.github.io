import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import Menu from '@material-ui/core/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TwitterIcon from '@material-ui/icons/Twitter';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { OurOperation } from './Pages/OurOperation';
import { Stakhanovite } from './Pages/Stakhanovite';
import { What } from './Pages/What';
import { Who } from './Pages/Who';
import { WhyUs } from './Pages/WhyUs';
import { Faq } from './Faq';
import joinUsLogo from './../public/assets/Join_us.png';

const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
      ul: {
        margin: 0,
        padding: 0,
      },
      li: {
        listStyle: 'none',
      },
    },
    appBar: {
      marginBottom: 20,
    },
    menu: {
      backgroundColor: 'white'
    },
    toolbar: {
      flexWrap: 'wrap',
      marginLeft: 60,
      marginRight: 60,
      marginTop: 5,
      marginBottom: 5,
      ['@media (max-width:780px)']: {
        marginLeft: 0,
        marginRight: 0,
      }
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
      backgroundColor: theme.palette.grey[200],
    },
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing(2),
    },
    nav: {
      '& a': {
        fontWeight: 700
      }
    },
    navSmall: {
      display: 'flex',
      flexDirection: 'column',
      '& a': {
        fontWeight: 700
      }
    },
    footer: {
      borderTop: `1px solid ${theme.palette.divider}`,
      marginTop: theme.spacing(8),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      backgroundColor: "rgba(25,29,23,0.60)",
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
      },
    },
  }));

export function Separator() {
  return <div style={{borderTop: "1px solid rgba(0, 0, 0, 0.12)", marginLeft: "auto", marginRight: "auto"}} />;
}

export function Copyright() {
    return (
      <Typography variant="h5" color="textSecondary">
        {'© '}
        <Link color="inherit" href="https://stakhanovite.io/">
          Stakhanovite.io
        </Link>{' '}
        {new Date().getFullYear()}
      </Typography>
    );
  }

const items = {
  'Stakhanovite': <Stakhanovite />,
  'What': <What />,
  'Who': <Who />,
  'Why Us': <WhyUs />,
  'Our Operation': <OurOperation />,
  'FAQ': <Faq />
}

function Nav({ color, setContent }) {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width: 1000px)');
  return (
  <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
    <nav className={matches ? classes.nav : classes.navSmall}>
      {Object.keys(items).map((key) =>
      <Link key={key} variant="button" color={color} href="#" onClick={() => setContent(items[key])} className={classes.link}>
        {key}
      </Link>
      )}
      <Link variant="button" color={color} href="https://stakhanovite.substack.com/" className={classes.link}>
        NEWSLETTER
      </Link>
    </nav>
    {matches &&
      <IconButton
        href="https://twitter.com/StakhanoviteIO"
        title="Twitter account"
      >
        <TwitterIcon />
      </IconButton>
    }
  </div>);
}

function SimpleMenu({ setContent }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {Object.keys(items).map((key) =>
        <MenuItem key={key} onClick={() => {handleClose(); setContent(items[key]);}}>{key}</MenuItem>
        )}
      </Menu>
    </div>
  );
}

export function ToolbarMenu({ setContent }) {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width: 1000px)');
    return (
      <AppBar position="static" color="primary" elevation={0} className={classes.appBar} style={{padding: 5}}>
        <Toolbar className={classes.toolbar} style={{display: "flex", justifyContent: "space-between"}}>
          <img alt="logo" src={joinUsLogo} style={{width: 75}} />
          {matches
            ? <Nav color={"textPrimary"} setContent={setContent} />
            : <SimpleMenu setContent={setContent} />
          }
        </Toolbar>
      </AppBar>
    );
}

export function Footer({ setContent }) {
    const classes = useStyles();
    return (
      <Container component="footer" maxWidth={false} className={classes.footer}>
       <Copyright />
       <Nav color={"textSecondary"} setContent={setContent} />
      </Container>
    );
}