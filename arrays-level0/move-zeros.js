function moveZeros(arr) {
    let p1 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            arr[p1] = arr[i];
            p1++;
        }
    }
    for (let i = p1; i < arr.length; i++) {
        arr[i] = 0;
    }
    return arr;
}

console.log(moveZeros([0, 1, 0, 3, 12]))
console.log(moveZeros([0]))
console.log(moveZeros([1, 2, 3]))
console.log(moveZeros([0, 0, 0]))