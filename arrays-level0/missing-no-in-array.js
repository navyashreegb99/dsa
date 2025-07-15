/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let expectedSum = 0;
    let actualSum = 0;
    for (let i = 0; i < nums.length; i++) {
        expectedSum += i;
        actualSum += nums[i];
    }
    return expectedSum + nums.length - actualSum;
};