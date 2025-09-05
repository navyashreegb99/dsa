/**
 * @param {string[]} tokens
 * @return {number}
 */
//TC=O(n), SC=O(1)
var evalRPN = function (tokens) {
  function getVal(n1, n2, ope) {
    switch (ope) {
      case "+":
        return n1 + n2;
      case "-":
        return n1 - n2;
      case "*":
        return n1 * n2;
      case "/":
        return Math.trunc(n1 / n2);
      default:
        return 1;
    }
  }
  this.stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (!isNaN(tokens[i])) {
      this.stack.push(Number(tokens[i]));
    } else {
      let n2 = this.stack.pop();
      let n1 = this.stack.pop();
      let res = getVal(n1, n2, tokens[i]);
      this.stack.push(res);
    }
  }
  return this.stack[this.stack.length - 1];
};
