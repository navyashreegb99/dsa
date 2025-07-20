function selectionSort(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[min]) {
        min = j; //find min index
      }
    }
    if (min != i) {
      [nums[i], nums[min]] = [nums[min], nums[i]]; //swap
    }
  }
  return nums;
} //TC=O(n square)
//SC=constant
console.log(selectionSort([5, 1, 4, 2, 8]));
