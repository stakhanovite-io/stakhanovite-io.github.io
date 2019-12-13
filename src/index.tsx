
import { mount, route } from 'navi';
import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Router, View } from 'react-navi';
import { useTransition, animated } from 'react-spring'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Layout from './Layout';
import homepageLogo from './../public/assets/homepage.png';
import growTogetherLogo from './../public/assets/grow-together.png';
import poolOpsLogo from './../public/assets/pool-ops.png';
import operationStakhanoviteLogo from './../public/assets/operation-stakhanovite.png';
import toTheMoonLogo from './../public/assets/to-the-moon.png';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

function Image({ png, webp }) {
  return <img src={png} style={{width: "100%"}} />;
  /*return (
        <picture style={{display: "block"}}>
          <source type="image/webp" srcSet={webp}></source>
          <source type="image/png" srcSet={png}></source>
          <img src={png} style={{marginLeft: "auto", marginRight: "auto", display: "block"}} />
        </picture>
  );*/
}

function Item({ png, webp, legend, showLegend}) {
  return (
    <div style={{paddingLeft: 100, paddingRight: 100}}>
      <Image png={png} webp={webp} />
      <Typography {...( !showLegend ? { style: {visibility: "hidden"}} : {style: {textAlign: "center"}} ) }>
        {legend}
      </Typography>
    </div>
  );
}

function register() {
  window.open('https://tinyletter.com/Stakhanovite', 'popupwindow', 'scrollbars=yes,width=800,height=600');
  return true
}

function Newsletter() {
  const [checked, check] = React.useState(false);
  return (
    <Container style={{marginTop: 64}}>
      <Typography>To get our latest news and important updates - please subscribe to our newsletter. We will keep it short and simple!</Typography>
      <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginTop: 20, paddingLeft: 10}}>
        <div style={{display: "flex", flex: 3}}>
          <Checkbox checked={checked} onChange={() => check(!checked)} />
          <Typography variant="body1" component="span">I would like to receive the Stakhanovite newsletter, and I understand I can opt out anytime by clicking the unsubscribe link at the bottom of our emails.</Typography> 
        </div>
        <form style={{flex: 2, alignItems: "center", display: "flex", justifyContent: "center"}}
              action="https://tinyletter.com/Stakhanovite" method="post" target="popupwindow" onSubmit={register}>
          <input type="hidden" value="1" name="embed"/>
          <TextField id="tlemail" name="email" label="Enter your email here" variant="filled" disabled={!checked} />
          <Button style={{marginLeft: 10}} variant="contained" color="primary" disabled={!checked} type="submit">
            subscribe
          </Button>
        </form>
      </div>
    </Container>
  );
}

function Items({onClick, children, show, setDetails}}) {
  const transitions = useTransition(show, null, {
    from: { minWidth: 0, minHeight: 0 },
    enter: { maxWidth: "33%" },
    leave: { maxWidth: "0%" }
  })
  return (
    <>
    {transitions.map(({ item, key, props }) =>
      item && <animated.div key={key} style={props} onClick={onClick}>{children}</animated.div>
    )}
    </>);
}

