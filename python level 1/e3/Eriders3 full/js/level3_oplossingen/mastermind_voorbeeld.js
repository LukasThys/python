//  hier komt de javascript code voor je oefening.
//  zorg ervoor dat je vanuit de html naar het juiste javascript bestand linkt hé!
//  let hierbij op de mappen-structuur.

//  link de knop met id "controleerCode" aan functie controleerCode
document.getElementById("controleerCode").addEventListener("click", controleerCode);
//  in deze oefening zijn er verder geen event-listeners om te koppelen.  't is te zeggen ...  bij het begin zijn er geen, zo dadelijk gaan we er eentje dynamisch koppelen

//  maak twee lege arrays en houd die bij in variabelen genaamd "codeComputer" en codeSpeler
let codeComputer=[];
let codeSpeler=[];
//  maak nog een array genaamd "kleuren" en stop daarin de zes kleuren Blauw, Geel, Groen, Rood, Paars en Oranje.  (let op de hoofdletters!!)
let kleuren = ["Blauw", "Geel", "Groen", "Rood", "Paars", "Oranje"];

//  na het aanmaken van alle benodigde arrays roepen we functies "plaatsKleuren", "kiesCode" en "plaatsKnoppen" aan
plaatsKleuren();
kiesCode();
plaatsKnoppen();

//  hier definiëren we functie "plaatsKleuren".  Parameterlijst is leeg
function plaatsKleuren(){
  // voor elk element in array 'kleuren'  (dus voor elk van de zes kleuren) ...
  for (let i = 0; i <kleuren.length; i++){
    // maak een list item  (<li>) en houd bij in variabele "nieuwElement"
      let nieuwElement = document.createElement("li");
    // zet de tekst van het list item op het element van de array  (dus de kleur)
      nieuwElement.innerHTML = kleuren[i];   
    //  zoek in het document de <ul> met id "kleuren" en voeg de net aangemaakte li toe      
      document.getElementById("kleuren").appendChild(nieuwElement);
    }  
}


// functeie "kiesCode".     Lege parameterlijst
//  deze functie kiest willekeurig de kleurencode voor de computer.  Bedoeling is om in de array "codeComputer" een lijst van vier kleuren te krijgen, geselecteerd uit de zes beschikbare kleuren, zonder dat er dubbels in voorkomen.
function kiesCode(){
  //  herhaal vier keer    (dus met een for-lus laten we tellertje "i" itereren van 0, zolang i kleiner dan 4, weet je nog?)
  for( let i = 0; i< 4; i++){
    //  maak een variabele "willKleur".  Hier gaan we de keuze in bijhouden
    let willKleur;
    //  doe dan zolang de willKleur al eens gekozen was  (maar minstens één keer ...  daarom do while en niet while do !!)...
    do{
      //  maak variabele "willIndexKleur" en stop hierin een willekeurig geheel getal kleiner dan de lengte van array "kleuren"   (dus 0 .... 5 )
      let willIndexKleur = Math.floor(Math.random() * kleuren.length);
      //  willKleur is dan de kleur die we terugvinden op die plaats
      willKleur = kleuren[willIndexKleur];
    } while(codeComputer.includes(willKleur))
    //  na de lus hebben we een kleur gevonden die nog niet in de lijst voorkwam. 
    // die kleur gaan we nu in de codeComputer array duwen
    codeComputer.push(willKleur);
  }
  //  als de code gekozen is tonen we deze via de console
  console.log(codeComputer);

  //  tenslotte maken we ook nog de array "codeSpeler" klaar, door er vier lege plaatsen aan toe te voegen.
  //  herhaal vier keer  (of lengte van array codeComputer keer, dat is hetzelfde)
  for (let i =0; i< codeComputer.length; i++){
    // voeg een lege string toe aan array codeSpeler
    codeSpeler.push("");
  }
}

