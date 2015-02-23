square = (x) -> x * x
console.log square(8)
cube   = (x) -> square(x) * x
console.log cube(16)
func = () -> "bar"
console.log func()
fill = (container, liquid = "coffee") ->
  "Filling the #{container} with #{liquid}..."
console.log fill('hiii','vikas')

song = ["do", "re", "mi", "fa", "so"]

singers = {Jagger: "Rock", Elvis: "Roll"}

bitlist = [
  1, 0, 1
  0, 0, 1
  1, 1, 0
]

kids =
  brother:
    name: "Max"
    age:  11
  sister:
    name: "Ida"
    age:  9

console.log singers['Elvis']

singing = 4 
happy=false 
knowsIt = 4

mood = 'greatlyImproved' if singing>3
clapsHands = ()->
   'heloo'
showIt=()->
    'dhakka mukki'
vikas = ()->
	if happy and knowsIt
  		clapsHands()
	else
  		showIt()
console.log vikas()

factorial = (x)->
	if (x<=1) then  1 else factorial(x-1)*x

console.log factorial(12)


