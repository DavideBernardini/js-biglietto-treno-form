// Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// bottoni
var btnGenera = document.getElementById("generate");

// evento bottone genera
btnGenera.addEventListener("click",
        function() {
        // prendo i valori del form
        var nameP = getElementById("name").value;
        var km = parseInt(document.getElementById("km").value);
        var ageGroup = document.getElementById("age").value;

        // calcolo prezzo biglietto
        var ticketPrice = km * 0.21;
        if ( ageGroup == "minor" ) {
            ticketPrice -= ticketPrice * 0.2;
        } else if (ageGroup == "senior") {
            ticketPrice -= ticketPrice * 0.4;
        } 
    }
    // inietto i dati nel biglietto
    document.getElementById("passenger_name").innerHTML = nameP;
    document.getElementById("price").innerHTML = ticketPrice;
    // mostro il biglietto
    document.getElementById("ticket_info").classList.add("show");
);
