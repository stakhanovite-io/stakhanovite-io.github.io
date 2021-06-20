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
import { link } from './link';

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
    }
    // error: will use the default color
  },
  typography: {
    h1: {
      fontSize: 70,
      fontWeight: 'bold',
      lineHeight: "40px",
    },
    h2: {
      fontSize: 42,
      fontWeight: 'bold',
      lineHeight: "40px",
    },
    h3: {
      fontSize: 30,
      lineHeight: "40px",
      fontWeight: 'bold',
    },
    h4: {
      fontSize: 20,
      lineHeight: "30px",
      fontWeight: 'bold',
    },
    body1: {
      fontSize: 18,
      lineHeight: "28px",
    },
    body2: {
      fontSize: 14,
      lineHeight: "26px",
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
         body: {
           background: 'linear-gradient(0deg, rgb(22, 28, 36, 1), rgb(22, 42, 49, 1) 100%)'
           backgroundRepeat: "repeat",
           backgroundAttachment: "fixed",
        }, 
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
        backgroundColor: 'rgba(33, 43, 54, 1)',
      }
    },
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