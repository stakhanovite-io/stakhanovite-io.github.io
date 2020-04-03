# Lorsque je délègue mes ADA à un groupe d'enjeu, à quel moment vais-je recevoir mes récompenses ?

Le protocole de preuve d'enjeu sur lequel repose Cardano découpe le temps en époques. Une époque dure 5 jours. Avant de recevoir vos récompenses, vous devez attendre que votre délégation soit effective, c'est à dire qu'elle ait bien servi au calcul des ada délégués au sein du groupe d'enjeu. Cette étape prend une époque entière. Vous ne recevrez donc vos premières récompenses qu'à la fin de l'époque n+2. Un petit schéma ci-dessous, pour comprendre !

| epoch 0 | epoch 1 | epoch 2 | epoch 3 | etc ...
   x                          x
   <-------------------------->
   ^Délégation                ^Première récompense

Par la suite, vous recevrez vos récompenses à la fin de chaque époque. Ainsi à l'époque 3, vous recevrez les récompenses du montant délégué durant l'époque 1, etc ...

Notez qu'à la fin de l'époque 2, vous recevez vos premières récompenses. Ces dernières sont automatiquement ajoutées à la somme déléguée initialement. Ce qui signifie qu'à l'époque 4, vous recevrez des récompenses correspondant à un enjeu égal au montant initial délégué + les première récompenses ! Et ainsi de suite.

| epoch 0 | epoch 1 | epoch 2 | epoch 3 | epoch 4 | epoch 5 | epoch 6 | epoch 7 |
   x                          x
   <-------------------------->
   ^Délégation                ^Première récompense
             <-------------------------->
                                        x
                                        ^Deuxième récompense 
                       <-------------------------->
                                                  x
                                                  ^Troisième récompense
                                <-------------------------->
                                                           x
                              ^Récompense n°1 obtenues     ^Quatrième récompense - Calculées sur la mise initiale + Récompense n°1 obtenues !
