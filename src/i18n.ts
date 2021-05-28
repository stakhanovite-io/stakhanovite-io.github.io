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
        home: {
          stakhanovite: "Stakhanovite",
          stakePools: "Stake Pools",
          reliable: "Simple and **reliable** staking on Cardano",
          who: "Who are we?",
          first: "One of the first stake pool ever registered on a publicly available  testnet, Stakhanovite is operated by **Cardano fans**!",
          together: "Together with our Cardano Stake Pools, we also operate oracles on Cardano and its sister blockchain Ergo.",
          psychomb: "French translator of various Cardano content such as 'Why Cardano?', IOG Blog posts, or the light wallet Yoroi, I have been a Cardano Ambassador  since day one. Setting up a stake pool was a natural thing to do in order to further support the Cardano Community. *@psychomb*",
          alexey: "I am a blockchain dev. I hack the ERC20, the ERC21, the Covid 19, the borsch, the cucumber. With bare hands. Enough said already! *@Aleksei*",
          experienceTitle: "What do we offer?",
          experience: "We offer a **reliable** and **fairly priced** staking experience on the Cardano blockchain that translates into a **painless** and **profitable** ride for all our delegators.",
          transparentTitle: "We are transparent",
          transparent: "From our costs to performance reports, you will know everything thanks to our monthly **newsletter** and our dedicated **Telegram channel**. Subscribe, and come say hi !",
          efficientTitle: "We are efficient",
          efficient: "Since launch, Stakhanovite distributed more than 6 millions ADA rewards to our delegators. **Try us out!**",
          wallets: "Delegate using the most popular Cardano wallets - **Daedalus** or **Yoroi** - and look for **STKH1** ticker!",
          faq: "Please read our **FAQ** for more details.",
          contact: "Contact us",
          check: "Check the homebar, we are present on Twitter and Telegram!",
          mail: `You are not of a social media fan?
Don’t worry, **we got you!**
Please send any question you may have to:

**contact@stakhanovite.io**

We will do our best to answer diligently, in english or in french!`,
          offer: {
            secureTitle: "Secure",
            secure: "Hardened servers",
            robustTitle: "Robust",
            robust: "High-end network",
            fairTitle: "Fair",
            fair: "Low fees",
          },
          pool: {
            margin: "1.8% margin",
            fixed: "340 fixed (minimum authorized)",
            saturation: "Saturation",
            copyAddress: "Copy pool address",
            copyId: "Copy Pool ID",
          },
          pools: {
            title: "Our pools",
            pool1: "Stakhanovite #1",
            pool2: "Stakhanovite #2",
          }
        },
        faq: {
          title: 'Frequently Asked Questions',
          general: {
            title: "General",
            cardanoTitle: "What is Cardano?",
            cardano: "Cardano is a blockchain based on a **proof of stake** (PoS) consensus protocol. The security of the Cardano ledger is a common good shared by all **ada** holders. Ada is the native cryptocurrency of the Cardano blockchain. You can take part in the security of the network thanks to the **staking** mechanism.",
            stakingTitle: "What is staking?",
            staking: "Anyone with ada can participate in writing the Cardano ledger. That is called **staking** and it is important that an **honest majority** of ada holders participate in this process. To incentivize holders, each signed block gives rewards in ada. However, one must stake a very large amount of ada to sign blocks **regularly** and run a node.",
            delegationTitle: "What is delegation?",
            delegation: "If you’re not an ada whale nor tech savvy, you can **delegate** your ada to a stake pool (SP). The SP will run a node on your behalf and the block rewards will be shared in proportion to the amount delegated by each contributor in the pool. The SP will charge a fee for this service.",
          },
          rewards: {
            title: "Ada & Rewards",
            lockedTitle: "Are my ada locked when I delegate?",
            locked: "No. Your ada are **never locked**No. Your ada are never locked and you can spend your ada as you want while they are delegated. and you can spend your ada as you want while they are delegated.",
            looseTitle: "Can I loose my ada when I delegate?",
            loose: "No. Delegating is a **safe procedure**. You are simply giving your rights to sign blocks to a pool. The worst that can happen is not receiving rewards. In that case, you can change pool whenever you want.",
            expectTitle: "When can I expect to get my rewards?",
            expect: `After your first delegation, there is a lag period of **3 full epochs** (15 to 20 days) before receiving any rewards. 

After that, rewards are paid at the end of **every epoch** (5 days).

The same lag period exists when you stop delegating. You still receive rewards for the following three epochs.`,
            expectMuchTitle: "How much rewards can I expect?",
            expectMuch: "The protocol gives approximatively **~5% annual returns** on your stake.",
            locationTitle: "Where are located my rewards?",
            location: `Your rewards are deposited in an **special account address** linked to your wallet. Whether you use Daedalus or Yoroi, the total balance shown by these two wallets includes those rewards.

Please note that Daedalus automatically retrieves your rewards when you spend your ada, while Yoroi will ask you to redeem your rewards manually before being able to spend them.`,
            changingTitle: "Will changing pool stop my rewards for several days?",
            changing: "No. However, rewards will come from the previous pool for the following 3 epochs.",
            redelegateTitle: "Do I have to re-delegate my rewards every five days?",
            redelegate: "No. The entire balance of your wallet is **automatically delegated**. That includes the rewards or any extra ada sent to your wallet after your initial delegation.",
            trustTitle: "Should I trust the pool to pay my rewards?",
            trust: "No. The protocol will **automatically distribute** the rewards. The pool has no control over the payment of the rewards and therefore will never be able to prevent it.",
          },
          wallets: {
            title: "Wallets",
            whichTitle: "Which wallet should I use?",
            which: `Cardano offers two main wallets to its users and the choice is yours to make.

**Daedalus** is a full-node wallet. It downloads the entire blockchain on your computer (~10 Gb) and verifies the blockchain at all times.

**Yoroi** is a light-wallet available on Android, iOS and as an extension for most desktop browsers. Yoroi interfaces with the blockchain through servers maintained by Emurgo. It is much faster to install and use than Daedalus as you never download the blockchain.`,
            hardwareTitle: "Wallets",
            hardware: "Yes. **Ledger S, Ledger Nano and Trezor T** support Cardano and can be used in combination with both Daedalus and Yoroi. Please read the instructions specific to your hardware wallet.",
          },
        }
      },
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["home", "faq"],
    defaultNS: "home",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
