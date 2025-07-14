//Approach-1
function mergeSortedArray(num1, m, num2, n) {
    if (num1.length === 0 || num2.length === 0) return num1;
    let num1copy = [];
    for (let i = 0; i < m; i++) {
        num1copy[i] = num1[i];
    }//tC -> m
    // let num1copy = num1.slice(0, m);//to create a copy

    let i = 0;
    let j = 0;
    for (let k = 0; k < num1.length; k++) {//tc -> m+n
        if (j >= n || (i < m && num1copy[i] <= num2[j])) {
            num1[k] = num1copy[i];
            i++;
        }
        else {
            num1[k] = num2[j];
            j++;
        }
    }
    return num1;
}//tc-> O(m+n+m)

console.log(mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
console.log(mergeSortedArray([1], 1, [], 0))
console.log(mergeSortedArray([0], 0, [1], 1))


//Approach-2

function mergeSortedArray2(num1, m, num2, n) {
    if (num1.length === 0 || num2.length === 0) return num1;
    let p1 = m - 1;
    let p2 = n - 1;

    for (let k = m + n - 1; k >= 0; k--) {//tc -> m+n
        if (p2 < 0) {
            break;
        }
        else if (p1 < 0 || num1[p1] <= num2[p2]) {
            num1[k] = num2[p2];
            p2--;
        }
        else {
            num1[k] = num1[p1];
            p1--;
        }
    }
    return num1;
}//tc-> O(m+n)

console.log(mergeSortedArray2([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
console.log(mergeSortedArray2([2, 5, 6], 3, [1, 2, 3, 0, 0, 0], 3))
console.log(mergeSortedArray2([1], 1, [], 0))
console.log(mergeSortedArray2([0], 0, [1], 1))
