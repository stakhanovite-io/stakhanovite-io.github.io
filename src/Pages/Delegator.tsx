import * as React from 'react';
import marked from 'marked';
import { Line } from '@nivo/line'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import { Page } from '../Page';
import notDelegator from '../../assets/not_delegator.png';

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

const commonProperties = {
  width: 900,
  height: 400,
  margin: { top: 20, right: 20, bottom: 60, left: 80 },
  animate: true,
}

function MyResponsiveLine ({ data }): JSX.Element {
  return (
  <Line
  {...commonProperties}
  curve="monotoneX"
  data={[
      {
          id: 'rewards',
          data: data
      },
  ]}
  xScale={{
      type: 'linear',
      min: 'auto',
      max: 'auto',
  }}
  axisLeft={{
      legend: 'linear scale',
      legendOffset: 12,
  }}
  axisBottom={{
      legend: 'linear scale',
      legendOffset: -12,
  }}
  />
)
}

function DelegatorRewards({ address, rewards }): JSX.Element {
  const { t } = useTranslation();
  return (
    <>
      <Typography component="span" align="left" variant="h2">
        <span dangerouslySetInnerHTML={{__html:marked(t(`delegator:welcome`))}}></span>
      </Typography>
      <Typography component="span">
        <span dangerouslySetInnerHTML={{__html:marked(t(`delegator:address`))}}></span>
        {address}
      </Typography>
      <MyResponsiveLine data={rewards} />
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
      <Typography variant="body2" align="Left">
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
      <Typography variant="body2" align="Left">
        <span dangerouslySetInnerHTML={{__html:marked(t(`delegator:check`))}}></span>
      </Typography>
      <Button className={classes.button} variant="contained" color="secondary" onClick={() => onEnter(null)}>
        <span dangerouslySetInnerHTML={{__html:marked(t(`delegator:retry`))}}></span>
      </Button>
    </div>
  );
}

export function Delegator() {
  const [address, setAddress] = React.useState<undefined | string>(
    undefined
    );
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
