//  hier komt de javascript code voor je oefening.
//  zorg ervoor dat je vanuit de html naar het juiste javascript bestand linkt hé!
//  let hierbij op de mappen-structuur.

//  deze javascript code wordt direct uitgevoerd als de pagina wordt ingeladen.  
//  ze staat niet in een functie die aan een knop is gekoppeld




//  doe drie keer ....
for (let i = 0; i < 3; i++){
  //  begin van de lus

  // maak een nieuwe paragraaf-tag aan, en stop die in variabele 'boodschap'
  let boodschap = document.createElement("p");
  //  verander de inhoud van die nieuwe paragraaf naar "Penny ..."
  boodschap.innerHTML = "Penny... ";

  //  zoek de div met id "shceldonContent" en bewaar die in variabele 'div'
  let div = document.getElementById("sheldonContent");
  //  voeg de nieuwe paragraaf toe als een kind van de gevonden div
  div.appendChild(boodschap);

  //  einde van de lus
}