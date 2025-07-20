function bubbleSort(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let isSwap = false;
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        isSwap = true;
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
    if (!isSwap) break;
  }
  return nums;
}
//TC=O(n square)
//SC=constant
console.log(bubbleSort([5, 1, 4, 2, 8]));
