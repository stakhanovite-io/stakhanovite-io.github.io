import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(_theme => ({
  containerDetails: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "80%",
  },
}));

export function Page({ children }: {children: NonNullable<React.ReactNode>}): JSX.Element {
  const classes = useStyles();
  return (
    <Container className={classes.containerDetails}>
      {children}
    </Container>
  );
}