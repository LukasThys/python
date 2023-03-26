//  hier komt de javascript code voor je oefening.
//  zorg ervoor dat je vanuit de html naar het juiste javascript bestand linkt hé!
//  let hierbij op de mappen-structuur.

//  eerst gaan we alle knoppen aan de functies linken.  Dat doen we natuurlijk met eventListeners
//  link de knop met id "knopHoger" aan functie hogerAangeklikt
document.getElementById("knopHoger").addEventListener("click", hogerAangeklikt);
//  link de knop met id "knopLager" aan functie lagerAangeklikt
document.getElementById("knopLager").addEventListener("click", lagerAangeklikt);
//  link de knop met id "knopReset" aan functie reset
document.getElementById("knopReset").addEventListener("click", reset);

//  maak een variabele laatsteGetal, en ééntje WillekeurigGetal
let laatsteGetal; 
let willekeurigGetal;
//  nieuwe variabele aantalCorrect zetten we om te beginnen op nul
let aantalCorrect = 0;
//  zoek in het document de div met id hogerLagerContent, en bewaar in variabele divContent
let divContent = document.getElementById("hogerLagerContent"); 
//  zoek in het document de strong met id aantalCorrect, en bewaar in variable aantalCorrectLabel
let aantalCorrectLabel = document.getElementById("aantalCorrect");

//  nu staat alles klaar, dus we kunnen de functie reset aanroepen
reset(); 

//  definieer hier functie start.   Lege parameterlijst
function start() {
  // we  roepen functie kiesWillekeurigEnToonOpHetScherm aan
  kiesWillekeurigEnToonOpHetScherm();
  //  en dan zetten we laatsteGetal gelijk aan willekeurigGetal.  Dat doen we alleen om te starten.
  laatsteGetal = willekeurigGetal;
}  //  einde functie start


//  definieer hier functie hogerAangeklikt.   Lege parameterlijst
function hogerAangeklikt() {
  //  roep de functie aan:  kiesWillekeurigEnToonOpHetScherm
 kiesWillekeurigEnToonOpHetScherm();
  //  als het willekeurig getal hoger of gelijk is aan het laatste getal  (dan was onze gok om hoger te klikken dus goed)
 if (willekeurigGetal >= laatsteGetal) {
   // ...  dan roep functie spelerIsJuist aan
  spelerIsJuist();
 }  //  einde van de if
 else {
   //   ....  anders roep functie spelerIsFout aan
  spelerIsFout();
 }  //  einde van de else
}  // einde functie hogerAangeklikt

//  definieer hier functie lagerAangeklikt.   Lege parameterlijst
function lagerAangeklikt() { 
  //  roep de functie aan:  kiesWillekeurigEnToonOpHetScherm
 kiesWillekeurigEnToonOpHetScherm(); 
  //  als het willekeurig getal lager of gelijk is aan het laatste getal  (dan was onze gok om lager te klikken dus goed)
 if (willekeurigGetal <= laatsteGetal) { 
   // ...  dan roep functie spelerIsJuist aan
  spelerIsJuist(); 
   //   ....  anders roep functie spelerIsFout aan
 }  //  einde van de if
 else { 
  spelerIsFout(); 
 }  //  einde van de else
}  // einde functie lagerAangeklikt

//  definieer hier functie kiesWillekeurigEnToonOpHetScherm.   Lege parameterlijst
//  deze functie gaan we aanroepen vanuit de functies hogerAangeklikt EN lagerAangeklikt
function kiesWillekeurigEnToonOpHetScherm(){
  //  vul variabele willekeurigGetal met een random getal tussen 1 en 13
 willekeurigGetal = Math.floor(Math.random() * 13) + 1;

  // maak een nieuwe variabele "boodschap" en stop daar een vers gecreëerd html-paragraaf-element in
 let boodschap = document.createElement("p");
  //  zorg dat de paragraaf het laatsteGetal bevat
 boodschap.innerHTML = willekeurigGetal;
  //  en hang de paragraaf in de divContent  (achteraan)
 divContent.appendChild(boodschap);
} //  einde functie kiesWillekeurigEnToonOpHetScherm

//  definieer hier de functie toonScore.     Lege parameterlijst
function toonScore(){
  //  laat de innerHTML van aantalCorrectLabel het aantal juiste gokken tonen
  aantalCorrectLabel.innerHTML = aantalCorrect;
}
//  definieer hier functie spelerIsJuist.   Lege parameterlijst
//  deze wordt aangeroepen vanuit functies hogerGeklikt en lagerGeklikt, ALS de speler goed geraden heeft
function spelerIsJuist(){
  //  verhoog variabele aantalCorrect met 1
 aantalCorrect = aantalCorrect + 1;   
  //  en toon de score   (functie toonScore aanroepen)
  toonScore();
  //  zet variabele laatsteGetal op willekeurigGetal
 laatsteGetal = willekeurigGetal; 
  //  als het aantalCorrect gelijk is aan 7 ....
 if (aantalCorrect === 7) { 
   // ...  dan heeft de speler gewonnen en gaan we feliciteren met een alert
  alert("Proficiat! Je hebt gewonnen!!!! Het laatste getal was: " + willekeurigGetal);
 } //  einde van de if
}  // einde functie spelerIsJuist

//  definieer hier functie spelerIsFout.   Lege parameterlijst
//  deze wordt aangeroepen vanuit functies hogerGeklikt en lagerGeklikt, ALS de speler fout geraden heeft
function spelerIsFout(){
  //  het enige wat we in deze functie doen is de speler uitlachen met een alert
 alert("Oeps, je was fout! Het nieuwe getal was: " + willekeurigGetal);
}  //  einde functie spelerIsFout


//  definieer hier functie reset.   Lege parameterlijst
function reset() {
  // om (opnieuw) te beginnen zetten we aantalCorrect op nul
  aantalCorrect = 0;
  //  we roepen toonScore aan om dit ook te tonen
  toonScore();
  //   zolang de divContent nog kindertjes heeft ...
 while (divContent.firstChild) {
   // ...  verwijder zijn eerste kindje
   divContent.removeChild(divContent.firstChild)
 };
  //  tenslotte opnieuw functie start aanroepen
 start();
}  //  einde functie reset