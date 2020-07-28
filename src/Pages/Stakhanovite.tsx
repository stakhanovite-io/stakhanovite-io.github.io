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
            Using <Link color="secondary" href="https://daedaluswallet.io/">Daedalus</Link> OR <Link color="secondary" href="https://yoroi-wallet.com/">Yoroi</Link> wallets, join our pool on the Cardano mainnet!
            </h3>
            <h2>
            We are STKH! And we charge the minimum required fixed costs (340 ada per epoch) and a margin of <strong>1.935%</strong> only on the rewards we make!
            </h2>
        </div>
    </Page>);
}
