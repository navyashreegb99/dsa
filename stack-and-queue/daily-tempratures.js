/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
//TC=O(n),SC=O(n)
var dailyTemperatures = function (temperatures) {
    let stack = [];
    stack.push(temperatures.length - 1);
    let ans = [];
    ans[temperatures.length - 1] = 0;
    for (let i = temperatures.length - 2; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (temperatures[i] < temperatures[top]) {
                ans[i] = top - i;
                break;
            }
            else {
                stack.pop();
            }
        }
        if (stack.length === 0) ans[i] = 0;
        stack.push(i);
    }
    return ans;
};