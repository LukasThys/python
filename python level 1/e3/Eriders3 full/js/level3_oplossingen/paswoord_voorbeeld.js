//  hier komt de javascript code voor je oefening.
//  zorg ervoor dat je vanuit de html naar het juiste javascript bestand linkt hé!
//  let hierbij op de mappen-structuur.

//  eerst zoeken we in het document het element met id "addWordToPassword" en dan koppelen we daar een eventListener aan voor functie addWordToPassword
document.getElementById("addWordToPassword").addEventListener("click", addWordToPassword);

//    we maken ook nog een variabele "password" en initialiseren die op lege string
let password = "";

//  nu gaan we de functie maken, met naam addWordToPassword en lege parameterlijst
function addWordToPassword(){
  //  om te beginnen vragen we aan de gebruiker welk woord hij wil toevoegen  (met een prompt) en dat antwoord houden we bij in een variabele genaamd word
 let word = prompt("Welk woord wil je toevoegen aan je wachtwoord?");

  //  dan plakken we dit nieuwe woord achteraan bij het paswoord.
 password = password + word ;

  //  als de lengte van het paswoord nu nog niet langer is dan 20 ...
 if (password.length < 20){
   //  ...  dan geven we de melding dat het nog niet lang genoeg is
alert("Je wachtwoord is nog niet lang genoeg. Geef nog een woord in! ");
}
   //  .... anders ....
 else{
   //  ...   geven we de melding dat het ok is
alert("Perfect! Je wachtwoord is nu lang genoeg om veilig te zijn! Je wachtwoord is: " + password);
 }
}