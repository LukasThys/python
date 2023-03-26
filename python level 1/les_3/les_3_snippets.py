# slide Selecties & condities (2040587)
if getal > 0:
  print('positief: zonnetje in huis')
elif getal == 0:
  print('een enorme vette nul')
else:
  print('niet positief: vadsige downer')

#-----------------------------------------------------------------------------------

# slide Indentatie of geen indentatie: da's de vraag (2040664)

a = int(input("Geef een getal in: "))
if (a == 1):
  print("a is 1")
print("Wat enig!")


a = int(input("Geef een getal in:"))
if a == 1:
  print("a is 1")
  print("Wat enig!")

#-----------------------------------------------------------------------------------

# slide Ingebouwde modules (2040666)

import math

# vraag een getal op en rond af naar beneden, dan afdrukken
getal = float(input("geef een kommagetal op"))
print(math.floor(getal))
