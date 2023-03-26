//  hier komt de javascript code voor je oefening.
//  zorg ervoor dat je vanuit de html naar het juiste javascript bestand linkt hé!
//  let hierbij op de mappen-structuur.

//  deze javascript code wordt direct uitgevoerd als de pagina wordt ingeladen.  
//  ze staat niet in een functie die aan een knop is gekoppeld

//  zoek de paragraaf met id "boodschap" en houd deze bij in variabele 'boodschap'
const boodschap = document.getElementById("boodschap");
//  pak de inhoud van die paragraaf en houd die bij in variabele 'boodschapTekst'
const boodschapTekst = boodschap.innerHTML;

//Eerste alinea met vaste tekst
//  maak een paragraaf tag en houd die bij in variabele 'uitleg'
let uitleg = document.createElement("p");
//  pas de tekst van die paragraaf aan naar "En deze verwelkoming wordt geplaatst via JS:"
uitleg.innerHTML = "En deze verwelkoming wordt geplaatst via JS:";
//  zoek de div met id "zegHeyContent" en houd die bij in variabele 'div'
let div = document.getElementById("zegHeyContent");
//  voeg de nieuw gemaakte paragraaf toe als kind van de div
div.appendChild(uitleg);

//  Tweede alinea met zelfde tekst als in HTML
//  maak een paragraaf tag en houd die bij in variabele 'nieuweBoodschap'
let nieuweBoodschap = document.createElement("p");
//  zet de inhoud van die paragraaf op de variabele boodschapTekst van bovenaan dit script.  
//  Zo kopieer je eigenlijk de inhoud van de bestaande paragraaf uit de HTML naar de nieuwe paragraaf die we nu met javascript maken.
nieuweBoodschap.innerHTML = boodschapTekst;

//  voeg de nieuw gemaakte paragraaf toe als kind van de div
div.appendChild(nieuweBoodschap);