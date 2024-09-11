// Datatypes in javascript
// let number = 10.5;
// 1. Number => 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10.5, 10.6, 10.7, 10.8, 10.9, 11;  truthy value
// 2. String => "Hello", "World", "Hello World", "Hello World 123", "Hello World 123.456"; truthy value
// let string = "hello";
// 3. Boolean => true, false;
// 4. Undefined => undefined;
// let a;
////console.log(a); // undefined
// 5. Null => null; falsy value
// let b = null;
////console.log(b); // null falsy value
// 6. Object => {key: 'value'}; truthy value

let muktai = {
  name: "Muktai",
  age: 25,
  isMarried: false,
  role: "Software Engineer",
};
let num = 123123123;
let str = 'The value of num is : num'; 
// console.log(str);
let string2 = `This is the value of muktai: ${num}`// Template literals
// console.log(string2);
// 

// Object is a collection of key-value pairs. It can store multiple values in a single variable.

let manoj = {
  name: "Manoj",
  age: 30,
  isMarried: true,
  role: "QA",
};

let ankush = {
  name: "Ankush",
  age: 40,
  isMarried: true,
  role: "Manager",
};
//JSON
ankush['role'] = "Software Engineer";
// console.log(ankush)

//console.log(manoj.role, "This is Manoj's role");

//console.log(ankush.role, "This is Ankush's role");

// 7. Array => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; truthy value
// Array is a collection of data. It can store multiple values in a single variable.

// let arr = [
//   1,
//   2,
//   3,
//   [1, 2, 23, 4],
//   4,
//   5,
//   "6",
//   7,
//   {
//     name: "Muktai",
//     age: 25,
//     isMarried: false,
//     role: "Software Engineer",
//   },
//   9,
//   10,
// ];

//console.log(arr);

// Function is a block of code that can be reused. It can take parameters and return value it may not return a value.

// keywords are reserved words in javascript. They have special meaning in javascript. They cannot be used as variable names, function names, or any other identifiers.

let num1 = 10;
let num2 = 20;
let num3 = 30;

//parameters are the names listed in the function definition.
//arguments are the real values passed to the function.

// Function Declaration

function addition(a, b, c) {
  console.log(a, b, c,d);
  return a + b + c;
}

//calling a function
// console.log(addition(num1, num2, num3),"yhis is a first call");
// console.log(addition(20, 30, 40),"this is a second call");
// console.log(addition(30, 40, 50),"this is a third call");

// Function Expression
let expressedFunction = addition;

//console.log(expressedFunction(10, 20, 30),"This is a function expression");

// PRIMITVE AND NON PRIMITIVE DATATYPES

// 1. Primitive Datatypes => Number, String, Boolean, Undefined, Null
// 2. Non Primitive Datatypes => Object, Array, Function

// Primitive Datatypes are immutable. They cannot be changed. If we change the value of a primitive datatype, it will create a new value in the memory.

// Non Primitive Datatypes are mutable. They can be changed. If we change the value of a non primitive datatype, it will not create a new value in the memory.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let stringType = "Shivansh"
array[1] = "H";
// console.log(array);

//OPERATORS IN JAVASCRIPT

// 1. Arithmetic Operators => +, -, **, /, %, ++, --;

// console.log(value1+(+value2), "This is addition operator");

// 2. Assignment Operators => =, +=, -=, *=, /=, %=, **=;

//3 Comparision operators => ==, ===, !=, !==, >, <, >=, <=;

// let value1 = 1;
// let value2 = "1";
// console.log(value1 !== value2, "This is a comparision operator");

// 4. Logical Operators => &&, ||, !;

//! this is called a negation operator

// let value1=1; //number
// let value2 = "1"; //string

// console.log(value1);

// if(!value1){
//   console.log("This is a TRUE");
// }else{
//   console.log("This is FALSE");
// }

// Special Operator : typeof operator,? ternary operator ??.

// ***************************************************************************************
// spread operator:-object ko spread karne ke liye

// * it is used to spread the elements of an Array. it is used to copy the elements of an Array.
// syntax-[...arr]  destructuring

// let arr=[1,2,3,4,5,6,7]
// let newArr=arr //copying,the address or memory location is being copied.
// newArr[2]="hello js"
// console.log(newArr)
// console.log(arr)

// let arr=[1,2,3,4,5,6,7]
// let newArr=[...arr] //copying,the address or memory location is being copied.
// newArr[2]="hello js"
// console.log(newArr)
// console.log(arr)

// let arr=[1,2,3,4,5,6,7]
// let newArr=["A","B","c"] 
// let combineArr=[arr,newArr]
// console.log(combineArr,"this is combine array");


// let arr=[1,2,3,4,5,6,7]
// let newArr=["A","B","c"] 
// let combineArr=[...arr,...newArr]
// console.log(combineArr,"this is combine array");


