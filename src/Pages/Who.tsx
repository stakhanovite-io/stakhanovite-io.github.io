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
                We're two engaged blockchain fans and we continuously explore where and how this technology could bring some fresh air in many parts of our societies. We have a sweet spot for democracy and decentralized decision making. 
                <br />
                <br />
                <em>"French translator of various Cardano content such as 'Why Cardano?', I.O.H.K. Blog posts, the bi-monthly Cardano Foundation newsletter or the light wallet <Link color="secondary" href="https://yoroi-wallet.com/">Yoroi</Link>, I have been a <Link color="secondary" href="https://www.cardano.org/ambassadors/">Cardano Ambassador</Link> since day one. Setting up a stake pool was a natural thing to do in order to further support the Cardano Community. I have been very lucky (or persuasive enough!) to onboard more people into this adventure. I look forward to see STKH flourish!"</em> - <strong>@psychomb</strong>
                <br />
                <br />
                <em>"I am a blockchain dev. Enough said already"</em> - <strong>@Aleksei</strong>
            </div>
        </div>
    </Page>);
}
