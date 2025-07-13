function maximumProfit(arr) {
    let min = arr[0];
    let maxProfit = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - min > maxProfit) {
            maxProfit = arr[i] - min;
        }
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return maxProfit;
}

console.log(maximumProfit([8, 2, 9, 3, 5, 1, 4, 6]))