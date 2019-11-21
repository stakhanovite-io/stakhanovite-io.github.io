
import { mount, route } from 'navi';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, View } from 'react-navi';
import { createMuiTheme, withStyles, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Layout from './Layout';
import homepageLogo from './../public/assets/homepage.png';
import growTogetherLogo from './../public/assets/grow-together.png';
import poolOpsLogo from './../public/assets/pool-ops.png';
import operationStakhanoviteLogo from './../public/assets/operation-stakhanovite.png';
import toTheMoonLogo from './../public/assets/to-the-moon.png';
import Typography from '@material-ui/core/Typography';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(255, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

export function App() {
  const [expanded, setExpanded] = React.useState('panel1');
  const [logo, setLogo] = React.useState(homepageLogo);

  const handleChange = (panel, logo) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    setLogo(logo);
  };
  return (
    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
      <Container>
        <img src={logo} style={{marginLeft: "auto", marginRight: "auto", display: "block"}}/>
      </Container>
      <div>
        <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1', homepageLogo)}>
          <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>What is a Stake Pool ?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Cardano, the blockchain supporting the ada cryptocurrency (ADA), runs in a pure Proof-of-Stake setting. This means that anyone who owns ada can participate in its functioning and get rewards for validating blocks. For that however, you must run a node and be online at all times.
              <br />
              Because this last requirement is very demanding, Cardano allows you to delegate your ada (or stake) to a Stake Pool. The Stake Pool will be online for you and perform all the necessary validation work on your behalf. This is exactly where the Stakhanovite Stake Pool will help you!
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2', poolOpsLogo)}>
          <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>What is The Stakhanovite Stake Pool (Ticker: TSP) ?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            We named our pool in reference to Alekseï Grigorievitch Stakhanov (1906-1977) and the movement founded after him, The Stakhanovite Movement.
            <br />
            This movement of workers took pride in working hard and efficiently in order to produce more than necessary to support the state. By delegating your ada to the hard working and efficient Stakhanovite Stake Pool, you will set your stake for the best!
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3', operationStakhanoviteLogo)}>
          <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Who is behind the Stakhanovite Stake Pool ?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            We are independent individuals and our operation is run by the people, for the people. By delegating your ada to us, you will also commit to the ideals of decentralization.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel square expanded={expanded === 'panel4'} onChange={handleChange('panel4', toTheMoonLogo)}>
          <ExpansionPanelSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography>How is the Stakhanovite Stake Pool operated ?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            Our main node is based in France. For our node's safety, and to ensure near-perfect uptime, we operate behind geographically distributed relay-nodes. Our work ethics is simple: nothing should prevent the Stakhanovite Stake Pool from signing blocks on your behalf.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel square expanded={expanded === 'panel5'} onChange={handleChange('panel5', growTogetherLogo)}>
          <ExpansionPanelSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography>Who pays for running the Stakhanovite Stake Pool ?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            Operating a stake pool has a fixed cost (eg. hardware costs). A profit margin is also present as a means of payment for our efforts. The Stakhanovite Stake Pool will not charge you any fixed costs and will reward the pool operators via the profit margin only. That way, we only get paid… when you get paid! 
            <br />
            Importantly, the profit margin is a percentage of the rewards ada only, not of the ada you delegated to us.
            <br />
            We are transparent: from costs to performance, you know everything and you always will be in a position to make the best choice - for you and for your ADA. 
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </div>
  );
}

export function Faq() {
    return (<FAQ></FAQ>);
}

const routes =
  mount({
    '/': route({view: <App />,}),
    '/faq': route({view: <Faq />,})
  })

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#a6bdb3",
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#a6bdb3',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    /*secondary: {
      main: '#2f4751',
    },*/
    text: {
      primary: '#2f4751',
    },
    // error: will use the default color
  },
  overrides: {
    MuiPaper: { // Name of the component ⚛️ / style sheet
      root: { // Name of the rule
        backgroundColor: 'inherit', // Some CSS
      },
    },
  },
});

ReactDOM.render(
    <Router routes={routes}>
      <ThemeProvider theme={theme}>
        <Layout>
          <View />  
        </Layout>
      </ThemeProvider>
    </Router>,
    document.getElementById("root")
);
