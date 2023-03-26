# text constanten definiëren
nieuwe_lijn= '\n'
lijn_witruimte = nieuwe_lijn + nieuwe_lijn

# functie om wachtwoord te vragen
def vraag_wachtwoord():
  return input(nieuwe_lijn + "Halt!  wat is het wachtwoord?" + nieuwe_lijn)

# functie om de goblin lastig te laten doen
def ambetante_goblin():
  wachtwoord_poging = vraag_wachtwoord()
  lengte_wachtwoord = len(wachtwoord_poging)

  print(wachtwoord_poging * lengte_wachtwoord)

# functie om de goblin braaf te laten zijn
def brave_goblin():
  laatste_wachtwoord = vraag_wachtwoord()
  eind_tekst = '''
De goblin laat zijn pijl en boog zakken, trekt zijn broek weer naar omhoog en laat je door.

"Veel plezier in Moria!"
  '''
  print(laatste_wachtwoord + " is inderdaad het juiste wachtwoord." + lijn_witruimte + eind_tekst)

# functie om te beginnen
def start():
  intro_text = """
  Je komt aan een touwbrug over een diep ravijn. In het midden staat een goblin.
Als je op de touwbrug stapt, toont hij eerst zijn bloot gat, kakelt van het lachen & neemt dan een boog en richt een pijl op jou.
"""
  print(intro_text + nieuwe_lijn)

# functie die het hoofd-programma definieert
def run_ambetante_goblin_programma():
  start()
  ambetante_goblin()
  ambetante_goblin()
  ambetante_goblin()
  ambetante_goblin()
  ambetante_goblin()
  brave_goblin()

# aanroep van het hoofdprogramma
run_ambetante_goblin_programma()