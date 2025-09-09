/**
 * @param {number[]} nums
 * @return {number[]}
 */
//Approach -1: By doubling array
//TC=O(n) and SC=O(n)
var nextGreaterElements = function (nums) {
  let arr = [...nums, ...nums];
  let n = arr.length;
  let stack = [];
  stack.push(arr[n - 1]);
  let ans = Array(n).fill(-1);

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (arr[i] < top) {
        ans[i] = top;
        break;
      } else {
        stack.pop();
      }
    }
    stack.push(arr[i]);
  }

  return ans.slice(0, n / 2);
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
//Approach -2: By doubling array
//TC=O(n) and SC=O(n)
var nextGreaterElements = function (arr) {
  let n = arr.length;
  let stack = [];
  stack.push(arr[n - 1]);
  let ans = Array(n).fill(-1);

  for (let i = 2 * n - 2; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (arr[i % n] < top) {
        ans[i % n] = top;
        break;
      } else {
        stack.pop();
      }
    }
    stack.push(arr[i % n]);
  }

  return ans;
};
