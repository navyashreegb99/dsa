/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
//Binary Search - TC=O(logn)
var guessNumber = function (n) {
  let l = 1;
  let r = n;
  let m;
  while (l <= r) {
    m = Math.floor((l + r) / 2);
    let pick = guess(m);
    if (pick === 0) return m;
    if (pick === -1) r = m - 1;
    else l = m + 1;
  }
  return r;
};
