//  hier komt de javascript code voor je oefening.
//  zorg ervoor dat je vanuit de html naar het juiste javascript bestand linkt hé!
//  let hierbij op de mappen-structuur.

//  eerst gaan we alle knoppen aan de functies linken.  Dat doen we natuurlijk met eventListeners
//  link de knop met id "start" aan functie start
document.getElementById("start").addEventListener("click", start);
//  link de knoppen met id "beurtSpeler1" en "beurtSpeler2" allebei aan functie beurtSpeler
document.getElementById("beurtSpeler1").addEventListener("click", beurtSpeler);
document.getElementById("beurtSpeler2").addEventListener("click", beurtSpeler);
//  link de knop met id "trigger" aan functie triggerGedrukt
document.getElementById("trigger").addEventListener("click", triggerGedrukt);

//    we hebben twee variabelen nodig, namelijk aantalTotTaart  en aantalTotEindeBeurt.  Allebei getallen, allebei beginnend op 0
let aantalTotTaart=0;
let aantalTotEindeBeurt=0;

//  nu maken we functie start.  Lege parameterlijst
function start(){
  //  aantalTotTaart wordt een random getal tussen 1 en 21
 aantalTotTaart = Math.floor(Math.random()*21)+1;
  //  starter (nieuwe variabele!) wordt een random getal tussen 1 en 2
 let starter = Math.floor(Math.random()*2)+1;
  //   nu geven we een alert welke speler gekozen is als starter
 alert("Speler " + starter + " mag beginnen! Zijn jullie er klaar voor? Start!!!")
}  //  einde van functie start

//   dan de functie beurtSpeler.  Beide knoppen linken naar deze functie.
function beurtSpeler(){
  //  aantalTotEindeBeurt wordt een random getal tussen 0 en 5
 aantalTotEindeBeurt = Math.floor(Math.random()*6);
  //   dan geven we een alert over hoeveel keer de speler moet klikken op de trigger knop
 alert("Je beurt is begonnen! Je moet " + aantalTotEindeBeurt + " keer op de trigger duwen. Krijg jij de taart in je gezicht? Spannend ... ");
}   //  einde van functie   beurtSpeler

//  tenslotte de functie triggerGedrukt.   Remember:  deze wordt aangeroepen telkens een speler op de knop "trigger" drukt.
function triggerGedrukt(){
  // verminder aantalTotEindeBeurt met 1
 aantalTotEindeBeurt -= 1;
  //  verminder aantlTotTaart met 1
 aantalTotTaart -= 1;
  //   als aantalTotTaart nul geworden is heeft de speler prijs ....
 if(aantalTotTaart === 0){
   //  dus dan geven we een alert met waarschuwing dat de taart eraan komt gevlogen
   alert("Incoming: TAAAAAAAAAAAAAAART");
 }  // einde van de if
 else{
   //   anders geven we een alert dat de speler gelukt heeft en geen taart in z'n gezicht krijgt
  alert("Sjanske! Geen taart in je gezicht deze keer. ");
 }    //  einde van de else
}   // einde van functie triggerGedrukt