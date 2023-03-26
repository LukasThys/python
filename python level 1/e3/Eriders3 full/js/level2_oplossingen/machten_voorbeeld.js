//  hier komt de javascript code voor je oefening.
//  zorg ervoor dat je vanuit de html naar het juiste javascript bestand linkt hé!
//  let hierbij op de mappen-structuur.

// we maken eerst een variabele genaamd 'macht' en zetten die op beginwaarde 2
let macht = 2;

//  zolang macht kleiner is dan 100 ...
while (macht < 100){
  //  begin van de lus
  
  //  maak een nieuw element van type paragraaf en stop dat in variabele 'boodschap'
  let boodschap = document.createElement("p");
  //  zet in die nieuwe paragraaf als tekst de waarde van variabele 'macht'
  boodschap.innerHTML = macht;

  //  zoek de div met id 'machtenContent'
  let div = document.getElementById("machtenContent");
  //   en voeg de nieuwe paragraaf toe als kind van die div
  div.appendChild(boodschap);

  //  nu doen we variabele macht maal 2
  macht = macht * 2;
  //  einde van de lus
}