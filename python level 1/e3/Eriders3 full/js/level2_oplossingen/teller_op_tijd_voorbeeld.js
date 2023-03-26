
//  hier komt de javascript code voor je oefening.
//  zorg ervoor dat je vanuit de html naar het juiste javascript bestand linkt hé!
//  let hierbij op de mappen-structuur.

//  eerst en vooral gaan we de knop met id "startknop" vertellen dat zijn 'klik' event de functie startTeller moet uitvoeren
document.getElementById("startKnop").addEventListener("click", startTeller);

//  nu maken we de functie startTeller
function startTeller(){
  // zoek de input met id "seconden" en bewaar in variabele "seconden"
 let seconden = document.getElementById("inputTijd").value;
  //  maak een variabele 'startDate' en vul die met de huidige tijd  (NU !)
 let startDate = new Date()
  //  maak een variabele 'starttijd' en stop daar de waarde van startDate in, in milliseconden
 let starttijd = startDate.getTime()
  // maak een variabele 'stopDate'
 let stopDate
  // maak een variabele 'running', dit is een boolean die begint op "waar"  (true)
 let running = true
  //  maak een variabele 'teller' en zet die om te beginnen op 0
 let teller = 0
  //  zolang 'running' waar is
 while (running){
   //  begin van de lus

   // verhoog variabele 'teller'
    teller +=1
   
  //  maak een variabele 'stopDate' en vul die met de huidige tijd  (NU !)
    stopDate = new Date()
  //  maak een variabele 'stoptijd' en stop daar de waarde van stopDate in, in milliseconden
    stoptijd = stopDate.getTime()

   //  als het verschil tussen stoptijd en starttijd groter is dan variabele seconden maal 1000 ...
 	if (stoptijd-starttijd >= seconden*1000){
    //  ...  dan zetten we variabele running op onwaar (false)
      		running = false
 	}
 }

  //  zoek strong-tag met id "seconden" en vul deze met het aantal seconden
  document.getElementById("seconden").innerHTML = seconden
  //  zoek strong-tag met id "teller" en vul deze met variabele 'teller'
  document.getElementById("teller").innerHTML = teller
  //  zoek strong-tag met id "miljoenen" en vul deze met de teller gedeeld door 1 miljoen
  document.getElementById("miljoenen").innerHTML = Math.floor(teller/1000000)

}