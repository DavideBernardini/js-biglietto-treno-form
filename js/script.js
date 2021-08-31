// Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// seleziono i bottoni
var btnGenera = document.getElementById("genera");
var btnAnnulla = document.getElementById("annulla");

// click bottone genera
btnGenera.addEventListener('click', 
    function() {
        // prendo i valori dei campi input e select
        var nome = document.getElementById("nome").value;
        var km = parseInt(document.getElementById("km").value);
        var fasciaEtà = document.getElementById("fascia-età").value;

        // genero una numero random per la carrozza e il codice CP
        var carrozza = Math.floor((Math.random() * 9) + 1);
        var cp = Math.floor((Math.random() * (99999 - 90000)) + 90000);

        // calcolo il prezzo in base alla fascia di età
        var prezzo = km * 0.21;
        var offerta = "Biglietto standard";
        if ( fasciaEtà == "minorenne" ) {
            prezzo -= prezzo * 0.2;
            offerta = "Sconto Minorenne";
        } else if (fasciaEtà == "over") {
            prezzo -= prezzo * 0.4;
            offerta = "Sconto Silver";
        } 
        // Inserisco i dati nell'html se sono validi;
        if ( nome == "" || !(isNaN(nome)) ) {
            alert("Inserisci un nome e un cognome validi.")
        } else if ( km == "" || isNaN(km) ) {
            alert("Inserisci un valre numerico per indicare i Km da percorrere.")
        } else {
            document.getElementById("nome-passeggero").innerHTML = nome;
            document.getElementById("tipo-offerta").innerHTML = offerta;
            document.getElementById("carrozza").innerHTML = carrozza;
            document.getElementById("codice-cp").innerHTML = cp;
            document.getElementById("totale-prezzo").innerHTML = prezzo.toFixed(2) + "€";
        }
        
        // rendo visibile il biglietto
        document.getElementById("biglietto").classList.add("mostra");
        document.getElementById("titolo-biglietto").classList.add("mostra");
    }
);

// click bottone annulla
btnAnnulla.addEventListener('click', 
    function() {
        // nascondo il biglietto
        document.getElementById("biglietto").classList.remove("mostra");

        // resetto i campi del form
        document.getElementById("nome").value = "";
        document.getElementById("km").value = "";
        document.getElementById("fascia-età").selectedIndex = "0";
    }

);