const useOutsideClick = (ref, callback) => {
  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export function App() {
  const [showLegends, setLegends] = React.useState(true);
  const [showWWD, setWWD] = React.useState(true);
  const [showWWA, setWWA] = React.useState(true);
  const [showWJU, setWJU] = React.useState(true);
  const [showDetails, setDetails] = React.useState(false);

  function resetNavigation() {
    setWWD(true);
    setWWA(true);
    setWJU(true);
    setDetails(false);
    setLegends(true);
  }

  const ref = useRef();

  useOutsideClick(ref, resetNavigation);

  function setShowDetails() {
    setTimeout(() => setDetails(true), 500);
  }

  return (
    <div>
      <Container>
        <Typography style={{textAlign: "center", marginBottom: 20}}>
          We currently operate on the Cardano Incentivized Testnet under the pool ID:
          <br />
          <strong>edfaf14ac409926f952da7f9215bf94e9648a6547559677277b850605bb5d2d9</strong>
        </Typography>
      </Container>
      <div ref={ref} style={{display: "flex", alignItems: "center", marginBottom: 40}}>
        <Items onClick={() => {setLegends(false); setWWA(false); setWJU(false); setShowDetails()}} setDetails={setDetails} show={showWWD}><Item showLegend={showLegends} png={homepageLogo} legend="What we do" /></Items>
        <Items onClick={() => {setLegends(false); setWWD(false); setWJU(false); setShowDetails()}} setDetails={setDetails} show={showWWA}><Item showLegend={showLegends} png={poolOpsLogo} legend="Who we are" /></Items>
        <Items onClick={() => {setLegends(false); setWWD(false); setWWA(false); setShowDetails()}} setDetails={setDetails} show={showWJU}><Item showLegend={showLegends} png={toTheMoonLogo} legend="Why join us" /></Items>
        {showDetails && showWWD &&
          <div>
            <Typography variant="h5">What is a Stake Pool ?</Typography>
            <Typography>
              Cardano, the blockchain supporting the ADA cryptocurrency, runs in a pure Proof-of-Stake setting. This means that anyone who owns ADA can participate in its functioning, but for that you must be online at all times.
              <br />
              Because this last requirement is very demanding, Cardano allows you to delegate your ADA (or stake) to a Stake Pool. The Stake Pool will be online for you and perform all the necessary validation work on your behalf. This is exactly where the Stakhanovite Stake Pool will help you.
            </Typography>
          </div>}
          {showDetails && showWWA &&
          <div>
            <Typography variant="h5">What is a Stake Pool ?</Typography>
            <Typography>
              Cardano, the blockchain supporting the ADA cryptocurrency, runs in a pure Proof-of-Stake setting. This means that anyone who owns ADA can participate in its functioning, but for that you must be online at all times.
              <br />
              Because this last requirement is very demanding, Cardano allows you to delegate your ADA (or stake) to a Stake Pool. The Stake Pool will be online for you and perform all the necessary validation work on your behalf. This is exactly where the Stakhanovite Stake Pool will help you.
            </Typography>
          </div>}
          {showDetails && showWJU &&
          <div>
            <Typography variant="h5">What is a Stake Pool ?</Typography>
            <Typography>
              Cardano, the blockchain supporting the ADA cryptocurrency, runs in a pure Proof-of-Stake setting. This means that anyone who owns ADA can participate in its functioning, but for that you must be online at all times.
              <br />
              Because this last requirement is very demanding, Cardano allows you to delegate your ADA (or stake) to a Stake Pool. The Stake Pool will be online for you and perform all the necessary validation work on your behalf. This is exactly where the Stakhanovite Stake Pool will help you.
            </Typography>
          </div>}
      </div>
      <div style={{maxWidth: 960, borderTop: "1px solid rgba(0, 0, 0, 0.12)", marginLeft: "auto", marginRight: "auto"}} />
      <Newsletter />
    </div>
  );
}

/*

        <div>
          <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1', homepageLogo)}>
            <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography>What is a Stake Pool ?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Cardano, the blockchain supporting the ADA cryptocurrency, runs in a pure Proof-of-Stake setting. This means that anyone who owns ADA can participate in its functioning, but for that you must be online at all times.
                <br />
                Because this last requirement is very demanding, Cardano allows you to delegate your ADA (or stake) to a Stake Pool. The Stake Pool will be online for you and perform all the necessary validation work on your behalf. This is exactly where the Stakhanovite Stake Pool will help you.
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
              This movement of workers took pride in working hard and efficiently in order to produce more than necessary to support the state. By delegating your ADA to the hard working and efficient Stakhanovite Stake Pool, you will set your stake for the best !
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3', operationStakhanoviteLogo)}>
            <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
              <Typography>Who is behind the Stakhanovite Stake Pool ?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
              We are independent individuals and our operation is run by the people, for the people. By delegating your ADA to us, you will also commit to the ideals of decentralization.
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
              Operating a stake pool has a fixed cost (eg. hardware costs). On top, a profit margin is also present as a means of payment for our efforts. The Stakhanovite Stake Pool will not charge you the running costs and will reward the pool operators via the profit margin only. That way, we only get paid… when you get paid ! 
              <br />
              Importantly, the profit margin is calculated on the rewards only, and not the ADA you delegated to us.
              <br />
              We are transparent : from costs to performance, you know everything and you always will be in a position to make the best choice - for you and for your ADA. 
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>

*/

const routes =
  mount({
    '/': route({view: <App />,})
  })

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#FFFFFF"
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      main: 'rgba(166, 189, 179, 0.65)',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: 'rgba(47, 71, 81, 1)',
    },
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