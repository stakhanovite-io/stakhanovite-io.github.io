import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { useClipboard } from 'use-clipboard-copy';
import { Page } from './../Page';
import logo from '../../public/assets/to_moon.png';

export function Stakhanovite() {
    const clipboard = useClipboard();

    return (
    <Page title="STAKHANOVITE STAKE POOL" subtitle="A Cardano stake pool. For the community - By the community" logo={logo}>
        <div>
            <h1>
            WE ARE STKH, a minimum fixed cost and 1.9% margin fee Staking Pool.
            </h1>
            <h2>
            NAME:
            Stakhanovite #1
            </h2>
            <h2>
            TICKER:
            STKH1
            </h2>
            <div>
                <h2 style={{display: "inline"}}>Pool ID: <a href="https://pooltool.io/pool/b62ecc8ce7e46c4443b63b91fffaeb19f869d191a7d2381087aaa768/blocks">b62ecc8ce7e46c4443b63b91fffaeb19f869d191a7d2381087aaa768</a></h2>
                <IconButton
                    style={{width: "80px"}}
                    color="inherit"
                    title="Copy pool address"
                    onClick={() => clipboard.copy('b62ecc8ce7e46c4443b63b91fffaeb19f869d191a7d2381087aaa768')}
                >
                    <FileCopyIcon />
                </IconButton>
            </div>
            <h3>
            JOIN OUR POOL ON THE CARDANO MAINNET USING <Link color="secondary" href="https://daedaluswallet.io/">DAEDALUS</Link> OR <Link color="secondary" href="https://yoroi-wallet.com/">YOROI</Link> WALLETS.
            </h3>
        </div>
    </Page>);
}
