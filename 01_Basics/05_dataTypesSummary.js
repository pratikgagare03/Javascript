//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id);
// console.log(anotherId);
// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}
// console.log(typeof(null)); // object

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId); //symbol

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// stack(primitive), Heap(Non-Primitive)

let userOne = 123
let userTwo = userOne
console.log(userTwo);

userTwo = 456

console.log(userOne);
console.log(userTwo); // only change in second variable as it is pass by value



let userObjOne = {
    name: "Pratik",
    id:1
}

let userObjTwo = userObjOne;
userObjTwo.name = "Rutik";

console.log(userObjOne.name);
console.log(userObjTwo.name); // Both changes as it is pass by reference



