//  hier komt de javascript code voor je oefening.
//  zorg ervoor dat je vanuit de html naar het juiste javascript bestand linkt hé!
//  let hierbij op de mappen-structuur.

//  link de knop met id "knopLetter" aan functie raadLetter
document.getElementById("knopLetter").addEventListener("click", raadLetter );
//  link de knop met id "knopWoord" aan functie raadWoord
document.getElementById("knopWoord").addEventListener("click", raadWoord );

//  maak een array-variabele genaamd "woorden" en bevolk die met een paar woorden die de speler mag zoeken
let woorden =  ["CODEFEVER", "PROGRAMMEREN", "NADENKEN", "VARIABELE", "JAVASCRIPT", "SCRATCH", "COMPUTER"];
// maak nog drie variabelen aan:  teZoekenLetters, gevondenLetters, fouteGokkenOver


//  na het aanmaken van alle benodigde arrays roepen we functies "kiesWoord" aan om het spel te starten


//  hier maken we de functie "kiesWoord".  Lege parameterlijst
//  deze functie wordt aangeroepen bij het inladen van de pagina, om het spel te kunnen beginnen.
//    voor je galgje kan spelen moet er natuurlijk eerst een woord gekozen en klaargezet zijn....
function kiesWoord(){
  // maak variabele "willekeurigeIndex" en stop daar een random getal in kleiner dan de lengte van array 'woorden'
	let willekeurigeIndex = ;
  // maak variabele "woord" met daarin het woord dat in array 'woorden' staat op de plaats willekeurigeIndex
	let woord = ;

  // nu vullen we array 'teZoekenLetters' met de karakters van ons woord, uiteen gesplitst
	teZoekenLetters =;
  //  en we sturen de array naar de console
  console.log(teZoekenLetters);
  //  array 'gevondenLetters' maken we leeg om te beginnen
	
  //   en variabele 'fouteGokkenOver' zetten we op 10
  fouteGokkenOver = 10;
  //  dan gaan we de streepjes op het scherm zetten:  voor elk karakter in array 'teZoekenLetters' plaatsen we een underscore karakter  ( _ ) in array 'gevondenLetters'
	for (let i = 0; i<teZoekenLetters.length; i++ ){
		;
	}

  // we laten het aantal resterende pogingen zien, door de innerHTML van de strong-tag met id "aantalFout" te zetten op de variabele "fouteGokkenOver"
  document.getElementById("aantalFout").innerHTML = fouteGokkenOver;
  //  tenslotte roepen we functie "plaatsLettersOpHetScherm" aan 
	
}

//  hier maken we functie "plaatsLettersOpHetScherm".   Lege parameterlijst
//   deze functie wordt aangeroepen vanuit functie "kiesWoord" bij het inladen van de pagina, en daarna telkens als er een letter geraden is
function plaatsLettersOpHetScherm(){
  //  zoek in het document de div met id "contentGalgje" en houd deze bij in variabele 'div'
	let div = document.getElementById("contentGalgje");
	//Eerst de div leegmaken:  zolang er kindjes zijn verwijderen we het eerste kindje
	while (div.firstChild){
		div.removeChild(div.firstChild)
	};
	//Dan terug opvullen: loop over array 'gevondenLetters' en maak voor elk karakter in de array een paragraaf.   Zet de innerHTML van de paragraaf op het te tonen karakter, en voeg toe als kindje aan de div
	for (let i = 0; i<gevondenLetters.length; i++ ){
		let nieuwElement = document.createElement("p");
		nieuwElement.innerHTML = ;
		div.;
	}
}

//  hier maken we functie 'raadLetter'.   Lege parameterlijst.
//  deze functie wordt aangeroepen als de speler klikt op de knop 'raad letter'
function raadLetter(){
  // vraag met een prompt aan de speler welke letter hij wil, zet deze om naar hoofdletter  (met functie 'toUpperCase') en houd bij in variabele 'letter'
	let letter = prompt("Geef een letter in.").toUpperCase();
  //  als de gekozen letter voorkomt in array 'teZoekenLetters'  (dwz deze letter zit in het woord dat we zoeken)
  //  EN de gekozen letter zit niet in array 'gevondenLetters'  (dwz we hadden deze letter nog niet gekozen)
  if (){
    //  als bovenstaande twee condities voldaan zijn gaan we over array 'teZoekenLetters' itereren
    for (let i = 0; i<; i++ ){
      //  bij elke positie van array 'teZoekenLetters' controleren we of het karakter op die plaats gelijk is aan de gekozen letter
      if(letter === ){
        //  en als dat zo is vervangen we de underscore in die plaats van array 'gevondenLetters' door de juiste letter
        
      }
    }
    //  nadat we alle karakters vergeleken hebben roepen we opnieuw functie 'plaatsLettersOpHetScherm' aan om het woord te tonen met de gevonden letters ingevuld
    
    //  en tenslotte:  als alle letters gevonden zijn roepen we functie "woordGevonden" aan
    //  checken of alles letters gevonden zijn doen we door de twee arrays 'teZoekenLetters' en 'gevondenLetters' samen te klappen en die twee strings te vergelijken.
    if (){
      woordGevonden();
    }
  }
  else{
    //  anders, als we geen goede letter gegokt hebben, komt er een alert
    alert("Die letter komt niet voor! (of je hebt deze letter al eens gevonden ...)");
    //  en roepen we functie 'spelerIsFout' aan
    spelerIsFout();
  }
}

