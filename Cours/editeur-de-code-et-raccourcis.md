# Maîtriser son éditeur de code

En tant que développeur, il est important de bien maîtriser les raccourcis clavier et les combinaisons de touches qui permettent de se déplacer plus rapidement dans un texte au clavier ou d'effectuer des actions sans quitter le clavier des mains.

## Maîtriser de Emmet

Emmet est une boîte à outils pour développeurs web qui peut grandement améliorer votre flux de travail HTML et CSS, il est intégré par défaut à VSCode, et vous permet de créer très rapidement des balises HTML.

Par exemple le raccourcis : `ul>li*4` (à déclencher avec la touche `TAB`) va développer ce code HTML:

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

Emmet est très puissant et comporte beaucoup d'éléments de language similaires aux sélecteurs CSS. Vous en apprendrez en lisant [la documentation officielle](https://docs.emmet.io/).

## Les raccourcis de base (universel)

- `crtl+O` ouvrir un document
- `crtl+N` Créer un nouveau document
- `crtl+W` Fermer le document
- `crtl+S` Sauvegarder le document
- `crtl+A` Tout sélectionner
- `crtl+F` Rechercher
- `crtl+C` Copier
- `crtl+X` Couper
- `crtl+V` Coller
- `crtl+Z` Annuler la dernière action
- `crtl+Y` ou `ctrl+shift+Z` Rétablir la dernière action
- `Ctrl+Q` Quitter le logiciel

## Les raccourcis de VS CODE

- `crtl+shift-P` Afficher/accéder à toutes les commandes
- `crtl+T, R` accéder aux fichiers récents
- `crtl/cmd + clic` Ajouter un curseur
- `esc` Sortir d'un mode d'édition comme le multi-curseur ou la multi-sélection
- `crtl+D` Rechercher la prochaine occurence du mot sélectionner

[Voir ici](https://learn.microsoft.com/fr-fr/visualstudio/ide/productivity-shortcuts?view=vs-2022) les pricipaux raccourcis recommandés par Microsoft pour VS Code.

## se déplacer dans le texte au clavier

- `crtl/cmd + fleches droite/gauche` -> naviguer de mots en mots
- `page up/page down ( pavé numérique)` -> début/fin d'un écran
- `cmd + fleches bas/haut ou début/fin ( pavé numérique )` -> début/fin de ligne

si vous ajouter la touche `shift` (majuscule) avec l'un de ces raccourcis, ça permet de faire une sélection en même temps que le déplacement du curseur.
  
Vous pouvez également utiliser des raccourcis pour déplacer des blocs entier de texte, les duppliquer, faire des multi-sélection...
Soyez curieux et explorez les fichiers de configuration de raccourcis clavier, vous en apprendrez toujours plus !

## Bien configurer ses raccourcis clavier

Visual Studio Code, comme tous les logiciels de développement propose de nombreux raccourcis clavier configurables.
Si ces raccourcis ne vous plaisent pas, ou ne correspondent pas à ces exemple, vous pouvez les personnaliser dans les options du logiciels (petit engrenage en bvas à gauche de la fenêtre ou `Ctrk+K Crtl+S` )

- `alt + shift + w` -> envelopper un texte avec une balise
- `ctrl + l` -> sélectionner la ligne
- `shift + alt + fleche droite ->` étendre la sélection (à la prochaine balise)
- `alt + shift + fleche du bas` -> copier une ligne vers le base
- `alt + shift + fleche du haut` -> copier une ligne vers le haut

