#mijn eerste functie
def mijn_functie():
    print("Hallo, ik ben een functie en ik toon een zinnetje")

#mijn_functie aanroepen
mijn_functie()


#-----------------------------------------------------------------------------------

# goeiedag

#functie die je naam vraagt en goeiedag zegt
def yowkes():
  naam = input('hoe heet je?')
  verwelkoming = "Weest gegroept, "
  print(verwelkoming, naam)

#aanroep
yowkes()


#-----------------------------------------------------------------------------------


# standaard waarden voor optionele parameters
#functie
def print_lekkerste(lekkerste = "chocolade"):
    print(lekkerste,"is echt wel het lekkerste ter wereld")

#aanroep met en zonder parameter
print_lekkerste()
print_lekkerste("spinazie")


#-----------------------------------------------------------------------------------


#superhelden en superschurken
#functie
def superheld_verslaat_superschurk(superheld, superschurk):
  print(superheld,"zal",superschurk,"ne keer grondig op zijn bakkes gaan timmeren")

#aanroep
superheld_verslaat_superschurk("Superman","the joker")
#aanroep met keyword arguments
superheld_verslaat_superschurk(superschurk='jefke',superheld='pipo')



#functie met standaard parameters
#functie
def maak_som(getal1,getal2=0):
  print(getal1+getal2)

#aanroep
maak_som(4,5)
maak_som(4)



#-----------------------------------------------------------------------------------

#functies als parameters

# eerste functie om iets te zeggen
def stomme_pickup_line():
  print('''
  hey mijn naam is karel,
  en jij jij bent de parel
  yes jij bent de parel van de straat
  ''')
#tweede functie om iets te zeggen
def zoals_dirk():
  print('hallo poepie')

# functie die je kan aanroepen met een functie als parameter
def iemand_versieren(pickup_line_zeggen):
  pickup_line_zeggen()

#aanroep met beide functies
iemand_versieren(stomme_pickup_line)
iemand_versieren(zoals_dirk)

#-----------------------------------------------------------------------------------

#scope

#functie die goeiedag zegt
def goeiedag(naam,achternaam):
  verwelkoming = "Dag " + naam + " "+  achternaam
  print(verwelkoming)
  naam="piet"
  achternaam="pienter"
  verwelkoming = "Dag " + naam + " "+  achternaam
  print(verwelkoming)

#persoon een naam geven
naam="Bert"
achternaam="Bibber"

#aanroepen
goeiedag(naam,achternaam)
verwelkoming = "Dag " + naam + " "+  achternaam
print(verwelkoming)

#-----------------------------------------------------------------------------------

#function-scope

def bepaal_coolheid():
  coolness = input("hoe cool ben je?")
  print(coolness)

  if (coolness == 'niet cool'):
    niet_cool = 'ga maar snel lessen volgen bij de fonz!'
    print(niet_cool)

  print(niet_cool)

bepaal_coolheid()

#coolness afdrukken
print(coolness)


#-----------------------------------------------------------------------------------

#return value

#functie
def vraag_aantal_scheten_per_dag():
  aantal_scheten = input("hoeveel scheten laat jij per dag?")
  return aantal_scheten

#aanroep
aantal= vraag_aantal_scheten_per_dag()

print(aantal,'???  Zoveel???')

#-----------------------------------------------------------------------------------
#meervoudige return values

#functie
def stel_twee_leuke_vragen():
  superkracht = input('welke superkracht zou jij willen hebben?')
  raarste_ding = input('Wat is het raarsqte dat je vader ooit deed?')
  return superkracht, raarste_ding

#aanroep
superkracht, raarste_ding = stel_twee_leuke_vragen()

print('jouw gewenste superkracht: ',superkracht)
print('jouw vaders gekke avonturen: ',raarste_ding)

#-----------------------------------------------------------------------------------

#meervoudige return values - verschillend type

#functie
def stel_twee_leuke_vragen():
  superkracht = input('welke superkracht zou jij willen hebben?')
  aantal_scheten = int(input("hoeveel scheten laat jij per dag?"))
  return superkracht, aantal_scheten

#aanroep
superkracht, aantal_scheten = stel_twee_leuke_vragen()

print('Ondanks jou superkracht: (',superkracht,') laat je toch',str(aantal_scheten),"scheten per dag")


#-----------------------------------------------------------------------------------

#werken met modules

import math

# getal opvragen, afronden naar beneden, en afdrukken

getal = float(input("geef een kommagetal op"))
print(math.floor(getal))
print(math.ceil(getal))
print(math.remainder(getal,5))


#-----------------------------------------------------------------------------------