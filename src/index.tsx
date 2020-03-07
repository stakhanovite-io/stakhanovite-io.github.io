import * as React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Faq } from './Faq';
import { Stakhanovite } from './Pages/Stakhanovite';
import Layout from './Layout';
import "./i18n.js"

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

function Main() {
  const [content, setContent] = React.useState(<Stakhanovite />);
  return (
    <Layout setContent={setContent}>
      {content}
    </Layout>
  );
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Main />
  </ThemeProvider>,
  document.getElementById("root")
);