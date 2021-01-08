import * as React from 'react';
import { Page } from './../Page';
import logo from '../../public/assets/why_join_us.png';

export function WhyUs() {
    return (
    <Page title="Why join us?" subtitle="A low fee community pool" logo={logo}>
        <div>
            <h3>
            FOR OUR FEES AND RELIABILITY OF COURSE!
            </h3>
            <div>
                The Stakhanovite Stake Pool charges the <strong>minimum authorized fixed costs of 340 ADA per epoch and 1.9% margin fees</strong>
                <br />
                <br />
                The profit margin is calculated on the rewards you get thanks to our efforts.
                <br />
                <br />
                For example, if your rewards are 10 ADA at the end of an epoch (after fixed costs), we get paid 0.19 ADA and the remaining 9.81 ADA are all yours.
                <br />
                <br />
                <strong>We are transparent.</strong> From costs to performance reports, you will know everything thanks to our newsletter and Telegran channel. We will always make sure that you are in the best position to make the right choice for you, and your ada!
                <br />
                <br />
                <strong>We are efficient.</strong> During the Incentivized Testnet (Shelley ITN), the Stakhanovite Stake Pool created <strong>almost 5000 blocks and distributed more than 4 millions ADA rewards to our delegators</strong>. That places us among the top 40 stake pools of the Shelley ITN!
            </div>
        </div>
        <div>
            <h3>
            DO WE HAVE SKIN IN THE GAME?
            </h3>
            <div>
                Following the Ouroboros protocol, pool operators can make a pledge to their own pool. This signals to all potential delegators that the owners and operators have indeed skin in the game. 
                <br />
                <br />
                We pledge 300 000 ada to our pool ! In that respect, we are all-in !
                <br />
                <br />
            </div>
        </div>
    </Page>);
}
