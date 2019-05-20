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

// elaboro la funzione per la creazione del Giocatore
function genera_giocatore (){
  //mi definisco una variabile in cui inserire i caratteri generati random concatenati con i numeri
  var codice_giocatore='';

  for (var i = 0; i < 3; i++) {
    //genero una variabile che avrà ad ogni ciclo un numero diverso
    var posizione_carattere = generatoreRandom(0, 20);
    var carattere = caratteri.charAt(posizione_carattere);
  
    codice_giocatore += carattere;
  }
  return codice_giocatore
}

var test = genera_giocatore ();

console.log(test);

//Funzione genera random
function generatoreRandom(min, max) {
  return Math.floor(Math.random()*(max - min + 1))+ min;
}
