//  hier komt de javascript code voor je oefening.
//  zorg ervoor dat je vanuit de html naar het juiste javascript bestand linkt hé!
//  let hierbij op de mappen-structuur.


//  link de knop met id "stelVraag" aan functie stelEenVraag
document.getElementById("stelVraag").addEventListener("click", stelEenVraag);

//  definieer een array genaamd "antwoorden", waaruit we dan een willekeurig antwoord kunnen kiezen.
//  Je mag er hier zelf ook nog aan toevoegen!!
let antwoorden=["Het is zeker", "Het is beslist zo", "Zonder twijfel", "Zeer zeker", "Je kunt erop vertrouwen", "Volgens mij wel", "Zeer waarschijnlijk", "Goed vooruitzicht", "Ja","Tekenen wijzen op ja", "Reactie is wazig, probeer opnieuw", "Vraag later opnieuw", "Beter je nu niet te zeggen", "Niet nu te voorspellen", "Concentreer je en vraag opnieuw", "Reken er niet op", "Mijn antwoord is nee", "Mijn bronnen zeggen nee", "Vooruitzicht is niet zo goed", "Zeer twijfelachtig"];

//  functie stelEenVraag
//   wordt aangeroepen bij een klik op de knop
function stelEenVraag(){
  //  eerst laten we de gebruiker een vraag stellen.   Wat die vraag is interesseert ons hier niet, we willen er alleen een (grappig) willekeurig antwoord op geven.
  //  omdat we de vraag zelf niet nodig hebben gaan we die ook niet bijhouden.  Daarom wordt het resultaat van de prompt-dialog niet in een variabele gestopt.
	prompt('wat is je vraag?');
//   bepaal een willekeurig getal tussen 0 en de lengte van de array ( min één)
	const willekeurigeIndex = ;

  //  pak de tekst uit de array op de gekozen plaats
	const gekozenAntwoord = ;

  //  en laat de gebruiker dan het antwoord zien, met een alert
	alert("De magische website zegt: "+gekozenAntwoord);
}