import * as React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createBrowserHistory } from "history";
import { Router, Route } from "react-router-dom";
import { Footer, ToolbarMenu } from './Components';
import "./i18n";
import { Delegator } from './Pages/Delegator';
import { Faq } from './Pages/Faq';
import { Home } from './Pages/Home';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      // light: will be calculated from palette.primary.main,
      main: 'rgba(0, 0, 0, 0.8)',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#2C7568',
    },
    text: {
      primary: '#919EAB',
      secondary: '#2C7568',
    },
    // error: will use the default color
  },
  typography: {
    h1: {
      fontSize: 80,
      fontWeight: 'bold',
    },
    h2: {
      fontSize: 56,
      fontWeight: 'bold',
      lineHeight: "70px",
    },
    h3: {
      fontSize: 36,
      lineHeight: "50px",
      fontWeight: 'bold',
    },
    h4: {
      fontSize: 28,
      lineHeight: "50px",
      fontWeight: 'bold',
    },
    body1: {
      fontSize: 26,
      lineHeight: "45px",
    },
    body2: {
      fontSize: 18,
      lineHeight: "45px",
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
         body: {
           background: 'radial-gradient(circle at right top, rgba(22, 28, 36, 0.46) 0%, rgba(22, 28, 36, 0.78) 5%, rgba(22, 28, 36, 1) 100%)',
           backgroundRepeat: "no-repeat",
           backgroundAttachment: "fixed",
        },
      },
    },
    MuiPaper: { // Name of the component ⚛️ / style sheet
      root: { // Name of the rule
        backgroundColor: 'inherit', // Some CSS
      },
    },
    MuiMenu: {
      list: {
        backgroundColor: 'white',
      }
    }
  },
});

const history = createBrowserHistory();

export const items = {
  '/': {title: 'Home', element: Home},
  '/faq': {title: 'FAQ', element: Faq},
  '/delegator': {title: 'Delegator Space', element: Delegator}
}

function Main(): JSX.Element {
  return (
    <>
      <CssBaseline />
      <Router history={history}>
        <ToolbarMenu items={items} />
        <main style={{marginTop: 20}}>
          {Object.keys(items).map((key) => {
            const item = items[key];
            return <Route key={key} exact path={key} component={item.element} />;
          })}
          <Footer />
        </main>
      </Router>
    </>
  );
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Main />
  </ThemeProvider>,
  document.getElementById("root")
);