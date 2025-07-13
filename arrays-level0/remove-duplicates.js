function countNoOfUniqueElements(arr) {
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] > arr[i]) {
            count++;
        }
    }
    return count+1;
}

console.log(countNoOfUniqueElements([0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6]))
console.log("----------------------------------------------------------")



function removeDuplicates(arr) {
    let newArr = [];
    let k = 0;
    newArr[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (newArr[k] < arr[i]) {
            k = k + 1;
            newArr[k] = arr[i];
        }
    }
    return newArr;
}

console.log(removeDuplicates([0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6]))
console.log("----------------------------------------------------------")


function removeDuplicates1(arr) {
    let newArr = [];
    let k = 0;
    newArr[0] = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] > arr[i]) {
            newArr.push(i + 1)
        }
    }
    for (let i = 0; i < newArr.length; i++) {
        arr[i] = arr[newArr[i]]
    }
    return arr;
}

console.log(removeDuplicates1([0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6]))
console.log("----------------------------------------------------------")


function removeDuplicatesFinal(arr) {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] > arr[x])) {
            arr[x++] = arr[i];
        }
    }
    return arr;
}

console.log(removeDuplicatesFinal([0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6]))
console.log("----------------------------------------------------------")

