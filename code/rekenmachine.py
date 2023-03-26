g1=input("getal 1: ")
g2=input("getal 2: ")
def verschil():
  print(g1,"-",g2,"=")
  print(int(g1) - int(g2))
  print("dus", g1,"-",g2,"=", int(g1) - int(g2))
def som():
  print(g1,"+",g2,"=")
  print(int(g1) + int(g2))
  print("dus", g1,"+",g2,"=", int(g1) + int(g2))
def vermenigvuldigen():
  print(g1,"*",g2,"=")
  print(int(g1) * int(g2))
  print("dus", g1,"*",g2,"=", int(g1) * int(g2))
def delen():
  print(g1,"/",g2,"=")
  print(int(g1) / int(g2))
  print("dus", g1,"/",g2,"=", int(g1) / int(g2))
def uitkomst():
	rekenen=input("wil je ze optellen (cijfer 1), aftrekken(cijfer 2), vermenigvuldigen(cijfer 3) of delen(cijfer 4) ")
	rekenen=int(rekenen)
	if rekenen == 1:
		som()
	elif rekenen == 2:
		verschil()
	elif rekenen == 3:
		vermenigvuldigen()
	elif rekenen == 4:
		delen()
	else:
		print("dit was niet één van de opties")
		uitkomst()

uitkomst()