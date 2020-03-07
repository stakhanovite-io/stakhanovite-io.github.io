import * as React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import postsmd from "../faq/**/*.md";

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      display: 'flex',
    },
    tabs: {
      overflow: 'initial',
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  }));
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }  

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

function snakeToCamel(str) {
    return str.replace(
    /([-_][a-z])/g,
    (group) => group.toUpperCase()
                    .replace('-', '')
                    .replace('_', ' '));
    }


export function Faq() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const keys = Object.keys(postsmd);
    const values = Object.values(postsmd);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return <div className={classes.root}>
              <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {keys.map((key, index) => (
            <Tab label={snakeToCamel(key)} {...a11yProps(index)} key={index} />
        ))}
      </Tabs>
      {keys.map((key, index) => (
            <TabPanel value={value} index={index} key={index}>
            <div dangerouslySetInnerHTML={{ __html: values[index] }}></div>
          </TabPanel>
        ))}
    </div>
}