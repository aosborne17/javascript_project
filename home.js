console.log('hello');
// alert('Hello There!');


// Variables

var b = "smoothie";
console.log(b);

var number = 45;
console.log(number);

// We can change HTML code using JavaScript


// Asking for user input and storing it

// The users input will now be stored in a variable called age
// var age = prompt('What is your age?');

// document.getElementById('sometext').innerHTML = age;

// Numbers in JavaScript

var num1 = 5;
// incrementing the variable num1, so it would be 6
num1 ++;

// Incrementing a number by 10
num1 += 10;

console.log(num1 * 10);

// Functions

// Creating a function called fun
// This function will display a message to the console
function fun() {
    console.log("checking the function")
}

// This is how we call the function
fun();

// This function will take a name and returns to you 'Hello {name}'

// function name() {
//     name = prompt("What is your name? ")
//     // concatenating the string hello with the variable of the person's name
//     var result = "Hello " + name;
//     console.log(result)
// }

// name()

// Functions with arguements

// This function takes two arguements which it adds together, this could also be strings
function sum_numbers(a, b) {
    var result = a + b
    console.log(result)
}

sum_numbers(5, 10)

// While loops

var num = 0;

// This code block will keep on printing the numbers up to 100
// while (num <100) {
//     num +=1;
//     console.log(num);
// }

// For loop

// this loop is setting a variable to 0, then we are saying for each number between
// 0 and 100, we increment the variable by one

for (let num =0; num <100; num ++) {
    console.log(num);
}

// JavaScript Datatypes

// let age = 18 // a integer
// let name = "Andrew" // String
// let full_name = {first: "Andrew", last: "Osborne"} // Object
// let truth = false; // boolean
// let shopping_list = ["apple", "banana", "pear"] // array

// JavaScript Strings

let fruit = 'banana'; // \n acts as a newline method

console.log(fruit)
// This means it first encounters an 'a' at index 1
console.log(fruit.indexOf('a'))

// This would take the second to fifth index in the string, not including the sixth
console.log(fruit.slice(2,6));

// This replaces any 'ban' string to 123
console.log(fruit.replace('ban', '123'))

// This changes the whole string to upper case
console.log(fruit.toUpperCase())
// This changes the whole string to lower case
console.log(fruit.toLowerCase())

// returns the character at the second index
console.log(fruit[2])
console.log(fruit.charAt(2))


// This would split each character and return them in a list
console.log(fruit.split(''));

// This would split by a comma and 
console.log(fruit.split(','));

// Array's in JavaScript

let fruits = ["banana", "apple", "orange", "pineapples"];

// This would access the third item 'oranges' from the array
console.log(fruits[2])

// Here we are changing the first element in the index to "pear"
fruits[0] = "pear"
console.log(fruits[0])

// So starting from the 0th index, we are printing the element in that index and then incrementing i
// so we print the following index
for (let i = 0; i < fruits.length; i ++) {
    console.log(fruits[i])
}

// converting an array to a string
 console.log(fruits.toString())

// The words in the string are seperated by hyphens
console.log(fruits.join(' - '));

// Removing the last element from the array and returning it
console.log(fruits.pop())

// Appends an item to the end of an array
console.log(fruits.push('blackberries'), fruits)

// Removes the first element from a list and returns it
console.log(fruits.shift()); 
console.log(fruits)

// Adding to the first element of an array
console.log(fruits.unshift())


