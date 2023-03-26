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

//  definieer een array in variabele "fruit" en vul deze met appel, peer en kiwi
let fruit = ["Appel", "Peer", "Kiwi"];
//  definieer variabelen "fruitOmOpHetSchermTeSchrijven" en "index"
let fruitOmOpHetSchermTeSchrijven;
let index;

// functie toonElementMetInTeGevenIndex
//  als op de knop wordt gedrukt vragen we met een prompt aan de gebruiker welke index hij wil zien.  die halen we dan op en we tonen de gegevens in de array div
function toonElementMetInTeGevenIndex(){
  //  vraag het getal en houd bij in variabele "index"
	index = prompt("Geef de index in waarvan je het element wil ophalen");
  //  als het een geldige index is  (dus kleiner dan de lengte van de array) ...
	if (index < fruit.length){
      //  dan onthouden we de tekst op die plaats in de array, in onze variabele "fruitOmOpHetSchermTeSchrijven"
		fruitOmOpHetSchermTeSchrijven = fruit[index];
    //  dan maken we de div leeg met een aanroep van functie clearDiv  (geen parameters)
		clearDiv();
    //  en tenslotte roepen we toonElementMetIndex aan, ook geen parameters
		toonElementMetIndex();
	}
}

//  functie voegElementToe
//  als op de knop wordt geklikt vragen we met een prompt aan de gebruiker welk fruit hij wil toevoegen aan de array.  
function voegElementToe(){
  //  het antwoord van de prompt houden we bij in variabele "nieuwFruit"
	let nieuwFruit = prompt("Geef een stuk fruit in om toe te voegen aan de array.");
  //  als we een antwoord hebben duwen we dat bij in de array
	fruit.push(nieuwFruit);
  //  en tenslotte maken we de div leeg met aanroep van clearDiv (geen parameters)
	clearDiv();
}


//  functie testElement
//   als op de knop wordt geklikt vragen we met een prompt aan de gebruiker voor welk fruit hij wil nagaan of het al in de array zit
function testElement(){
  //  antwoord van de prompt houden we bij in variabele elementToTest
  let elementToTest = prompt("Geef het stuk fruit waarvan je wil controleren of het al in de array staat.");
  //  als de inhoud van variabele elementToTest voorkomt in de array  (gebruik functie 'includes') ...
  if(fruit.includes(elementToTest)){
    //  ...  dan geven we een alert dat het fruit al in de array staat
    alert(elementToTest + " staat al in de array!");
  }
  else{
    //    ....  anders geven we een alert dat het fruit nog niet in de array staat
    alert(elementToTest + " staat nog NIET in de array!");
  }
}




































//Deze code is "verstopt". Het is niet de bedoeling dat deze code wordt besproken met de leerlingen! 
function toonArray(){
	clearDiv();
	for(let i = 0; i<fruit.length; i+=1){
		fruitOmOpHetSchermTeSchrijven = fruit[i];
		toonElement();
	}
}

function toonArrayMetIndex(){
	clearDiv();
	for(let i = 0; i<fruit.length; i+=1){
		fruitOmOpHetSchermTeSchrijven = fruit[i];
		index = i;
		toonElementMetIndex();
	}
}

function clearDiv(){
	let divContent = document.getElementById("arrayContent");
	while (divContent.firstChild){
		divContent.removeChild(divContent.firstChild)
	};
}

function toonElement(){
	let divContent = document.getElementById("arrayContent");
	let fruitElement = document.createElement("p");
	fruitElement.innerHTML = fruitOmOpHetSchermTeSchrijven;
	divContent.appendChild(fruitElement);
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