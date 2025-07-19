//binary search

// let arr = [-1, 0, 3, 5, 9, 12];
// let target = 9;

let arr = [5];
let target = 5;
function binarySearch(arr, target) {
    let l = 0;
    let r = arr.length - 1;
    let m;
    while (l <= r) {
        m = Math.floor((l + r) / 2);
        if (arr[m] === target)
            return m;
        else if (arr[m] < target)
            l = m + 1;
        else
            r = m - 1;
    }
    return -1;
}
console.log(binarySearch(arr, target))