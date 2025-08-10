/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  /* Approach 1
    let splittedArray = s.trim().split(" ")
    return splittedArray[splittedArray.length - 1].length; 
    T=O(n)
    S=O(n)
    */
  /* 
  // Approach2
  //Trim extra spaces from end
  let n = s.length - 1;
  while (n >= 0) {
    if (s[n] != " ") break;
    n--;
  }

  //n is at the position where word starts
  //move till we find space at count the letters
  let count = 0;
  while (n >= 0) {
    if (s[n] == " ") break;
    count++;
    n--;
  }
  return count;

  TC=O(n)
  SC=O(n) */

  
  /*
  //Approach-3
  let n = s.length - 1;
  let count = 0;
  while (n >= 0) {
    if (s[n] !== " ") count++;
    else if (count > 0) break;
    n--;
  }
  return count;

//   TC = O(n);
//   SC = O(n); */
};