//  hier maken we functie "raadWoord".   Lege parameterlijst
//  deze functie wordt aangeroepen als de speler klikt op de knop "raad woord"
function raadWoord(){
  //  vraag met een prompt welk woord de speler denkt dat de oplossing is.  Houd bij in variabele "woord"
  let woord = prompt("Geef een woord in.").toUpperCase();
  //  als dat woord gelijk is aan de inhoud van array 'teZoekenLetters'  (inklappen om van de array een string te maken!!)
  if (woord === ){
    //  dan roepen we de functie 'woordGevonden' aan
    woordGevonden();
  }
  else{
    //  anders, als er fout is gegokt, roepen we functie "spelerIsFout" aan
    spelerIsFout();
  }
}

//  hier maken we functie 'woordGevonden' aan.  Lege parameterlijst
//  deze functie wordt aangeroepen als de speler het woord juist heeft geraden of alle karakters heeft gevonden
function woordGevonden(){
  //  als we het woord geraden hebben door op 'raad woord' te klikken en het juist te raden, zijn niet alle letters ingevuld, dan staan er nog underscores.   Dat is niet zo mooi.   Voordat de alert komt gaan we alle letters tonen.
  //  loop over de array 'teZoekenLetters'
  for (let i = 0; i<teZoekenLetters.length; i++ ){
    //  en zet voor elke letter de plaats in gevondenLetters op de juiste letter
		  
	}
  //   na de loop roepen we functie "plaatsLettersOpHetScherm" aan om ze ook te tonen
  plaatsLettersOpHetScherm();
  //  en dan moet er nog een alert komen om de speler te feliciteren, en daarna functie 'kieswoord' aanroepen om opnieuw te beginnen.
  //  maar .....  als we dat direct in de code zetten staan de letters nog niet netjes op het scherm voordat de alert er al staat, en dan zien we ze nog niet.  Daarom bouwen we voor de laatste twee opdrachten een kleine vertraging in zodat het programma tijd heeft om de geupdate letters te tonen.
  setTimeout(() => {  
    //  eerst een alert om te feliciteren
    alert("Proficiat!!! Je hebt het woord gevonden ... ");
    //   en dan roepen we functie 'kiesWoord' aan om opnieuw te beginnen
	  kiesWoord();
  },500);  //  een vertraging van 500 ms is genoeg
}


//  hier maken we functie 'spelerIsFout' aan. Lege parameterlijst 
//  deze functie wordt aangeroepen telkens de speler een foute gok doet voor een letter of voor het woord
function spelerIsFout(){
  //  eerst verlagen we variabele 'fouteGokkenOver' met 1
  fouteGokkenOver -= 1;
  //  en dan zetten we die nieuwe waarde op het scherm  (innerHTML van element met id 'aantalFout')
  document.getElementById("aantalFout").innerHTML = fouteGokkenOver;
  //  nu nog een aanroep van functie checkGameOver om te zien of we nog beurten over hebben
  checkGameOver();
}

//  hier maken we functie 'checkGameOver' aan. Lege parameterlijst 
//  deze functie wordt aangeroepen vanuit functie spelerIsFout ( dus telkens de speler een foute gok doet voor een letter of voor het woord )
function checkGameOver(){
  //  als er geen foute gokken meer over zijn  (variabele staat op nul)
  if (){
    //  dan betekent dit dat de speler het woord niet binnen 10 pogingen gevonden heeft
    //  speler uitlachen met een alert
    alert("Je kon het woord niet vinden ... Het was: " + teZoekenLetters.join(""));
    //   en functie kiesWoord aanroepen om opnieuw te beginnen
    kiesWoord();
  }
  
}