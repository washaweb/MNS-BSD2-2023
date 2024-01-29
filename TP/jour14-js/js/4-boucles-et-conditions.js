// CONDITIONS

/*
  Une condition est une expression dont 
  l'évaluation produit une valeur soit vraie, soit fausse : 
  on parle de valeur booléenne.
*/
if (true) {
  // la condition du if est toujours vraie :
  // les instructions de ce bloc seront toujours exécutées
}
if (false) {
  // la condition du if est toujours fausse :
  // les instructions de ce bloc ne seront jamais exécutées
}

//exemple en application
var nombre = Number(prompt("Entrez un nombre :"));

if (nombre >= 0) {
  console.log(nombre + " est positif ou nul");
}


//else = alternative d'action

var nombre = Number(prompt("Entrez un nombre :"));
if (nombre > 0) {
  console.log(nombre + " est positif");
} 
else {
  console.log(nombre + " est négatif ou nul");
}


//Imbriquer des conditions


var nombre = Number(prompt("Entrez un nombre :"));
if (nombre > 0) {
  console.log(nombre + " est positif");
} else { // nombre <= 0
  if (nombre < 0) {
      console.log(nombre + " est négatif");
  } else { // nombre === 0
      console.log(nombre + " est nul");
  }
}

// multi conditions
var nombre = Number(prompt("Entrez un nombre :"));
if (nombre > 0) {
  console.log(nombre + " est positif");
} else if (nombre < 0) {
  console.log(nombre + " est négatif");
} else {
  console.log(nombre + " est nul");
}


//Créer des conditions composées avec les oppérateurs

//and
if ((nombre >= 0) && (nombre <= 100)) {
  console.log(nombre + " est compris entre 0 et 100");
}
//or
if ((nombre < 0) || (nombre > 100)) {
  console.log(nombre + " est en dehors de l'intervalle [0, 100]");
}
//non (!) = inverse le résultat du test
if (!(nombre > 100)) {
  console.log(nombre + " est inférieur ou égal à 100");
}


//switch
switch (expression) {
case valeur1:
  // instructions exécutées quand expression vaut valeur1
  break;
case valeur2:
  // instructions exécutées quand expression vaut valeur2
  break;
//...
default:
  // instructions exécutées quand aucune des valeurs ne correspond
}

//exemple d'application
var meteo = prompt("Quel temps fait-il dehors ?");
switch (meteo) {
case "soleil":
  console.log("Sortez en t-shirt.");
  break;
case "vent":
  console.log("Sortez en pull.");
  break;
case "pluie":
  console.log("Sortez en blouson.");
  break;
case "neige":
  console.log("Restez au chaud à la maison.");
  break;
default:
  console.log("Je n'ai pas compris !");
}


//attention à ne pas oublier l'instruction break
var x = "abc";
switch (x) {
case "abc":
  console.log("x vaut abc");
  // pas de break : on passe au bloc suivant !
case "def":
  console.log("x vaut def");
  break;
}


// Boucles

// tableau d'animaux
zoo = ["lama","panda","ours","lemings","poisson"];

// tableau.push() ajoute un ( ou plusieurs ) élément à la fin
zoo.push("requin"); 

// tableau.pop() supprime dernier élément et le retourne
animal = zoo.pop(); // animal contient "requin"

// tableau.join(separator) : créer string avec 
// éléments du tableau séparés par le separator
console.log( zoo.join("|") );
// => lama|panda|ours|lemings|poisson

// boucle for
/*for(intial ; condition ; a chaque itération ){
}
*/
for(i=0; i<zoo.length; i++){
	console.log(zoo[i]);
}



function jointure(tableau, separateur){
	jointure_tableau = "";
	// 1) lister les éléments du tableau
	for(i=0; i<tableau.length ; i++){
		
		// 2) ajouter l'élément dans jointure_tableau
		jointure_tableau += tableau[i];

		// tant qu'on est pas au dernier elt, 
		// on ajoute separator
		if( i != tableau.length - 1 ){
			jointure_tableau += separateur;
		}
		
	}
	// 3) renvoyer la jointure_tableau
	return jointure_tableau;
}
console.log( jointure(zoo, "|") );
// 
zoo.join("|");

// => lama|panda|ours|lemings|poisson

for(i=0; i<zoo.length; i++){
	console.log(zoo[i]);
}

// boucle while
i=0;
while(i<zoo.length){
	console.log(zoo[i]);
	i++;
}

// parcours d'objet : for in
chaise={
	pieds: 4, 
	assise: "paille", 
	dossier: true
};

// ajout de propriété à un objet
chaise.name = "chaisette";

for( property in chaise ){
	console.log( chaise[property] );
}

// syntaxes :
// objet.propriete
chaise.assise;
chaise["assise"];

for( property in zoo ){
	console.log( zoo[property] );
}