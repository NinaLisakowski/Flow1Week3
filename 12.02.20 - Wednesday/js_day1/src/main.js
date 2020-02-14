
//console.log("Ello :O");
//
//const numbers = [1,2,5,8];
//
//function logger(n) {
//    console.log(n)
//}
//
//numbers.forEach(logger)

//Can be done in one istead of the above two
//numbers.forEach(function(n){
//    console.log(n)
//})




//JavaScript Array Exercises

//a) Create the two arrays below, spelled exactly as they are given. This will form the start for all the following questions.
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

//The array type has  a method concat() to merge two or more arrays (does concat mutate an existing array?)
//b) Create a new array called all, which should be a concatenation of the two arrays given above, starting with the boys and ending with the girls.
let all = boys.concat(girls);
console.log("\nb: " + all)

//c) The array type has a cool method to reduce an array into a single string join() (you will love this method)
// -   Create a comma separated string containing all the names from the all-array, separated by commas.
// -   Create a hyphen (-) separated string containing all the names from the all-array, separated by hyphens.
let allNamesComma = all.join(', ')
console.log("\nc.1: " + allNamesComma);

let allNamesHyphen = all.join(' - ');
console.log("\nc.2: " + allNamesHyphen);

//The array type provides methods to add items to the start - unshift() and to the end push(..) of an array.
//d)  Add the names Lone and Gitte to the end of the array (remember, all can be done in one-liners)
let namesEnd = all.push("Lone", "Gitte");
console.log("\nd: " + all);

//e)  Add the names Hans and Kurt to the start of the array
let namesStart = all.unshift("Hans", "Kurt");
console.log("\ne: " + all);

//The array type provides methods to remove items from the start shift() and from the end pop(..) of an array.
//f)  Remove the first name in the array (Hans)
let removeFirst = all.shift();
console.log("\nf: " + all);

//g)  Remove the last name from the array (Gitte)
let removeLast = all.pop();
console.log("\ng: " + all);

//The array type provides a method splice(..) which changes the array by removing existing elements and/or adding new
//h) Remove Ole and Janne from the middle of the array
//The first number is the indexposition where its starts editing, the second number is how many are deleted.
let removeOH = all.splice(3, 2);
console.log("\nh: " + all);

//The array type provides a method reverse() to reverse the elements of an array
//i) Sanne thinks it’s unfair that the boys have to come first, reverse the all array, so that the girls come first.
let reverseAll = all.reverse();
console.log("\ni: " + all);

//The array type provides a method sort() to sort the elements of an array
//j) Peter thinks that this is just as unfair and suggests that the array should be sorted. Sort the array.
let sortAll = all.sort();
console.log("\nj: " + all);

//k) The default sort algorithm doesn’t handle the situation where the name can be either capitalized or not. Write a user-defined sort method to fix this problem.
all.sort(function (a,b){
    return a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase());
});
console.log("\nk: " + all);

//Array methods with callbacks (there are many)
//The array type provides a method map() which returns a new array of the return value from executing the callback on every array item.
//l) Convert all the names in the array to uppercase.
let mapAll = all.map(function(a){
  return a.toUpperCase();
});
console.log("\nl: " + mapAll);

//The array type has a method filter() that creates a new array with all elements that pass the test implemented by the provided callback
//m) Create a new array containing all the names that start with either “l” or “L” (hint: use the filter function with a sufficient callback). 
let filterAll = all.filter(function(a) {
    for (let i = 0; i < all.length; i++) {
        return a[i].toLocaleString().toLowerCase().startsWith("l");
    }
});
console.log("\nm: " + filterAll);

