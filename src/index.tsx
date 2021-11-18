import * as React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, ToolbarMenu } from './Components';
import "./i18n";
import { Delegator } from './Pages/Delegator';
import { Faq } from './Pages/Faq';
import { Home } from './Pages/Home';


const breakpoints = createBreakpoints({});

const theme = createTheme({
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
      fontSize: "5rem",
      fontWeight: 'bold',
      lineHeight: "70px",
      [breakpoints.down("sm")]: {
        fontSize: "3rem"
      }
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
           background: 'linear-gradient(0deg, rgb(22, 28, 36, 1), rgb(22, 42, 49, 1) 100%)',
           backgroundRepeat: "no-repeat",
           backgroundAttachment: "fixed",
        }, 
       },      
      },
    MuiPaper: { // Name of the component ⚛️/ style sheet
      root: { // Name of the rule
        backgroundColor: 'inherit', // Some CSS
      },
    },
    MuiMenu: {
      list: {
        backgroundColor: 'rgb(35, 43, 53, 1)',
      }
    }
  },
});

export const items = {
  '/': {title: 'Home', element: Home},
  '/faq': {title: 'FAQ', element: Faq},
  '/delegator': {title: 'Delegator Space', element: Delegator}
}

function Main(): JSX.Element {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <ToolbarMenu items={items} />
        <main style={{marginTop: 20}}>
          <Routes>
          {Object.keys(items).map((key) => {
            const item = items[key];
            return <Route key={key} path={key} element={item.element()} />;
          })}
          </Routes>
          <Footer />
        </main>
      </BrowserRouter>
    </>
  );
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Main />
  </ThemeProvider>,
  document.getElementById("root")
);