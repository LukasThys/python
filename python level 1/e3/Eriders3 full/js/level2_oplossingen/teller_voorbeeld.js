//  hier komt de javascript code voor je oefening.
//  zorg ervoor dat je vanuit de html naar het juiste javascript bestand linkt hé!
//  let hierbij op de mappen-structuur.

//  eerst en vooral gaan we de knop met id "startknop" vertellen dat zijn 'klik' event de functie startTeller moet uitvoeren
document.getElementById("startknop").addEventListener("click",startTeller);

//  nu maken we de functie startTeller
function startTeller() {
  // zoek de input met id "inputDoel" en bewaar in variabele "doel"
 let doel = document.getElementById("inputDoel").value;
  //  maak een variabele 'teller' en zet die om te beginnen op 0
 let teller = 0;
  //  maak een variabele 'starttijd' en vul die met de huidige tijd  (NU !)
 let starttijd = new Date()

  //  zolang de teller-variabele kleiner is dan 1 miljoen maal het doel ...
 while (teller < doel*1000000){
   //  begin van de lus
   //  tel 1 bij de teller op
    teller += 1;
   //  einde van de lus
 }
  //  maak een variabele 'stoptijd' en vul die met de huidige tijd  (weeral NU !!)
 let stoptijd= new Date() 
  //  maak een variabele 'verstrekentijd' en vul die met het verschil van stoptijd en starttijd
 let verstrekenTijd = stoptijd.getTime()-starttijd.getTime()

  //  zoek de strong-tag met id 'teller' en vul die met de waarde van variabele 'teller'
   document.getElementById("teller").innerHTML = teller
  //   zoek de strong-tag met id 'seconden' en vul die met de verstreken tijd gedeeld door 1000  (tijd wordt berekend in milliseconden, dus als je deelt door duizend heb je het aantal seconden)
  document.getElementById("seconden").innerHTML = verstrekenTijd/1000 
 
}