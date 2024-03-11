# Exercice du router

- Créer un nouveau projet vuejs, avec `vue-router`
- Remplacer la css de base par celle de bootstrap
- Créer 2 routes/views qui correspondent à ces chemins :

- Users     -> UsersView.vue
- User/:id  -> UserView.vue

La route `users` devra lister des utilisateurs selon les données suivantes :

```js
const users = [
  {
    id: 1,
    image: 'chemin/vers/une/image1.jpg',
    firstname: 'John',
    lastname: 'Doe',
  },
  {
    id: 2,
    image: 'chemin/vers/une/image2.jpg',
    firstname: 'Maria',
    lastname: 'Doe',
  },
  {
    id: 3,
    image: 'chemin/vers/une/image3.jpg',
    firstname: 'Jack',
    lastname: 'Smith',
  },
  {
    id: 4,
    image: 'chemin/vers/une/image4.jpg',
    firstname: 'Doris',
    lastname: 'Morgan',
  },
  {
    id: 5,
    image: 'chemin/vers/une/image5.jpg',
    firstname: 'Martin',
    lastname: 'Black',
  }
]
```

> Note: Remplacer les chemins des images vers de vraies images que vous intégrerez dans le projet

- **Dans la page de liste**, faire une boucle sur les utilisateurs pour afficher simplement leur nom, prénom ainsi qu'un lien qui permet de consulter les détails (vers la page user/:id)
- **Dans la page détail**, vous devez créer une page qui affiche les détails de chaque utilisateur, en utilisant une route dynamique. On se se base sur l'id unique d'un utilisateur :
  Par exemple : `user/1` devra afficher la page de `John Doe`
  Le template de la page doit afficher l'image, le nom et le prénom de l'utilisateur, ainsi qu'on bouton pour retourner à la liste
- Créer une page d'erreur 404

> Indice : utilisez les params/props d'une route pour passer l'objet des données d'un utilisateur entre la vue de liste et la vue de détail
