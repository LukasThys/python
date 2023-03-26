# CONDITIES & SELECTIE
# OEFENING 3: IMDB Filmrecensies

# gebruik module 'imdb'
import imdb

# vul variabele 'film_data' met een instance van imdb
film_data = imdb.IMDb()

# hier functie evalueer_rating.  Pakt 1 parameter 'rating'
def evalueer_rating(rating):
  # rating kleiner dan 5 ==> te mijden
  if rating < 5.0:
    return "te mijden"
  # anders rating kleiner dan 7 ==> matig
  elif rating < 7.0:
    return "matig"
  # anders rating kleiner dan 8,25 ==> de moeite
  elif rating < 8.25:
    return "de moeite"
  # anders  ==>  een meesterwerkt
  else:
    return "een meesterwerk"

# hier fuctie 'evalueer_jaar'.  Pakt 1 parameter "jaar"
def evalueer_jaar(jaar):
  # jaar kleiner dan 1940  ==> "dit is nog van voor WOII ..."
  if jaar < 1940:
    return "Dit is nog van voor de tweede wereldoorlog, zo oud..."
  # annders jaar kleiner dan 1960  ==> "tijd van je grootouders ..."
  elif jaar < 1960:
    return "Dit is eerder iets uit de tijd van je grootouders."
  # annders jaar kleiner dan 1985  ==> "tijd van je ouders ..."
  elif jaar < 1985:
    return "Oh, iets dat je ouders als tiener zagen!"
  # annders jaar kleiner dan 2015  ==> "not niet zo heel oud."
  elif jaar < 2015:
    return "Dit is nog niet zo heel oud."
  # annders jaar kleiner dan 2019  ==> "heel recent"
  elif jaar <= 2019:
    return "Da's heel recent!!!"
  # anders "dit is nog niet uit ...."
  else:
    return "Dit is nog niet uit :-("

# hier functie 'soort'.  Pakt 1 parameter 'soort'
def soort(soort):
  # als soort = 'movie' ==> 'dit is een film'
  if soort == "movie":
    return "Dit is een film."
  # anders als soort = 'tv series' ==> 'dit is een serie'
  elif soort == "tv series":
    return "Dit is een serie."
  # anders = 'geen idee'
  else:
    return "Ik heb geen idee of dit een film of een serie is."

#keys = film.infoset2keys
#print(keys)

# hier functie 'geef_film_info'.  Pakt twee parameters:  de film_data instance, en de ID van een film
def geef_film_info(film_data, filmId):
  # zoek de film
  film = film_data.get_movie(filmId)
  # print een inleiding
  print('Dit is de informatie over "' + film['title'] + '"')
  # print de rating
  print("Dit is ", evalueer_rating(film['rating']))
  # print iets over het jaar
  print(evalueer_jaar(film['year']))
  # bepaal of het een serie of een film is en print dit
  serie_of_film = soort(film['kind'])
  print(serie_of_film)
  # als het een serie is print het aantel seizoenen
  if serie_of_film == "Dit is een serie.":
    print("Deze serie heeft", film['number of seasons'], "seizoenen.")
  print()


# roep hier de functie geef_film_info een paar keer aan
geef_film_info(film_data, '4154796')
geef_film_info(film_data, '0133093')
geef_film_info(film_data, '0076759')
geef_film_info(film_data, '0074028')
geef_film_info(film_data, '0013442')
geef_film_info(film_data, '4574334')

avengers_endgame = film_data.get_movie('4154796')
print(avengers_endgame)
the_matrix = film_data.get_movie('0133093')
print(the_matrix)
