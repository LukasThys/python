//  hier komt de javascript code voor je oefening.
//  zorg ervoor dat je vanuit de html naar het juiste javascript bestand linkt hé!
//  let hierbij op de mappen-structuur.

//  eerst gaan we de knopp aan de functie linken.  Dat doen we natuurlijk met een eventListener
//  link de knop met id "controleer" aan functie controleer
document.getElementById("controleer").addEventListener("click", controleer);
// -->  link de knop met id "start" aan functie start
document.getElementById("start").addEventListener("click", start);
// definieer variabele oplossing
let oplossing;
// --> definieer variabelen spelBezig, interval, tijdOver;
let spelBezig, interval, tijdOver;
// ------>  definieer ook nog variabelen moeilijkheidsgraad, bommenOntmanteld, getallenJuist
let moeilijkheidsgraad, bommenOntmanteld, getallenJuist;
// -->  zoek het element met id "timer" en houd bij in variabele timer
let timer = document.getElementById("timer");

//  de functie "kiesBewerking" moet niet meer worden aangeroepen bij het inladen van de pagina.  Vanaf nu starten we het spel met een druk op de start-knop.  We zetten  (en laten!!) onderstaande regel dus in commentaar.
//kiesBewerking();

// --> hier definiëren we functie start.     Lege parameterlijst
// ----->  voor deel 3 is de functie start een beetje uitgebreid.  We moeten nu eerst aan de speler vragen welke moeilijkheidsgraad hij wil
function start(){
  // ------> vraag met een prompt aan de speler welke moeilijkheidsgraad hij wil, en houd dan bij in variabele moeilijkheidsgraad  (niet vergeten: ook nog omvormen naar een getal !!)
   moeilijkheidsgraad = Number(prompt("Met welke moeilijkheidsgraad wil je spelen? (Minstens 1)"));
  // -->  zoek het element met id "start" en vul de innerHTML met het woordje "herstart"
 document.getElementById("start").innerHTML = "Herstart";
  //  -->  zet variabele spelBezig op true
 spelBezig = true;
  // ------>  zet variabelen bommenOntmanteld en getallenJuist op nul
 bommenOntmanteld = 0;
 getallenJuist = 0;
  // -->  roep de functie startBom aan
 startBom();
}

// --> hier definiëren we de functie startBom.    Lege parameterlijst
//  -------->  ook hier is een beetje aan gesleuteld in deel 3
function startBom(){
  // --> vul variabele tijdOver met een random getal tussen 5 en 15
  //  -------->  voor deel drie vermenigvuldigen we het gevonden willekeurige getal met de moeilijkheidsgraad
 tijdOver = (Math.floor(Math.random()*10)+5) * moeilijkheidsgraad;
  // --> roep de functie startMetAftellen aan
 startMetAftellen();
  // --> roep de functie kiesBewerking aan
 kiesBewerking();
}


