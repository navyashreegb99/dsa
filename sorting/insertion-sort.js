function insertionSort(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let curr = nums[i + 1];
    let p = i;
    while (nums[p] > curr && p >= 0) {
      nums[p + 1] = nums[p];
      p--;
    }
    nums[p + 1] = curr;
  }
  return nums;
} //TC=O(n square)
//SC=constant
console.log(insertionSort([5, 1, 4, 2, 8]));
