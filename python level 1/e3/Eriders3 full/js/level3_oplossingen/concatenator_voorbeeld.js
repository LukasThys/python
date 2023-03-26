//  hier komt de javascript code voor je oefening.
//  zorg ervoor dat je vanuit de html naar het juiste javascript bestand linkt hé!
//  let hierbij op de mappen-structuur.

//  deze javascript code wordt direct uitgevoerd als de pagina wordt ingeladen.  
//  ze staat niet in een functie die aan een knop is gekoppeld

//  zoek de paragraaf met id "result" en houd deze bij in variabele 'result'
let result = document.getElementById("result");
//  om direct te testen of we de juiste paragraaf in onze variabele gevangen hebben maken we de inhoud ervan leeg.  De puntjes die we in het HTML bestand in de paragraaf gezet hebben moeten dus verdwijnen.  Als je dat ziet gebeuren weet je dat de link tussen de html en de javascript goed is gelegd
result.innerHTML = "";
//  zoek de knop  (link) met id "concatenate" en hang daar een event-listener aan
//    die reageert op een klik, en dan functie "concatenate" gaat uitvoeren
document.getElementById("concatenate").addEventListener("click", concatenate);

//   nu definiëren we onze functie "concatenate", met lege parameterlijst
function concatenate(){
  // maak een variabele "a" waarin je de waarde stopt van het HTML element met id "a"
   let a = document.getElementById("a").value;
  // maak een variabele "b" waarin je de waarde stopt van het HTML element met id "b"
   let b = document.getElementById("b").value;
  //  maak een variabele "concatenated" waarin je het resultaat bijhoudt van a+b
   let concatenated = a + b;
  //  zet het resultaat in variabele "concatenated" in de innerHTML van de paragraaf die we bijgehouden hebben in variabele "result"
   result.innerHTML = concatenated;
// einde functie "concatenate"
}

//  normaal gezien zouden we voor de calculator-functies de koppeling tussen de knoppen en de functies ook helemaal bovenaan in het bestand zetten.   Maar in dit voorbeeld, voor de duidelijkheid, zetten we ze wat lager zodat alle code van het eerste deel, de concatenate, bij mekaar blijft staan.
document.getElementById("add").addEventListener("click", add);
document.getElementById("subtract").addEventListener("click", subtract);
document.getElementById("multiply").addEventListener("click", multiply);
document.getElementById("divide").addEventListener("click", divide);

//  nu de knoppen gekoppeld zijn aan hun respectievelijke event-listeners moeten we alleen nog de functies maken.
//  de bereken-functies zijn BIJNA volledig hetzelfe als de concatenate functie.  
//  het enige verschil is dat we van de twee variabelen a en b eerst een getal maken voordat we ze gaan gebruiken in een bewerking.
function add(){
 const a = Number(document.getElementById("a").value);
 const b = Number(document.getElementById("b").value);
 const added = a + b;
 result.innerHTML = added;
}
function subtract(){
 const a = Number(document.getElementById("a").value);
 const b = Number(document.getElementById("b").value);
 const subtracted = a - b
 result.innerHTML = subtracted;
}

function multiply(){
 const a = Number(document.getElementById("a").value);
 const b = Number(document.getElementById("b").value);
 const multiplied = a * b;
 result.innerHTML = multiplied;
}

function divide(){
 const a = Number(document.getElementById("a").value);
 const b = Number(document.getElementById("b").value);
 const divided = a / b;
 result.innerHTML = divided;
}