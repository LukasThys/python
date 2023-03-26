//  hier komt de javascript code voor je oefening.
//  zorg ervoor dat je vanuit de html naar het juiste javascript bestand linkt hé!
//  let hierbij op de mappen-structuur.

//  eerst gaan we alle knoppen aan de functies linken.  Dat doen we natuurlijk met eventListeners
//  link de knop met id "knopHoger" aan functie hogerAangeklikt

//  link de knop met id "knopLager" aan functie lagerAangeklikt

//  link de knop met id "knopReset" aan functie reset


//  maak een variabele laatsteGetal, en ééntje WillekeurigGetal


//  nieuwe variabele aantalCorrect zetten we om te beginnen op nul

//  zoek in het document de div met id hogerLagerContent, en bewaar in variabele divContent

//  zoek in het document de strong met id aantalCorrect, en bewaar in variable aantalCorrectLabel


//  nu staat alles klaar, dus we kunnen de functie reset aanroepen


//  definieer hier functie start.   Lege parameterlijst
function start() {
  // we  roepen functie kiesWillekeurigEnToonOpHetScherm aan
  
  //  en dan zetten we laatsteGetal gelijk aan willekeurigGetal.  Dat doen we alleen om te starten.
  
}  //  einde functie start


//  definieer hier functie hogerAangeklikt.   Lege parameterlijst
function hogerAangeklikt() {
  //  roep de functie aan:  kiesWillekeurigEnToonOpHetScherm
 
  //  als het willekeurig getal hoger of gelijk is aan het laatste getal  (dan was onze gok om hoger te klikken dus goed)
 if (l) {
   // ...  dan roep functie spelerIsJuist aan
  
 }  //  einde van de if
 else {
   //   ....  anders roep functie spelerIsFout aan
 
 }  //  einde van de else
}  // einde functie hogerAangeklikt

//  definieer hier functie lagerAangeklikt.   Lege parameterlijst
function lagerAangeklikt() { 
  //  roep de functie aan:  kiesWillekeurigEnToonOpHetScherm
 
  //  als het willekeurig getal lager of gelijk is aan het laatste getal  (dan was onze gok om lager te klikken dus goed)
 if () { 
   // ...  dan roep functie spelerIsJuist aan
  
   //   ....  anders roep functie spelerIsFout aan
 }  //  einde van de if
 else { 
  
 }  //  einde van de else
}  // einde functie lagerAangeklikt

//  definieer hier functie kiesWillekeurigEnToonOpHetScherm.   Lege parameterlijst
//  deze functie gaan we aanroepen vanuit de functies hogerAangeklikt EN lagerAangeklikt
function kiesWillekeurigEnToonOpHetScherm(){
  //  vul variabele willekeurigGetal met een random getal tussen 1 en 13


  // maak een nieuwe variabele "boodschap" en stop daar een vers gecreëerd html-paragraaf-element in
  
  //  zorg dat de paragraaf het laatsteGetal bevat
  
  //  en hang de paragraaf in de divContent  (achteraan)
  
} //  einde functie kiesWillekeurigEnToonOpHetScherm

//  definieer hier de functie toonScore.     Lege parameterlijst
function toonScore(){
  //  laat de innerHTML van aantalCorrectLabel het aantal juiste gokken tonen
 
}
//  definieer hier functie spelerIsJuist.   Lege parameterlijst
//  deze wordt aangeroepen vanuit functies hogerGeklikt en lagerGeklikt, ALS de speler goed geraden heeft
function spelerIsJuist(){
  //  verhoog variabele aantalCorrect met 1
  
  //  en toon de score   (functie toonScore aanroepen)
  
  //  zet variabele laatsteGetal op willekeurigGetal
  
  //  als het aantalCorrect gelijk is aan 7 ....
 if () { 
   // ...  dan heeft de speler gewonnen en gaan we feliciteren met een alert
   
 } //  einde van de if
}  // einde functie spelerIsJuist

//  definieer hier functie spelerIsFout.   Lege parameterlijst
//  deze wordt aangeroepen vanuit functies hogerGeklikt en lagerGeklikt, ALS de speler fout geraden heeft
function spelerIsFout(){
  //  het enige wat we in deze functie doen is de speler uitlachen met een alert
  
}  //  einde functie spelerIsFout


//  definieer hier functie reset.   Lege parameterlijst
function reset() {
  // om (opnieuw) te beginnen zetten we aantalCorrect op nul
  
  //  we roepen toonScore aan om dit ook te tonen
  
  //   zolang de divContent nog kindertjes heeft ...
 while () {
   // ...  verwijder zijn eerste kindje
   
 };
  //  tenslotte opnieuw functie start aanroepen
  
}  //  einde functie reset