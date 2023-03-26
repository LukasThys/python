# CONDITIES & SELECTIE
# OEFENING Decibelmeter

def decibelmeter(aantal_decibel):
# als aantal decibel kleiner is dan 80, dan geef 'groen' terug
  if aantal_decibel < 80:
    return "Groen"
# anders als aantal decibel kleiner is dan of gelijk aan 85, dan geef 'oranje' terug
  elif aantal_decibel <= 85:
    return "Oranje"
# anders geef 'rood' terug
  else:
    return "Rood"

print(decibelmeter(45))
print(decibelmeter(79.99))
print(decibelmeter(80))
print(decibelmeter(82.34))
print(decibelmeter(85))
print(decibelmeter(102))
