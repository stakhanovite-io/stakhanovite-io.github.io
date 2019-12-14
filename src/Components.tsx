import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
//import GithubIcon from '@material-ui/icons/Github';

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
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: 'wrap'
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
    footer: {
      borderTop: `1px solid ${theme.palette.divider}`,
      marginTop: theme.spacing(8),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
      },
    },
  }));

export function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://stakhanovite.io/">
          Stakhanovite
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export function Menu() {
    const classes = useStyles();
    return (
    <AppBar position="static" color="primary" elevation={0} className={classes.appBar} style={{padding: 5}}>
        <Toolbar className={classes.toolbar} style={{display: "flex", justifyContent: "space-between"}}>
          <div style={{display: "flex", flexDirection: "column"}}>
            <Typography variant="h5" color="textPrimary" style={{flexGrow: 1}}>
            STAKHANOVITE STAKE POOL
            </Typography>
            <Typography variant="subtitle1" color="textPrimary" style={{flexGrow: 1}}>
            A Cardano Stake Pool for the community, by the community
            </Typography>
          </div>

          <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
            <IconButton
              href="https://twitter.com/StakhanoviteIO"
              color="inherit"
            >
              <TwitterIcon />
            </IconButton>
            <nav>
              <Link variant="button" color="textPrimary" href="mailto:contact@stakhanovite.io" className={classes.link}>
                CONTACT
              </Link>
            </nav>
          </div>
        </Toolbar>
      </AppBar>
    );
}

const footers = [
    {
      title: 'Company',
      description: ['Team', 'Contact us'],
    },
    {
      title: 'Legal',
      description: ['Privacy policy', 'Terms of use'],
    },
  ];

export function Footer() {
    const classes = useStyles();
    return (
    <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map(footer => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map(item => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
}