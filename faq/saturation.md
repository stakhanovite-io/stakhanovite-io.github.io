# Qu'est-ce que la saturation d'un groupe d'enjeu ?

La saturation est le mécanisme par lequel Cardano s'assure qu'un groupe d'enjeu ne peut pas grossir indéfiniment. Une fois atteint le point de saturation, c'est à dire une certaine quantité d'ada en délégation (enjeu), les récompenses du groupe d'enjeu resteront les mêmes, quelque soit le nombre de blocs validés grâce à cet enjeu. Il est donc évident que si vous faites partie d'un groupe d'enjeu saturé, mieux vaut vite en partir !

Ce mécanisme vise tout simplement à controler le nombre de groupe d'enjeu jusqu'à atteindre une quantité optimale. Cette quantité optimale dépendra de la valeur donnée au point de saturation lors de la création du registre distribué.

**Exemple (Attention, ces calculs ont uniquement valeur pédagogique et ne reflètent pas une application numérique réelle)**

Imaginons que le point de saturation soit fixé à 25 000 000 ADA et que cela corresponde à une récompense maximale de 10 000 ADA.

		Groupe d'enjeu A - Non saturé					| Groupe d'enjeu B -  Saturé
		Récompenses : 1000								| Récompenses : 25000 
		ADA en délégation : 1 000 000					| ADA en délégation : 30 000 000
		Récompense pour chaque ADA délégué : 0.001 ADA 	| Récompense pour chaque ADA délégué : 0.0008 ADA


Dans cet example, les délégateurs du groupe saturé gagnent 20% de moins par ADA délégué !
