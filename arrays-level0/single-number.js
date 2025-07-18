//Approach-1
function singleNumber(arr) {
    let obj = arr.reduce((acc, curr) => {
        if (acc[curr]) acc[curr] += 1
        else acc[curr] = 1;
        return acc;
    }, {});//TC=O(n)
    for (let ele in obj) {//TC=O(n/2)
        if (obj[ele] === 1) return ele;
    }
    return 0;
}
//Total time complexity=O(n)
//Total space complexity=O(n/2) for new obj +O(n/2) for ele = O(n)


//Approach-2
function singleNumber2(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result = result ^ arr[i];
    }
    return result;
}
//Time complexity O(n)
//Space complexity 0

console.log(singleNumber2([2, 2, 3, 3, 4]));