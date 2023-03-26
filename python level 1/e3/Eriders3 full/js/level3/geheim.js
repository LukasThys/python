//  hier komt de javascript code voor je oefening.
//  zorg ervoor dat je vanuit de html naar het juiste javascript bestand linkt hé!
//  let hierbij op de mappen-structuur.

//  deze javascript code wordt direct uitgevoerd als de pagina wordt ingeladen.  
//  ze staat niet in een functie die aan een knop is gekoppeld

//  we gaan eerst in een paar constanten de teksten vastleggen die we willen gebruiken
const vraag = "Wat denk je dat het wachtwoord is?";
const wachtwoord = "Gary2022Robot";
const geheim = "Mijn geheim is dat ik een grote fan ben van gerechtigheid, maar ik hou mij zelf niet altijd aan alle regels. Soms rij ik bijvoorbeeld met mijn fiets op het voetpad ...";
const foutmelding = "Oeps, dat was fout!";
const foutmeldingLaatsteGok = "Je was fout! Dat was je laatste kans, nu mag je niet meer gokken!!!";
const foutmeldingGeenGokkenMeer = "Ik had toch gezegd dat je niet meer mocht gokken ...";

//  nu maken we een variabele waarin we het resterend aantal gokken bijhouden.  Beginwaarde is 5

//  dan roepen we de functie aan die het resterend aantal gokken gaat tonen


//  hier definiëren we de functie toonResterendAantalGokken, met lege parameterlijst
function toonResterendAantalGokken(){
  //  zoek in het document het element met id "aantalResterend", en houd dit bij in variabele "strong"

  //  verander dan de innerHTML van de strong om het resterend aantal gokken weer te geven
  
}

//  zoek in het document het element met id "raadWachtwoord"  (de knop dus)
//    en koppel er een event-listener aan voor de functie raadWachtwoord
document.getElementById("raadWachtwoord").addEventListener("click", raadWachtwoord)

//  hier definiëren we nu de hoofd-functie zelf:  de naam is raadWachtwoord, en de functie heeft geen parameters
function raadWachtwoord(){
  // als er nog gokken over zijn   (dus resterendAantalGokken groter dan nul)
 if (resterendAantalGokken > 0){
      // maak een variabele genaamd "gok" en vul die met het resultaat van een prompt
      //   de prompt moet aan de gebruiker vragen:  "wat denk je dat het wachtwoord is?"
     
      //  dan verlagen we resterendAantalGokken met 1....
      
      //  ... en zorgen we dat het juiste aantal resterende gokken getoond wordt.
      
      //  als de gok juist is  ( dus gelijk is aan het wachtwoord) ...
     if (gok === wachtwoord){
       //  ....  dan geven we het geheim prijs.  Met een alert tonen we dan de tekst in constante "geheim"
        
      }
    //  als de gok fout was ...
       else{        
       //  als het resterend aantal gokken nu nul is ....
          if (resterendAantalGokken === 0){
            //  dan tonen we de foutmelding dat het wachtwoord niet geraden is en de gokken nu op zijn
            
          }
      //  anders, als er nog wel gokken over zijn
       else
          {      
              //  ...  dan tonen we de foutmelding dat het wachtwoord niet geraden is
                        
            
          }
    //  einde van als de gok fout was  ( else )
        }
   //  einde van als er nog gokken over zijn
 }
  else
   //  als er geen gokken meer over zijn tonen we de juiste melding  (geenGokkenMeer)
 {
   
 }
  // einde van de functie
}