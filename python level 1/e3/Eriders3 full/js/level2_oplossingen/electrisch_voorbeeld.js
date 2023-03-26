//  hier komt de javascript code voor je oefening.
//  zorg ervoor dat je vanuit de html naar het juiste javascript bestand linkt hé!
//  let hierbij op de mappen-structuur.

//  eerst en vooral gaan we de knop met id "start" vertellen dat zijn 'klik' event de functie start moet uitvoeren
document.getElementById("start").addEventListener("click", start);


//  nu maken we de functie start
function start(){
  //  zoek de input met id "aantalKm", pak de waarde daarvan, converteer naar een getal, en sla het resultaat op in variabele 'kmNogTeRijden'
 let kmNogTeRijden = Number(document.getElementById("aantalKm").value);
  //  maak een variabele 'actieradius' met waarde 300
 let actieRadius = 300;

  //  zolang het aantal nog te rijdedn km groter is dan de actieradius ....
 while (kmNogTeRijden>actieRadius){
   //   bergin van de lus

   //  kmterijden wordt kiliometerterijden min de actieradius
kmNogTeRijden = kmNogTeRijden-actieRadius;
   // maak een variabele 'boodschapTekst' met daarin een tekst over hoe ver je nog moet rijden
let boodschapTekst = actieRadius+ " km gereden! Ik moet mijn batterij opladen ... Nog " + kmNogTeRijden+" km te gaan";

   //  maak een paragraaf en bewaar die in variabele 'nieuwElement'
let nieuwElement = document.createElement("p");
   //  zorg dat de boodschap in de nieuwe paragraaf zit
nieuwElement.innerHTML = boodschapTekst;
   //  zoek de div met id 'electrischContent' en voeg er de nieuwe paragraaf als een kind aan toe
document.getElementById("elektrischContent").appendChild(nieuwElement);
   //  einde van de lus
 } 
//  voor het laatste stukje maak nog een paragraaf
 let nieuwElement = document.createElement("p");
  //   en steek er een goeie tekst in
 nieuwElement.innerHTML = "Super we hoefden niet (meer) te stoppen om de batterij op te laden! We zijn op onze bestemming aangekomen!";   
  //  en voeg de nieuwe paragraaf ook toe aan de div
document.getElementById("elektrischContent").appendChild(nieuwElement);
