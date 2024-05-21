// Задание 8

let myMap = new Map();
myMap.set("sky", "blue");
myMap.set(10, "number");
myMap.set("Batman", "Superhero");

for (let keys of myMap.keys()) {

  console.log(keys);

}
myMap.forEach(function(values,keys) {
  console.log('Ключ - ' + keys +', значение - ' + values);    
});

// Задание 8 вариант 2

 let myMap2 = new Map();
 myMap2.set("sky", "blue");
 myMap2.set(10, "number");
 myMap2.set("Batman", "Superhero");

 for (let keys of myMap2.keys()) {
   console.log(keys);
 }
 for (let entries of myMap2.entries()) {
   console.log(`Ключ - ${entries[0]}, значение - ${entries[1]}`);
 }