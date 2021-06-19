import * as React from 'react';
import { Link as RLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import EmailIcon from '@material-ui/icons/Email';
import MenuIcon from '@material-ui/icons/Menu';
import TelegramIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles(theme => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
      },
      li: {
        listStyle: 'none',
      },
    },
    toolbar: {
      flexWrap: 'wrap',
      marginLeft: 60,
      marginRight: 60,
      marginTop: 5,
      marginBottom: 5,
      ['@media (max-width:500px)']: {
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
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing(0),
    },
    nav: {
      display: 'flex',
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
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 16,
      backgroundColor: "rgba(91, 94, 93, 0.28)",
    },
  }));

export function Copyright() {
    return (
      <Typography variant="h4">
        Copyright Stakhanovite.io
        {' '}
        {new Date().getFullYear()}
      </Typography>
    );
}

function Nav({ items }) {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width: 1000px)');
  return (
    <>
      <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
        <nav className={matches ? classes.nav : classes.navSmall}>
          {Object.keys(items).map((key) =>
          <Link underline="none" component={RLink} to={key} key={key} color="textPrimary" variant="button" href="#" className={classes.link}>
            {items[key].title}
          </Link>
          )}
        </nav>
        {matches &&
          <>
            <IconButton
              href="https://twitter.com/StakhanoviteIO"
              color="secondary"
              title="STKH on Twitter">
              <TwitterIcon />
            </IconButton>
            <IconButton
              href="https://t.me/StakhanoviteIO"
              color="secondary"
              title="STKH on Telegram">
              <TelegramIcon />
            </IconButton>
            <IconButton
              href="https://stakhanovite.substack.com/"
              color="secondary"
              title="STKH Newsletter">
              <EmailIcon />
            </IconButton>
          </>
        }
      </div>
    </>);
}

function SimpleMenu({ items }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => setAnchorEl(event.currentTarget);
  const handleClose = _event => setAnchorEl(null);

  return (
    <>
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
        <MenuItem component={RLink} to={key} key={key} onClick={handleClose}>{items[key].title}</MenuItem>
        )}
      </Menu>
    </>
  );
}

export function ToolbarMenu({ items }) {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width: 1000px)');
    return (
      <AppBar position="sticky" color="primary" elevation={0} style={{padding: 2}}>
        <Toolbar className={classes.toolbar} style={{display: "flex", justifyContent: "flex-end"}}>
          {matches
            ? <Nav items={items} />
            : <SimpleMenu items={items} />
          }
        </Toolbar>
      </AppBar>
    );
}

export function Footer() {
    const classes = useStyles();
    return (
      <Container component="footer" maxWidth={false} className={classes.footer}>
       <Copyright />
       <Typography variant="body2">made with love by our dedicated team</Typography>
      </Container>
    );
}