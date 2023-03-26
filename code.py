#1
a=1+1
b=a+23
print(a)
print(b)

b=2
a=b+1
b=a+b
c=0.5
b=b+c
b=b+c
print(b)
print(1+1)
print(3)

d=input()
print(d)

e="test"
print(e)

f=input("naam: ")
print("dag",f)
print("""https://replit.com/@StunningMedia""")
print("""e-riders 3 website""")
def functie_test():
  print("functie test")

functie_test()

def begroeting():
  n=input("naam: ")
  print("dag",n)

begroeting()

#2
g1=input("getal 1: ")
g2=input("getal 2: ")
def som():
  print(g1,"+",g2,"=")
  print(int(g1) + int(g2))
  print("dus", g1,"+",g2,"=", int(g1) + int(g2))

som()

#3
help('print')

for i in range(5):
  print('A number:', i)

#4
import random
print(random.randint(1,6))

#5
print("""...---...""")
print("""dat betekend: SOS""")

#6
import pypokedex
pikachu = pypokedex.get(name='pikachu')
print(pikachu)
print(pikachu.height) 
print(pikachu.weight)
print(pikachu.types)

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

def info():
	print_pokemon_info('pikachu')
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
	print_pokemon_info('charmander')
	print_pokemon_info('eevee')
	print_pokemon_info('Meowth')
	print_pokemon_info('Magneton')
	print_pokemon_info('Doduo')
	print_pokemon_info('Electrode')

info()

#7
print("hello world")