document.getElementById("knopAlleenArray").addEventListener("click", toonArray);
document.getElementById("knopArrayIndex").addEventListener("click", toonArrayMetIndex);
document.getElementById("knopElementIndex").addEventListener("click", toonElementMetInTeGevenIndex);
document.getElementById("knopVoegToe").addEventListener("click", voegElementToe);
document.getElementById("knopTestElement").addEventListener("click", testElement);

//De array is nu nog leeg, voeg een aantal stukken fruit toe aan de array
let fruit = [];
fruit.push("appel");
let fruitOmOpHetSchermTeSchrijven;
let index;

function toonElementMetInTeGevenIndex(){
	index = prompt("Geef de index in waarvan je het element wil ophalen");
  //Kleiner dan de lengte van de array
	if (index < 10){
    //Haal het element met die index op vanuit de array fruit.
		fruitOmOpHetSchermTeSchrijven = "Banaan";
		clearDiv();
		toonElementMetIndex();
	}
}

function voegElementToe(){
	let nieuwFruit = prompt("Geef een stuk fruit in om toe te voegen aan de array.");
	
  //Voeg een lijn code doe om het nieuwe fruit toe te voegen aan de array fruit.

	clearDiv();
}

function testElement(){
  let elementToTest = prompt("Geef het stuk fruit waarvan je wil controleren of het al in de array staat.");

  //Pas de conditie aan naar: ALS elementToTest al in de array fruit zit
  if(false){
    alert(elementToTest + " staat al in de array!");
  }
  else{
    alert(elementToTest + " staat nog NIET in de array!");
  }
}



































//Vanaf hier is alles correct ingevuld! Je hoeft hier niets aan te passen!
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