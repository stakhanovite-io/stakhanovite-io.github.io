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
          stakePools: "Stake Pool",
          reliable: "Your staking partner on Cardano - Simple and **reliable**",
          who: "Who are we?",
          first: `One of the first stake pool ever registered on a publicly available testnet, Stakhanovite is operated by **Cardano fans**!

Shelley Testnets, Incentivized Shelley ITN, Friends & Family Testnets, Alonzo Blue Testnet ... **We are part of the Cardano experience since day one.**`,
          together: "Together with our Cardano Stake Pool, we also operate an oracle on Cardano.",
          psychomb: "*\" French translator of various Cardano content such as 'Why Cardano?', IOG Blog posts, or the light wallet Yoroi, I have been a Cardano Ambassador  since day one. Setting up a stake pool was a natural thing to do in order to further support the Cardano Community.* \"",
          psychomb_sig: "***@psychomb***",
          alexey: "*\" I am a blockchain dev. I hack the ERC20, the ERC21, the Covid 19, the borsch, the cucumber. With bare hands. Enough said already!* \"",
          alexey_sig: "***@Aleksei***",
          experienceTitle: "What do we offer?",
          experience: "We offer a **reliable** and **fairly priced** staking experience on the Cardano blockchain that translates into a **painless** and **profitable** ride for all our delegators.",
          transparentTitle: "We are transparent",
          transparent: "From our costs to performance reports, you will know everything thanks to our monthly **[newsletter](https://stakhanovite.substack.com/)** and our dedicated **[Telegram](https://t.me/StakhanoviteIO)** channel. Subscribe, and come say hi !",
          efficientTitle: "We are efficient",
          efficient: "Since launch, Stakhanovite distributed more than 6 millions ADA rewards to our delegators. We operate since December 2019, uninterrupted. **Try us out and join the crew!**",
          wallets: "Delegate using the most popular Cardano wallets - [**Daedalus**](https://daedaluswallet.io) or [**Yoroi**](https://yoroi-wallet.com) - and look for the **STKH1** ticker!",
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
            fixed: "340 ada fixed (min. authorized)",
            saturation: "Saturation",
            copyAddress: "Copy pool address",
            copyId: "Copy Pool ID",
          },
          pools: {
            title: "Our pool",
            pool1: "Stakhanovite #1",
            pool2: "Stakhanovite #2",
          }
        },
        faq: {
          title: 'Frequently Asked Questions',
          general: {
            title: "Cardano and Proof-of-Stake",
            cardanoTitle: "What is Cardano?",
            cardano: "Cardano is a blockchain based on a **proof of stake** (PoS) consensus protocol. Ada is its native cryptocurrency and the security of the Cardano ledger is a common good shared by all **ada** holders. You can take part in the security of the network thanks to the **staking** mechanism.",
            stakingTitle: "What is staking?",
            staking: "Anyone with ada can participate in writing the Cardano ledger. That is called **staking** and it is important that an **honest majority** of ada holders participate in this process. To incentivize ada holders to do so, each signed block gives rewards in ada. However, one must run a node 24/7 and stake a very large amount of ada to have any chance of signing blocks **regularly**.",
            delegationTitle: "What is delegation?",
            delegation: "If you’re not an ada whale nor tech savvy, you can **delegate your ada to a stake pool using the Cardano wallet of your choice**. The stake pool will run a node on your behalf and the block rewards will be shared in proportion to the amount delegated by each contributor in the pool. The stake pool will charge a fee for this service."
          },
          delegation: {
            title: "Delegation",
            lockedTitle: "Are my ada locked when I delegate?",
            locked: "**No.** Your ada are **never locked**. You can spend them as you want while they are delegated.",
            looseTitle: "Is there a risk to lose my ada by delegating?",
            loose: "**No.** Delegating is a **safe procedure**. You are simply giving your rights to a pool to sign blocks on your behalf. If your selected pool misbehaves or underperforms, the worst that can happen is missing out on rewards. In that case, **don't forget : you can change pool whenever you want!**",
            closeTitle: "Can I close my wallet after I delegated?",
            close: "**Yes.** Once your delegation preference has been posted on-chain, you can safely close you wallet. Come back from time to time to verify that your pool performs as expected!",
            costTitle: "How much does it cost to delegate?",
            cost: `Delegating requires to submit a transaction on-chain and this generally costs less than 0.2 ada. **Please note that registering a wallet for staking requires a deposit of 2 ada.** However, this deposit will be returned to you when you de-register your wallet.

**To sum up, your first delegation will cost you less than 2.2 ada. Changing pool later on will only cost the transaction fee  of 0.2 ada.**`,
            feesTitle: "What are the Stakhanovite fees?",
            fees: `We charge the **minimum fixed fee** allowed by the protocol, and a **margin of 1.8%**.
            
In concrete terms, when you are eligible to receive 100 ada rewards, Stakhanovite will take 1.8 ada and the remaining 98.2 ada are yours.`,
          },
          rewards: {
            title: "Rewards",
            expectTitle: "When can I expect to get my rewards?",
            expect: `**Be patient!** After your first delegation, there is a lag period of **3 full epochs** before receiving any rewards. This means **between 15 to 20 days**, depending when you delegated in the epoch. After that, rewards are paid regularly at the end of **every epoch** (5 days).

The same lag period exists when you stop delegating. You still receive rewards for the following 3 epochs.`,
            expectMuchTitle: "How much rewards can I expect?",
            expectMuch: "The protocol gives approximatively **5% annual returns** on your stake. This translates to **~ 0,068% per epoch.**",
            variationTitle: "Why do my rewards vary between epochs?",
            variation: "A pool pays rewards according to the number of blocks produced. Each pool is allocated a random number of blocks at each epoch, which explains these variations.",
            locationTitle: "Where are my rewards deposited?",
            location: `Your rewards are paid in an **special account address** linked to your wallet. Whether you use Daedalus or Yoroi, the total balance shown by these wallets already includes those rewards.

Please note that Daedalus automatically retrieves your rewards when you spend your ada (if needed), while Yoroi will ask you to redeem your rewards manually before being able to spend them.`,
            changingTitle: "Will changing pool stop my rewards for several days?",
            changing: "**No.** However, rewards will come from the previous pool for the following 3 epochs.",
            redelegateTitle: "Do I have to re-delegate my rewards every five days?",
            redelegate: "**No.** The entire balance of your wallet is **automatically delegated**. That includes the rewards or any extra ada sent to your wallet after your initial delegation.",
            trustTitle: "Should I trust my pool to pay the rewards?",
            trust: "**No.** The protocol will **automatically distribute** the rewards and the pool has no control over this.",
          },
          wallets: {
            title: "ADA wallets",
            whichTitle: "Which wallet should I use?",
            which: `Cardano offers two main wallets to its users and the choice is yours to make.

[**Daedalus**](https://www.daedaluswallet.io) is a full-node wallet. It downloads the entire blockchain on your computer and verifies the blockchain at all times. This might take time depending on your hardware. **To date, there is no Daedalus available for smartphones.**

[**Yoroi**](https://www.yoroi-wallet.com/) is a light-wallet available on Android, iOS and as an extension for desktop browsers. Yoroi interfaces with the Cardano blockchain through servers maintained by Emurgo. You do not download the entire blockchain and therefore, it is much faster to install and use than Daedalus.`,
            hardwareTitle: "Are hardware wallets supported for storing ada?",
            hardware: "**Yes. Ledger S, Ledger Nano X and Trezor T** support Cardano and can be used in combination with both Daedalus and Yoroi. Please read the instructions specific to your hardware wallet.",
          },
        },
        delegator: {
          /* adress selector */
          please: 'Please enter the reward address⁽\*⁾ of your wallet delegated to STKH',
          store: '**We do not store any personal informations from you!**',
          input: 'Reward address starting with \"stake1...\"',
          enter: 'Enter',
          disclaimer: `**⁽\*⁾** In **Daedalus, you can find the reward address in the rewards section** of the delegation centre. In **Yoroi, you can find it in the the rewards option of the receive panel**.
          
All data provided are for informations purposes only.`,
          /* unknown delegator */
          sorry: '**Oops.** It seems that you are not delegating to STKH!',
          check: 'If you did delegate to us, please check that you submitted a valid reward address starting with ***\"stake1\"***. If your delegation is recent, **retry once you receive rewards from STKH.** Please note that our backend is updated once per hour.',
          retry: 'Retry',
          /* rewards panel */
          welcome: 'Welcome!',
          update: 'These statistics are updated every hour. Recent changes might not be immediatly reflected here.',
          current: 'Current Epoch',
          saturation: 'Pool Saturation',
          number: 'Number of Delegators',
          stake: 'My Active Stake',
          rewards: 'My Total Rewards',
          last: 'My Last Rewards',
          history: 'Download History'
        }
      },
      fr: {
        home: {
          stakhanovite: "Stakhanovite",
          stakePools: "Stake Pool",
          reliable: "Votre partenaire sur Cardano - Simple et **fiable**",
          who: "Qui sommes-nous ?",
          first: `L'un des premiers pools enregistrés sur un testnet public, Stakhanovite est géré par des **fans de Cardano** !

Réseaux de test Shelley, réseau avec récompenses \"ITN\", réseau de mise au point \"Amis et famille\", ou encore réseau de test des contrats intelligents \"Alonzo-Blue\" ... **Nous avons pris et prenons part à Cardano dans toutes ses étapes de développement depuis le premier jour.**`,
          together: "Avec notre Stake Pool Cardano, nous gérons également un oracle sur Cardano.",
          psychomb: "*\" Traducteur français de divers contenus sur Cardano tels que 'Pourquoi Cardano ?', des articles du blog d'I.O.G., ou du portefeuille Yoroi, je suis Ambassadeur Cardano depuis le premier jour. La mise en place d'un pool était une chose naturelle à faire afin de soutenir davantage la communauté Cardano* \"",
          psychomb_sig: "***@psychomb***",
          alexey: "*\" Je suis développeur blockchain. Je pirate l'ERC20, l'ERC21, le Covid 19, le borsch, le concombre. A mains nues. Assez parlé !* \"",
          alexey_sig: "***@Aleksei***",
          experienceTitle: "Qu'offrons-nous ?",
          experience: "Nous offrons une expérience de staking **fiable** et **peu onéreuse** sur la blockchain Cardano. Cela se traduit en une expérience **facile** et **profitable** pour tous nos délégateurs.",
          transparentTitle: "Transparence",
          transparent: "De nos coûts jusqu'à nos relevés de performance, vous saurez tout grâce à notre **[newsletter](https://stakhanovite.substack.com/)** mensuelle et à notre chaîne **[Telegram](https://t.me/StakhanoviteIO)** dédiées. Abonnez-vous, et venez nous saluer !",
          efficientTitle: "Efficacité",
          efficient: "Depuis son lancement, Stakhanovite a distribué plus de 6 millions d'ADA de récompenses à ses délégateurs. Nous fonctionnons depuis le mois de Décember 2019, sans aucune interruption de service. **Rejoignez-nous !**",
          wallets: "Déléguez en utilisant les portefeuilles Cardano les plus populaires - [**Daedalus**](https://daedaluswallet.io) ou [**Yoroi**](https://yoroi-wallet.com) - et cherchez notre pool **STKH1** !",
          faq: "Consultez notre F.A.Q. pour plus de détails.",
          contact: "Contactez-nous",
          check: "Vérifiez sur la barre d'accueil, nous sommes présents sur Twitter et Telegram!",
          mail: `Vous n'êtes pas fans des réseaux sociaux ?
Pas de soucis, **c'est prévu !**
Veuillez envoyez toutes vos questions à :

**contact@stakhanovite.io**

Nous ferons de notre mieux pour répondre dans les plus brefs délais, en français ou en anglais !`,
          offer: {
            secureTitle: "Sécurisé",
            secure: "Serveurs renforcés",
            robustTitle: "Robuste",
            robust: "Réseau haut-débit",
            fairTitle: "Juste",
            fair: "Peu de frais",
          },
          pool: {
            margin: "Marge : 1.8%",
            fixed: "Frais fixes 340 ada (min. autorisé)",
            saturation: "Saturation",
            copyAddress: "Copier",
            copyId: "Copier l'ID du pool",
          },
          pools: {
            title: "Notre pool",
            pool1: "Stakhanovite #1",
            pool2: "Stakhanovite #2",
          }
        },
        faq: {
          title: 'Foire aux Questions',
          general: {
            title: "Cardano et Preuve d'Enjeu",
            cardanoTitle: "Cardano, c'est quoi ?",
            cardano: "Cardano est une blockchain basée sur un protocole de consensus de **preuve d'enjeu** (Proof of Stake - PoS). Ada est sa crypto-monnaie native et la sécurité du registre Cardano est un bien commun partagé par tous les détenteurs d'**ada**. Vous pouvez participer à la sécurité du réseau grâce au mécanisme de **staking**.",
            stakingTitle: "Qu'est-ce que le \"staking\" ?",
            staking: "Toute personne possédant des ada peut participer à l'écriture du registre de Cardano. C'est ce qu'on appelle le **staking** et il est important qu'une **majorité honnête** de détenteurs d'ada participe à ce processus. Pour inciter les détenteurs d'ada à le faire, chaque bloc signé donne des récompenses en ada. Pour cela, il faut faire fonctionner un nœud 24h/24 et 7j/7 et mettre en jeu une très grande quantité d'ada pour avoir une chance de signer des blocs **régulièrement**.",
            delegationTitle: "Qu'est-ce que la délégation ?",
            delegation: "Si vous n'êtes ni un très gros détenteur d'ada, ni un expert en technologie, vous pouvez **déléguer vos ada à un \"stake pool\" (pool) en utilisant le portefeuille Cardano de votre choix**. Le pool s'occupe de faire fonctionner un nœud validateur et les récompenses des blocs produits seront partagées proportionnellement au montant délégué par chaque contributeur. Le pool facture des frais pour ce service."
          },
          delegation: {
            title: "Délégation",
            lockedTitle: "Mes ada sont-ils bloqués pendant la délégation ?",
            locked: "**Non.** Vos ada ne sont **jamais bloqués**. Vous pouvez continuez à les dépenser comme vous le souhaitez lorsqu'ils sont délégués.",
            looseTitle: "Puis-je perdre des ada pendant la délégation ?",
            loose: "**Non.** Déléguer est une **procédure sûre**. Vous donnez simplement vos droits à un pool de signer des blocs pour vous. Si votre pool se comporte mal ou valide moins de blocs que prévu, le pire qui puisse arriver est de ne pas toucher de récompenses. Dans ce cas, **n'oubliez pas: vous pouvez changer de pool à tout moment !**",
            closeTitle: "Est-ce que je peux fermer mon wallet après avoir délégué ?",
            close: "**Oui.** Une fois que votre préférence de délégation a été enregistrée sur la blockchain, vous pouvez fermer votre portefeuille en toute sécurité. Revenez de temps en temps pour vérifier que votre pool fonctionne comme prévu !",
            costTitle: "Déléguer, cela coûte combien ?",
            cost: `Pour déléguer, il faut soumettre une transaction sur la blockchain, ce qui coûte généralement moins de 0,2 ada. **Veuillez noter que l'enregistrement d'un portefeuille nécessite un dépôt de 2 ada**, mais ce dépôt vous sera rendu lorsque vous arrêterez le staking.

**Pour résumer, votre première délégation vous coûtera moins de 2,2 ada. Changer de pool par la suite ne vous coûtera que les frais de transaction de 0,2 ada.**`,
            feesTitle: "Quels sont les frais de Stakhanovite ?",
            fees: `Nous pratiquons les **frais fixes minimum** autorisés par le protocole, et une **marge de 1.8%.**
            
Concrètement, lorsque vous êtes éligibles pour 100 ada de récompenses, Stakhanovite prélèvera 1.8 ada et les 98.2 ada restant sont à vous.`,
          },
          rewards: {
            title: "Récompenses",
            expectTitle: "Quand vais-je recevoir mes récompenses ?",
            expect: `Après votre première délégation, il y a une période de latence de **3 époques complètes** avant de recevoir des récompenses. Cela signifie **entre 15 et 20 jours**, selon le moment où vous avez délégué dans l'époque. Après cela, les récompenses sont payées régulièrement à la fin de **chaque époque** (5 jours).

Un même décalage existe lorsque vous cessez de déléguer. Vous recevrez des récompenses pendant les 3 époques suivantes.`,
            expectMuchTitle: "Combien de récompenses vais-je recevoir ?",
            expectMuch: "Le protocole donne approximativement **5% de rendement annuel** sur votre enjeu. Cela donne environ **~ 0,068% par époque de 5 jours.**",
            variationTitle: "Pourquoi mes récompenses varient entre les époques ?",
            variation: "Un pool paye les récompenses en fonction du nombre de blocs produits. A chaque époque, un nombre aléatoire de blocs est attribué à chaque pool, ce qui explique ces variations.",
            locationTitle: "Où se trouvent mes récompenses ?",
            location: `Vos récompenses sont versées dans une **adresse de compte spécial** liée à votre portefeuille. Que vous utilisiez Daedalus ou Yoroi, le solde total affiché par ces portefeuilles inclut déjà ces récompenses.

Notez que Daedalus récupère automatiquement vos récompenses lorsque vous dépensez vos ada (seulement si nécessaire), tandis que Yoroi vous demandera de récupérer vos récompenses manuellement avant de pouvoir les dépenser.`,
            changingTitle: "Si je change de pool, dois-je attendre 3 époques à nouveau ?",
            changing: "**Non.** Cependant, les récompenses proviendront encore du pool précédent pour les 3 époques suivantes.",
            redelegateTitle: "Dois-je déléguer à nouveau mes récompenses tous les 5 jours ?",
            redelegate: "**Non.** Le solde entier de votre portefeuille est **automatiquement délégué**. Cela inclut les récompenses et tous les ada supplémentaires envoyés dans votre portefeuille après votre délégation initiale.",
            trustTitle: "Dois-je faire confiance à mon pool pour payer les récompenses ?",
            trust: "**Non.** Le protocole distribue **automatiquement** les récompenses. Le pool n'a aucun contrôle sur ce point.",
          },
          wallets: {
            title: "Portefeuilles ADA",
            whichTitle: "Quel portefeuille utiliser ?",
            which: `Cardano propose deux portefeuilles principaux à ses utilisateurs et c'est à vous de choisir.

[**Daedalus**](https://www.daedaluswallet.io) est un portefeuille de type nœud-complet. Il télécharge l'intégralité de la blockchain sur votre ordinateur et vérifie la blockchain à tout moment. Cela peut prendre du temps en fonction de votre machine. **A ce jour, Daedalus n'est pas disponible pour les smartphones. Attention aux escroqueries !**
            
[**Yoroi**](https://www.yoroi-wallet.com/) est un portefeuille léger disponible sur Android, iOS et comme extension pour les navigateurs web de bureau. Yoroi s'interface avec la blockchain Cardano par le biais de serveurs gérés par Emurgo. Vous ne téléchargez pas la totalité de la blockchain et, par conséquent, il est beaucoup plus rapide à installer et à utiliser que Daedalus.`,
            hardwareTitle: "Les portefeuilles matériels sont-ils pris en charge ?",
            hardware: "**Oui. Ledger S, Ledger Nano X et Trezor T** prennent tous les trois en charge Cardano et peuvent être utilisés en combinason avec Daedalus ou Yoroi. Lisez attentivement les instructions relatives à votre type de portefeuille.",
          },
        },
        delegator: {
          /* adress selector */
          please: 'Veuillez entrer l\'adresse de récompenses⁽\*⁾ du portefeuille délégué chez STKH',
          store: '**Nous ne conservons aucune de vos données personnelles !**',
          input: 'Adresse de récompense au format \"stake1...\"',
          enter: 'Entrer',
          disclaimer: `**⁽\*⁾**Sur **Daedalus, vous pouvez trouver l'adresse de récompense sous l'onglet \"Rewards\" du centre de délégation**. Sur **Yoroi, vous pouvez la trouver dans l'option \"Récompenses\" sous l'onglet Recevoir**.

Toutes les données fournies le sont à titre d'information uniquement.`,
          /* unknown delegator */
          sorry: 'Ooops... Nous n\'avons pas trouvé votre délégation chez STKH',
          check: 'Si vous avez délégué chez STKH, veuillez vérifier que vous avez bien entré l\'adresse de récompense de votre portefeuille commençant par \"***stake1***\". Si votre délégation est récente, veuillez recommencer lorsque vous recevrez des récompenses de notre part. Notez que notre service est mis à jour toutes les heures.',
          retry: 'Recommencer',
          /* rewards panel */
          welcome: 'Bienvenue !',
          update: 'Ces statistiques sont mises à jour toutes les heures. Des changements récents peuvent ne pas immédiatement être reflétés ici.',
          current: 'Epoque actuelle',
          saturation: 'Saturation du Pool',
          number: 'Nombre de Délégateurs',
          stake: 'Mon Enjeu Actif',
          rewards: 'Récompenses Totales',
          last: 'Dernières Récompenses',
          history: 'Télécharger l\'historique'
        }
      },
      ja: {
        home: {
          stakhanovite: "Stakhanovite",
          stakePools: "ステークプール",
          reliable: "カルダノにおけるあなたのパートナー - シンプルで信頼性確実",
          who: "弊社について",
          first: `公開テストネット上に登録された最初のプールの一つであるStakhanoviteは、カルダノファンによって運営されています。

Shelleyテストネット、インセンティブ付きテストネット（ITN）、Friends and family調整用ネット、さらに、スマートコントラクトのテストネットAlonzo-Blue等々… カルダノの誕生以来、現在に至るまで、成長の全ての段階に深く関わってきました。`,
          together: "弊社は、カルダノステークプールとともに、オラクルもカルダノ上で運営しています。",
          psychomb: "「なぜカルダノなのか？」、IOGのブログの記事、あるいはヨロイウォレット等のカルダノについての様々な内容をフランス語翻訳している弊社は、カルダノ誕生当初からのカルダノ大使です。プールの設置は、カルダノコミュニティーを支援するための当然の結果として行われました。",
          psychomb_sig: "***@psychomb***",
          alexey: "当方自身、ブロックチェーンの開発者です。ERC20、ERC21、Covid19、ボルシュ、キューカンバーをハックしています。 手のみが頼りです。少し話し過ぎました！",
          alexey_sig: "***@Aleksei***",
          experienceTitle: "弊社のサービス",
          experience: "弊社は、カルダノブロックチェーンにおける信頼性の高いステーキングをお手頃価格で提供しております。これにより委任者は簡単で利率のよさを体感することができるのです。",
          transparentTitle: "透明性",
          transparent: "弊社にかかったコストから、パフォーマンス明細の全てを、[毎月発行のニュースレター](https://stakhanovite.substack.com/) 、或いは[『Telegram（テレグラム）』のチャンネル](https://t.me/StakhanoviteIO) で知ることができます。今すぐ登録して、我々に挨拶を送ってみて下さい！",
          efficientTitle: "効率",
          efficient: "立ち上げ当初より、Stakhanoviteは委任者に６百万の報酬ADAを分配してきました。2019年12月から現在まで、一度も停止することなく運営を続けています。ぜひ弊社にお任せください！",
          wallets: "カルダノの一番人気のウォレット[『ダイダロス』](https://daedaluswallet.io)あるいは[『ヨロイ』](https://yoroi-wallet.com) を使ってご委任下さい。そして弊社のプール『 STKH1』を見つけて下さい！",
          faq: "更なる詳細は、Q＆Aをご覧下さい。",
          contact: "お問い合わせ",
          check: "メニューバーをご覧下さい。Twitter と Telegramに弊社アカウントがございます！",
          mail: `ソーシャルネットワークが苦手ですか？
全く問題ございません、そのような場合も大丈夫！
ご質問は何なりと次のアドレスにお寄せ下さい

**contact@stakhanovite.io**

フランス語か英語となりますが、迅速にお答えするよう最大の努力をいたします！`,
          offer: {
            secureTitle: "セキュリティー",
            secure: "強化サーバー",
            robustTitle: "頑丈な",
            robust: "ブロードバンドネットワーク",
            fairTitle: "公正な",
            fair: "低手数料",
          },
          pool: {
            margin: "変動費: 1.8%",
            fixed: "固定費 340 ada (認可最低額)",
            saturation: "飽和",
            copyAddress: "コピーする",
            copyId: "プールのIDをコピーする",
          },
          pools: {
            title: "弊社のプール",
            pool1: "Stakhanovite #1",
            pool2: "Stakhanovite #2",
          }
        },
        faq: {
          title: 'Q＆A',
          general: {
            title: "カルダノとプルーフ・オブ・ステーク",
            cardanoTitle: "カルダノとは？",
            cardano: "カルダノは、プルーフ・オブ・ステーク（PoS）のコンセンサスのプロトコルに基づいたブロックチェーンです。ADA（エイダ）はその基軸通貨であり、カルダノ登録簿のセキュリティーは、ADA保有者共通の資産です。ステーキングメカニズムのお陰で、ネットワークセキュリティーに参加することが可能となっています。",
            stakingTitle: "ステーキングとは？",
            staking: "ADAを保有する人は誰でもカルダノ登録簿作成に参加できます。これがステーキングと呼ばれるものですが、このプロセスに、大多数と呼ぶにふさわしい数の保有者が参加することが重要なのです。そこで、ADA保有者に参加を促すために、生成を達成したブロックがADAで報酬を分配しています。それを可能にするため、ノードを２４時間・年中無休体制で稼働させ、多くのADAを集めることにより、定期的にブロックが生成できる環境を保つ必要があります",
            delegationTitle: "委任とは",
            delegation: "ADAをたくさん持っていなくても、あるいはテクノロジーのエキスパートでなくても、ご自分が所有しているADAを、カルダノのご任意のウォレットを使用して、ステークプール（以下「プール」）に委任することが可能です。プールは承認ノードを稼働させる役割を持ち、生成されたブロックの報酬は各委任者の委任額に応じて分配されます。プールからこのサービスに対して手数料が請求されます。",
          },
          delegation: {
            title: "委任",
            lockedTitle: "委任中のADAはロックされますか？",
            locked: "いいえ。保有ADAがロックされることはありません。委任中でもこれらのADAを送金し続けることができます。",
            looseTitle: "委任中はADAを失うのでしょうか？",
            loose: "いいえ。委任は安全なプロセスです。あなたに代わりにブロックを生成する権利をプールに与えるだけなのです。もしプールが違約行為を行ったり、予定よりも少ないブロックを生成した場合、もたらされるべき最悪の結果は、報酬を受け取らないことに止まります。そのようなことが起こった場合は、いつでもプールを変更することができます！",
            closeTitle: "委任した後、ウォレットをクローズすることはできますか？",
            close: "はい。ブロックチェーンにご自身の委任内容が登録されてしまえば、安全にウォレットをクローズすることができます。その後も、あなたのプールが予定通り稼働しているかどうか確認しに来てみてください！",
            costTitle: "委任の費用はどれくらい？",
            cost: `委任するには、ブロックチェーンでのトランザクション（取引記録）が必要です。その作業に0.2 ADA未満の費用がかかります。また、ウォレットの登録に2 ADAが必要ですが、ステーキングを止めた場合には、これらのADAは返還されます。

短くまとめると、委任初回は2.2 ADA未満の費用がかかります。その後プールを変更する場合には、0.2 ADA未満のトランザクション費用しかかかりません。`,
            feesTitle: "Stakhanovite手数料はどれくらい ?",
            fees: "弊社の手数料は、プロトコルが許可している最低額のものとなっており、その率は1.8 %です。具体例で言えば、１００ ADAの報酬があった場合は、Stakhanoviteが1.8 ADAを差し引き、お客様の手元に届くのは９８.２ADAとなります。",
          },
          rewards: {
            title: "報酬",
            expectTitle: "報酬はいつ受け取れますか？",
            expect: `最初の委任後、報酬を受け取るまで、３エポックを完全経過する待ち時間があります。それには１５日から２０日間かかりますが、エポックにどのタイミングで委任したかで変わります。そして最終エポック後、決まった期限（５日）で報酬の支払いが行われます。

委任を中止する場合も、同じ待ち時間がかかります。`,
            expectMuchTitle: "報酬はどれぐらいですか？",
            expectMuch: "プロトコルは、ステーク年利を約５%としています。これは、５日間のエポックあたり、約0.068%に相当します。",
            variationTitle: "なぜエポック毎に報酬額が異なるのでしょうか？",
            variation: "プールは、生成ブロックの数に応じて報酬を支払います。それぞれのエポックで、異なる数のブロックがそれぞれのプールに与えられるため、変化が生じるのです。",
            locationTitle: "報酬はどこにありますか？",
            location: `報酬は、各自のウォレットに紐付けされた専用アカウントアドレスに支払われます。ダイダロスかヨロイをご使用の場合、これらのウォレットで表示される残高は、報酬をすでに含んでいます。

ダイダロスは、お客様がADAを送金する際に、自動的に報酬を回収します（必要な場合のみ）。一方ヨロイは、送金が可能となる前に、報酬を手動で回収するよう言ってきます。`,
            changingTitle: "プールを変更する場合、３エポックをあらためて待たなければいけないのでしょうか？",
            changing: "いいえ。ただし、変更前のプールの報酬の支払いは３エポックを経なければなりません。",
            redelegateTitle: "あらためて５日毎に報酬を委任しなければいけないのですか？",
            redelegate: "いいえ。ウォレットの残高全てが自動的に委任されます。それは、報酬や初回委任以降ウォレットに送られてくるADA全てを含みます。",
            trustTitle: "報酬の支払いに関して、委任先のプールを信用してもいいのでしょうか？",
            trust: "いいえ。プロトコルが報酬を自動的に分配します。プールは、この点に関しては一切関与できません。",
          },
          wallets: {
            title: "ADAウォレット",
            whichTitle: "どのウォレットを使うべき？",
            which: `カルダノは主に二つのウォレットをユーザーに奨めていますが、決めるのはご自身です。

[ダイダロス](https://daedaluswallet.io)は完全ノードタイプのウォレットです。これは、ユーザーのコンピューターに対象ブロックチェーンの全データをダウンロードし、常にそのブロクチェーンをチェックします。したがい、それがユーザーのコンピューターの機能にかかる時間を一部消費する可能性があります。現時点で、ダイダロスのスマートフォン版は存在しません。詐欺にご注意ください！
            
[ヨロイ](https://yoroi-wallet.com)は、軽いウォレットで、アンドロイド、 iOS、あるいはデスクトップウェブブラウザーの拡張機能で使用することができます。ヨロイは、カルダノのブロックチェーンと対話するのにEmurgoによって運営されるサーバーを介します。したがって、ブロックチェーンの全データをダウンロードする必要がなく、そのため、ダイダロスよりもインストールや使用がずっと早く行えるのです。`,
            hardwareTitle: "ハードウェアウォレットも使えますか？",
            hardware: "はい。 Ledger S、Ledger Nano X あるいは Trezor Tの三つのいずれもカルダノに対応しており、ダイダロスやヨロイと組み合わせて使用することが可能です。ご自身のウォレットタイプに関する説明書を注意深く読むことをお勧めします。",
          },
        },
        delegator: {
          /* adress selector */
          please: 'STKHに委任したウォレットの報酬アドレスを入力してください。',
          store: '弊社は、個人データを一切保存しません！',
          input: '「stake1...」形式の報酬アドレス',
          enter: '入力',
          disclaimer: `ダイダロスでは、「委任機関の報酬」というタブ内に、報酬アドレスが載っています。ヨロイでは、「受け取る」内の「報酬」オプションの中に掲載されています。

これらのデータは、あくまでも情報として提供されています。`,
          /* unknown delegator */
          sorry: '何としたことか・・STKHにあなたの委任がないようです',
          check: 'STKHに委任した場合、入力したウォレットの報酬アドレスが「stake1***」で始まっているかどうかをご確認ください。委任したのが最近の場合は、弊社から報酬を受け取り次第、あらたに委任をしてみてください。弊社のサービスは毎時更新されます。',
          retry: '初めからやり直す',
          /* rewards panel */
          welcome: 'ようこそ！',
          update: 'これらの統計は毎時更新されます。直近の変更事項はすぐにはここへ反映されません。',
          current: '現在のエポック',
          saturation: '飽和',
          number: '委任数',
          stake: '自分のアクティブステーク',
          rewards: '報酬合計',
          last: '最近の報酬',
          history: '履歴ダウンロード'
        }
      },
    },
    fallbackLng: "en",

    // have a common namespace used around the full app
    ns: ["home", "faq"],
    defaultNS: "home",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
