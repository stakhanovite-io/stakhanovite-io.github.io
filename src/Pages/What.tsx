import * as React from 'react';
import { Page } from './../Page';
import logo from '../../public/assets/what_we_do.png';

export function What() {
    return (
    <Page title="What do we offer?" subtitle="A Cardano staking service" logo={logo}>
        <div>
            <h3>
            We sign blocks for you!
            </h3>
            <div>
                Cardano, the blockchain supporting the ada cryptocurrency (ADA), runs in a <strong>proof-of-stake (PoS)</strong> setting. Anyone who owns ada can participate in its functioning. For that however, you must be online at all times…
                <br />
                <br />
                Because this last requirement is very demanding and not practical for everyday users, you can delegate your ada (or stake) to a stake pool. 
                <br />
                <br />
                The stake pool <strong>will be online for you</strong> and perform blocks validation on your behalf.
                <br />
                <br />
                <strong>That is exactly what the Stakhanovite Stake Pool does for you: sign blocks 24/7/365.</strong>
            </div>
        </div>
    </Page>);
}
