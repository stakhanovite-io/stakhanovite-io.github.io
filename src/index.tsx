import * as React from 'react';
import ReactDOM from 'react-dom';
import { useTransition, animated } from 'react-spring'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Newsletter } from './Components';
import { useOutsideClick } from './Hooks';
import Layout from './Layout';
import homepageLogo from './../public/assets/homepage.png';
import growTogetherLogo from './../public/assets/grow-together.png';
import poolOpsLogo from './../public/assets/pool-ops.png';
import operationStakhanoviteLogo from './../public/assets/operation-stakhanovite.png';
import toTheMoonLogo from './../public/assets/to-the-moon.png';
import Typography from '@material-ui/core/Typography';
import { useClipboard } from 'use-clipboard-copy';
import IconButton from '@material-ui/core/IconButton';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { Trans } from "react-i18next";
import "./i18n.js"

function Item({ png, legend, showLegend}) {
  return (
    <div style={{paddingLeft: 100, paddingRight: 100}}>
      <img alt="logo" src={png} style={{width: "100%"}} />
      <Typography {...( !showLegend ? { style: {visibility: "hidden"}} : {style: {textAlign: "center"}} ) }>
        {legend}
      </Typography>
    </div>
  );
}

function Items({onClick, children, show}) {
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

export function App() {
  const [showLegends, setLegends] = React.useState(true);
  const [showWWD, setWWD] = React.useState(true);
  const [showWWA, setWWA] = React.useState(true);
  const [showWJU, setWJU] = React.useState(true);
  const [showDetails, setDetails] = React.useState(false);
  const clipboard = useClipboard();

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
          <Trans i18nKey="intro"></Trans>
          <a href="https://shelleyexplorer.cardano.org/en/stake-pool/3a6c4c5af3454634a5de5899554d219878efd609c73b5443b2f5b1a677f9a2a9/">3a6c4c5af3454634a5de5899554d219878efd609c73b5443b2f5b1a677f9a2a9</a>
          <IconButton
              color="inherit"
              title="Copy pool address"
              onClick={() => clipboard.copy('3a6c4c5af3454634a5de5899554d219878efd609c73b5443b2f5b1a677f9a2a9')}
            >
              <FileCopyIcon />
            </IconButton>
        </Typography>
      </Container>
      <div ref={ref} style={{display: "flex", alignItems: "center", marginBottom: 40}}>
        <Items onClick={() => {setLegends(false); setWWA(false); setWJU(false); setShowDetails()}} show={showWWD}><Item showLegend={showLegends} png={homepageLogo} legend="What we do" /></Items>
        <Items onClick={() => {setLegends(false); setWWD(false); setWJU(false); setShowDetails()}} show={showWWA}><Item showLegend={showLegends} png={poolOpsLogo} legend="Who we are" /></Items>
        <Items onClick={() => {setLegends(false); setWWD(false); setWWA(false); setShowDetails()}} show={showWJU}><Item showLegend={showLegends} png={toTheMoonLogo} legend="Why join us" /></Items>
        {showDetails && showWWD &&
          <div>
            <Typography variant="h5"><Trans i18nKey="what-title"></Trans></Typography>
            <Typography>
              <Trans i18nKey="what-content"></Trans>
            </Typography>
          </div>}
          {showDetails && showWWA &&
          <div>
            <Typography variant="h5"><Trans i18nKey="who-title"></Trans></Typography>
            <Typography>
              <Trans i18nKey="who-content"></Trans>
            </Typography>
          </div>}
          {showDetails && showWJU &&
          <div>
            <Typography variant="h5"><Trans i18nKey="why-title"></Trans></Typography>
            <Typography>
             <Trans i18nKey="why-content"></Trans>
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