import { maFonctionExportee1, toto } from './module.mjs';

console.log('le script main.js est chargé', toto); //ici toto viens de l'export du module mondule.mjs
maFonctionExportee1() //ici la fonction a été exportée dans le module, je dois l'importer pour l'utiliser


//voir https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Modules