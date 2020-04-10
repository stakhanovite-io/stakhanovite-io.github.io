## Comprendre la structure des frais affichés par un groupe d'enjeu

La structure de frais appliqués par un groupe d'enjeu se compose de plusieurs éléments. Il est important de bien les apprécier pour ne pas être surpris au moment de recevoir les récompenses.

>### Frais fixes (Fixed fees)

Les frais fixes sont la quantité d'Ada que les opérateurs du groupe prélèveront à la fin de chaque époque **quoiqu'il arrive**.

  - Si les récompenses totales du groupe d'enjeu sont inférieures au montant de ces frais fixes, **aucun délégateur n'obtiendra de récompenses.**

  - Les frais fixes peuvent être nuls.

>### Marge bénéficiaire (Margin ratio)

La marge bénéficiaire définit le pourcentage des récompenses totales que les opérateurs se versent **après prélèvement des frais fixes** et **avant versement aux délégateurs**. 

  - Un groupe d'enjeu avec une marge de 100% sera considéré comme privé, à moins que vous souhaitiez tout reverser aux opérateurs du groupe d'enjeu !

  - **Le montant global de cette marge peut être affectée par le dernier paramètre : la récompense maximale.**

>### La récompense maximale (Max rewards)

La récompense maximale d'un groupe d'enjeu définit le **plafond supérieur de la marge bénéficiaire que prélevera le groupe d'enjeu.**

#### Exemple :

Vous déléguez à un groupe d'enjeu qui affiche les frais suivants

>**Fixe = 10 000 ADA // Marge = 20% // Max = 20 000 ADA**

A la fin d'une époque, le groupe d'enjeu a gagné **150 000 ADA.**

L'opérateur prélève **10 000 ADA de fixe**. Il calcule ensuite 20% des 140 000 ADA restants, soit 28 000 ADA. Il ne prélèvera que 20 000 ADA sur les 28 000 ADA calculés. Restent maintenant 120 000 ADA à partager pour les délégateurs. Votre enjeu délégué représente **5% de l'enjeu global du groupe**, vous serez donc récompensé à hauteur de **5% de ces 120 000 ADA, soit 6000 ADA.**
