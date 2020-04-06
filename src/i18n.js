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
          intro: "A cardano only Stake pool for the community, by the community.  We are <strong>STKH</strong> !<br />Delegate your ada to our pool: ",
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
          title: "STAKHANOVITE STAKE POOL",
          subtitle: "Un groupe d'enjeu Cardano pour la communauté, par la communauté.",
          intro: "Un groupe d'enjeu uniquement dédié à Cardano - Pour la communauté, par la communauté.  Nous sommes <strong>STKH</strong>!<br />Déléguez vos ADA à notre groupe d'enjeu: ",
          "what-content": "Cardano, la blockchain supportant la cryptomonnaie ada (ADA), est basée sur la preuve d'enjeu (PoS). Toute personne possédant des ada peut participer à son fonctionnement. Cependant, vous devez pour cela être connectés en permanence...<br />Parce que ce dernier point est très contraingant pour les utilisateurs lambda, Cardano vous permet de déléguer vos ada (ou enjeu) à un groupe d'enjeu. Le groupe ('Stake Pool') sera connecté pour vous et effectuera tout le travail de validation nécessaire en votre nom.<br />C'est ce que le Stakhanovite Stake Pool vous offre comme service !",
          "what-title": "Nous faisons...",
          "who-title": "Nous sommes...",
          "who-content": "STKH est géré pour la communauté, par la communauté, et dont nous sommes des membres indépendants.  <br />Ecoutez ce qu'un membre de notre équipe !<br /> @psychomb : \"Traducteur en français de divers contenus liés à Cardano tels que 'Pourquoi Cardano ?', la lettre d'information bimestrielle de la Fondation Cardano ou du portefeuille léger de Yoroi, je suis ambassadeur Cardano depuis le lancement du programme. Il était naturel pour moi de créer un groupe d'enjeu afin de soutenir un peu plus la communauté Cardano.\"",
          "why-title": "Pourquoi nous ?!",
          "why-content": "Pour nos faibles coûts, bien sûr ! <br />Pour le testnet, le Stakhanovite Stake Pool ne vous facturera aucun frais fixe. Nous, les opérateurs du pool, serons récompensés par une marge bénéficiaire de 5 % seulement.<br />Cette marge bénéficiaire est calculée sur les récompenses que vous obtenez grâce à nos efforts. Cela signifie que nous ne serons payés que lorsque vous le serez ! Par exemple, si votre récompense par époque est de 10 ADA, nous serons payés 0,5 ADA et les 9,5 ADA restants seront à vous. Il est important de noter que c'est le protocole qui vous paie, pas nous. Vos récompenses seront automatiquement déposées dans vos portefeuilles à la fin de chaque époque. Des coûts jusqu'aux performances, vous saurez tout et vous serez toujours en mesure de faire le meilleur choix pour vous et vos ADA",
          subscribe: "Inscrivez-vous",
          newsletter: "Pour recevoir nos dernières nouvelles et être informés nos mises à jour importantes, veuillez vous inscrire à notre bulletin d'information. Nous nous efforcerons de faire court et simple !",
          newsletterAck: "Je souhaite recevoir la lettre d'information Stakhanovite, et je comprends que je peux me désabonner à tout moment en cliquant sur le lien de désabonnement au bas des e-mails."
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
