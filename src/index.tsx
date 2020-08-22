import * as React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Footer, ToolbarMenu } from './Components';
import { items } from './Navigation';
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import i18n from  "./i18n.js"

const theme = createMuiTheme({
  palette: {
    background: {
      default: "rgba(241,244,244,1.00);"
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      main: 'rgba(217, 222, 223, 1.00)',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: 'rgba(228,164,7,1.00)',
    },
    text: {
      primary: 'rgba(36, 54, 64, 1.00)',
      secondary: 'rgba(194, 194, 194, 1.00)',
    },
    // error: will use the default color
  },
  overrides: {
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

function Main() {
  return (
    <div className="Layout" >
      <CssBaseline />
      <Router history={history}>
        <header className="Layout-header">
          <ToolbarMenu />
        </header>
        <main>
          {Object.keys(items).map((key) => {
            const item = items[key];
            return <Route key={key} exact path={key} component={item.element} />;
          })}
          <Footer />
        </main>
      </Router>
    </div>
  );
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Main />
  </ThemeProvider>,
  document.getElementById("root")
);