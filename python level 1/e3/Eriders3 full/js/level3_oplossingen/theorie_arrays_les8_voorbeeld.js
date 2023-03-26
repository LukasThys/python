//  hier komt de javascript code voor je oefening.
//  zorg ervoor dat je vanuit de html naar het juiste javascript bestand linkt hé!
//  let hierbij op de mappen-structuur.

//  eerst gaan we de knoppen aan de functie linken.  Dat doen we natuurlijk met eventListeners
//  link de knop met id "knopAlleenArray" aan functie toonArray
 document.getElementById("knopAlleenArray").addEventListener("click", toonArray);
//  link de knop met id "knopArrayIndex" aan functie toonArrayMetIndex
document.getElementById("knopArrayIndex").addEventListener("click", toonArrayMetIndex);
//  link de knop met id "knopElementIndex" aan functie toonElementMetInTeGevenIndex
document.getElementById("knopElementIndex").addEventListener("click", toonElementMetInTeGevenIndex);
//  link de knop met id "knopVoegToe" aan functie voegElementToe
document.getElementById("knopVoegToe").addEventListener("click", voegElementToe);
//  link de knop met id "knopTestElement" aan functie testElement
document.getElementById("knopTestElement").addEventListener("click", testElement);
//  link de knop met id "knopWillekeurig" aan fyunctie toonWillekeurigElement
document.getElementById("knopWillekeurig").addEventListener("click", toonWillekeurigElement);

//  definieer een array in variabele "fruit" en vul deze met appel, peer en kiwi
let fruit = ["Appel", "Peer", "Kiwi"];
//  definieer variabelen "fruitOmOpHetSchermTeSchrijven" en "index"
let fruitOmOpHetSchermTeSchrijven;
let index;

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

//  functie toonWillekeurigElement
//  als op de knop wordt gedrukt tonen we een willekeurig element uit de array
function toonWillekeurigElement(){
  //  eerst bepalen we een willekeurige index in de geldige range  (dus geheel getal tussen 0 en aantal elementen - 1)
	let willekeurigeIndex = Math.floor(Math.random()*fruit.length);
  //  als we de index bepaald hebben nemen we het element op die plaats en houden het bij in variabele fruitOmOpHetSchermTeSchrijven
	fruitOmOpHetSchermTeSchrijven = fruit[willekeurigeIndex];
//  nu maken we de div leeg
	clearDiv();
  //  en dan roepen we hulpfunctie toonElement om het gevonden element op het scherm te zetten
	toonElement();
}

//  functie toonElement
//  dit is een hulpfunctie, die niet rechtstreeks onder een knop hangt, maar op verschillende plaatsen terugkomt.
//   deze functie gaat ervan uit dat het element dat getoond moet worden al vastgelegd is in variabele fruitOmOpHetSchermTeSchrijven
function toonElement(){
  //  zoek de div en houd bij in variabele divContent
	let divContent = document.getElementById("arrayContent");
  //  maak een paragraaf en houd bij in variabele fruitElement
	let fruitElement = document.createElement("p");
  //   toon de gewenste tekst  (innerHTML ...)
	fruitElement.innerHTML = fruitOmOpHetSchermTeSchrijven;
  //   en voeg tenslotte de paragraaf toe als kindje van de div  (appendChild)
	divContent.appendChild(fruitElement);
}






























//Deze code is "verstopt". Het is niet de bedoeling dat deze code wordt besproken met de leerlingen! 

function toonArrayMetIndex(){
	clearDiv();
	for(let i = 0; i<fruit.length; i+=1){
		fruitOmOpHetSchermTeSchrijven = fruit[i];
		index = i;
		toonElementMetIndex();
	}
}

function toonElementMetInTeGevenIndex(){
	index = prompt("Geef de index in waarvan je het element wil ophalen");
	if (index < fruit.length){
		fruitOmOpHetSchermTeSchrijven = fruit[index];
		clearDiv();
		toonElementMetIndex();
	}
}


function voegElementToe(){
	let nieuwFruit = prompt("Geef een stuk fruit in om toe te voegen aan de array.");
	fruit.push(nieuwFruit);
	clearDiv();
}


function testElement(){
  let elementToTest = prompt("Geef het stuk fruit waarvan je wil controleren of het al in de array staat.");
  if(fruit.includes(elementToTest)){
    alert(elementToTest + " staat al in de array!");
  }
  else{
    alert(elementToTest + " staat nog NIET in de array!");
  }
}

function clearDiv(){
	let divContent = document.getElementById("arrayContent");
	while (divContent.firstChild){
		divContent.removeChild(divContent.firstChild)
	};
}


function toonElementMetIndex(){
	let divContent = document.getElementById("arrayContent");
	let divElement = document.createElement("div");
	let fruitElement = document.createElement("p");
	let indexElement = document.createElement("p");

	fruitElement.innerHTML = fruitOmOpHetSchermTeSchrijven;
	indexElement.innerHTML = index;

	divElement.appendChild(fruitElement);
	divElement.appendChild(indexElement);

	divContent.appendChild(divElement);
}