// let arr=[1,2,3,4,5,6,7];
// let newArr=[...arr,566,757,7788,78] ;//copying,the address or memory location is being copied.
// console.log(newArr,"this is combine array");


// function sum(a,b,c){
//   return a+b+c;
// }
// let arr=[1,2,3];
// console.log(sum(arr[0],arr[1],arr[2]),"this is the sum of array")
// console.log(sum(...arr),"this is the sum of array")


// *************************************************
// rest opraetor=spread value ko ek array mai fit krne ke liye
// *it is used to combine the values of into an Array(bundle).
// syntax-[...arr]
// example:-

// let a=1;
// let b=2;
// let c=3;
// function sum(...arr){
//   return arr;
// }
// console.log(sum(a,b,c),)

// ************************************************
// ternary operator:-The condition [ternary] operator is the only javascript operator
//  that takes three operands: a condition followed by a question mark(?),
//  then an expression to execute if the condition is truthy followed by a colon(:),and finally 
//  the expression to execute if the condition is falsy.

// * The ternary operator is the only operator in JavaScript that
//  takes three operands, hence the name "ternary." It is used as a
//  shorthand for an if-else statement and follows this syntax:

// syntax:-
// condition ? expressionIfTrue : expressionIfFalse;
// (condition)?True statement:False statement;

// example:-
// var a=100;
// var b;
// (a==100)?b="True":b="false";
// console.log(b)

// var a=200;
// var b;
// (a==100)?b="True":b="false";
// console.log(b)

// let value1 = [] //number
// let value2 = "value 2"; //string
// (value1===value2)?console.log("This is a TRUE") : console.log("This is FALSE");


// ***********************************************************
// Special Operator:-
// Special Operator is not a standard term, it could refer to a variety of operators in JavaScript that have
//  particular or noteworthy functions. Here are some examples:

// Nullish Coalescing Operator (??):-
// Used to provide a default value if the left-hand operand is null or undefined.

// * the nullish coalescing operator (??) is known as the coalescing operator. 
// It is used to provide a default 
// value when dealing with null or undefined values. This operator can be very useful 
// for setting default values for variables or properties.

// syntax:-
// let result = expression1 ?? expression2;

// expression1: The value to be checked.
// expression2: The default value to be used if expression1 is null or undefined.

// How It Works:-
// The nullish coalescing operator checks if expression1 is null or undefined.
//  If it is, it returns expression2. Otherwise, it returns expression1.

// example1:-
// let name = null;
// let defaultName = "John Doe";
// let displayName = name ?? defaultName;
// console.log(displayName); // Output: John Doe

// Example 2: When the First Operand is not Null or Undefined
// let name = "Alice";
// let defaultName = "John Doe";
// let displayName = name ?? defaultName;
// console.log(displayName); // Output: Alice

// Example 3: Using with Variables that can be Falsy but not Null or Undefined

// let count = 0;
// let defaultCount = 10;
// let displayCount = count ?? defaultCount;
// console.log(displayCount); // Output: 0

// In this example, count is 0, which is falsy, 
// but it is not null or undefined, so displayCount will be 0 instead of defaultCount.

// typeof operator:-typeof operator returns the type of given operand.
// typeof operator is a unary operator it takes only one operand and returns the typeof that operand 
// example:-
// console.log(typeof 5)
// console.log(typeof "5")
// console.log(typeof true)
// console.log(typeof undefined)
// console.log(typeof null)


// comma operator:-comma operator returns the right hand side operand value.
// example:-
// var c=(2,2)+(3,5);//same as var c =2+5
// console.log(c)
// ***************************************************************************************
//Integers : Numbers

let value1 = [] //number
let value2 = "value 2"; //string

value1===value2?console.log("This is a TRUE") : console.log("This is FALSE");


//condtion?true:false  checks for null and undefined
// value1==value2?console.log("This is a TRUE"): console.log("This is FALSE");
//let value = false??default
let abc = value1 ?? value2;
// console.log(typeof abc);

if(value1===value2){
  console.log("This is a TRUE");
}else{
  console.log("This is FALSE","This is used as a comma ");
}
//SWITCH STATEMENTS

// let a = 4+4+5;
// switch (a) {
//   case 1:
//     console.log("This is a case 1");
//     break;`

//   case 2:
//     console.log("This is a case 2");
//     break;

//   default:
//     console.log("This is a default case");
//     break;
// }

// Interaction through javascript: alert, prompt, confirm

// alert("This is an alert box");// notifies the user
// prompt("This is a prompt box"); //returns anything "string" or number
// confirm("This is a confirm box"); //returns a boolean

// let value = confirm("Enter Your age");

// console.log(value,"This is the value of the prompt box");

let x= "5";
let y = 5;
if(x==y){
  console.log(x+y);
}else{
  console.log("This is a false statement");
}