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
    <Page title="STAKHANOVITE STAKE POOLS" subtitle="A Cardano stake pool. For the community - By the community" logo={logo}>
        <div>
            <h1>
            WE ARE STKH - Minimum fixed cost and 1.9% margin fee.
            </h1>
            <h2>
            Names:
            Stakhanovite #1 & Stakhanovite #2
            </h2>
            <h2>
            Tickers: STKH1 & STKH2
            </h2>
            <div>
                <h2 style={{display: "inline"}}>STKH1: <a href="https://pooltool.io/pool/b62ecc8ce7e46c4443b63b91fffaeb19f869d191a7d2381087aaa768/blocks">b62ecc8ce7e46c4443b63b91fffaeb19f869d191a7d2381087aaa768</a></h2>
                <IconButton
                    style={{width: "45px"}}
                    color="inherit"
                    title="Copy pool address"
                    onClick={() => clipboard.copy('b62ecc8ce7e46c4443b63b91fffaeb19f869d191a7d2381087aaa768')}
                >
                    <FileCopyIcon />
                </IconButton>
            </div>
            <div>
                <h2 style={{display: "inline"}}>STKH2: <a href="https://pooltool.io/pool/8797eda7072c08e2c6eff77bbdf7189f3bad127a6d7efd817e103831/blocks">8797eda7072c08e2c6eff77bbdf7189f3bad127a6d7efd817e103831</a></h2>
                <IconButton
                    style={{width: "45px"}}
                    color="inherit"
                    title="Copy pool ID"
                    onClick={() => clipboard.copy('8797eda7072c08e2c6eff77bbdf7189f3bad127a6d7efd817e103831')}
                >
                    <FileCopyIcon />
                </IconButton>
            </div>
            <h3>
            Join our pool on the Cardano Mainnet using <Link color="secondary" href="https://daedaluswallet.io/">DAEDALUS</Link> or <Link color="secondary" href="https://yoroi-wallet.com/">YOROI</Link> wallets.
            </h3>
        </div>
    </Page>);
}
