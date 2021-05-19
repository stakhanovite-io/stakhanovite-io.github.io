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
    marginTop: 180
  },
  sectionContent: {
    marginTop: 50,
  },
  subSection: {
    marginTop: 50,
  },
  subSectionContent: {
  },
  offers: {
    display: "flex",
    flexDirection: "row",
    marginTop: 50
  },
  offer: {
    display: "flex",
    flexDirection: "column",
  },
  pools: {
    display: "flex",
    flexDirection: "row",
  },
  pool: {
    display: "flex",
    flexDirection: "column",
  },
  poolLogo: {
    width: "80px"
  }
}));

function Text({ id }: { id: string }): JSX.Element {
  const { t } = useTranslation();
  return <span dangerouslySetInnerHTML={{__html:marked(t(id))}}></span>;
}


function Offer({ title, details }: { title: string, details: string }): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.offer}>
      <Typography><Text id={title} /></Typography>
      <Typography><Text id={details} /></Typography>
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
      <img alt="pool logo" src={logo} width="auto" height={350} />
      <Typography><Text id="pool.saturation" /></Typography>
      <div>
        <IconButton
          className={classes.poolLogo}
          color="inherit"
          title={t('pool.copyAddress')}
          onClick={() => clipboard.copy({poolID})}
        >
          <FileCopyIcon />
        </IconButton>
      </div>
      <div>
        <Typography><Text id="pool.copyId" /></Typography>
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
        <img alt="team" src={team} width="auto" height={350} />
        <div>
          <Typography component="div">
            <Text id="psychomb" />
          </Typography>
          <Typography component="div">
            <Text id="alexey" />
          </Typography>
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
          <Offer title="offer.secureTitle" details="offer.secure" />
          <Offer title="offer.robustTitle" details="offer.robust" />
          <Offer title="offer.fairTitle" details="offer.fair" />
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
