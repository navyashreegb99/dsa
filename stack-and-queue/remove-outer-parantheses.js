/**
 * @param {string} s
 * @return {string}
 */
//SC=O(1)
//TC=O(n)
//Without using stack
var removeOuterParentheses = function (s) {
  this.counter = 0;
  let res = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      this.counter++;
      if (this.counter > 1) {
        res = res + s[i];
      }
    } else {
      if (this.counter > 1) {
        res = res + s[i];
      }
      this.counter--;
    }
  }
  return res;
};
