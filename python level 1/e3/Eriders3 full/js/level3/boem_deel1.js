//  hier komt de javascript code voor je oefening.
//  zorg ervoor dat je vanuit de html naar het juiste javascript bestand linkt hé!
//  let hierbij op de mappen-structuur.

//  eerst gaan we de knopp aan de functie linken.  Dat doen we natuurlijk met een eventListener
//  link de knop met id "controleer" aan functie controleer
document.getElementById("controleer").addEventListener("click", controleer);
// definieer variabele oplossing


//  en roep functie "kiesBewerking" aan


//  hier definiëren we functie kiesBewerking.    Lege parameterlijst
function kiesBewerking(){
  // maak een variabele willBewerking waar we een random getal tussen 0 en 2 in stoppen.
 let willBewerking = ;
  //  maak twee variabelen getal1 en getal2 waarin we willekeurige getallen kleiner dan 4 stoppen
 let getal1 = ;
 let getal2 = ;

  //  tenslotte nog een variabele definiëren genaamd tekenBewerking.  
 

  //  als willBewerking gelijk is aan nul ...
 if(){
  // ... dan is tekenBewerking een plus-teken ...
   
   // ...  en de oplossing is dan de som van de twee getallen
   oplossing = ;
 }  //  einde van de if
   //  ...  anders als willBewerking geljk is aan 1 ...
 else if(){
   // ... dan is tekenBewerking een min-teken ....
     
   //  ...  en oplossing wordt het verschil van getal1 en getal2
   oplossing = ;
 }   //  einde van de else if
   //  anders moet willBewerking wel gelijk zijn aan 2 ...
 else{
  //  ... en dan maken we van tekenBewerking een maal-teken  (sterretje)   
    
   // ...  en de oplossing is dan het product van de twee getallen   
   oplossing = ;
 }  //  einde van de else

  //  nu zoeken we in het document de paragraaf "opgave"  (zoeken op ID!!) en vullen z'n innerHTML met een geconcateneerde string die getal1, tekenbewerking en getal2 bevat
 document.getElementById("opgave").innerHTML = ;
}

//  hier definiëren we functie "controleer".  Lege parameterlijst.
//   deze functie wordt aangeroepen als de speler op de knop "controleer" drukt
function controleer(){
  //  maak variabele "oplossingGebruiker" en vul die met de inhoud van element met id oplossing.
  //  () niet vergeten om de string die je uit die html input haalt nog om te zetten naar een getal!! )
 let oplossingGebruiker = Number(document.getElementById("oplossing").value);
  //  als de oplossing van de gebruiker gelijk is aan de oplossing ...
 if( ){
  //  ...  dan wordt de speler gefeliciteerd met een alert ...
   alert("proficiat");
  //  ....  en zetten we alles klaar voor een nieuwe rekensom met een aanroep van functie kiesBewerking
   
 }
   // ...  anders als de oplossing van de gebruiker fout was ...
 else{
//  ...  dan ontploft onze bom, en geven we dus een alert die heel hard BOEM zegt!
   alert("boem!!");
 }
}