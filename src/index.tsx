import * as React from 'react';
import ReactDOM from 'react-dom';
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
  return <img alt="logo" src={png} style={{width: "100%"}} />;
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
          <Checkbox inputProps={{ 'aria-label': 'Agree to register to the newsletter' }} checked={checked} onChange={() => check(!checked)} />
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

  React.useEffect(() => {
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

  const ref = React.useRef();

  useOutsideClick(ref, resetNavigation);

  function setShowDetails() {
    setTimeout(() => setDetails(true), 500);
  }

  return (
    <div>
      <Container>
        <Typography style={{padding: 20, textAlign: "center"}}>
          A cardano only Stake pool for the community, by the community.  We are STKH !
          <br />
          Delegate your ada to our pool: <strong>3a6c4c5af3454634a5de5899554d219878efd609c73b5443b2f5b1a677f9a2a9</strong>
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
            Cardano, the blockchain supporting the ada cryptocurrency (ADA), runs in a proof-of-stake (PoS) setting. Anyone who owns ada can participate in its functioning. For that however, you must be online at all times…
            <br />
            Because this last requirement is very demanding and not practical for everyday users, Cardano allows you to delegate your ada (or stake) to a stake pool. The stake pool will be online for you and perform all the necessary validation work on your behalf.
            <br />
            That is exactly why the Stakhanovite Stake Pool is here for you!
            </Typography>
          </div>}
          {showDetails && showWWA &&
          <div>
            <Typography variant="h5">Who we are</Typography>
            <Typography>
              We are independent community members. Our operation is run for the community, by the community.
              <br />
              Hear it from one member of our team!
              <br />
              @psychomb: "French translator of various Cardano-related content such as 'Why Cardano?', the bi-monthly Cardano Foundation newsletter or the Yoroi Wallet, I have been a Cardano Ambassador since day one. Getting a stake pool up-and-running was a natural thing to do in order to further support the Cardano Community."
            </Typography>
          </div>}
          {showDetails && showWJU &&
          <div>
            <Typography variant="h5">Why join us</Typography>
            <Typography>
              For our fees, of course!
              <br />
              For the incentivized testnet, The Stakhanovite Stake Pool will not charge you any fixed costs. We, pool operators, will be rewarded via a small profit margin of 5%.
              <br />
              This profit margin is calculated on the rewards you get thanks to our efforts. Doing so means that we will get paid only when you get paid!
              <br />
              For example, if you rewards per epoch is 10 ADA, we get paid 0.5 ADA and the remaining 9.5 ADA is all yours. Importantly, it is the protocol that pays you, not us. Your rewards will be deposited to your wallets automatically at the end of each staking epoch.
              <br />
              We are transparent. From costs to performance, you will know everything and you will always be in a position to make the best choice for you, and your ada!
            </Typography>
          </div>}
      </div>
      <div style={{maxWidth: 960, borderTop: "1px solid rgba(0, 0, 0, 0.12)", marginLeft: "auto", marginRight: "auto"}} />
      <Newsletter />
    </div>
  );
}

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
  <ThemeProvider theme={theme}>
    <Layout>
      <App />  
    </Layout>
  </ThemeProvider>,
    document.getElementById("root")
);