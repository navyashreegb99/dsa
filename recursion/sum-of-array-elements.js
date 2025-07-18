//sum of all numbers in array

var arr = [10, 11, 12, 13, 14, 15];

//Approach-1 array as input
function sumOfArr(arr) {
    if (arr.length === 0) return 0;
    return arr[arr.length - 1] + sumOfArr(arr.slice(0, arr.length - 1));
}

console.log(sumOfArr(arr))

//Appproach-2 length as input
function sum(n) {
    if (n === 0) return 0;
    return arr[n - 1] + sum(n - 1);
}

console.log(sum(arr.length));

//Approach-3
function sum2(n) {
    if (n === 0) return arr[0];
    return arr[n] + sum2(n - 1);
}
console.log(sum2(arr.length - 1));


