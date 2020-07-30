import * as React from 'react';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { useClipboard } from 'use-clipboard-copy';
import { Page } from './../Page';
import logo from '../../public/assets/to_moon.png';

export function Stakhanovite() {
    const clipboard = useClipboard();
    return (
    <Page title="STAKHANOVITE STAKE POOL" subtitle="A Cardano stake pool. For the community - By the community" logo={logo}>
        <div>
            <h3>
            USING <Link color="secondary" href="https://daedaluswallet.io/">DAEDALUS</Link> OR <Link color="secondary" href="https://yoroi-wallet.com/">YOROI</Link> WALLETS, JOIN OUR POOL ON THE CARDANO MAINNET FOR A FEE OF ONLY 1.935%.
            </h3>
            <h1>
            WE ARE STKH!  
            </h1>
            <h2>
            POOL NAME: Stakhanovite #1    
            TICKER: STKH1
            POOL ID: b62ecc8ce7e46c4443b63b91fffaeb19f869d191a7d2381087aaa768      
            </h2>
        </div>
    </Page>);
}
