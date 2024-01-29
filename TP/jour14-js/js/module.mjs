// dans un module, pour exporter une variable ou une fonction, on utilise le mot-clé export
export const tata = 'tata'

// export direct d'une fonction
export function maFonctionExportee1() {
  console.log('je viens d’un module');
}

const toto = 'toto'

function maFonctionExportee2() {
  console.log('je viens d’un module');
}
// export différé, on peut exporter l'ensemble à la fin sous la forme d'un objet
export { maFonctionExportee2, toto };

