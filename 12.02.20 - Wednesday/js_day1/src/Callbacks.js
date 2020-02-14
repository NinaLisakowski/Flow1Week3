
//Callbacks (with map, filter and forEach)

//We saw a simple example of a callback above. Let's get familiar with callbacks, using some of the array-type’s built-in methods.
//Getting comfortable with filter, map and forEach:

//1) Declare a JavaScript array and initialize it with some names (Lars, Jan, Peter, Bo, Frederik etc.). Use the filter method to create a new array with only names of length <=3.
let names = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Hans", "Kurt", "Peter", "Ole", "Janne", "Hanne", "Sanne", "Lone", "Gitte"]; 
let names3 = names.filter(function(name){
    return name.length <= 3;
});
//console.log("Names <= 3: " + names3)

//Use the forEach method to iterate and print (console.log) both the original and the new array.
names.forEach(function(name){
    console.log("Original array: " + name);
});
names3.forEach(function(name){
    console.log("Name <= 3: " + name);
});

//2) Use the names-array created above, and, using its map method, create a new array with all names uppercased.
let namesUpper = names.map(function(name){
  return name.toUpperCase();
});
console.log("Upercased names: " + namesUpper)

//We will continue with this exercise tomorrow when we start manipulating the browser's DOM
//3) Use map, join + just a little bit more to create a function, which given the array of names, for example: ["Lars", "Peter", "Jan", "Ian"] returns a string with the HTML for the names in an <ul> as sketched below:
//<ul> as sketched below: <ul>
function htmlTranslate(map){
    map = "<ul><li>" + map.join("</li><li>") + "</li><ul>";
    return map;
};
console.log(htmlTranslate(names));

//The output above was shown with newlines for readability, but this is actually what we want (why): <ul><li>Lars</li><li>Peter</li><li>Jan</li><li>Ian</li></ul>
//Tomorrow we will use DOM manipulation and place this into a “running” web-page.


//4)  Given this JavaScript array
var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];
//a) Use the filter filter function to get arrays with only:
//Cars newer than 1999
let after1999 = cars.filter(car => car.year > 1999);
console.log("\nCars newe than 1999: ", after1999);

//Al  Volvo’s
let onlyVolvo = cars.filter(car => car.make === "Volvo");
console.log("\nCars that are Volvo: ", onlyVolvo);

//All cars with a price below 5000
let priceBelow5000 = cars.filter(car => car.price < 5000);
console.log("\nCars with a price below 5000: ", priceBelow5000);



