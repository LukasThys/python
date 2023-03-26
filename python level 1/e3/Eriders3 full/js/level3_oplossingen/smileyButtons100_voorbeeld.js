//  hier komt de javascript code voor je oefening.
//  zorg ervoor dat je vanuit de html naar het juiste javascript bestand linkt hé!
//  let hierbij op de mappen-structuur.

//  deze javascript code wordt direct uitgevoerd als de pagina wordt ingeladen.  
//  ze staat niet in een functie die aan een knop is gekoppeld

//  zoek de div met id "divContent" en houd deze bij in variabele 'divContent'
let div = document.getElementById("smileyButtonsDiv");

//  nu gaan we hetzelfde doen met een functie
//  we schrijven eerst een functie "createSmileyButton", met lege parameterlijst
function createSmileyButton()
  //  in deze functie gebeurt hetzelde als we net voor één knop gedaan hebben
{
  //  maak een variabele "button" met daarin een nieuw aangemaakte link
   let button = document.createElement("a");
  // zet de inhoud van de knop om een boze smiley te laten zien
  button.innerHTML = ":(";
  //  geef de knpp de klasse smileyButton
  button.className = "smileyButton";
  //  hang aan de onClick event dezelfde functie als daarnet aan de ene knop
  button.addEventListener("click", function()
  {
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
//  einde van functie createSmileyButton
}

//  alleen de functie definiëren is natuurlijk niet genoeg.  Als je de functie
//     niet aanroept wordt ze nooit uitgevoerd en komen er dus geen smileys bij

//  dus: nu nog een lus die de functie createSmileyButton 100 keer uitvoert
for(let i = 0; i < 100; i++){
 createSmileyButton();
}