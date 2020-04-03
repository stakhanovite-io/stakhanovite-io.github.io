import * as React from 'react';
import { Page } from './../Page';
import logo from '../../public/assets/why_join_us.png';

export function WhyUs() {
    return (
    <Page title="Why join us?" subtitle="A low fee community pool" logo={logo}>
        <div>
            <h3>
            FOR OUR FEES, OF COURSE!
            </h3>
            <div>
                For the duration of the incentivized testnet, The Stakhanovite Stake Pool will not charge you any fixed costs. Instead, <strong>STKH will be rewarded via a profit margin of 5%.</strong>
                <br />
                <br />
                This profit margin is calculated on the rewards you get thanks to our efforts. <strong>Doing so means that we will get paid only when you get paid!</strong>
                <br />
                <br />
                <strong>For example, if your rewards are 10 ADA at the end of an epoch, we get paid 0.5 ADA and the remaining 9.5 ADA are all yours.</strong>
                <br />
                <br />
                We are transparent. From costs to performance, you will know everything and you will always be in a position to make the best choice for you, and your ada! 
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
                The higher the pledge, the higher the rewards for all delegators in the pool! That is why, in addition of our initial pledge, <strong>all our rewards will be added to our pool's pledge.</strong>
                <br />
                <br />
                <strong>That way, we will grow together!</strong>
            </div>
        </div>
    </Page>);
}