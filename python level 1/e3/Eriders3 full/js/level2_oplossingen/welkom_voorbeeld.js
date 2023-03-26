//  eerst en vooral gaan we de knop met id "zetOm" vertellen dat zijn 'klik' event de functie pasTekstAan moet uitvoeren
document.getElementById("zegWelkom").addEventListener("click", welkom);

//  nu maken we de functie welkom
function welkom() {
  //  zoek de input-box met id "inputUur" en stop de waarde daarvan in variabele uur
  const uur = document.getElementById("inputUur").value;

  // definieer een variabele 'boodschapInhoud'
  let boodschapInhoud;

  //  nu gaan we kiezen wat we willen zeggen 

  
  //  als variabele uur kleiner is dan 12 ...
  if (uur < 12){
      //  ...  dan zetten we boodschapInhoud op "Goeiemorgen"
		boodschapInhoud = "Goeiemorgen";
	}
    //  ...  anders als uur kleiner is dan 18 ...
	else if (uur < 18){
      //   ... dan zetten we boodschapInhoud op "Goeiemiddag"
    boodschapInhoud = "Goeiemiddag";
  }
      //  anders ...
  else{
      //  ...  dan zetten we boodschapInhoud op "Goeienavond"
    boodschapInhoud = "Goeienavond";
  }
  
  //  maak een paragraaf tag aan, en stop die in variabele 'boodschap'
	let boodschap = document.createElement("p");
  //  verander de inhoud van die paragraaf naar de variabele 'boodschapInhoud'
	boodschap.innerHTML = boodschapInhoud;

  //  zoek de div met id "welkomContent" en hou die bij in variabele 'div'
	let div = document.getElementById("welkomContent");
  //  voeg de nieuwe paragraaf toe als kind van de div
  div.appendChild(boodschap);
}