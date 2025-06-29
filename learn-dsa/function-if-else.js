//function to print "Hello World"
function printHelloWorld() {
  console.log("Hello World");
}

printHelloWorld();

//function to greet
function greet(name) {
  console.log("Namaste, ", name);
}

greet("Navya");
greet("Nandu");

let name = "Navyashree G B";

greet(name);

//create a function to add 2 numbers

function sum(num1, num2) {
  //num1 and num2 are arguments
  console.log(`Sum of ${num1} and ${num2} = ${num1 + num2}`);
}

sum(10, 4); //10 and 4 are parameters

//function to square the num
function square(num) {
  return num * num;
}

console.log(square(-2));

//create a function which accepts age tells whether a person is eligable to vote or not

function eligibiletovote(age) {
  if (age <= 0) return "Invalid age";
  else if (age < 18) return "Not eligible to vote";
  else return "Eligible to vote";
}

console.log(eligibiletovote(18));

//function to check if the number is even or odd

function evenOrOddNo(num) {
  if (num % 2 === 0) console.log("Even");
  else console.log("Odd");
}

evenOrOddNo(7);

evenOrOddNo(6);
