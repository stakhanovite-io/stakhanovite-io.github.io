import * as React from 'react';
import { marked } from 'marked';
import { Line } from '@nivo/line';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import GetAppIcon from '@material-ui/icons/GetApp';
import { useTranslation } from 'react-i18next';
import { Saturation } from '../Components';
import { Page } from '../Page';
import notDelegator from 'url:../../assets/not_delegator.png';
import blockfrost2 from 'url:../../assets/blockfrost2.png';

const useStyles = makeStyles(theme => ({
  selector: {
    width: '80%',
    paddingTop: 20,
    paddingBottom: 300,
  },
  image: {
    paddingTop: 0,
    paddingBottom: 100,
  },
  delegator: {
    display: 'block',
    width: '80%',
    paddingTop: 0,
    paddingBottom: 10,
  },
  input: {
    display: 'inline flex',
    width: '100%',
  },
  button: {
    width: '100%',
    padding: 0,
    marginTop: 20,
    marginBottom: 20,
  },
  rewards: {
    [theme.breakpoints.down("sm")]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    [theme.breakpoints.up("sm")]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridAutoRows: 110
    },
    '& > div' : {
      marginTop: 10,
      marginBottom: 10,
    }
  },
}));

const plotTheme = {
    "textColor": '#919EAB',
    "fontSize": 14,
    "axis": {
        "domain": {
            "line": {
                "stroke": '#919EAB',
                "strokeWidth": 2.5
            }
        },
        "ticks": {
            "line": {
                "stroke": '#919EAB',
                "strokeWidth": 1
            }
        }
    }
}

const commonProperties = {
  width: 600,
  height: 350,
  margin: { top: 20, right: 30, bottom: 30, left: 50 },
  animate: true,
  enableSlices: 'x',
  pointColor: '#919EAB',
  pointSize: 6,
  pointBorderWidth: 1, 
  pointBorderColor: '#2C7568',
  enablePointLabel: false,
  enableGridX: false,
  enableGridY: false,
  tickPadding: 4,
  colors: '#2C7568',
  lineWidth: 2.5,
}

function MyResponsiveLine ({ data }): JSX.Element {
  return (
      <Line
      {...commonProperties}
      theme={plotTheme}
      curve="monotoneX"
      enableArea={true}
      areaOpacity={0.15}
      isInteractive={true}
      data={[
          {
              id: 'rewards',
              data: data
          },
      ]}
      yScale={{
          type: 'linear',
          min: '0',
          max: 'auto',
      }}
      xScale={{
        type: 'point',
        min: 'auto',
        max: 'auto',
      }}
      axisLeft={{
          legendPosition: 'middle',
      }}
      axisBottom={null}
   />
  ); 
}

function Cartouche({ children }: { children: NonNullable<React.ReactNode> }): JSX.Element {
  return (
    <div style={{backgroundColor: '#212B36', boxShadow: "4px 4px 8px #141a20", borderRadius: 10, padding: 15, width: 190, height: 100}}>
      {children}
    </div>
  );
}

function totalRewards(rewards): number {
  return rewards.filter(o => o["pool_id"] == "pool1kchver88u3kygsak8wgll7htr8uxn5v35lfrsyy842nkscrzyvj").reduce((acc, o) => acc + o.amount, 0);
}

function totalStake(stakes, address): number {
  const stake = stakes.find(o => o['stake_address'] == address)?.amount;
  if (stake) {
    return stake / 1000000
  }
  return 0;
}

function formatAmount(amount: number): string {
  return new Intl.NumberFormat('en-EN', { style: 'decimal' }).format(amount);
}

function Bubble({ title, children }: { title: string, children: NonNullable<React.ReactNode> }): JSX.Element {
  return (
    <>
      <Cartouche>
        <Typography gutterBottom={false} align="center" variant="body2">{title}</Typography>
        {children}
      </Cartouche>
    </>
  );
}

function DelegatorGrid({ address, rewards, poolDetails, latestEpoch, stakes }): JSX.Element {
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <div className={classes.rewards}>
      <Bubble title={t('delegator:current')}>
        <Typography variant="h4" align="center">
        {latestEpoch.epoch}
        </Typography>
      </Bubble>
      <Bubble title={t('delegator:saturation')}>
        {poolDetails &&
        <Saturation liveSaturation={poolDetails['live_saturation']} />}
      </Bubble>
      <Bubble title={t('delegator:number')}>
        <Typography variant="h4" align="center">
        {poolDetails &&
        formatAmount(poolDetails['live_delegators'])}
        </Typography>
      </Bubble>
      <Bubble title={t('delegator:stake')}>
        <Typography variant="h4" align="center">
        {stakes && formatAmount(totalStake(stakes, address))}
        </Typography>
      </Bubble>
      {matches &&
        <div style={{gridColumnStart: 1, gridColumnEnd: 4, gridRowStart: 2, gridRowEnd: 5}}>
          <MyResponsiveLine data={rewards.map(o => {return {x: o.epoch, y: o.amount}})} />
        </div>}
      <Bubble title={t('delegator:rewards')}>
        <Typography variant="h4" align="center">
        {formatAmount(totalRewards(rewards))}
        </Typography>
      </Bubble>
      <Bubble title={t('delegator:last')}>
        <Typography variant="h4" align="center">
        {formatAmount(rewards.find(o => {if (o.epoch == latestEpoch.epoch - 2) return o;})?.amount)}
        </Typography>
      </Bubble>
      <Bubble title={t('delegator:history')}>
        <Button style={{margin: 0, padding: 8}} className={classes.button} variant="outlined" disabled={!address} href={`cardano/data/accounts/${address}/rewards.csv`}>
          <GetAppIcon />
        </Button>
      </Bubble>
    </div>
  );
}