//  hier definiëren we functie kiesBewerking.    Lege parameterlijst
//  -------->  ook hier is een beetje aan gesleuteld in deel 3
function kiesBewerking(){
  // maak een variabele willBewerking waar we een random getal tussen 0 en 2 in stoppen.
 let willBewerking = Math.floor(Math.random()*3);
  //  maak twee variabelen getal1 en getal2 waarin we willekeurige getallen kleiner dan 4 stoppen
  // ------> in deel 3 vermenigvuldigen we de gevonden getallen met de moeilijkheidsgraad
 let getal1 = Math.floor(Math.random()*(4*moeilijkheidsgraad));
 let getal2 = Math.floor(Math.random()*(4*moeilijkheidsgraad));

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
//  -->  de functie controleer gaan we een beetje uitbreiden.  Eerst checken we of het spel al wel begonnen is
// ------> in de functie controleer gaan we nu ook het aantal juiste antwoorden bijhouden
function controleer(){
  //  als het spel nog niet bezig is  (dwz variabele spelBezig bevat NIET true )
  if(!spelBezig){
    // -->  geef dan een alert dat het spel nog niet begonnen is en dat de gebruiker eerst op start moet klikken
    alert("Het spel is nog niet begonnen ... Druk eerst op start!");
 }  //  einde van de if  (spelBezig)
 else{
      //  maak variabele "oplossingGebruiker" en vul die met de inhoud van element met id oplossing.
      //  () niet vergeten om de string die je uit die html input haalt nog om te zetten naar een getal!! )
     let oplossingGebruiker = Number(document.getElementById("oplossing").value);
    
      //  als de oplossing van de gebruiker gelijk is aan de oplossing ...
     if(oplossingGebruiker === oplossing){
       // ------>  dan verhogen we getallenJuist met 1
       getallenJuist += 1;
       // ------>  en ALS het aantal getallenJuist dan gelijk wordt aan de moeilijkheidsgraad ...      
       if(getallenJuist == moeilijkheidsgraad){ 
       // ------>  dan verhogen we bommenOntmanteld met 
           bommenOntmanteld += 1;
        // ------> en zetten we getallenJuist weer op nul voor de volgende bom 
           getallenJuist = 0;
        //  ...  dan wordt de speler gefeliciteerd met een alert ...
           alert("Perfect! De bom is ontmanteld, tijd voor de volgende bom!");
        //  ....  en zetten we alles klaar voor een nieuwe rekensom met een aanroep van functie kiesBewerking
         //  -->  in versie twee roepen we niet meer kiesBewerking aan om opnieuw te beginnen, maar wel startBom
           startBom();
       }  // einde van de if  (getallenJuist = moeilijkheidsgraad)
         //  ----->  anders  (dus als we wel goed hadden geantwoord maar nog niet genoeg om de bom te ontmantelen)
       else
       {
         //  ------>  dan tonen we met een alert hoeveel antwoorden we juist hadden tot nu toe voor deze bom  
         alert("Goed zo! Je heb al "+ getallenJuist + " van de " + moeilijkheidsgraad + " van de code gevonden, tijd voor het volgende ...");
         // ------>   en daarna roepen we opnieuw kiesBewerking aan om de volgende opdracht te tonen
         kiesBewerking();
       } //  einde van de else  (getallenJuist == moeilijkheidsgraad)
        
     }  //  einde van de if  (oplossingen gelijk)
       // ...  anders als de oplossing van de gebruiker fout was ...
     else{
    //  ...  dan ontploft onze bom, en geven we dus een alert die heel hard BOEM zegt!
       // -->  in versie twee gaan we niet meer hier een alert geven, maar wel functie gameOver aanroepen
      gameOver();
     }  //  einde van de else  (oplossingen gelijk)
  } //  einde van de else  (spelBezig)
}

// -->  hier definiëren we functie gameOver.     Lege parameterlijst
function gameOver(){
  // -->  eerst en vooral gaan we de timer stoppen.  Dat doen we door clearInterval aan te roepen
 clearInterval(interval);
  // -->  dan zetten we variabele spelBezig op false
 spelBezig = false;
  // -->  en daarna geven we de BOEM-alert die in stap 1 nog in functie controleer werd gegeven.
 alert("BOEEEEEEEEEEEEEEM!! ");
}

// --> de functie startMetAftellen krijg je cadeau.  Hier gebeuren wat moeilijke technische dingen die nodig zijn om de timer te laten aftellen.   Vragen?  Google is your friend .... :-)    Maar je mag ook de leraar aanspreken natuurlijk :-)
function startMetAftellen(){
  //  eerst het begin maken:  de resterende tijd op het scherm zetten voordat het aftellen begint
  // bepaal aantal minuten in resterende tijd   (gehele deling)
 let minuten = Math.floor(tijdOver/60);
  //  bepaal aantal seconden in resterende tijd  (deling modulo 60)
 let seconden = tijdOver%60;
  //  zet de innerHTML van paragraaf "timer" op de string-voorstelling van de resterende tijd
 timer.innerHTML = minuten + " : " + seconden;
  //  nu roepen we clearInterval aan om te zorgen dat er zeker geen andere timers meer lopen
 clearInterval(interval);
  //  en dan roepen we setInterval aan om een functie te koppelen aan variabele interval.
  //  deze functie is weer een lambda-functie, zoals we een les of twee geleden ook gezien hebben, remember?
  //   een lambda-functie is een functie zonder naam, die we aan een event kunnen koppelen.
  //    zo'n event kan een klik op de knop zijn, zoals vorige keer, of zoals in dit geval, het afvuren van een timer-event.  Hier komt het erop neer dat we met setInterval deze functie instellen zodat die om de 1000 milliseconden  (dus elke seconde) wordt uitgevoerd.
  //    onze naamloze functie heeft een lege parameterlijst
 interval = setInterval(function(){
   //  elke keer als deze functie wordt uitgevoerd  (dus elke seconde) gebeurt het volgende:
   //  maak tijdOver 1 kleiner  (dus 1 seconde minder)
  tijdOver -= 1;
   //   als tijdOver gelijk is aan nul  (dus als de tijd op is ) ...
  if(tijdOver == 0){
   // ...  dan roepen we functie gameOver aan
    gameOver();
  }
  // nu zetten we nog de nieuwe resterende tijd op het scherm:
   //  minuten:  gehele deling
  minuten = Math.floor(tijdOver/60);
   //  seconden:  modulo 60 deling
  seconden = tijdOver%60;
   //   innerHTML vullen
  timer.innerHTML = minuten + " : " + seconden;
 }, 1000);
} //  einde functie startMetAftellen