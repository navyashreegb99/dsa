/**
 * @param {string} s
 * @return {string}
 */
//TC=O(n);
//SC=O(n);
//With Stack
var removeOuterParentheses = function (s) {
  this.stack = [];
  let res = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      this.stack.push(s[i]);
      if (this.stack.length > 1) {
        res = res + s[i];
      }
    } else {
      if (this.stack.length > 1) {
        res = res + s[i];
      }
      this.stack.pop();
    }
  }
  return res;
};
