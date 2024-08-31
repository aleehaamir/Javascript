  // Object
let o ={
    Name : " Rayyan",
    age : 18,
    "job code": 5530,
    "is_graduated": true
}
console.log(o);
console.log(o);
o.salary = "50k";

//        // Objects in Objects
const person = {
    name: 'John',
    address: {
        city: 'New York',
        zip: '10001'
    }
};
//
var customer = {
    name: "Aleeha",
speak: function()
{
    return " My name is " + this.name;
},

address:{
    street: `main park st`,
    city: "isb",
    state:"pak"
}

};
document.write(customer.speak() + "<br/>");
document.write(customer.name + " lives at " + customer.address.street + "<br/>");
    
 //constructor function
 function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
const Car1 = new Car('alto', 'Civic', 2019);

// instanceof:  operator checks if an object is an instance of a specific constructor function.
console.log(Car1 instanceof Car); 

 //Passing Objects to Functions
 function updateYear(car, newYear) {
    car.year = newYear;
}
updateYear(Car1, 2021);  //allowing the function to access and modify the object's properties.

 //Prototypes
 Car.prototype.start = function() {
    console.log(this.make + ' started');
};
Car1.start(); // 'Honda started'

 //Adding Properties to Objects
 Car1.color = 'blue';
 
 //List Properties in Objects
 for (let key in Car1)  
     {
    console.log(key); 
}
 
 //hasOwnProperty
 console.log(Car1.hasOwnProperty('make')); 

  //getter/setter
  const user = {
    firstName: 'aleeha',
    lastName: 'rayyan',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
};
user.fullName = 'arfa amir';
console.log(user.fullName);

//Constructor Function Getters/Setters
function Book(title, author) {
    this.title = title;
    this.author = author;
}
Object.defineProperty(Book.prototype, 'fullName', {
    get: function() {
        return this.title + ' by ' + this.author;
    }
});
const book = new Book('2007', 'kite runner');
console.log(book.fullName); 

 //inheritence
 function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function() {
    console.log(this.name + ' makes a noise.');
};
function Dog(name) {
    Animal.call(this, name);
}
Dog.prototype = Object.create(Animal.prototype);
const dog = new Dog('dodo');
dog.speak(); 


var customer = {
    name: "Aleeha",
speak: function()
{
    return " My name is " + this.name;
},

address:{
    street: `main park st`,
    city: "isb",
    state:"pak"
}

};
document.write(customer.speak() + "<br/>");
document.write(customer.name + " lives at " + customer.address.street + "<br/>");
    constructor
 



//   //pass an object to a function and change its values
function changename(person){
    person.name = " arfa ";
}
changename(aleeha);
document.write("aleeha become" + aleeha.name + "<be/>");
var person1 = new person(" momina " , "123");   


// array
array.prototype.inarray = function inarray(value){
    for( i = 0; i < this.lenght; i++){
        if(this[i] === value){
            return true;
        }
    }
    return false;
}
var array = [1,2,3,4,5];

document.write("3 in array" + array.inarray(3) + "<br/>");

// ECMAScript 6 (ES6)

class Person {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' speaks.');
    }
}
