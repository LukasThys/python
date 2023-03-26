//  hier komt de javascript code voor je oefening.
//  zorg ervoor dat je vanuit de html naar het juiste javascript bestand linkt hé!
//  let hierbij op de mappen-structuur.

//  eerst en vooral gaan we de knop met id "verhoogAantal" vertellen dat zijn 'klik' event de functie verhoogAantal moet uitvoeren
document.getElementById("verhoogAantal").addEventListener("click", verhoogAantal);

//  maak twee variabelen genaamd 'startDate' en 'stopDate'
let startDate, stopDate

//  nu maken we de functie verhoogAantal
function verhoogAantal(){
  // zoek de input met id "inputDoel" en bewaar in variabele "doel"
  const doel = document.getElementById("inputDoel").value;
  //  zoek de strong-tag met id "alGeklikt", pak de inhoud daarvan, converteer naar een getal, en sla het resultaat op in variabele 'aantalGeklikt'
  let aantalGeklikt = Number(document.getElementById("alGeklikt").innerHTML);

  //  verhoog variabele aantalGeklikt met 1
  aantalGeklikt = aantalGeklikt + 1;
  //  als dit de eerste klik is starten we nu de tijd  (startDate = NU !!)
  if (aantalGeklikt == 1){
    startDate = new Date()
  }
  //  als variabele 'aantalGeklikt' groter of gelijk is aan het doel ...
  if (aantalGeklikt>=doel){
    //   ...  dan stoppen we de tijd  (stopDate = NU !!)
    stopDate = new Date()
    //      bepaal ook de variabele tijd door het verschil te pakken tussen stopDate en StartDate
    let tijd = stopDate.getTime()-startDate.getTime()
    
    // nu is alles berekend, we moeten het alleen nog op het scherm zetten

    //  maak een nieuwe paragraaf aan, en stop die in variabele 'proficiat'
    let proficiat = document.createElement("p");
    //  zet een tekst in de nieuwe paragraaf, waarin je de tijd vermeldt die nodig was om het aantal klikken te behalen.  ( aantal seconden = tijd / 1000)
    proficiat.innerHTML = "Proficiat!!! Je hebt het aantal keer te klikken behaald in "+ tijd/1000 + " seconden.";
    //  zoek de div met id "tellerContent" en voeg daar de nieuwe paragraaf als kind aan toe
    document.getElementById("tellerContent").appendChild(proficiat);
    //  zet variabele aantalGeklikt weer op nul
    aantalGeklikt = 0;
  }
   //  zoek de strong-tag met id "alGeklikt" en zet er het aantal klikken in
  document.getElementById("alGeklikt").innerHTML = aantalGeklikt;
} 