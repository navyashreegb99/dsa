// write a function that searches for an element and returns the index, 
// if the element is not present return -1;

function searchArrayEle(arr, ele) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ele) return i;
    }
    return -1;
    // return arr.includes(ele);
}

console.log(searchArrayEle([1, 2, 3, 4, 5, 6, 7, 8], 8))
console.log(searchArrayEle([1, 2, 3, 4, 5, 6, 7, 8], -1))

console.log("---------------------------------------------")


//write a function that returns no of negative nos in array


function countNegNo(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) count++;
    }
    return count;
}

console.log(countNegNo([1, 2, 3, 4, 5, 6, 7, 8]))
console.log(countNegNo([1, 2, 3, -2, -1, 0, 7, 8]))

console.log("---------------------------------------------")


//write a function that returns largest no in a array

function findLargestNo(arr) {
    let max = arr[0];//let max = -Infinity;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}

console.log(findLargestNo([1, 2, 3, 4, 5, 6, 7, 8]))
console.log(findLargestNo([1, 2, 3, -2, -1, 0, 16, 8]))

console.log("---------------------------------------------")


//write a function that returns smallest no in a array

function findSmallestNo(arr) {
    let min = arr[0];//let min = Infinity;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }
    return min;
}

console.log(findSmallestNo([1, 2, 3, 4, 5, 6, 7, 8]))
console.log(findSmallestNo([1, 2, 3, -2, -1, 0, 16, 8]))

console.log("---------------------------------------------")