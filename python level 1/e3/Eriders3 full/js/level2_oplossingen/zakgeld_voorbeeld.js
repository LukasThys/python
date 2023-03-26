//  hier komt de javascript code voor je oefening.
//  zorg ervoor dat je vanuit de html naar het juiste javascript bestand linkt hé!
//  let hierbij op de mappen-structuur.

//  eerst en vooral gaan we de knop met id "sparenZakgeld" vertellen dat zijn 'klik' event de functie berekenZakgeld moet uitvoeren
document.getElementById("sparenZakgeld").addEventListener("click", berekenZakgeld);

//  nu maken we de functie berekenZakgeld
function berekenZakgeld(){  
  //  we gaan eerst zorgen dat er niks meer van de vorige berekening in de div zakgeldContent staat.
//  zoek de div met id "zakgeldContent" en sla die op in variabele 'divContent'
  let divContent = document.getElementById("zakgeldContent");
  //  zolang de div in variabele divContent nog kinderen heeft ....
 while (divContent.firstChild){
   //  begin lus
   //  gooi het eerste kind weg
divContent.removeChild(divContent.firstChild)
   //  einde lus
 };
  
  //  zoek de input met id "inputZakgeld", pak de waarde daarvan, converteer naar een getal, en sla het resultaat op in variabele 'zakgeldPerWeek '
 let zakgeldPerWeek  = Number(document.getElementById("inputZakgeld").value);
//  maak een variabele 'totaalZakgeld' en initialiseer die op 0
  let totaalZakgeld = 0; 

  // doe 10 keer  (dus met een for-lus)
for(let i = 1; i<11; i++){
  //  begin lus
  
  // totaalZakgeld wordt gelijk aan de vorige waarde van totaalZakgeld plus het zakgeldperWeek
    totaalZakgeld = totaalZakgeld + zakgeldPerWeek;
  //  maak een variabele 'boodschapInhoud' en vul die met tekst 'Week x : xxx € = '
    let boodschapInhoud = "Week " + i + ": &euro;" + totaalZakgeld +" = ";

  //  hier komt je prijzenstructuur.  
  //  al totaalZakgeld meer is dan 40 ...
    if (totaalZakgeld>=40){
      //  ....  dan wordt boodschapInhoud gelijk aan de vorige waarde van boodschapInhoud plus "1 ticket voor een pretpark"
    boodschapInhoud = boodschapInhoud + "1 ticket voor een pretpark";
    }
    else{
      //  ....  anders ....
      //  ...  als totaalZakgeld meer is dan 10 ...
    if (totaalZakgeld>=10){
      // ...  dan wordt boodschapInhoud ....  enzovoort.    Verzin zoveel onderverdelingen en prijzen als je zelf wil.  Dit is altijd de structuur.
    boodschapInhoud = boodschapInhoud +"1 maand spotify premium";
    }
    else{
    boodschapInhoud = boodschapInhoud + "een paar snoepjes";
    }
    }   //  einde van de prijzenstructuur.
      
    
    //  maak een nieuwe paragraaf aan, en stop die in variabele 'boodschap'
    let boodschap = document.createElement("p");    
      //  zet wat er in variabele 'boodschapInhoud' staat in de innerHTML van de paragraaf
    boodschap.innerHTML = boodschapInhoud;
     //  voeg de nieuw gemaakte paragraaf toe als kind van de divContent 
    divContent.appendChild(boodschap);

      //  einde lus
 }


} 