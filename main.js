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
$(document).ready(function(){
  var caratteri ='ABCDEFGHILMNOPQRSTUVZ';
  //definisco un array in cui andrò ad inserire i 100 giocatori generati casualmente dalla mia funzione genera giocatore
  var codici_giocatore =[];


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

    codici_giocatore.push(codice_giocatore);

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

  var giocatori_basket =[];
  //genero quindi 100 oggetti giocatore con un for
  for(var i=0; i< 100; i++){
    var giocatore = genera_giocatore();
    giocatori_basket.push(giocatore);
  }
  console.log(giocatori_basket);

 // definisco un template Handlebars per la lista dei codici
  var lista_template = $('#template-lista').html();
  var lista_function = Handlebars.compile(lista_template);

  //inserisci nella lista un item per ciascun giocatore inserendovi il codice relativo
  for(var i=0; i < giocatori_basket.length; i++){
    // var elemento= '<li class="giocatore">';
    // elemento += '<a href="#" data-indice="' + i +'">'+ giocatori_basket[i].codice +'</a>'+'</li>';
    // //inserisco l'elemento creato nella lista codici Giocatore
    // $('#lista-codici').append(elemento);

    var elementi_lista ={
      'codice_giocatore' : giocatori_basket[i].codice,
      'indice-data' : i
    }

    var html_finale = lista_function(elementi_lista);
    $('#lista-codici').append(html_finale);
  }

  $('#lista-codici li a').click(function(){
    //tramite l'indice data univoco dato ad ogni elemento della lista mi vado a recuperare il giocatore corrispondere a quell'indice all'interno dell'array di oggetti
    var giocatore_selezionato = $(this).attr('data-indice');

    $('.container-codice-giocatore').text(giocatori_basket[giocatore_selezionato].codice);

    $('.punti h2 span').text(giocatori_basket[giocatore_selezionato].punti);

    $('.rimbalzi h2 span').text(giocatori_basket[giocatore_selezionato].rimbalzi);

    $('.falli h2 span').text(giocatori_basket[giocatore_selezionato].falli);

    $('.tiri_2 h2 span').text(giocatori_basket[giocatore_selezionato].tiri2);
   //
    $('.tiri_3 h2 span').text(giocatori_basket[giocatore_selezionato].tiri3);

    $('.statistiche_giocatori').show();


  });



  //Funzione genera random
  function generatoreRandom(min, max) {
    return Math.floor(Math.random()*(max - min + 1))+ min;
  }
});
