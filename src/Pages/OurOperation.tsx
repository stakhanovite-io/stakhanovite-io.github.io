import * as React from 'react';
import { Page } from './../Page';
import logo from '../../public/assets/Explorer.png';

export function OurOperation() {
    return (
    <Page title="Network" subtitle="A solid infrastructure" logo={logo}>
        <div>
            <h3>
            OUR NODE IS LOCATED IN FRANCE.
            </h3>
            <div>
                For our node's safety, and to ensure near-perfect uptime, we will operate behind geographically distributed relay-nodes.
                <br />
                <br />
                <strong>Our work ethics is simple: nothing should prevent the Stakhanovite Stake Pool from signing blocks on your behalf.</strong>
                <br />
                <br />
            </div>
        </div>
    </Page>);
}