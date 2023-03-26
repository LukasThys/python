//  hier komt de javascript code voor je oefening.
//  zorg ervoor dat je vanuit de html naar het juiste javascript bestand linkt hé!
//  let hierbij op de mappen-structuur.

//  in deze oefening zijn er geen event-listeners om te koppelen.  't is te zeggen ...  bij het begin zijn er geen, zo dadelijk gaan we er eentje dynamisch koppelen

//  maak een lege array en houd die bij in een variabele genaamd "sequentie"
let sequentie = [];
//  maak nog een array genaamd "opties" en stop daarin de vier kleuren Rood, Geel, Groen en Blauw
let opties = ["Rood", "Geel", "Groen", "Blauw"];
//  maak een variabele "indexToCheck" en initialiseer deze op 0
let indexToCheck = 0;

//  na het aanmaken van alle benodigde variabelen en arrays roepen we functie "start" aan
start();

//  hier definiëren we functie "start".  Parameterlijst is leeg
function start(){
  // voor elk element in array 'opties'  (dus voor elk van de vier kleuren) ...
  for(let i = 0; i<opties.length; i+=1){
    // maak een knop(link) en houd bij in variabele "knop"
      let knop = document.createElement("a");
    // zet de tekst van de knop op het element van de array  (dus de kleur)
      knop.innerHTML = opties[i];
    //  geef de knop een unieke id  (gebruik het volgnummer!)
      knop.id = "knop"+opties[i];
    //  koppel een (naamloze) functie aan de knop , die het volgende doet ....
      knop.addEventListener("click", function (){
        //  bij de array "sequentie" de volgende correcte kleur opvragen (die zit op plaats genummerd indexToCheck) en bijhouden in variabele elementToCheck.   
        let elementToCheck = sequentie[indexToCheck];
        //  als de volgende correcte kleur gelijk is aan de kleur van de knop die we nu net hebben ingedrukt ...
        if (elementToCheck === opties[i]){
          //  ...  dan gaan we door met het spel en roepen functie spelerIsJuist aan
          spelerIsJuist();
        }
        else{
          // ...   anders roepen we functie spelerIsFout aan.
          spelerIsFout();
        }
      });
    //  zoek in het document de div met id "knoppenSimon" en voeg de net aangemaakte knop toe
      document.getElementById("knoppenSimon").appendChild(knop);
    }
  //  na de lus  (dus als alle kleur-knoppen gemaakt zijn) roepen we functie "volgendElement" aan
    volgendElement();  
}

//  functie volgendElement
//  deze functie wordt aangeroepen telkens als er een willekeurige kleur moet toegevoegd worden aan de sequentie
function volgendElement(){
  //  bepaal een willekeurige index voor de array "opties"
	let willekeurigeIndex = Math.floor(Math.random()*opties.length);
  //  pak de kleur op die plaats
	let willekeurigElement = opties[willekeurigeIndex];
  //  voeg de willekeurige kleur toe aan de array "sequentie"  (push...)
	sequentie.push(willekeurigElement);
  //   toon de sequentie aan de gebruiker
	alert(sequentie);
  //    en zet variabele indexToCheck op 0, zodat de gebruiker de hele lijst in "sequentie" kan proberen na te bootsen met klikken op de knoppen in de juiste volgorde.
	indexToCheck = 0;
}

//  functie spelerIsJuist.     Lege parameterlijst
//  deze wordt aangeroepen als de speler op de juiste knop heeft geklikt
function spelerIsJuist(){
  //  eerst de indexToCheck verhogen.   Logisch, we hebben net een plaats in de sequentie gecontroleerd, nu pakken we de volgende plaats
	indexToCheck+=1;
  //  ALS we aan het einde van de lijst zijn gekomen  (dus alle kleuren in de sequentie gecontroleerd hebben en de speler had ze allemaal goed ) ...
	if (indexToCheck === sequentie.length){
    // ....  dan roepen we functie  volgendElement aan om nog een willekeurige kleur toe te voegen
		volgendElement();
	}
}

//  functie spelerIsFout.     Lege parameterlijst
//  deze wordt aangeroepen als de speler niet op de juiste knop heeft geklikt
function spelerIsFout(){
  //  bepaal de lengte van de keten die de speler juist had.  Hoeveel zijn er dat?   Enkel de laatste heeft de speler verkeerd, dus:  de lengte van de array min 1
	let juisteReeks = sequentie.length -1;
  //  geef een mooie foutmelding en verwerk er de langste reeks in
	alert("Je was fout! Begin opnieuw ... Je langste juiste reeks was " + juisteReeks);
  //  we beginnen opnieuw door de array "sequentie" leeg te maken.
	sequentie = [];
  //   en dan zetten we het spel terug in gang met een aanroep van functie volgendElement
	volgendElement();
}