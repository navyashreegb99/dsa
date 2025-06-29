console.log("Hello world");
console.log("Hello world");
console.log("Hello world");

const a = 10;
const b = 20;
const sum = a + b;
const product = a * b;
const diff = a - b;
console.log("sum: ", sum);
console.log("product: ", product);
console.log("diff: ", diff);

let x = 10;
console.log(x);
x = 200;
console.log(x);

// let firstName = "Navyashree "
// let lastName = 26
// console.log(firstName + lastName);

// let firstName =10
// let lastName = 26
// console.log(firstName + lastName);

let firstName = 10;
let lastName = 26;
firstName = "Navyashree";
console.log(firstName + "" + lastName);

let arr = [1, 2, , 3, 4, 5, 6, 7];
let sum1 = arr[0] + arr[7];
console.log(arr.length);

arr = ["Navya", 10, [1, 2], false];
console.log(arr[2][0]);

let obj = {
  age: 26,
  name: "Navya",
};
console.log(obj.age);
console.log("My name is ", obj.name + " and age is " + obj["age"]);
