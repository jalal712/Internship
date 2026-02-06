console.log("Hello World");
// alert("Hello World");

// variables

let firstName = "Jalal";
let lastName = "Ud-Din";
let age = 20;
let isStudent = true;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(isStudent);

// Constants
const value = 10;

console.log(value);

//Dynamic typing
let surName = "Jalal";
let isApproved = false; 
console.log(surName);
console.log(isApproved);

// Objects
let person  = {
    name:"Kamal Hossain",
    age:22
};
console.log(person);
console.log(person.name);
console.log(person.age);
person.name = "Rahim Uddin";
console.log(person.name);
console.log(person);

// Arrays
let selectedColors = ["red", "blue"];
console.log(selectedColors);
console.log(selectedColors[0]);
selectedColors[2] = "2";
console.log(selectedColors);
console.log(selectedColors.length);

// funtion Performing task 
function greet(firstName , lastName ){
    console.log("hellow" + " " + firstName + " " + lastName);
}
greet("Jalal" , "Khan ");

//  function Calculation A Value 

 function Calculation(number) {
    return number * number; 
 }
 // Two ways of getting values: 
 let num = Calculation(2);
 console.log(num); 
   
 console.log(Calculation(4));

