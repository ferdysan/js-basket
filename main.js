// Il software deve generare casualmente le statistiche di gioco di 100 giocatori di basket per una giornata di campionato.
// In particolare vanno generate per ogni giocatore le seguenti informazioni, facendo attenzione che il numero generato abbia senso:
// - Codice Giocatore Univoco (formato da 3 lettere maiuscole casuali e 3 numeri)
// - Numero di punti fatti
// - Numero di rimbalzi
// - Falli
// - Percentuale di successo per tiri da 2 punti
// - Percentuale di successo per tiri da 3 punti
// Tutti i giocatori verranno visualizzati tramite il loro codice (in una select, una lista, …).
// Una volta cliccato sul codice giocatore, nel corpo principale verranno visualizzate le statistiche corrispondenti.

//genero un Giocatore
//partiamo da una stringa perchè così facendo il for successivo non mi somma i numeri perchè li tratta come una stringa
//creo una funzione genera Giocatore
var characters = 'ABCDEFGHILMNOPQRSTUWVZ';
var player_codes =[];

function generaGiocatore(){

var player_code = '';

do{
player_code ='';
//genero 3 lettere e le concateno al codice del giocatore
for (var i = 0; i < 3; i++) {
  var char_position = number_generator(0,25);
  var char = characters.charAt(char_position);
  player_code+=char;
}
//genero tre cifre e le concateno al codice del giocatore
//tramite il for accodo tre numeri perchè il + associato ad una stringa concatena non somma
for( var i=0; i <3; i++){
  player_code += number_generator(0,9);
}
}while(player_codes.includes(player_code));


player_codes.push(player_code);

//genero numero di punti, rimbalzi e falli
var punti = number_generator(0,40);
var rimbalzi= number_generator(0,200);
var falli = number_generator(0,5);


//genero le percentuali
var perc_2 = (number_generator(0,1000)/10).toFixed(2);
var perc_3 = (100 - perc_2).toFixed(1);

//construisco un oggetto giocatore
var player={
  "codice": player_code,
  "punti": punti,
  "rimbalzi": rimbalzi,
  "perc_2": perc_2,
  "perc_3":perc_3
}

return player;

}

var players =[];

//genero 100 oggetti giocatore
for (var i = 0; i < 100; i++) {
  var player = generaGiocatore();
  players.push(player);
}

//aggiungo alla select una option per ciascun giocatore
for (var i = 0; i < players.length; i++) {
  var new_option = '<option value="' + i + '">' + players[i].codice + '</option>';
  $('player_list').append(new_option);
}

//reagisco al cambio di selezione
$('#player_list').change(function() {
  var selected_player = $(this).val();

  var selectec_code = players[selected_player].codice;

  $('.player_code_container').text(selected_code);

  var selected_punti =players[selected_player].punti;
  $('.punti h2 span').text(selected_punti);

  $('.rimbalzi h2 span').text(players[selected_player].rimbalzi);
});

//genero una funzione per generare un numero random
function number_generator(){
  return Math.floor((Math.random() * max - min + 1) +min);
}