//  functie "plaatsKnoppen".  Deze wordt één keer aangeroepen, bij het inladen van de pagina, om de knoppen te maken en te plaatsen
function plaatsKnoppen(){
  //  herhaal even veel keer als array "codeComputer" lang is ...
  for (let i = 0; i<codeComputer.length; i++){
    //  maak in het document een link aan (<a>) en houd bij in variabele knop
    //  zet id en innerHTML van deze knop op "Vak0", "Vak1", "Vak2" of "Vak3"  (dus string "Vak" plus de index)
    //  en zet dan de className van de knop op "myButton"
    let knop = document.createElement("a");
    knop.innerHTML = "Vak " + i;
    knop.id = "vak"+i;
    knop.className = "myButton";
    //  nu hangen we aan de eventListener voor "klik op de knop" een naamloze functie
    knop.addEventListener("click", function (){
      //  in die functie schrijven we nu wat er moet gebeuren als de speler op de knop klikt
      //  we beginnen met een variabele "gekozenKleur" te maken
      let gekozenKleur;
      // dan gaan we zolang de speler een kleur kiest die al gekozen is  (maar minstens één keer ...   do ...while...)
      do{
        // aan de speler vragen welke kleur hij kiest  (met een prompt dus!!)
        gekozenKleur = prompt("Welke kleur wil je plaatsen? Het heeft geen nut om een dubbele kleur te plaatsen! ");
      } while(codeSpeler.includes(gekozenKleur))
      //  na de lus is er een goeie kleur gevonden.  die zetten we op de juiste plaats in de array.   Die juiste plaats is weer onze index van de lus
      codeSpeler[i]= gekozenKleur;
      //  en tenslotte veranderen we de innerHTML van de aangeklikte knop om de gekozen kleur weer te geven
      document.getElementById("vak"+i).innerHTML = gekozenKleur;
    });
    //  als het maken van de knop helemaal klaar is voegen we ze toe aan de div met id "mastermindKnoppen"
    document.getElementById("mastermindKnoppen").appendChild(knop);
  }
}

//  functie "controleerCode"
//  deze functie wordt aangeroepen bij een klik op de knop "controleer"
function controleerCode(){
  //  maak een lege array genaamd "pinnen"
  let pinnen = [];
  //  en een variabele "aantalJuist", geïnitialiseerd op nul
  let aantalJuist = 0;
  //  doe evenveel keer als de lengte van array codeSpeler ...
  for( let i = 0; i< codeSpeler.length; i++){
    //  als de array "codeComputer" en "codeSpeler" op die plaats dezelfde kleur bevatten, betekent dit dat de speler de kleur goed geraden heeft, en ook de plaats van die kleur
    if(codeComputer[i] === codeSpeler[i]){
      //  we voegen dus een zwarte pin toe
      pinnen.push("Zwart");
      //  en verhogen aantalJuist
      aantalJuist++;
    }
      //  anders, als de kleur op die plaats in array codeSpeler wel voorkomt in array codeComputer, dan betekent dit dat de speler de kleur wel goed geraden heeft, maar niet op de juiste plaats
    else if(codeComputer.includes(codeSpeler[i])){
      //  dan voegen we een witte pin toe
      pinnen.push("Wit");
    }
  }

  //  als de speler alles juist heeft  (dus aantalJuist gelijk is aan 4)
  if (aantalJuist === 4){
    // dan geven we een alert om te feliciteren
    alert("Goed zo! Je hebt de code gevonden!!!");
  }
  else {   //   anders gaan we de status tonen
    //  eerst de pinnen sorteren
    pinnen.sort();

    //  en dan maken we een nieuw paragraaf-element in de pagina, met als inhoud:  "codeSpeler pijl pinnen".  Die paragraaf voegen we dan toe aan de div met id mastermindControle
    let nieuwElement = document.createElement("p");
    nieuwElement.innerHTML = codeSpeler + " --> " + pinnen;
    document.getElementById("mastermindControle").appendChild(nieuwElement);

    //  daarna zetten we alles klaar voor een nieuwe poging.  
    //  array "codeSpeler" maken we leeg  (nieuwe array)
    codeSpeler = [];
    //  en dan loopen we nog eens over alle knoppen, om de tekst ervan  (innerHTML) weer te initialiseren op "Vak0", "Vak1", ... enzovoort.
    for (let i = 0; i<codeComputer.length; i++){
      codeSpeler.push("");
      document.getElementById("vak" + i).innerHTML = "Vak "+i;
    }
  }
}