//  hier komt de javascript code voor je oefening.
//  zorg ervoor dat je vanuit de html naar het juiste javascript bestand linkt hé!
//  let hierbij op de mappen-structuur.

//  eerst gaan we de knopp aan de functie linken.  Dat doen we natuurlijk met een eventListener
//  link de knop met id "controleer" aan functie controleer
document.getElementById("controleer").addEventListener("click", controleer);

// definieer variabele oplossing
let oplossing;

//  en roep functie "kiesBewerking" aan
kiesBewerking();

//  hier definiëren we functie kiesBewerking.    Lege parameterlijst
function kiesBewerking(){
  // maak een variabele willBewerking waar we een random getal tussen 0 en 2 in stoppen.
 let willBewerking = Math.floor(Math.random()*3);
  //  maak twee variabelen getal1 en getal2 waarin we willekeurige getallen kleiner dan 4 stoppen
 let getal1 = Math.floor(Math.random()*4);
 let getal2 = Math.floor(Math.random()*4);

  //  tenslotte nog een variabele definiëren genaamd tekenBewerking.  
 let tekenBewerking;

  //  als willBewerking gelijk is aan nul ...
 if(willBewerking === 0){
  // ... dan is tekenBewerking een plus-teken ...
   tekenBewerking = " + ";
   // ...  en de oplossing is dan de som van de twee getallen
   oplossing = getal1 + getal2 ;
 }  //  einde van de if
   //  ...  anders als willBewerking geljk is aan 1 ...
 else if(willBewerking === 1){
   // ... dan is tekenBewerking een min-teken ....
  tekenBewerking= " - ";
   //  ...  en oplossing wordt het verschil van getal1 en getal2
  oplossing= getal1  - getal2 ;
 }   //  einde van de else if
   //  anders moet willBewerking wel gelijk zijn aan 2 ...
 else{
  //  ... en dan maken we van tekenBewerking een maal-teken  (sterretje)
  tekenBewerking= " * ";
   // ...  en de oplossing is dan het product van de twee getallen
  oplossing= getal1 * getal2 ;
 }  //  einde van de else

  //  nu zoeken we in het document de paragraaf "opgave"  (zoeken op ID!!) en vullen z'n innerHTML met een geconcateneerde string die getal1, tekenbewerking en getal2 bevat
 document.getElementById("opgave").innerHTML = getal1 + tekenBewerking+ getal2;
}

//  hier definiëren we functie "controleer".  Lege parameterlijst.
//   deze functie wordt aangeroepen als de speler op de knop "controleer" drukt
function controleer(){
  //  maak variabele "oplossingGebruiker" en vul die met de inhoud van element met id oplossing.
  //  () niet vergeten om de string die je uit die html input haalt nog om te zetten naar een getal!! )
 let oplossingGebruiker = Number(document.getElementById("oplossing").value);

  //  als de oplossing van de gebruiker gelijk is aan de oplossing ...
 if(oplossingGebruiker === oplossing){
  //  ...  dan wordt de speler gefeliciteerd met een alert ...
   alert("Perfect! De bom is ontmanteld, tijd voor de volgende bom!");
  //  ....  en zetten we alles klaar voor een nieuwe rekensom met een aanroep van functie kiesBewerking
   kiesBewerking();
 }
   // ...  anders als de oplossing van de gebruiker fout was ...
 else{
//  ...  dan ontploft onze bom, en geven we dus een alert die heel hard BOEM zegt!
   alert("BOEEEEEEEEEEEEEEM!! ");
 }
}