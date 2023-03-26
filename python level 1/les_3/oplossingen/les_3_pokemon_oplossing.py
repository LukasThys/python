# CONDITIES & SELECTIE
# OEFENING 2: Pokemon

# gebruik module 'pypokedex'
import pypokedex

# Functie om hectogram naar kilogram om te zetten, genaamd 'gewicht_in_kilogram'. Pakt 1 parameter 'pokemon'
def gewicht_in_kilogram(pokemon):
  return pokemon.weight / 10

# functie om gewicht klasse te bepalen.  Pakt 1 parameter "gewicht"
def krijg_gewicht_klasse(gewicht):
  if gewicht < 5:
    return 'bijzonder licht'
  elif gewicht < 100:
    return 'normaal'
  else:
    return 'super zwaar'

# functie om gewicht info te printen.  Pakt 1 parameter "pokemon"
def print_gewicht_info(pokemon):
  gewicht = gewicht_in_kilogram(pokemon)
  gewicht_klasse = krijg_gewicht_klasse(gewicht)
  print("Deze pokemon weegt", str(gewicht) + "kg en dat is", gewicht_klasse + ".")

# functie om grootte in centimeters om te zetten, genaamd grootte_in_centimeter. Pakt 1 parameter "pokemon"
def grootte_in_centimeter(pokemon):
  return pokemon.height * 10

# functie om de grootte-klasse te bepalen.  Pakt 1 parameter 'grootte'
def krijg_grootte_klasse(grootte):
  if grootte < 30:
    return 'klein'
  elif grootte > 200:
    return 'enorm'
  else:
    return 'normaal'

# functie om de grootte-info te printen.  Pakt 1 parameter "pokemon"
def print_grootte_info(pokemon):
  # decimeter naar centimeter omzetten
  grootte = grootte_in_centimeter(pokemon)
  grootte_klasse = krijg_grootte_klasse(grootte)
  print("Deze pokemon is", str(grootte) + "cm groot, dat is", grootte_klasse + ".")

# functie om naam en nummer te printen.  Pakt 1 parameter "pokemon"
def print_naam_en_nummer_info(pokemon):
  print("Het officiële volgnummer van",pokemon.name , "is", str(pokemon.dex) + ".")

# functie om alle info voor een pokemon te printen
def print_pokemon_info(name):
  # zoek de pokemon in de library
  pokemon = pypokedex.get(name=name)
  # print naam en nummer
  print_naam_en_nummer_info(pokemon)
  # print gewicht info
  print_gewicht_info(pokemon)
  # print grootte info
  print_grootte_info(pokemon)
  # print type info
  print("deze pokemon heeft types",str(pokemon.types)+ ".\n")

print_pokemon_info('weedle')
print_pokemon_info('pidgey')
print_pokemon_info('pikachu')
print_pokemon_info('bulbasaur')
print_pokemon_info('snorlax')
print_pokemon_info('snubbull')
print_pokemon_info('mew')
print_pokemon_info('mewtwo')
print_pokemon_info('marill')
print_pokemon_info('togepi')