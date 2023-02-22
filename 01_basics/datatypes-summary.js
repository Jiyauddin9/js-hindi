// Primitive data types

// 7 types : String, Number, Boolean, null, undefined, Sysmbol, BigInt

const score = 100 // Number
const scoreValue = 100.3 // Number decimal ka yahan koi special nhi hai. Number hi hai.

const isLoggedIn = false // Boolean
const outsideTemp = null // null
let userEmail;           // undefined
// or
// let userEmail = undefined;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id);
// console.log(anotherId);
console.log(id === anotherId);


const bigNumber = 3456543576654356754n


//************************** Reference (Non - primitive) ***************************

//Array, Objects, Functions

// Array
const heroes = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age: 22,
}

// Function
const myFunction = function(){
    console.log("Hello world");
}

//typeof

console.log(typeof myFunction);