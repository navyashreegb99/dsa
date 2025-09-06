/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//TC=O(n);SC=O(n)
var nextGreaterElement = function (nums1, nums2) {
  let stack = [];
  let nge = {};
  let lastEle = nums2[nums2.length - 1];

  stack.push(lastEle);
  nge[lastEle] = -1;

  for (let i = nums2.length - 2; i >= 0; i--) {
    while (stack.length > 0) {
      if (nums2[i] < stack[stack.length - 1]) {
        nge[nums2[i]] = stack[stack.length - 1];
        break;
      } else {
        stack.pop();
      }
    }
    if (stack.length === 0) {
      nge[nums2[i]] = -1;
    }
    stack.push(nums2[i]);
  }
  let res = [];
  for (let i = 0; i < nums1.length; i++) {
    res.push(nge[nums1[i]]);
  }
  return res;
};
