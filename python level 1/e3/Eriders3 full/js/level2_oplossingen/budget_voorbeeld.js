//  hier komt de javascript code voor je oefening.
//  zorg ervoor dat je vanuit de html naar het juiste javascript bestand linkt hé!
//  let hierbij op de mappen-structuur.

//  eerst en vooral gaan we de knop met id "berekenUren" vertellen dat zijn 'klik' event de functie berekenUren moet uitvoeren
document.getElementById("berekenUren").addEventListener("click", berekenUren);

//  nu maken we de functie berekenUren
function berekenUren(){  
 //  we gaan eerst zorgen dat er niks meer van de vorige berekening in de div zakgeldContent staat.
//  zoek de div met id "uurloonContent" en sla die op in variabele 'divContent'
  let divContent = document.getElementById("uurloonContent");
  //  zolang de div in variabele divContent nog kinderen heeft ....
 while (divContent.firstChild){
   //  begin lus
   //  gooi het eerste kind weg
divContent.removeChild(divContent.firstChild)
   //  einde lus
 };
  //  zoek de input met id "inputUurloon", pak de waarde daarvan, en sla het resultaat op in variabele 'uurloon'
  const uurloon = document.getElementById("inputUurloon").value;
//  maak een variabele 'uren' en initialiseer die op 1
  let uren = 1;
  //  maak een variabele 'totaalLoon' en initialiseer die met uurLoon  (dus wat je op 1 uur verdient)
  let totaalLoon = uurloon * uren;
  
 // doe ....
do{
  //  begin lus
  
  //  we tonen nu eerst wat er al berekend is 

    //  maak een nieuwe paragraaf aan, en stop die in variabele 'berekening'
    let berekening = document.createElement("p");    
      //  zet in de innerHTML van de paragraaf een tekst zoals " x uur gewerkt aan xxx euro per uur = xxx euro totaal "
    berekening.innerHTML = uren + " uren gewerkt aan " + uurloon + "  &euro; per uur geeft in totaal: " + totaalLoon + "  &euro;";
     //  voeg de nieuw gemaakte paragraaf toe als kind van de divContent 
    divContent.appendChild(berekening);


  //  en nu de vorige berekening getoond is gaan we de berekening maken voor het volgende uur
  //  verhoog variabele 'uren' met 1
  uren += 1;
  //  bereken het nieuwe totaalLoon
  totaalLoon = uurloon * uren;  
      //  einde lus
 }
  //  ...  zolang totaalLoon kleiner of gelijk is aan 100
  while ( totaalLoon <= 100);


} 