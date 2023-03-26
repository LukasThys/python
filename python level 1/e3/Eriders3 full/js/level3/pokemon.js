//  hier komt de javascript code voor je oefening.
//  zorg ervoor dat je vanuit de html naar het juiste javascript bestand linkt hé!
//  let hierbij op de mappen-structuur.

//  eerst gaan we alle knoppen aan de functies linken.  Dat doen we natuurlijk met eventListeners
//  link de knop met id "vangPokemon" aan functie vangPokemon
document.getElementById("vangPokemon").addEventListener("click", vangPokemon);
//  link de knop met id "rugzakLeeg" aan functie maakRugzakLeeg
document.getElementById("rugzakLeeg").addEventListener("click", maakRugzakLeeg);
//  link de knop met id "trainerBattle" aan functie trainerBattle
document.getElementById("trainerBattle").addEventListener("click", trainerBattle);
//  link de knop met id "kiesPokemon" aan functie kiesPokemon
document.getElementById("kiesPokemon").addEventListener("click", kiesPokemon);

//    zoek in het document de div met id "rugzakContent", en houd die bij in variabele rugzakContent.  Deze gaan we gebruiken om de inhoud van onze rugzak te tonen.
let rugzakContent = document.getElementById("rugzakContent");
//   zoek in het document de div met id "pokemonContent", en houd die bij in variabele pokemonContent.  Deze gaan we gebruiken om de pokemon te tonen die tijdens de battle gekozen wordt
let pokemonContent = document.getElementById("pokemonContent");
//  maak een lege array en houd die bij in een variabele genaamd "mijnPokemons"
let mijnPokemons = [];
//  maak een array genaamd "pokemons", en zet daarin alle pokemons van de eerste generatie.  151 stuks om precies te zijn...
let pokemons=["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr.Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

//  nu maken we functie vangPokemon
function vangPokemon(){ 
 //  als er minder dan zes pokemons in de rugzak zitten  ( dus als de lengte van de array kleiner is dan zes )...
  if( mijnPokemons.length < 6 ){
   // ...  dan vragen we aan de speler  (met een prompt) welke pokémon hij gevangen heeft ...
     let nieuwePokemon = prompt("Welke nieuwe Pokémon heb je gevangen? (alleen eerste generatie én met hoofdletter!)");
   //  als de speler geantwoord heeft met een geldige eerste generatie pokemon  (met andere woorden:  als het antwoord voorkomt in de array genaamd pokemons) ...
     if( pokemons.includes(nieuwePokemon) ){
       //  dan voegen we de nieuwePokemon toe aan onze rugzak  (dus array mijnPokemons)
    mijnPokemons.push(nieuwePokemon);
       //  we maken dan ook een nieuw paragraaf element aan
             let alinea_pokemon = document.createElement("p");
       //   en we vullen de innerHTML van die paragraaf met de naam van de nieuwePokemon
       alinea_pokemon.innerHTML = nieuwePokemon;
       //   tenslotte tonen we de nieuwe pokemon in de rugzak door de nieuwe paragraaf te appenden aan de div waarin we de rugzak tonen
       rugzakContent.appendChild(alinea_pokemon);
     }
       //  anders (dus als de speler geen correcte naam heeft ingevoerd)...
     else{
       // ... dan geven we een melding dat dit geen eerste generatie pokémon is.
       alert("Dit is geen Pokémon uit de eerste generatie! Denk je van wel? Dan schreef je misschien de naam fout of niet met een hoofdletter!");
     }
  }
}

//  hier maken we de functie maakRugzakLeeg
function maakRugzakLeeg(){
  //  eerst en vooral gooien we de array met gevangen pokemons leeg.  Dat doen we door de variabele "mijnPokemons" gewoon opnieuw te declareren als lege array
  mijnPokemons = [];
  //  en dan gaan we nog de div in de html leegmaken zodat de vorige pokemons ook niet meer getoond worden.
  // ZOLANG de div "rugzakContent" nog kindjes heeft ...   (firstChild bestaat)
 while(rugzakContent.firstChild){
   // ...  gooien we het eerste kindje weg
   rugzakContent.removeChild(rugzakContent.firstChild);
 }
}

//  hier maken we de functie trainerBattle
function trainerBattle(){
  //  bij elke battle starten we met de eerste pokemon in de rugzak
  //  maak dus een variabele "gekozenPokemon" en vul die met het eerste element van array mijnPokemons
  let gekozenPokemon = mijnPokemons[0];

  //  we maken eerst de div leeg door onze hulpfunctie aan te roepen
  maakPokemonContentLeeg();
  //  maak een paragraaf element in variabele "alinea_uitleg" en vul die met tekst en voeg toe aan de div pokemonContent  (tekst:  "Het gevecht gaat starten en je eerste Pokémon komt tevoorschijn!")
 let alinea_uitleg = document.createElement("p");
 alinea_uitleg.innerHTML = "Het gevecht gaat starten en je eerste Pokémon komt tevoorschijn!";
 pokemonContent.appendChild(alinea_uitleg);

  //  maak een paragraaf element in variabele "alinea_pokemon" en vul die met tekst en voeg toe aan de div pokemonContent  (tekst:  "xxx ik kies jou!!!!" waarbij xxx vervangen wordt door de inhoud van variabele gekozenPokemon)
 let alinea_pokemon = document.createElement("p");
 alinea_pokemon.innerHTML = gekozenPokemon + " ik kies jou!!!!!";
 pokemonContent.appendChild(alinea_pokemon);
}


// hier maken we functie kiesPokemon
function kiesPokemon(){
  // vraag aan de gebruiker welk nummer hij wil, en houd bij in variable 'index'
 let index = prompt("In de hoeveelste Pokéball zit de Pokémon die je wil gebruiken? (AKA wat is de index van de Pokémon in de lijst?)");
  //  haal de juiste pokemon uit de array en houd bij in variabele gekozenPokemon
  gekozenPokemon = mijnPokemons[index];
//  maak de div leeg door de hulpfunctie aan te roepen
 maakPokemonContentLeeg();
  
  //  maak een paragraaf element in variabele "alinea_pokemon" en vul die met tekst en voeg toe aan de div pokemonContent  (tekst:  "xxx ik kies jou!!!!" waarbij xxx vervangen wordt door de inhoud van variabele gekozenPokemon)
 let alinea_pokemon = document.createElement("p");
 alinea_pokemon.innerHTML = gekozenPokemon + " ik kies jou!!!!!";
 pokemonContent.appendChild(alinea_pokemon);
}



//  de functie maakPokemonContentLeeg is een kleine hulpfunctie die we definiëren omdat op meerdere plaatsen de pokemonContent div moet leeg gemaakt worden.  
function maakPokemonContentLeeg(){
 while(pokemonContent.firstChild){
    pokemonContent.removeChild(pokemonContent.firstChild);
  }
}