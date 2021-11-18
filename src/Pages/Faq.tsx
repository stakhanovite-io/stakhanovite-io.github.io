import * as React from 'react';
import { marked } from 'marked';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const breakpoints = createBreakpoints({});

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [breakpoints.up("sm")]: {
      width: "80vw"
    }
  },
  heading: {
    marginTop: 84,
    marginBottom: 40,
  },
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
  },
  sectionTitle: {
    margin: 20,
  },
  sectionItems: {
    backgroundColor: '#212B36',
    borderRadius: "10px",
    padding: "20px 26px 20px 26px",
    boxShadow: "6px 6px 14px #171D24",
  },
  sectionItem: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  sectionItemHeading: {
    flexDirection: "column",
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  sectionItemContent: {
    boxShadow: "4px 4px 10px #171D24",
    backgroundColor: '#212B36',
  },
}));

function SectionTitle({ category }: { category: string }): JSX.Element {
    const { t } = useTranslation();
    const classes = useStyles();
    return <Typography className={classes.sectionTitle} variant="h3">{t(`faq:${category}.title`)}</Typography>;
}

function SectionItem({ category, id }: { category: string, id: string }): JSX.Element {
  const { t } = useTranslation();
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<boolean>(false);
  return (
    <div className={classes.sectionItem}>
      <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} className={classes.sectionItemContent}>
          <Typography variant="h4">
            {t(`faq:${category}.${id}Title`)}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            <span dangerouslySetInnerHTML={{__html:marked(t(`faq:${category}.${id}`))}}></span>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export function Faq(): JSX.Element {
    const { t } = useTranslation();
    const classes = useStyles();
    return (
      <Container className={classes.root}>
        <Typography align='center' className={classes.heading} variant="h2">{t('faq:title')}</Typography>
        <Container className={classes.section}>
          <SectionTitle category="general" />
          <Container className={classes.sectionItems}>
            <SectionItem category="general" id="cardano" />
            <SectionItem category="general" id="staking" />
            <SectionItem category="general" id="delegation" />
          </Container>
        </Container>
        <Container className={classes.section}>
          <SectionTitle category="delegation" />
          <Container className={classes.sectionItems}>
            <SectionItem category="delegation" id="loose" />
            <SectionItem category="delegation" id="locked" />
            <SectionItem category="delegation" id="close" />
            <SectionItem category="delegation" id="cost" />
            <SectionItem category="delegation" id="fees" />
          </Container>
        </Container>
        <Container className={classes.section}>
          <SectionTitle category="rewards" />
          <Container className={classes.sectionItems}>
            <SectionItem category="rewards" id="expect" />
            <SectionItem category="rewards" id="expectMuch" />
            <SectionItem category="rewards" id="variation" />
            <SectionItem category="rewards" id="location" />
            <SectionItem category="rewards" id="changing" />
            <SectionItem category="rewards" id="redelegate" />
            <SectionItem category="rewards" id="trust" />
          </Container>
        </Container>
        <Container className={classes.section}>
          <SectionTitle category="wallets" />
          <Container className={classes.sectionItems}>
            <SectionItem category="wallets" id="which" />
            <SectionItem category="wallets" id="hardware" />
          </Container>
        </Container>
      </Container>
    );
}
