// Opérateurs
// voir https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
// les opérations comme en mathématique, s'exécutent dans un certain ordre, on parle de la précédence des opérateurs
// (1 + ( (2 ** 3) * 4 / 5) ) >> 6
//  │    │ └─ 1. ─┘        │ │
// │    └────── 2. ───────┘ │
//└────────── 3. ──────────┘

// Opérateurs arithmétiques
// = veut dire assigne la valeur 
let a = 3 + 4; // a vaut 7
let b = 2 - 5;
let c = 1 * 4;
let d = 2 / 5;
// Opérateurs incrémentaux
a += 4; // équivant à :   a = a + 4 // a vaut 11
a -= 4; // équivant à :   a = a - 4 // 7
a *= 4; // équivant à :   a = a * 4 // 28
a /= 4; // équivant à :   a = a / 4 // 7

// incrémentation de 1
console.log(a);
console.log(a++); // 7
console.log(a); //8 // a vaut 8 après la ligne du console.log()
console.log(++a); //ici le ++ est avant, donc l'incrément est fait avant le console.log() // 9

// même chose en décrémentation
a--;
--a;

// Opérateurs concaténation
let age = 20;
let str1 = "Je m’appelle John Doe"; //utilisation des doubles quotes
let str2 = 'J’ai 20 ans'; //utilisation des simples quote
str2 = `J’ai ${age} ans`; //utilisation des back-ticks pour insérer des variables dans la chaine de caractère

console.log( str1 + ' et ' + str2); //concaténation avec le signe +
console.log(`${str1} et ${str2}`); // concaténation avec des back-ticks

// attention, les simples et doubles quotes ne permmetent pas de faire des retours à la ligne, il faut alors "protéger" le retour avec un anti-slash

let maVar = "je fais un \
retour à la ligne"
// si je veux utiliser des simples quotes dans une string entourée de simples quotes, je dois aussi protéter ces caractères avec des anti-slash
let maVar2 = 'je m\'appelle Henri, je voudrai bien réussir ma vie'

// avec les back ticks pas besoin
let maVar3 = `
je m'appelle Henri, 
je voudrai bien "réussir" ma vie
et en plus je peux insérer des variables :
J'ai ${age} ans.
`

console.log(maVar3)

// attention au type des variables
let f = 10;
let g = '10';
console.log(f, g);

// si je fais une addition entre f et g
console.log(f + g); // on pourrait croire qu'on obtient 20, mais en fait JavaScript fait une concaténation de 1010.
//1010

// pour résoudre ce problème, il faut s'assurer que la variable g est bien un number
console.log( f + Number(g) )//ici on force le type Number sur g 
// 20

//on peut aussi utiliser la fonction parseInt() ou parseFloat(), pour convertir en nombre un entier ou un nombre flottant
console.log( f + parseInt(g) ) //convertit en un entier
// 20

// il existe un raccourcis pour convertir une string en number avec encore une fois le signe =
console.log( g ) // '10'
console.log( +g ) // 10

console.log('resultat final: ')
console.log(f + +g); //20

