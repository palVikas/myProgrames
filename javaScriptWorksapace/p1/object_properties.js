var animal={eats:'true'};
var dog={barks:'true'};
console.log('eats' in animal);
console.log('eats'in dog);
console.log('barks' in animal);
console.log('barks'in dog);
dog.__proto__=animal;
console.log('eats' in animal);
console.log('eats'in dog);
console.log('barks' in animal);
console.log('barks'in dog);
console.log(":::::::::::has own properties:::::::::::");
console.log(dog.hasOwnProperty("eats"));
console.log(dog.hasOwnProperty("barks"));
console.log(animal.hasOwnProperty("eats"));
console.log(animal.hasOwnProperty("barks"));