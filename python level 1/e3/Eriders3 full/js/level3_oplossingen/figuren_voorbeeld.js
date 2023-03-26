//  hier komt de javascript code voor je oefening.
//  zorg ervoor dat je vanuit de html naar het juiste javascript bestand linkt hé!
//  let hierbij op de mappen-structuur.

//  deze javascript code wordt direct uitgevoerd als de pagina wordt ingeladen.  
//  ze staat niet in een functie die aan een knop is gekoppeld

//  zoek de div met id "divContent" en houd deze bij in variabele 'divContent'
let divContent = document.getElementById("divContent")


//  nu gaan we een nieuwe alinea maken en toevoegen aan onze div

//  maak een paragraaf tag en houd die bij in variabele 'tekst'
let tekst = document.createElement("p");
//  pas de tekst van die paragraaf aan naar "Kijk hoe mooi!!:"
tekst.innerHTML = "Kijk hoe mooi!!:";
//  voeg de nieuw gemaakte paragraaf toe als kind van de div
divContent.appendChild(tekst);


//  nu mogen de sterretjes komen

//  maak een lus die 9 keer wordt uitgevoerd
for(let i = 0; i<9; i++){
  //  maak een nieuwe paragraaf-tag aan
  let figuur = document.createElement("p");
  //  als onze teller i groter is dan 2 en kleiner dan 6 ....
  if(i>2 && i<6){
     //  ...  dan zet de inhoud van de paragraaf op een vol sterretje
     figuur.innerHTML = "&#9734";
 }
 else{
    // ..  anders zet de inhoud van de paragraaf op een leeg sterretje
    figuur.innerHTML = "&#9733";
 } //  einde van de if ...  then  ... else ...   
  
  //  voeg de nieuwe paragraaf toe aan de divContent
  divContent.appendChild(figuur);
}    //  einde van de for-lus

