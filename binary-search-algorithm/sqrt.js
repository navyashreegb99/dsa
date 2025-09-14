/**
 * @param {number} x
 * @return {number}
 */
//TC=O(log n)
//SC=O(1)
var mySqrt = function (x) {
  if (x < 2) return x;
  let l = 2;
  let r = Math.floor(x / 2);
  let m = r;
  while (l <= r) {
    m = Math.floor((l + r) / 2);
    if (m * m === x) return m;
    else if (m * m < x) l = m + 1;
    else r = m - 1;
  }
  return Math.trunc(r);
};
