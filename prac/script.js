// console.log("hello");
var a=6;
var b=9;
var c= "Aleeha"
console.log(a + b + 8);
console.log(typeof a ,typeof b,typeof c);
 // let
let i = 5;

{
    let i = 10;
    console.log(i);
}
console.log(i);

// Regular function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;

console.log(add(2, 3)); 


//   // Conditions ternary operators
{
let age = 18;
 if(age>=18){
    console.log("you can drive");
}
    else
    {
        console.log("You cannot drive");
    } 
console.log(age);
}
    
{
a= 10;
b= 6;
//Syntax: condition ? expressionIfTrue : expressionIfFalse
let c = a > b ? (a-b) : (a+b);
console.log(c);
}
// array

let a= [2,4,6,7,8]

for (let index = 0; index < a.length; index++) 
    {
    const element = a[index];
    console.log(element);
}
//
array.prototype.inarray = function inarray(){
    for(i=0; i<this.lenght; i++){
        if(this[i] === value){
            return true;
        }
    }
    return false;
}
var arr = [1,2,3,4,5];
document.write("3 in array" + arr.inarray(3) + "<br/>");
// Objects
const person = {
    name: 'Aleeha',
    age: 25,
    hello: function() {
        console.log('Hello, ' + this.name);
    }
};
person.hello(); 

/*map: Creates a new array by applying a function to each element of an existing array.
filter: Creates a new array with all elements that pass a test implemented by a provided function.*/

const numbers = [1, 2, 3, 4, 5];
// map: multiply each number by 2
const doubled = numbers.map(num => num * 2);
console.log(doubled); 

// filter: keep only even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); 

// Reduce function
let arr2 = [2,3,4,5,6] 
const red= (a,b)=>{
    return a-b;
}
console.log(arr2.reduce(red))




 //for each loop
a.forEach((value, index, array)=>{
    console.log(value, index, array)
})

  //for in loop
let obj={
    a: 1,
    b: 2,
    c: 3, 
}
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) 
        {
        const element = obj[key];
        console.log(key ,element)
    }
}

  // for of loop
for (const value of a) 
    {
        console.log(value);
    
}

// destructuring 

// // --------- EXAMPLE 1 ---------


let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

// // // --------- EXAMPLE 2 ---------


const colors = ['red', 'green', 'blue', 'black', 'white'];

[colors[0], colors[4]] = [colors[4], colors[0]]

console.log(colors);

// // // --------- EXAMPLE 3 ---------
// // ASSIGN ARRAY ELEMENTS TO VARIABLES

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);


// // // --------- EXAMPLE 4 ---------


function displayPerson({ firstName, lastName, age, job="Unemployed" }) {
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

displayPerson(person1);
displayPerson(person2);