//sum of odd numbers in array
let arr = [2, 3, 4, 5, 6, 7];
function sum(n) {
    if (n < 0) return 0;
    if (arr[n] % 2 !== 0)
        return arr[n] + sum(n - 1);
    else
        return 0 + sum(n - 1);
}
console.log(sum(arr.length - 1));