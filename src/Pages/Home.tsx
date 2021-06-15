import * as React from 'react';
import marked from 'marked';
import { useTranslation } from 'react-i18next';
import { useClipboard } from 'use-clipboard-copy';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import SettingsIcon from '@material-ui/icons/Settings';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { Page } from '../Page';
import home from '../../assets/home.png';
import team from '../../assets/team.png';
import stkh1 from '../../assets/stkh1.png';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    marginTop: 20
  },
  sectionContent: {
    marginTop: 20,
  },
  sectionTeam: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTeamLogo: {
    margin: 20,
  },
  subSection: {
    marginTop: 20,
  },
  subSectionContent: {
  },
  offers: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
    marginTop: 40
  },
  offer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: 180,
    background: '#BDBDBD',
    borderRadius: '20px',
    paddingBottom: 30,
  },
  offerLogo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 16,
    width: 64,
    height: 64,
    background: 'linear-gradient(0.4turn, rgba(189, 189, 189, 0.1), rgba(79, 79, 79, 1))',
    color: 'rgba(79, 79, 79, 1)',
    borderRadius: '50px',
  },
  offerText: {
    color: '#333333',
    '& p' : {
      margin: 5,
    }
  },
  pools: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pool: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'rgba(33, 43, 54, 1)',
    borderRadius: '10px',
    padding: 40,
  },
  poolLogo: {
    width: '150px'
  },
  poolCopy: {
    display: 'fixed'
  }
}));

function Text({ id, raw = false }: { id: string, raw?: boolean }): JSX.Element {
  const { t } = useTranslation();
  const text = raw ? t(id) : marked(t(id));
  return <span dangerouslySetInnerHTML={{__html:text}}></span>;
}

function Offer({ title, details, children }: { title: string, details: string, children: NonNullable<React.ReactNode> }): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.offer}>
      <div className={classes.offerLogo}>
        {children}
      </div>
      <Typography className={classes.offerText} component="span">
        <Box fontWeight="fontWeightBold">
          <Text id={title} />
        </Box>
      </Typography>
      <Typography className={classes.offerText} variant="body2" component="span">
        <Text id={details} />
      </Typography>
    </div>
  );
}

function Pool({ title, name, logo, poolID }: { title: string, name: string, logo: string, poolID: string }): JSX.Element {
  const { t } = useTranslation();
  const classes = useStyles();
  const clipboard = useClipboard();
  const [poolDetails, setPoolDetails] = React.useState();

  React.useEffect(() => {
    async function fetchDetails() {
      setPoolDetails(await (await fetch(`cardano/data/pools/${name}.json`)).json());
    }

    fetchDetails();
  }, []);

  return (
    <div className={classes.pool}>
      <Typography variant="h3">{title}</Typography>
      <Typography variant="h4">{name}</Typography>
      <Typography component="span" variant="h4" color="textSecondary"><Text id="pool.margin" /></Typography>
      <Typography component="span" variant="body2"><Text id="pool.fixed" /></Typography>
      <img className={classes.poolLogo} alt="pool logo" src={logo} />
      {poolDetails != undefined &&
      <>
        <Typography component="span" variant="h4"><Text id="pool.saturation" /></Typography>
        <div style={{width: '100%', height: 16, border: '2px solid #2C7568', borderRadius: 10}}>
          <div style={{background: '#2C7568', height: '100%', width: `${poolDetails['live_saturation']*100}%`, borderTopLeftRadius: 10, borderBottomLeftRadius: 10}}></div>
        </div>
      </>}
      <div className={classes.poolCopy}>
        <IconButton
          color="inherit"
          title={t('pool.copyAddress')}
          onClick={() => clipboard.copy({poolID})}
        >
          <FileCopyIcon />
        </IconButton>
        <Typography component="span" variant="body1"><Text id="pool.copyId" raw={true} /></Typography>
      </div>
    </div>
  );
}

export function Home(): JSX.Element {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Page>
      <Container disableGutters="true" className={classes.root}>
        <Container>
          <Typography variant="h1" color="textSecondary" component="span">
            <Text id="stakhanovite" />
          </Typography>
          <Typography variant="h1" component="span">
            <Text id="stakePools" />
          </Typography>
          <Typography variant="h3" component="span">
            <Text id="reliable" />
          </Typography>
        </Container>
        <img alt="logo" src={home} width="auto" height={250} />
      </Container>

      <Container className={classes.section}>
        <Typography variant="h2" align="right" component="span">
          <Text id="who" />
        </Typography>
        <Typography className={classes.sectionContent} component="span">
          <Text id="first" />
        </Typography>
        <Typography className={classes.sectionContent} component="span">
          <Text id="together" />
        </Typography>
      </Container>

      <Container className={classes.section}>
        <div className={classes.sectionTeam}>
          <img className={classes.sectionTeamLogo} alt="team" src={team} width="auto" height={250} />
          <div>
            <Typography variant="body1" component="span">
              <Text id="psychomb" />
            </Typography>
            <Typography variant="body1" align="right" color="textSecondary" component="span">
              <Text id="psychomb_sig" />
            </Typography>
            <Typography variant="body1" component="span">
              <Text id="alexey" />
            </Typography>
            <Typography variant="body1" align="right" color="textSecondary" component="span">
              <Text id="alexey_sig" />
            </Typography>
          </div>
        </div>
      </Container>

      <Container className={classes.section}>
        <Typography variant="h2" component="span">
          <Text id="experienceTitle" />
        </Typography>
        <Typography className={classes.sectionContent} component="span">
          <Text id="experience" />
        </Typography>
        <Container className={classes.offers}>
          <Offer title="offer.secureTitle" details="offer.secure">
           <VpnKeyIcon />
          </Offer>
          <Offer title="offer.robustTitle" details="offer.robust">
           <SettingsIcon />
          </Offer>
          <Offer title="offer.fairTitle" details="offer.fair">
           <ThumbUpIcon />
          </Offer>
        </Container>
        <Container disableGutters="true" className={classes.subSection}>
          <Typography variant="h3" color="textSecondary" component="span">
            <Text id="transparentTitle" />
          </Typography>
          <Typography className={classes.subSectionContent} component="span">
            <Text id="transparent" />
          </Typography>
        </Container>

        <Container disableGutters="true" className={classes.subSection}>
          <Typography variant="h3" color="textSecondary" component="span">
            <Text id="efficientTitle" />
          </Typography>
          <Typography className={classes.subSectionContent} component="span">
            <Text id="efficient" />
          </Typography>
        </Container>
      </Container>

      <Container className={classes.section}>
        <Typography variant="h2" align="right" component="span">
          <Text id="pools.title" />
        </Typography>
        <Container className={classes.pools}>
          <Pool
            title={t('pools.pool1')}
            name="STKH1"
            poolID="b62ecc8ce7e46c4443b63b91fffaeb19f869d191a7d2381087aaa768"
            logo={stkh1} />
        </Container>
        <Typography className={classes.sectionContent} component="span">
          <Text id="wallets" />
        </Typography>
        <Typography className={classes.sectionContent} component="span">
          <Text id="faq" />
        </Typography>
      </Container>

      <Container className={classes.section}>
        <Typography variant="h2" component="span">
          <Text id="contact" />
        </Typography>
        <Typography className={classes.sectionContent} component="span">
          <Text id="check" />
        </Typography>
        <Typography  className={classes.sectionContent} component="span">
          <Text id="mail" />
        </Typography>
      </Container>
    </Page>
  );
}
