//JavaScript functions and Callbacks

//1) Create a new JavaScript file and add these three functions

//Function Declaration
//Observe: no return type, no type on parameters
function add(n1, n2) {
    return n1 + n2;
}

//Function Expression
var sub = function (n1, n2) {
    return n1 - n2
}

//Callback example
var cb = function (n1, n2, callback) {
    if (typeof n1 === "number" && typeof callback === "function") {
        return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2); 
    } else {
        return Error.message;
    }
    
};



//The following questions might seem trivial, but it's extremely important that you can answer (and understand) each, in order to do the JS-stuff we want to do this semester
//2) Call the functions above as sketched below. It’s not about doing it as fast as you can, but about understanding what's happening, so make sure you understand each line.

console.log("add(1,2): " + add(1, 2))
// It prints 3

console.log("\nadd: " + add)
//It prints the function

console.log("\nadd(1,2,3): " + add(1, 2, 3));
//It prints 3, because it only takes two parameters, and doesn't use the extra numbers

console.log("\nadd(1): " + add(1));
//It prints NaN, beacuse it doesn't have a sencond parameter and it doesn't know what value it has

console.log("\ncb(3,3,add): " + cb(3, 3, add));
// It prints "Result from the two numbers: 3+3=6" 

console.log("\ncb(4,3,sub): " + cb(4, 3, sub));
// It prints "Result from the two numbers: 4+3=1"

//console.log("\ncb(3,3,add()): " + cb(3,3,add())); 
//It has an error because the third variable is not a function and add() is a function

console.log("\ncb(3,\"hh\",add): " + cb(3, "hh", add));
// Prints "Result from the two numbers: 3+hh=3hh" it concatanates



//3)  Error Handling
//7 will fail due to missing/wrong arguments. But it will fail runtime, not as with Java, at compile time.
//We can check arguments in JavaScript as sketched below and provide better errors by throwing our own exceptions:

//typeof n1 === "number" //Will fail if n1 is undefined, or is not a number
//typeof callback === "function" //Will fail if callback is undefined or is not a function

//Rewrite the Callback function expression (cb)  to make a check for all its three required arguments, and throw an Error if any of the arguments do not match as explained here.
//Surround the call to the function with a try-catch block, and provide a more user-friendly error message if the function throws an error
try {
    console.log("CalbackTryCatch: " + cb(3, 3, add()));
} catch (e) {
    if (e instanceof Error) {
        console.error(e.name + ': ' + e.message);
    } else if (e instanceof RangeError) {
        console.error(e.name + ': ' + e.message);
    }
   
}


//More Callbacks 
//Take another look at the function expression declared in cb, and the provided callbacks in 5+6. 
//What we have in cb is a very generic function, that can take any callback that can do something with two numbers and return a value.
//4)  Write a mul(n1, n2) function (inspired by add and sub) and use it as the callback for the cb function
function mul(n1, n2) {
    return n1 * n2;
};
console.log("Mul in cb=> cb(3,3,mul()): " + cb(3,3,mul()));

//5) Call cb, this time with an anonymous function that divides the first argument with the second
let anon = function(a, b){
    return a/b;
};
console.log("Anonymous function: " + cb(3,3,anon));

