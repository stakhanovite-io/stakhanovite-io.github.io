import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    detection: {order: ['navigator']},
    resources: {
      en: {
        translations: {
          title: "STAKHANOVITE STAKE POOL",
          subtitle: "A Cardano Stake Pool for the community, by the community",
          intro: "A cardano only Stake pool for the community, by the community.  We are <strong>STKH</strong> !<br />Delegate your ada to our pool: <strong>3a6c4c5af3454634a5de5899554d219878efd609c73b5443b2f5b1a677f9a2a9</strong>",
          "what-content": "Cardano, the blockchain supporting the ada cryptocurrency (ADA), runs in a proof-of-stake (PoS) setting. Anyone who owns ada can participate in its functioning. For that however, you must be online at all times…<br />Because this last requirement is very demanding and not practical for everyday users, Cardano allows you to delegate your ada (or stake) to a stake pool. The stake pool will be online for you and perform all the necessary validation work on your behalf.<br />That is exactly why the Stakhanovite Stake Pool is here for you!",
          "what-title": "What is a Stake Pool ?",
          "who-title": "Who we are",
          "who-content": "We are independent community members. Our operation is run for the community, by the community.<br />Hear it from one member of our team!<br /> @psychomb: \"French translator of various Cardano-related content such as 'Why Cardano?', the bi-monthly Cardano Foundation newsletter or the Yoroi Wallet, I have been a Cardano Ambassador since day one. Getting a stake pool up-and-running was a natural thing to do in order to further support the Cardano Community.\"",
          "why-title": "Why join us",
          "why-content": "For our fees, of course!<br />For the incentivized testnet, The Stakhanovite Stake Pool will not charge you any fixed costs. We, pool operators, will be rewarded via a small profit margin of 5%.<br />This profit margin is calculated on the rewards you get thanks to our efforts. Doing so means that we will get paid only when you get paid!<br />For example, if you rewards per epoch is 10 ADA, we get paid 0.5 ADA and the remaining 9.5 ADA is all yours. Importantly, it is the protocol that pays you, not us. Your rewards will be deposited to your wallets automatically at the end of each staking epoch.<br />We are transparent. From costs to performance, you will know everything and you will always be in a position to make the best choice for you, and your ada!",
          subscribe: "subscribe",
          newsletter: "To get our latest news and important updates - please subscribe to our newsletter. We will keep it short and simple!",
          newsletterAck: "I would like to receive the Stakhanovite newsletter, and I understand I can opt out anytime by clicking the unsubscribe link at the bottom of our emails."
        }
      },
      fr: {
        translations: {
        }
      }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;