// Il software deve generare casualmente le statistiche di gioco di
// 100 giocatori di basket per una giornata di campionato.
// In particolare vanno generate per ogni giocatore le seguenti
// informazioni, facendo attenzione che il numero generato abbia
// senso:
// - Codice Giocatore Univoco (formato da 3 lettere maiuscole casuali e 3 numeri)
// - Numero di punti fatti
// - Numero di rimbalzi
// - Falli
// - Percentuale di successo per tiri da 2 punti
// - Percentuale di successo per tiri da 3 punti


//definisco le variabili

var caratteri ='ABCDEFGHILMNOPQRSTUVZ';
//definisco un array in cui andrò ad inserire i 100 giocatori generati casualmente dalla mia funzione genera giocatore
var giocatori_basket =[];


// elaboro la funzione per la creazione del Giocatore
function genera_giocatore (){
  //mi definisco una variabile in cui inserire i caratteri generati random concatenati con i numeri
  var codice_giocatore='';

  for (var i = 0; i < 3; i++) {
    //genero una variabile che avrà ad ogni ciclo un numero diverso
    var posizione_carattere = generatoreRandom(0, 20);
    //uso quella variabile come indice per il metodo charAt che mi andrà a pescare un carattere dalla variabile caratteri
    var carattere = caratteri.charAt(posizione_carattere);
    //concateno ogni carattere trovato alla variabile codice giocatore
    codice_giocatore += carattere;
  }
  //genero 3 cifre e le concateno alla variabile codice giocatore
  for(var i =0; i<3; i++){
    //alla variabile giocatore ora concateno 3 numeri
   codice_giocatore += generatoreRandom(0, 9);
  }

  //genero 3 variabili per le statistiche giocatore
  var punti_fatti = generatoreRandom(0,100);
  var rimbalzi = generatoreRandom(50, 200);
  var falli = generatoreRandom(0,100);

  //genero le percentuali
  var perc2= (generatoreRandom(0,1000)/10).toFixed(1);
  var perc3= (100 - perc2).toFixed(1);

  //con tutti i dati a disposizione creo un oggetto giocatore
  var giocatore={
    'codice' : codice_giocatore,
    'punti' : punti_fatti,
    'rimbalzi': rimbalzi,
    'falli' : falli,
    'tiri2' : perc2,
    'tiri3' : perc3
  }
  return giocatore
}

for(var i=0; i< 100; i++){
  var giocatore = genera_giocatore();
  giocatori_basket.push(giocatore);
}
console.log(giocatori_basket)


//Funzione genera random
function generatoreRandom(min, max) {
  return Math.floor(Math.random()*(max - min + 1))+ min;
}
