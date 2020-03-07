import * as React from 'react';
import { Page } from './../Page';
import Link from '@material-ui/core/Link';
import logo from '../../public/assets/who_we_are.png';

export function Who() {
    return (
    <Page title="Who we are?" subtitle="Cardano supporters!!" logo={logo}>
        <div>
            <h3>
            WE ARE INDEPENDENT COMMUNITY MEMBERS
            </h3>
            <div>
                <strong>Our operation is run for the community, by the community.</strong> 
                <br />
                <br />
                <strong>Hear it one of our team member:</strong>
                <br />
                <br />
                <em>"French translator of various Cardano-related content such as 'Why Cardano?', the bi-monthly Cardano Foundation newsletter or the <Link color="secondary" href="https://yoroi-wallet.com/">Yoroi Wallet</Link>, I have been a <Link color="secondary" href="https://www.cardano.org/ambassadors/">Cardano Ambassador</Link> since day one. Setting up a stake pool was a natural thing to do in order to further support the Cardano Community. I have been very lucky, or persuasive enough, to manage on-boarding more people into this adventure. I look forward to see STKH flourish!"</em> - <strong>@psychomb</strong>
            </div>
        </div>
    </Page>);
}