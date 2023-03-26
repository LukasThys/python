# vraag het aantal volgers
aantalvolgers = int(input("Aantal volgers: "))
# vraag het aantal likes en het aantal reacties van foto 1
aantallikes1 = int(input("Aantal likes op foto 1: "))
aantalreacties1 = int(input("Aantal reacties op foto 1: "))
# vraag het aantal likes en het aantal reacties van foto 2
aantallikes2 = int(input("Aantal likes op foto 2: "))
aantalreacties2 = int(input("Aantal reacties op foto 2: "))
# vraag het aantal likes en het aantal reacties van foto 3
aantallikes3 = int(input("Aantal likes op foto 3: "))
aantalreacties3 = int(input("Aantal reacties op foto 3: "))
# bereken de populariteit
totaalaantallikes = aantallikes1 + aantallikes2 + aantallikes3
totaalaantalreacties = aantalreacties1 + aantalreacties2 + aantalreacties3
populariteit = (totaalaantallikes + totaalaantalreacties * 3) / aantalvolgers 
# druk de populariteit af
print("Populariteit = " + str(populariteit))
