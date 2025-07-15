function maxConsecutiveOnes(arr) {
    let currentCount = 0;
    let maxCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            currentCount++;
        }
        else {
            maxCount = Math.max(maxCount, currentCount);
            currentCount = 0;
        }
    }
    return maxCount = Math.max(maxCount, currentCount);
}

console.log(maxConsecutiveOnes([1, 1, 1, 0, 0, 1, 1]))
console.log(maxConsecutiveOnes([1, 1, 1, 0, 0, 1, 1, 0, 1]))
console.log(maxConsecutiveOnes([0, 0, 1, 1, 0, 1]))
console.log(maxConsecutiveOnes([1, 1, 1, 1, 1]))
console.log(maxConsecutiveOnes([0, 0]))