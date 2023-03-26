//  hier komt de javascript code voor je oefening.
//  zorg ervoor dat je vanuit de html naar het juiste javascript bestand linkt hé!
//  let hierbij op de mappen-structuur.

//  eerst en vooral gaan we de knop met id "zetOm" vertellen dat zijn 'klik' event de functie pasTekstAan moet uitvoeren
document.getElementById("magieKnop").addEventListener("click", pasTekstAan);

//  nu maken we de functie pasTekstAan
function pasTekstAan(){
  //  zoek de paragraaf met id "aanTePassenTekst" en houd die bij in variabele 'tekst'
  let tekst = document.getElementById("aanTePassenTekst");
  //  pas de tekst van de paragraaf aan
  tekst.innerHTML = "Deze tekst verschijnt via JavaScript!!!";
}