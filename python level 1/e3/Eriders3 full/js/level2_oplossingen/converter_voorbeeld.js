//  hier komt de javascript code voor je oefening.
//  zorg ervoor dat je vanuit de html naar het juiste javascript bestand linkt hé!
//  let hierbij op de mappen-structuur.

//  eerst en vooral gaan we de knop met id "zetOm" vertellen dat zijn 'klik' event de functie zetOm moet uitvoeren
document.getElementById("zetOm").addEventListener("click", zetOm);

//  nu maken we de functie zetOm
function zetOm(){

  //  we maken twee constanten aan voor de koersen
  // één 'koerstUSDtoEUR' voor de koers van de dollar
  const koersUSDtoEUR = 0.8780;
  // één 'koersGBPtoEUR' voor de Britse pond
  const koersGBPtoEUR = 1.1657;

  //  dan halen we de keuzes van de gebruiker uit het webformulier.
  //  één variabele 'bedrag' met de waarde van element met id "bedrag"
  const bedrag = document.getElementById("bedrag").value;
  //  één variabele genaamd 'valuta' met de waarde van element met id "valuta"
  const valuta = document.getElementById("valuta").value;

  //  en dan hebben we nog een variabele nodig om het resultaat van de berekening in bij te houden.
  let bedragEuro;

  //  ALS de valute "USD" is ...
  if (valuta === "USD"){
    //  dan doen we de berekening met de dollar-koers
    bedragEuro = bedrag * koersUSDtoEUR;
  }
  else{
    //  anders doen we de berekening met de pond-koers
    bedragEuro = bedrag * koersGBPtoEUR;
  }

  //  nu alles berekend is gaan we nog een nieuw element van type paragraaf aanmaken
  let nieuwElement = document.createElement("p");
  //  we geven dat nieuwe element als inhoud een tekst met het resultaat
  nieuwElement.innerHTML = bedrag + " " + valuta + " is gelijk aan " + bedragEuro + "&euro;!";
  //  en tenslotte zetten we het nieuwe element bij in de div met id "converterContent"
  document.getElementById("converterContent").appendChild(nieuwElement);
}