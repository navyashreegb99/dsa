/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//Approach-1
//TC=O(n*m)
var nextGreaterElement = function (nums1, nums2) {
  let res = [];
  for (let i = 0; i < nums1.length; i++) {
    let index = nums2.indexOf(nums1[i]);
    let max = nums1[i];
    for (let j = index; j < nums2.length; j++) {
      if (nums2[j] > max) {
        max = nums2[j];
        break;
      }
    }
    if (nums1[i] === max) max = -1;
    res.push(max);
  }
  return res;
};
