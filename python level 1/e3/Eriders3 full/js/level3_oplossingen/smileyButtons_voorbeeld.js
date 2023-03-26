//  hier komt de javascript code voor je oefening.
//  zorg ervoor dat je vanuit de html naar het juiste javascript bestand linkt hé!
//  let hierbij op de mappen-structuur.

//  deze javascript code wordt direct uitgevoerd als de pagina wordt ingeladen.  
//  ze staat niet in een functie die aan een knop is gekoppeld

//  zoek de div met id "divContent" en houd deze bij in variabele 'divContent'
let div = document.getElementById("smileyButtonsDiv");

//  nu maken we een nieuwe knop
let button = document.createElement("a");
//  geven de knop het uiterlijk van een boze smiley
button.innerHTML = ":(";
//  geven de knop de klasse "smileyButton" mee
button.className = "smileyButton";
//  hang aan de onClick event van de knop een functie
button.addEventListener("click", function(){
  //  verander inhoud naar blije smiley
 button.innerHTML = ":)";
  //  verander de achtergrondkleur naar wit
 button.style.background = "#FFFFFF";
  //  veraner de tekstkleur
 button.style.color = "#768D87";
//  einde van de naamloze functie die we aan de knop hangen.  Ook niet vergeten de haakjes te sluiten voor de aanroep van addEventListener!!
});
//  en we voegen de knop toe aan de div
div.appendChild(button);

