import * as React from 'react';
import { MyResponsiveBar, MyResponsiveTreeMap } from '../Components';
import { Container } from '@material-ui/core';
import { ThemeProvider } from '@nivo/core'

const theme = {
  tooltip: {
    tableCell: {
      background: 'red',
    }
  }
}

export function Stats() {
    return (
        <Container>
        <h3>
        STATS
        </h3>
        <div style={{width: 800, height: 300}}>
                <MyResponsiveBar />
        </div>
        <div style={{width: 800, height: 300}}>
                <MyResponsiveTreeMap  />
        </div>
    </Container>);
}
