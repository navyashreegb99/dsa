/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase();
  let newStr = "";
  let reverseStr = "";
  for (let i = 0; i < s.length; i++) {
    if (
      (s[i].charCodeAt() >= "a".charCodeAt() &&
        s[i].charCodeAt() <= "z".charCodeAt()) ||
      (s[i].charCodeAt() >= "0".charCodeAt() &&
        s[i].charCodeAt() <= "9".charCodeAt())
    ) {
      // if (s[i].match(/[a-z0-9]/i)) {
      newStr = newStr + s[i];
      reverseStr = s[i] + reverseStr;
    }
  } //TC=O(n), SC=O(2n)

  //checking left and right characters
  // let left = 0;
  // let right = newStr.length - 1;
  // while (left <= right) {
  //     if (newStr[left] !== newStr[right]) return false;
  //     left++;
  //     right--;
  // }
  // return true;

  //Approach -2: Reverse string should be equal to the newString
  /*  reverseStr = newStr.split("").reverse().join("");
     return newStr === reverseStr; */

  //Approach-3: Reverse using
  return newStr === reverseStr;
};
