#1
def herhalen():
	b=input("welke tekst wil je herhalen?: ")
	a=input("hoe vaak wil je je tekst herhalen?: ")
	a=int(a)
	print(b*a)

herhalen()

#2
def rebeat():
	text=input("Welke tekst moet ik herhalen? Voer hier in: ")
	aantal=input("Hoe vaak moet ik die tekst herhalen? Alleen getallen zijn toegestaan: ")
	aantal=int(aantal)
	n='\n'
	prt=n+text
	print(prt*aantal)

rebeat()

#3
b=1
def actie():
	text=input("Welke tekst moet ik herhalen?: ")
	a=input("hoe vaak moet ik deze tekst herhalen?: ")
	a=int(a)
	print('\n')
	def prtn():
		print(text)
		print('\n')

	while a>=1:
		a=a-1
		prtn()

actie()

#4
b=1
def actie():
	text=input("Welke tekst moet ik herhalen?: ")
	a=input("hoe vaak moet ik deze tekst herhalen?: ")
	a=int(a)
	print('\n')
	def prtn():
		print(text)

	while a>=1:
		a=a-1
		prtn()

actie()

#5
a=input()
def print_zin():
	print(a)
	print_zin()
print_zin()