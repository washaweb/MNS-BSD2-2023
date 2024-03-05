# Exercice TODO vuejs

## Ajouter une case à cocher devant le texte de la todo

- cette case à cocher doit correspondre (cochée/décochée) à l'état de todo.ended,
- c'est à dire que si `ended` est false, la case est décochée,
- si je coche la case, je dois donc passer la valeur à true

> astuce: utilser v-model

## ajouter le style correspondant à l'état de la todo

- si la todo est "ended", barrer le texte affiché avec la classe utilitaire de bootstrap : `text-decoration-line-through`
- si la todo n'est pas ended, la classe ne doit pas être appliquée sur le texte

- Bonus: utiliser une style de texte pour passer la couleur à la valeur `#ccc` lorsque ended est true
