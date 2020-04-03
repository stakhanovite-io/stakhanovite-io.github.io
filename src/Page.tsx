import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      maxWidth: "90%",
      marginTop: "80px",
      ['@media (max-width:780px)']: {
        flexDirection: 'column-reverse',
        textAlign: 'center'
      }
    },
    containerDetails: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      maxWidth: "90%",
      marginTop: "80px",
      '& h1': {
        color: 'rgba(36,54,64,1.00)',
        textTransform: "uppercase",
        fontSize: "3.5rem",
        fontWeight: 700,
        lineHeight: 1.3,
      },
      '& h3': {
        color: 'rgba(36,54,64,1.00)',
        textTransform: "uppercase",
        fontSize: "2rem",
        fontWeight: 700,
        lineHeight: 1.3,
      },
      '& *': {
        width: '100%',
      }
    },
    hero: {
      color: "rgba(36,54,64,1.00)",
      fontSize: "3.5rem",
      fontWeight: 700,
      lineHeight: 1.3,
      textTransform: "uppercase",
    },
    slogan: {
      fontWeight: 300,
      fontSize: "1.25rem",
      lineHeight: 1.6,
    },
    logo: {
        width: "100%",
        height: "auto",
        maxWidth: "50%",
    }
  }));

export function Page({title, subtitle, logo, children}) {
    const classes = useStyles();
    return (
    <div>
        <Container className={classes.container}>
            <div>
                <h1 className={classes.hero}>
                    {title}
                </h1>
                <p className={classes.slogan}>
                    {subtitle}
                </p>
            </div>
            <img alt="logo" src={logo} className={classes.logo} />
        </Container>
        <div style={{borderTop: "1px solid rgba(0, 0, 0, 0.12)", marginLeft: "auto", marginRight: "auto"}} />
        <Container className={classes.containerDetails}>
          {children}
        </Container>
    </div>);
}