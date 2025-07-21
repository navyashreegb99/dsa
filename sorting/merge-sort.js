function mergeSort(nums) {
  if (nums.length <= 1) return nums;
  let mid = Math.floor(nums.length / 2);
  let left = mergeSort(nums.slice(0, mid));
  let right = mergeSort(nums.slice(mid));
  return merge(left, right);
} //TC=O(n)

function merge(left, right) {
  let newArr = [],
    p1 = 0,
    p2 = 0;
  while (p1 < left.length && p2 < right.length) {
    if (left[p1] < right[p2]) {
      newArr.push(left[p1++]);
    } else {
      newArr.push(right[p2++]);
    }
  }
  return [...newArr, ...left.slice(p1), ...right.slice(p2)];
} //TC O(log n)

//Total TC merge sort = O(n log n)
