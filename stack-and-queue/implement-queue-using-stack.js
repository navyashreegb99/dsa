//Approach-1
var MyQueue = function () {
  this.s1 = [];
  this.s2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.s1.push(x); //TC=O(1)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  let n1 = this.s1.length;
  for (let i = n1 - 1; i > 0; i--) {
    this.s2.push(this.s1.pop());
  }
  let res = this.s1.pop();
  let n2 = this.s2.length;
  for (let i = n2 - 1; i >= 0; i--) {
    this.s1.push(this.s2.pop());
  }
  return res;
};
//TC=O(n)

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  let n1 = this.s1.length;
  for (let i = n1 - 1; i >= 0; i--) {
    this.s2.push(this.s1.pop());
  }
  let res = this.s2[this.s2.length - 1];
  let n2 = this.s2.length;
  for (let i = n2 - 1; i >= 0; i--) {
    this.s1.push(this.s2.pop());
  }
  return res;
};
//TC=O(n)

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.s1.length === 0; //TC=O(1)
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
