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
                During the Shelley incentivized testnet (ITN), The Stakhanovite Stake Pool did not charge any fixed costs. Instead, <strong>STKH was rewarded via a profit margin of 5%.</strong>
                <br />
                <br />
                This profit margin is calculated on the rewards you get thanks to our efforts. <strong>Doing so means that we will get paid only when you get paid!</strong>
                <br />
                <br />
                <strong>For example, if your rewards are 10 ADA at the end of an epoch, we get paid 0.5 ADA and the remaining 9.5 ADA are all yours.</strong>
                <br />
                <br />
                <strong>We are transparent.</strong> From costs to performance, you will know everything and you will always be in a position to make the best choice for you, and your ada!
                <br />
                <br />
                <strong>We are efficient.</strong> During the ITN, the Stakhanovite Stake Pool created <strong>more than 5000 blocks and distributed above 4 millions ADA to our delegators</strong>, among the top 40 stake pools out there.
            </div>
        </div>
        <div>
            <h3>
            DO WE HAVE SKIN IN THE GAME?
            </h3>
            <div>
                Following the Ouroboros protocol, pool operators can make a pledge to their own pool. This will signal to all potential delegators that the owners and operators have indeed skin in the game. 
                <br />
                <br />
                That is why, in addition of our initial pledge, <strong>a good fraction of our rewards will be added to our pool's pledge.</strong>
                <br />
                <br />
                <strong>That way, we will grow together!</strong>
            </div>
        </div>
    </Page>);
}
