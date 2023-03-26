//  hier komt de javascript code voor je oefening.
//  zorg ervoor dat je vanuit de html naar het juiste javascript bestand linkt hé!
//  let hierbij op de mappen-structuur.

//  eerst gaan we de knoppen aan de functie linken.  Dat doen we natuurlijk met eventListeners
//  link de knop met id "knopSplit" aan functie splitWoord
document.getElementById("knopSplit").addEventListener("click", splitWoord);
//  link de knop met id "knopJoin" aan functie joinWoord
document.getElementById("knopJoin").addEventListener("click", joinWoord);
//  link een keyUp in element met id "inputWoord" aan functie maakAllesLeeg
document.getElementById("inputWoord").addEventListener("keyup", maakAllesLeeg);
//  definieer variabele "arrayLetters"
let arrayLetters;

//  functie splitWoord.    Lege parameterlijst
function splitWoord(){
  // zoek in het document element met id "inputWoord", en stop de waarde van dit invoerveld in variabele 'woord'
  let woord = document.getElementById("inputWoord").value;
  //  als variabele "woord" leeg is ...
  if (woord === ''){
    // ...  dan geven we een alert met een foutboodschap
    alert("Je moet wel een woord ingeven om te kunnen splitsen hé...");
  }
  else{  //  ....  anders 
      //  splitsen we het woord in letters, naar de array genaamd "arrayLetters"
    arrayLetters = woord.split("");
    //  en dan roepen we functie "toonArrayMetIndex" aan om de karakters te tonen
    toonArrayMetIndex();
  }
}

//  functie joinWoord.     Lege parameterlijst
function joinWoord(){
  //   maak de div leeg met een aanroep van functie clearDivWoord
  clearDivWoord();
  //   variabele woord = resultaat van operatie join op array "arrayLetters"
  woord = arrayLetters.join("");

  //  maak in het document een nieuwe paragraaf aan
	let woordElement = document.createElement("p");
  //   en zet de innerHTML ervan op variabele "woord"
  woordElement.innerHTML = woord;
  //   en voeg de paragraaf toe aan div met id woordContent
   document.getElementById("woordContent").appendChild(woordElement)
}

//  functie maakAllesLeeg.     Lege parameterlijst
function maakAllesLeeg(){
  //   maak de divs leeg door aanroep van functies clearDivArray  en clearDivWoord
  clearDivArray();
  clearDivWoord();
  //  verberg het element met id divJoin door z'n display style op 'none' te zetten
  document.getElementById("divJoin").style.display='none';
}




//  functie sorteerArray
//    als op de knop wordt geklikt sorteren en tonen we de array
function sorteerArray(){
  //  sorteer de array  (met een aanroep van functie "sort")
  fruit.sort();
  //  toon de array  (met eenb aanroep van functie "toonArray")
  toonArray();
}



// functie toonArray
//  als op de knop wordt gedrukt tonen we alle elementen in de div
function toonArray(){
  //  om te beginnen : div leegmaken
	clearDiv();
  // dan een lus over alle elementen van de array  (dus onze cursor tussen 0 en lengte van de array -1) ...
	for(let i = 0; i<fruit.length; i+=1){
      // ... bewaar het element in variable fruitOmOpHetSchermTeSchrijven
		fruitOmOpHetSchermTeSchrijven = fruit[i];
      //  ... en toon het element op het scherm, met hulpfunctie toonElement
		toonElement();
	}
}



















//Deze code is "verstopt". Het is niet de bedoeling dat deze code wordt besproken met de leerlingen! 

function toonArrayMetIndex(){
	clearDivArray();
	for(let i = 0; i<arrayLetters.length; i+=1){
		toonElementMetIndex(arrayLetters[i], i);
	}
  document.getElementById("divJoin").style.display='block';
}

function toonElementMetIndex(letter, index){
	let divContent = document.getElementById("arrayContent");
	let divElement = document.createElement("div");
	let letterElement = document.createElement("p");
	let indexElement = document.createElement("p");

	letterElement.innerHTML = letter;
	indexElement.innerHTML = index;

	divElement.appendChild(letterElement);
	divElement.appendChild(indexElement);

	divContent.appendChild(divElement);
}

function clearDivArray(){
	let divContent = document.getElementById("arrayContent");
	while (divContent.firstChild){
		divContent.removeChild(divContent.firstChild)
	};
}

function clearDivWoord(){
	let divContent = document.getElementById("woordContent");
	while (divContent.firstChild){
		divContent.removeChild(divContent.firstChild)
	};
}
