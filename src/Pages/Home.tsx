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
import stkh2 from '../../assets/stkh2.png';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    marginTop: 100
  },
  sectionContent: {
    marginTop: 50,
  },
  sectionTeam: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTeamLogo: {
    margin: 30,
  },
  subSection: {
    marginTop: 50,
  },
  subSectionContent: {
  },
  offers: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
    marginTop: 50
  },
  offer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: 250,
    background: '#BDBDBD',
    borderRadius: '10px',
    paddingBottom: 66,
  },
  offerLogo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
    width: 64,
    height: 64,
    background: 'linear-gradient(0.4turn, rgba(189, 189, 189, 0.1), rgba(79, 79, 79, 1))',
    color: 'rgba(79, 79, 79, 1)',
    borderRadius: '50px',
  },
  offerText: {
    color: '#333333',
    '& p' : {
      margin: 0,
    }
  },
  pools: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pool: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'rgba(33, 43, 54, 1)',
    borderRadius: '10px',
    padding: 15,
  },
  poolLogo: {
    width: '350px'
  },
  poolCopy: {
    display: 'flex'
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
      <Typography className={classes.offerText}>
        <Box fontWeight="fontWeightBold">
          <Text id={title} />
        </Box>
      </Typography>
      <Typography className={classes.offerText}>
        <Text id={details} />
      </Typography>
    </div>
  );
}

function Pool({ title, name, logo, poolID }: { title: string, name: string, logo: string, poolID: string }): JSX.Element {
  const { t } = useTranslation();
  const classes = useStyles();
  const clipboard = useClipboard();
  return (
    <div className={classes.pool}>
      <Typography>{title}</Typography>
      <Typography>{name}</Typography>
      <Typography><Text id="pool.margin" /></Typography>
      <Typography><Text id="pool.fixed" /></Typography>
      <img className={classes.poolLogo} alt="pool logo" src={logo} />
      <Typography><Text id="pool.saturation" /></Typography>
      <div className={classes.poolCopy}>
        <IconButton
          color="inherit"
          title={t('pool.copyAddress')}
          onClick={() => clipboard.copy({poolID})}
        >
          <FileCopyIcon />
        </IconButton>
        <Typography component="span" variant="body2"><Text id="pool.copyId" raw={true} /></Typography>
      </div>
    </div>
  );
}

export function Home(): JSX.Element {
  const { t } = useTranslation();
  const classes = useStyles();  
  return (
    <Page>
      <Container className={classes.root}>
        <Container>
          <Typography variant="h1" color="textSecondary">
            <Text id="stakhanovite" />
          </Typography>
          <Typography variant="h1">
            <Text id="stakePools" />
          </Typography>
          <Typography>
            <Text id="reliable" />
          </Typography>
        </Container>
        <img alt="logo" src={home} width="auto" height={350} />
      </Container>

      <Container className={classes.section}>
        <Typography variant="h2" align="right">
          <Text id="who" />
        </Typography>
        <Typography className={classes.sectionContent}>
          <Text id="first" />
        </Typography>
        <Typography className={classes.sectionContent}>
          <Text id="together" />
        </Typography>
      </Container>

      <Container className={classes.section}>
        <div className={classes.sectionTeam}>
          <img className={classes.sectionTeamLogo} alt="team" src={team} width="auto" height={350} />
          <div>
            <Typography variant="body2">
              <Text id="psychomb" />
            </Typography>
            <Typography variant="body2">
              <Text id="alexey" />
            </Typography>
          </div>
        </div>
      </Container>

      <Container className={classes.section}>
        <Typography variant="h2">
          <Text id="experienceTitle" />
        </Typography>
        <Typography className={classes.sectionContent}>
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
        <Container className={classes.subSection}>
          <Typography variant="h3" color="textSecondary">
            <Text id="transparentTitle" />
          </Typography>
          <Typography className={classes.subSectionContent}>
            <Text id="transparent" />
          </Typography>
        </Container>

        <Container className={classes.subSection}>
          <Typography variant="h3" color="textSecondary">
            <Text id="efficientTitle" />
          </Typography>
          <Typography className={classes.subSectionContent}>
            <Text id="efficient" />
          </Typography>
        </Container>
      </Container>

      <Container className={classes.section}>
        <Typography variant="h2" align="right">
          <Text id="pools.title" />
        </Typography>
        <Container className={classes.pools}>
          <Pool
            title={t('pools.pool1')}
            name="STKH1"
            poolID="b62ecc8ce7e46c4443b63b91fffaeb19f869d191a7d2381087aaa768"
            logo={stkh1} />
          <Pool
            title={t('pools.pool2')}
            name="STKH2"
            poolID="8797eda7072c08e2c6eff77bbdf7189f3bad127a6d7efd817e103831"
            logo={stkh2} />
        </Container>
        <Typography className={classes.sectionContent}>
          <Text id="wallets" />
        </Typography>
        <Typography className={classes.sectionContent}>
          <Text id="faq" />
        </Typography>
      </Container>

      <Container className={classes.section}>
        <Typography variant="h2">
          <Text id="contact" />
        </Typography>
        <Typography className={classes.sectionContent}>
          <Text id="check" />
        </Typography>
        <Typography  className={classes.sectionContent}>
          <Text id="mail" />
        </Typography>
      </Container>
    </Page>
  );
}
