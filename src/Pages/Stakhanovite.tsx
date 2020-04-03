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
            USING <Link color="secondary" href="https://staking.cardano.org/en/delegation/">DAEDALUS</Link> OR <Link color="secondary" href="https://yoroi-wallet.com/">YOROI</Link> WALLETS, JOIN OUR POOL ON THE CARDANO INCENTIVIZED TESTNET.
            </h3>
            <h1>
            WE ARE STKH!
            </h1>
            <div>
                <span style={{color: "#e83e8c"}}>Pool ID: <a href="https://shelleyexplorer.cardano.org/en/stake-pool/3a6c4c5af3454634a5de5899554d219878efd609c73b5443b2f5b1a677f9a2a9/">3a6c4c5af3454634a5de5899554d219878efd609c73b5443b2f5b1a677f9a2a9</a></span>
                <IconButton
                    style={{width: "80px"}}
                    color="inherit"
                    title="Copy pool address"
                    onClick={() => clipboard.copy('3a6c4c5af3454634a5de5899554d219878efd609c73b5443b2f5b1a677f9a2a9')}
                >
                    <FileCopyIcon />
                </IconButton>
            </div>
        </div>
    </Page>);
}