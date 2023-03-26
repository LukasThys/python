# functie om een bestand mee te openen
# maak een tekstbestand aan, en geef dat terug als resultaat van de functie.
#  als er geen parameter wordt meegegeven aan de functie wordt standaard test.txt genomen
def maak_file(naam='test.txt'):
  return open(naam,'x')

# functie om een vraag te stellen aan de gebruiker
#  het antwoord van de gebruiker wordt teruggegeven als resultaat van de functie
def stel_vraag(vraag):
  return input(vraag)

# functie om vraag en antwoord in het bestand te schrijven
def schrijf_vraag_en_antwoord(vraag,file):
  end_of_line = '\n';
  file.write(vraag + end_of_line)
  antwoord = stel_vraag(vraag)
  file.write(antwoord + end_of_line)

# enkele vragen aanmaken
vraag1 = 'Waarom laat een dom blondje de deur open?'
vraag2 = 'Wat is het toppunt van nieuwsgierigheid?'

# bestand aanmaken, met behulp van de functie
bestand = maak_file('test_vragen.txt')

# vragen stellen
schrijf_vraag_en_antwoord(vraag1,bestand)
schrijf_vraag_en_antwoord(vraag2,bestand)

# bestand afsluiten
bestand.close()