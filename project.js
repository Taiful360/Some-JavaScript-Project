project: 1

var temp = prompt("Please enter a temperature");
var result = 9 / 5 * temp + 32;
alert("Fahrenheit: " + result + " Degree");
console.log("Task Complete");


project: 2

var firstName = prompt("Emter your first name: ");
var lastName = prompt("Emter your last name: ");
var fullName = firstName + " " + lastName;
console.log(fullName);
var len = fullName.length;
console.log("Number of character: " + len);
console.log(fullName.toUpperCase());
var slice = fullName.slice(1, 2);
console.log("2nd position of character: " + slice);


project: 3

var num1 = prompt("Enter first number: ");
var num2 = prompt("Enter second number: ");

num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);


var sum, sub;
sum = num1 + num2;
console.log("sum = " + sum);

sub = num1 - num2;
console.log("sub = " + sub);


var num1 = prompt("Enter first number: ");
var num2 = prompt("Enter second number: ");

num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);


var add, sub, mul, div, mod, exp;

add = num1 + num2;
console.log("Addition = " + add);

sub = num1 - num2;
console.log("Subtraction = " + sub);

mul = num1 * num2;
console.log("Multiplication = " + mul);

div = num1 / num2;
console.log("Division = " + div);

mod = num1 % num2;
console.log("Modulo = " + mod);

exp = num1 ** num2;
console.log("Exponentiation = " + exp);

project: 4

var num1 = prompt("Enter first number: ");
var num2 = prompt("Enter second number: ");

num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);


var add, sub, mul, div, mod, exp;

add = num1 + num2;
document.write(num1 + " + " + num2 + " = " + add + "<br/>");

sub = num1 - num2;
document.write(num1 + " - " + num2 + " = " + sub + "<br/>");

mul = num1 * num2;
document.write(num1 + " * " + num2 + " = " + mul + "<br/>");

div = num1 / num2;
document.write(num1 + " / " + num2 + " = " + div + "<br/>");

mod = num1 % num2;
document.write(num1 + " % " + num2 + " = " + mod + "<br/>");

exp = num1 ** num2;
document.write(num1 + " ** " + num2 + " = " + exp + "<br/>");