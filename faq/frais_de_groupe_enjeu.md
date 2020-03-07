# Comment dois-je comprendre les frais affichés par un groupe d'enjeu ?

La structure de frais appliqués par un groupe d'enjeu se compose de plusieurs éléments. Il est important de bien tous les apprécier afin de pas être surpris quand viendra le jour des récompenses. Explications :

  1) Les frais fixes (fixed)

Les frais fixes sont la quantité d'Ada que les opérateurs du groupe prélèveront à la fin de chaque époque **quoiqu'il arrive**. Il est important de noter donc, que **si les récompenses totales du groupe d'enjeu sont inférieures au montant de ces frais fixes, aucun délégateur n'obtiendra de récompenses...** Enfin, ces frais fixes peuvent aussi être nuls.

  2) La marge des opérateurs du groupe d'enjeu (margin ratio)

La marge définit le pourcentage des récompenses totales que les opérateurs se reversent **après prélèvement des frais fixes** et **avant versement aux délégateurs**. Notez qu'un groupe d'enjeu avec une marge de 100% sera *de facto* considéré comme privé, à moins que vous souhaitiez ne rien recevoir et tout reverser aux opérateurs du groupe d'enjeu !

Enfin, le montant global de cette marge peut être affectée par le dernier paramètre : la récompense maximale.

  3) La récompense maximale (max_rewards)

La récompense maximale d'un groupe d'enjeu définit le **plafond supérieur de la marge que prélevera le groupe d'enjeu.**

**Exemple**

Un groupe d'enjeu auquel vous déléguez affiche les frais suivants et votre délégation représente 5% de l'enjeu global du groupe :

Fixe = 10 000 ADA
Marge = 20%
Max = 20 000 ADA

A la fin d'une l'époque, le groupe d'enjeu a gagné 150 000 ADA.

L'opérateur prélève son fixe de 10 000 ADA, restent donc 140 000 ADA.
Il calcule ensuite 20% de 140 000 ADA, soit 28 000 ADA.
Cela n'est pas possible, ses récompenses maximales sont de 20 000. Il ne prélèvera donc que 20 000 ADA sur les 28 000 ADA calculés.
Il reste donc maintenant de 120 000 ADA.

Puisque votre délégation représente 5% de l'enjeu global du groupe, vous serez récompensé à hauteur de 5% de ces 120 000 ADA, soit 6000 ADA.