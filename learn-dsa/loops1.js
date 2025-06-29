for (let i = 0; i <= 4; i++) {
    console.log("Hello World ", i)
}

function greet(arg) {
    console.log("Namaste ", arg);
}

for (let i = 0; i <= 5; i++) {
    greet(i);
}

//print array elements using for loop
let arr = [10, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("---------------------------------------------")
//print all event numbers in array using for loop

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0)
        console.log(arr[i]);
}

let i = 10;
while (i < 15) {
    console.log("Hello World");
    i++;
}