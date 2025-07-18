//sum of first n numbers
//Approach-1
function sum(n, res = 0) {
    if (n == 0) return res;
    return sum(n - 1, res + n);
}

console.log(sum(5))

//Approach-2
function sum2(n) {
    if (n == 0) return 0;
    return n + sum2(n - 1);
}

console.log(sum2(5))