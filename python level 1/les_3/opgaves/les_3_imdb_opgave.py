# CONDITIES & SELECTIE
# OEFENING 3: IMDB Filmrecensies

# gebruik module 'imdb'


# vul variabele 'film_data' met een instance van imdb
film_data = 

# hier functie evalueer_rating.  Pakt 1 parameter 'rating'
def evalueer_rating(rating):
  # rating kleiner dan 5 ==> te mijden
 
  
  # anders rating kleiner dan 7 ==> matig
  

  # anders rating kleiner dan 8,25 ==> de moeite
  

  # anders  ==>  een meesterwerkt
 


# hier fuctie 'evalueer_jaar'.  Pakt 1 parameter "jaar"
def evalueer_jaar(jaar):
  # jaar kleiner dan 1940  ==> "dit is nog van voor WOII ..."
  
  
  # annders jaar kleiner dan 1960  ==> "tijd van je grootouders ..."
  

  # annders jaar kleiner dan 1985  ==> "tijd van je ouders ..."
 

  # annders jaar kleiner dan 2015  ==> "not niet zo heel oud."
  

  # annders jaar kleiner dan 2019  ==> "heel recent"
 

  # anders "dit is nog niet uit ...."
  


# hier functie 'soort'.  Pakt 1 parameter 'soort'
def soort(soort):
  # als soort = 'movie' ==> 'dit is een film'
  
  
  # anders als soort = 'tv series' ==> 'dit is een serie'
  

  # anders = 'geen idee'
  

  
#keys = film.infoset2keys
#print(keys)

# hier functie 'geef_film_info'.  Pakt twee parameters:  de film_data instance, en de ID van een film
def geef_film_info(film_data, filmId):
  # zoek de film
  film = 
  # print een inleiding
  
  # print de rating
   
  # print iets over het jaar
  
  # bepaal of het een serie of een film is en print dit
 
  
  # als het een serie is print het aantel seizoenen

  


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