const pool = "STKH1";

function DelegatorRewards({ address, rewards }): JSX.Element {
  const classes = useStyles();
  const { t } = useTranslation();
  const [latestEpoch, setLatestEpoch] = React.useState({});
  const [poolDetails, setPoolDetails] = React.useState();
  const [stakes, setStakes] = React.useState();

  React.useEffect(() => {
    async function fetchLatestEpoch(): Promise<void> {
      try {
        const latest = await (await fetch(`cardano/data/epochs/latest.json`)).json();
        setLatestEpoch(latest);
        setPoolDetails(await (await fetch(`cardano/data/pools/${pool}.json`)).json());
        setStakes(await (await fetch(`cardano/data/epochs/${latest.epoch}/stakes/${pool}.json`)).json());
      } catch {
        setLatestEpoch({});
      }
    }

    fetchLatestEpoch();
  }, []);

  return (
    <>
      <div>
        <div className={classes.delegator}>
          <Typography component="span" variant="h3">
            <span dangerouslySetInnerHTML={{__html:marked(t(`delegator:welcome`))}}></span>
          </Typography>
        </div>
        <DelegatorGrid address={address} rewards={rewards} poolDetails={poolDetails} latestEpoch={latestEpoch} stakes={stakes} />
        <div className={classes.image}>
          <Typography variant="body2">
            <span dangerouslySetInnerHTML={{__html:marked(t(`delegator:update`))}}></span>
          </Typography>
          <div>
            <img alt="blockFrostLogo" src={blockfrost2} width={250} height="auto"/>
          </div>
        </div>
      </div>
    </>
  );
}

function AddressSelector({ onEnter }): JSX.Element {
  const { t } = useTranslation();
  const classes = useStyles();
  const [address, setAddress] = React.useState('');
  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => setAddress(event.target.value);
  return (
    <div className={classes.selector} >
      <Typography variant="h4">
        <span dangerouslySetInnerHTML={{__html:marked(t(`delegator:please`))}}></span>
      </Typography>
      <Typography variant="body1">
        <span dangerouslySetInnerHTML={{__html:marked(t(`delegator:store`))}}></span>
      </Typography>
      <TextField
        className={classes.input}
        fullWidth
        label={t('delegator:input')}
        variant="outlined"
        size="medium"
        color="secondary"
        value={address}
        onChange={handleAddressChange}
        />
      <Button className={classes.button} variant="contained" color="secondary" onClick={() => onEnter(address)} disabled={!address}>
        <span dangerouslySetInnerHTML={{__html:marked(t(`delegator:enter`))}}></span>
      </Button>
      <Typography variant="body2" align="left">
        <span dangerouslySetInnerHTML={{__html:marked(t(`delegator:disclaimer`))}}></span>
      </Typography>
    </div>
  );
}

function UnknownDelegator({ onEnter }): JSX.Element {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <div className={classes.selector}>
      <Typography variant="h4">
        <span dangerouslySetInnerHTML={{__html:marked(t(`delegator:sorry`))}}></span>
      </Typography>
      <img  alt="not a delegator" src={notDelegator} width="auto" height={300} />
      <Typography variant="body2" align="left">
        <span dangerouslySetInnerHTML={{__html:marked(t(`delegator:check`))}}></span>
      </Typography>
      <Button className={classes.button} variant="contained" color="secondary" onClick={() => onEnter(null)}>
        <span dangerouslySetInnerHTML={{__html:marked(t(`delegator:retry`))}}></span>
      </Button>
    </div>
  );
}

export function Delegator() {
  const [address, setAddress] = React.useState<undefined | string>();
  const [rewards, setRewards] = React.useState<undefined | []>();

  React.useEffect(() => {
    async function fetchRewards(): Promise<void> {
      try {
        setRewards(await (await fetch(`cardano/data/accounts/${address}/rewards.json`)).json());
      } catch {
        setRewards([]);
      }
    }

    if (address) {
      fetchRewards();
    }
  }, [address]);

  return (
    <Page>
      {address
        ? rewards
          ? rewards?.length > 0
           ? <DelegatorRewards address={address} rewards={rewards.map(o => {return {pool_id: o['pool_id'], epoch: o.epoch, amount: (o.amount)/1000000}})} />
           : <UnknownDelegator onEnter={() => setAddress(null)} />
          : <>LOADING</>
        : <AddressSelector onEnter={ (address) => setAddress(address) } />}
    </Page>
  );
}
