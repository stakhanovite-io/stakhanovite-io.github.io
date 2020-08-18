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
import { Link as RLink } from "react-router-dom";
import { items } from './Navigation';
import joinUsLogo from './../public/assets/Join_us.png';
import delegators from "../public/assets/*/delegators/*.json";
import { ResponsiveBar } from '@nivo/bar'
import { ResponsiveTreeMap } from '@nivo/treemap'

export const MyResponsiveBar = ({ data /* see data tab */ }) => {
  const stkh1 = delegators.stkh1;
  const agg = Object.keys(stkh1).map(function(key) {
    return {epoch: key, amount: Math.floor(stkh1[key].reduce((a, b) => a + parseFloat(b.amount) / 1000000, 0))}
  }, {});
  return (
  <ResponsiveBar
      data={agg}
      keys={[ 'amount' ]}
      indexBy="epoch"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      colors={{ scheme: 'accent' }}
      defs={[
          {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              rotation: -45,
              lineWidth: 6,
              spacing: 10
          }
      ]}
      borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'epoch',
          legendPosition: 'middle',
          legendOffset: 32
      }}
      axisLeft={{
          tickSize: 10,
          tickPadding: 10,
          tickRotation: 0,
          legend: 'Millions',
          legendPosition: 'middle',
          legendOffset: -40
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
      legends={[
          {
              dataFrom: 'keys',
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: 'left-to-right',
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemOpacity: 1
                      }
                  }
              ]
          }
      ]}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
  />
)}

export const MyResponsiveTreeMap = () => {
  const stkh1 = delegators.stkh1;
  const keys = Object.keys(stkh1);
  const lastEpoch = keys.map(a => parseInt(a)).sort().reverse()[0];
  return (

  <ResponsiveTreeMap
      root={{
         name: "text",
        color: "hsl(196, 70%, 50%)",
        children: stkh1[lastEpoch.toString()]
      }}
      identity="address"
      value="amount"
      innerPadding={3}
      outerPadding={3}
      margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      label="amount"
      labelFormat=".0s"
      labelSkipSize={12}
      labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.2 ] ] }}
      colors={{ scheme: 'nivo' }}
      borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.3 ] ] }}
      animate={true}
      motionStiffness={90}
      motionDamping={11}
  />
)}

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

function Nav({ color }) {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width: 1000px)');
  const stkh1 = delegators.stkh1;
  const keys = Object.keys(stkh1);
  const lastEpoch = keys.map(a => parseInt(a)).sort().reverse()[0];
  const lastEpochData = stkh1[lastEpoch.toString()];
  const totalStake = lastEpochData.reduce((a, b) => a + parseFloat(b.amount), 0);

  const stake = parseInt(totalStake) / (Math.pow(10, 6));
  return (
    <div>
      <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
        <nav className={matches ? classes.nav : classes.navSmall}>
          {Object.keys(items).map((key) =>
          <Link component={RLink} to={key} key={key} variant="button" color={color} href="#" className={classes.link}>
            {items[key].title}
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
      </div>
      <div>
      STAKE {stake} M
      EPOCH {lastEpoch}
      DELEGATORS {lastEpochData.length}
      </div>
    </div>);
}

function SimpleMenu() {
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
        <MenuItem component={RLink} to={key} key={key} onClick={handleClose}>{items[key].title}</MenuItem>
        )}
      </Menu>
    </div>
  );
}

export function ToolbarMenu() {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width: 1000px)');
    return (
      <AppBar position="static" color="primary" elevation={0} className={classes.appBar} style={{padding: 5}}>
        <Toolbar className={classes.toolbar} style={{display: "flex", justifyContent: "space-between"}}>
          <img alt="logo" src={joinUsLogo} style={{width: 75}} />
          {matches
            ? <Nav color={"textPrimary"} />
            : <SimpleMenu />
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
       <Nav color={"textSecondary"} />
      </Container>
    );
}