import * as React from 'react';
import { MyResponsiveBar } from '../Components';
import { Container } from '@material-ui/core';

const data = [
    {
      "epoch": "210",
      "amount": 123,
    },
    {
        "epoch": "211",
        "amount": 132,
      },
      {
          "epoch": "212",
          "amount": 100,
        },
  ];

export function Stats() {
    return (
        <Container>
        <h3>
        STATS
        </h3>
        <div style={{width: 800, height: 300}}>
            <MyResponsiveBar data={data} />
        </div>
    </Container>);
}
