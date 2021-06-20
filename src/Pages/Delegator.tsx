import * as React from 'react';
import marked from 'marked';
import { Line } from '@nivo/line'
import { render } from 'react-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import { Saturation } from '../Components';
import { Page } from '../Page';
import notDelegator from '../../assets/not_delegator.png';
import { Gradient } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  selector: {
    width: '70%',
    paddingTop: 20,
    paddingBottom: 300,
  },
  input: {
    display: 'block',
    width: '100%',
  },
  button: {
    width: '100%',
    padding: 0,
    marginTop: 20,
    marginBottom: 20,
  },
}));

const plotTheme = {
    "textColor": '#919EAB',
    "fontSize": 13,
    "axis": {
        "domain": {
            "line": {
                "stroke": '#919EAB',
                "strokeWidth": 2
            }
        },
        "ticks": {
            "line": {
                "stroke": '#919EAB',
                "strokeWidth": 2
            }
        }
    }
}

const commonProperties = {
  width: 800,
  height: 300,
  margin: { top: 20, right: 20, bottom: 60, left: 80 },
  animate: true,
  pointColor: '#919EAB',
  pointSize: 8,
  pointBorderWidth: 1.5, 
  pointBorderColor: '#2C7568',
  enablePointLabel: false,
  enableGridX: false,
  enableGridY: false,
  tickPadding: 4,
  colors: '#2C7568'
  lineWidth: 2.5,
}

function MyResponsiveLine ({ data }): JSX.Element {
  return (
      <Line
      {...commonProperties}
      theme= {plotTheme}
      curve="linear"
      enableArea={true}
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
          legend: 'Rewards (ADA)',
          legendOffset: -60,
          legendPosition: 'middle',
          legendSize: 8,
      }}
      axisBottom={{
          legend: 'Epochs',
          legendOffset: 45,
          legendPosition: 'middle'
          tickRotation: -75
      }}
   />
  ); 
}

function Cartouche({ children }: { children: NonNullable<React.ReactNode> }): JSX.Element {
  return (
    <div style={{backgroundColor: '#212B36', borderRadius: 5, padding: 20, height: 100}}>
      {children}
    </div>
  );
}

function Bubble({ title, children }: { title: string, children: NonNullable<React.ReactNode> }): JSX.Element {
  return (
    <>
      <Cartouche>
        <Typography>{title}</Typography>
        {children}
      </Cartouche>
    </>
  );
}

function DelegatorRewards({ address, rewards }): JSX.Element {
  const classes = useStyles();
  const { t } = useTranslation();
  const [latestEpoch, setLatestEpoch] = React.useState({});
  const [poolDetails, setPoolDetails] = React.useState();

  React.useEffect(() => {
    async function fetchLatestEpoch(): Promise<void> {
      try {
        setLatestEpoch(await (await fetch(`cardano/data/epochs/latest.json`)).json());
        setPoolDetails(await (await fetch(`cardano/data/pools/STKH1.json`)).json());
      } catch {
        setLatestEpoch({});
      }
    }

    fetchLatestEpoch();
  }, []);

  return (
    <>
      <Typography component="span" align="left" variant="h3">
        <span dangerouslySetInnerHTML={{__html:marked(t(`delegator:welcome`))}}></span>
      </Typography>
      <Typography component="span">
        <span dangerouslySetInnerHTML={{__html:marked(t(`delegator:address`))}}></span>
        {address}
      </Typography>
      <div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridAutoRows: 100}}>
          <Bubble title="Current epoch">
            <Typography>
            {latestEpoch.epoch}
            </Typography>
          </Bubble>
          <Bubble title="Saturation of my pool">
           {poolDetails &&
           <Saturation liveSaturation={poolDetails['live_saturation']} />}
          </Bubble>
          <Bubble title="Number of epoch delegated">
          </Bubble>
          <Bubble title="My total stake">
          </Bubble>
          <div style={{gridColumnStart: 1,
  gridColumnEnd: 4,
  gridRowStart: 2,
  gridRowEnd: 5}}>
<MyResponsiveLine data={rewards} />
          </div>
          <Bubble title="My total rewards">
          </Bubble>
          <Bubble title="My last epoch rewards">
          </Bubble>
          <Bubble title="My rewards history">
            <Button className={classes.button} variant="contained" color="secondary" onClick={() => onEnter(address)} disabled={!address}>
              Icon
            </Button>
          </Bubble>
        </div>
      </div>
      <Typography variant="body2">
        <span dangerouslySetInnerHTML={{__html:marked(t(`delegator:update`))}}></span>
      </Typography>
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
        size="normal"
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
    <div className={classes.selector} align="center">
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
  const [address, setAddress] = React.useState<undefined | string>('stake1u8ackrpx3kcnu8kua5s9s9sq902zsf629vmmseq33rqdfhcrcyekg');
  const [rewards, setRewards] = React.useState<undefined | []>(undefined);

  React.useEffect(() => {
    async function fetchRewards(): Promise<void> {
      try {
        setRewards(await (await fetch(`cardano/data/accounts/${address}/rewards.json`)).json());
      } catch {
        setRewards([]);
      }
    }

    fetchRewards();
  }, [address]);

  return (
    <Page>
      {address
        ? rewards
          ? rewards?.length > 0
           ? <DelegatorRewards address={address} rewards={rewards.map(o => {return {x: o.epoch, y: (o.amount)/1000000}})} />
           : <UnknownDelegator onEnter={() => setAddress(null)} />
          : <>LOADING</>
        : <AddressSelector onEnter={ (address) => setAddress(address) } />}
    </Page>
  );
}
