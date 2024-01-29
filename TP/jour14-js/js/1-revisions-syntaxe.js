// En javascript j'écris des commentaires sur une ligne avec //

/*
 sur plusieurs lignes 
 avec les commentaires étoile
 /\* *\/
 */

// on fait une alerte pour vérifier que le fichier est chargé
// alert('fichier chargé')

// les différentes variables
//-------------------------
// type Number
1000;
-1000;
0.23948578;
-1237.345;
let  a = 123;
console.log(typeof a); //number
console.log(a) // 123;

// type String
"du texte";
let b = "toto";
console.log(b);

//type Boolean
true;
false;
let c = true;
console.log(c);

// type undefined
let toto;
console.log(typeof toto); //le type de la variable est undefined
toto = 'test' //je définis une valeur de type string
console.log(typeof toto);
toto = 123 //je peux modifier le type et la valeur
console.log(typeof toto);

// type null
// j'assibne le type null
toto = null
console.log(typeof toto); //le type de null est object

// le type Array
// un array est un ensemble de variables, stoqué dans une variable
// on peut atteindre les éléments d'un tableau (array), grâce à l'index du tableau
let monPanier = ['orange', 'pomme', 'raisin', 'banane']
// les index commencent à 0, ici j'interroge l'index 1 du tableau
console.log(monPanier[1]) // 'pomme'

// les tableaux peuvent contenir n'importe quel type de variable
// ici on stocke tous les types de variables
let fourreTout = [true, 123, 'toto', ['autre', 'tableau', 'exemple'], { nom: 'toto', prenom: 'tata'}];

// dès que les tableaux deviennent complexes, on écrira plutôt comme ceco :
let fourreTout2 = [
  true, 
  123,
  'toto',
  [
    'autre',
    'tableau',
    'exemple'],
  {
    nom: 'toto',
    prenom: 'tata'
  }
];

// type Object
let monObj = {
  prop1: 'valeur1',
  prop2: 'valeur2',
}

// les objets peuvent contenir toute sorte de valeurs

let vehicule = {
  roues: 2,
  sieges: 2,
  passagers: [
    {
      nom: 'Michel',
      prenom: 'Vaillant'
    },
    {
      nom: 'John',
      prenom: 'Doe'
    }
  ],
  finitions: ['jantes alliage', 'peinture rouge', 'etc...']
}

// Quelques règles :

// nommer une variable : 
/*
	on ne commence pas un chiffre
	pas d'accent
	pas d'espace
	pas de caractère spéciaux
  pas de mot réservé (par le langage)
*/
// let 1panier // <--erreur (commence par un chiffre)
//let class //<-- erreur (mot réservé)