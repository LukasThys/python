import random

# bereken punten op basis van lengte
def bereken_gebaseerd_op_lengte(lengte):
    punten = int((lengte - 1) * 100)
    return punten

# bereken punten op basis van naam (voornaam en achternaam)
def bereken_gebaseerd_op_naam(voornaam, achternaam):
    lengte_achternaam = len(achternaam)
    lengte_voornaam = len(voornaam)
    punten = lengte_achternaam * lengte_voornaam
    return punten

# bereken punten op basis van verjaardag (dag en maand)
def bereken_gebaseerd_op_verjaardag(dag, maand):
    lengte_maand = len(maand)
    punten = random.randint(1,20)
    punten = int(punten / lengte_maand * dag)
    return punten

# totaalberekening: tel alle punten samen:
# - punten op basis van lengte
# - punten op basis van naam
# - punten op basis van verjaardag
def bereken(lengte, voornaam, achternaam, dag, maand):
    punten = bereken_gebaseerd_op_lengte(lengte)
    punten = punten + bereken_gebaseerd_op_naam(voornaam, achternaam)
    punten = punten + bereken_gebaseerd_op_verjaardag(dag, maand)
    print(voornaam + " " + achternaam + " ---> punten: " + str(punten))

lengte=float(input('wat is je lengte ( in m ) ?'))
voornaam = input('wat is je voornaam?')
achternaam = input('wat is je achternaam?')
dag = int(input('wat is de dag van je verjaardag?'))
maand = input('wat is je geboortemaand  (voluit geschreven) ?')

resultaat = bereken(lengte,voornaam,achternaam,dag,maand)
